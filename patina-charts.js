// Patina — Chart.js wrapper
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resolveVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  var palette = [];
  function loadPalette() {
    palette = [];
    for (var i = 1; i <= 8; i++) {
      palette.push(resolveVar('--chart-' + i));
    }
  }

  function getColors(count) {
    if (!palette.length) loadPalette();
    var out = [];
    for (var i = 0; i < count; i++) {
      out.push(palette[i % palette.length]);
    }
    return out;
  }

  function deepMerge(target, source) {
    var out = Object.assign({}, target);
    for (var key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        out[key] = deepMerge(out[key] || {}, source[key]);
      } else {
        out[key] = source[key];
      }
    }
    return out;
  }

  function patinaChart(canvasId, type, config) {
    if (!palette.length) loadPalette();

    var canvas = document.getElementById(canvasId);
    if (!canvas) { console.warn('patinaChart: canvas "' + canvasId + '" not found'); return null; }

    var isArea = type === 'area';
    var chartType = isArea ? 'line' : type;

    var borderColor = resolveVar('--border');
    var textMuted = resolveVar('--text-muted');
    var textSecondary = resolveVar('--text-secondary');
    var fontSans = 'Inter, sans-serif';
    var fontMono = "'IBM Plex Mono', monospace";

    var datasets = (config.datasets || []).map(function(ds, i) {
      var color = palette[i % palette.length];
      var base = {
        backgroundColor: color,
        borderColor: color,
        borderWidth: 2,
        pointRadius: 3,
        pointHoverRadius: 5,
        pointBackgroundColor: '#fff',
        pointBorderColor: color,
        pointBorderWidth: 2,
      };

      if (chartType === 'line') {
        base.fill = isArea;
        if (isArea) {
          base.backgroundColor = color + '33';
        }
        base.tension = 0.35;
      }

      if (chartType === 'bar') {
        base.borderRadius = 4;
        base.borderSkipped = false;
        base.borderWidth = 0;
        delete base.pointRadius;
        delete base.pointHoverRadius;
        delete base.pointBackgroundColor;
        delete base.pointBorderColor;
        delete base.pointBorderWidth;
      }

      if (chartType === 'pie' || chartType === 'doughnut') {
        var count = (ds.data || []).length;
        base.backgroundColor = getColors(count);
        base.borderColor = resolveVar('--white') || '#fff';
        base.borderWidth = 2;
        base.hoverOffset = 6;
        delete base.pointRadius;
      }

      if (chartType === 'radar') {
        base.backgroundColor = color + '33';
        base.borderWidth = 2;
        base.pointRadius = 3;
      }

      return Object.assign(base, ds);
    });

    var isRadial = chartType === 'pie' || chartType === 'doughnut' || chartType === 'radar';

    var defaults = {
      responsive: true,
      maintainAspectRatio: false,
      animation: reducedMotion ? false : undefined,
      plugins: {
        legend: {
          display: isRadial,
          position: 'bottom',
          labels: {
            font: { family: fontSans, size: 12 },
            color: textSecondary,
            padding: 16,
            usePointStyle: true,
          }
        },
        tooltip: {
          backgroundColor: '#1A1A1A',
          titleFont: { family: fontSans, size: 13 },
          bodyFont: { family: fontMono, size: 12 },
          cornerRadius: parseInt(resolveVar('--radius-sm')) || 10,
          padding: 10,
          displayColors: true,
          boxPadding: 4,
        }
      },
    };

    if (!isRadial) {
      defaults.scales = {
        x: {
          grid: { color: borderColor, drawBorder: false },
          ticks: { font: { family: fontSans, size: 12 }, color: textMuted, padding: 8 },
          border: { display: false },
        },
        y: {
          grid: { color: borderColor, drawBorder: false },
          ticks: { font: { family: fontMono, size: 11 }, color: textMuted, padding: 8 },
          border: { display: false },
          beginAtZero: true,
        }
      };
    }

    if (chartType === 'radar') {
      defaults.scales = {
        r: {
          grid: { color: borderColor },
          angleLines: { color: borderColor },
          pointLabels: { font: { family: fontSans, size: 12 }, color: textSecondary },
          ticks: { font: { family: fontMono, size: 10 }, color: textMuted, backdropColor: 'transparent' },
          beginAtZero: true,
        }
      };
    }

    var merged = deepMerge(defaults, config.options || {});

    return new Chart(canvas, {
      type: chartType,
      data: {
        labels: config.labels || [],
        datasets: datasets,
      },
      options: merged,
    });
  }

  window.patinaChart = patinaChart;
  window.patinaChartColors = getColors;
})();
