// Patina — SortableJS wrapper
(function() {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resolveEl(elOrId) {
    if (typeof elOrId === 'string') return document.getElementById(elOrId);
    return elOrId;
  }

  function deepMerge(target, source) {
    var out = Object.assign({}, target);
    for (var key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key]) && typeof source[key] !== 'function') {
        out[key] = deepMerge(out[key] || {}, source[key]);
      } else {
        out[key] = source[key];
      }
    }
    return out;
  }

  var baseDefaults = {
    animation: reducedMotion ? 0 : 150,
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    swapThreshold: 0.65,
    invertSwap: true,
    fallbackOnBody: true,
    emptyInsertThreshold: 20,
  };

  function patinaSortable(elOrId, options) {
    var el = resolveEl(elOrId);
    if (!el) { console.warn('patinaSortable: element not found'); return null; }
    var merged = deepMerge(baseDefaults, options || {});
    return Sortable.create(el, merged);
  }

  function countNestingDepth(el) {
    var depth = 0;
    var node = el.parentElement;
    while (node) {
      if (node.classList && node.classList.contains('sortable-nested')) depth++;
      node = node.parentElement;
    }
    return depth;
  }

  function patinaSortableNested(elOrId, options) {
    var root = resolveEl(elOrId);
    if (!root) { console.warn('patinaSortableNested: element not found'); return []; }

    var opts = options || {};
    var maxDepth = opts.maxDepth || 3;
    var groupName = opts.group || 'nested-' + Math.random().toString(36).substr(2, 6);

    var onMove = function(evt) {
      if (evt.from === evt.to) return; // reorder within same container — depth unchanged
      var target = evt.to;
      var depth = countNestingDepth(target);
      if (depth >= maxDepth) return false;

      var draggedNested = evt.dragged.querySelectorAll('.sortable-nested');
      var innerDepth = 0;
      draggedNested.forEach(function(n) {
        var d = 1;
        var p = n.parentElement;
        while (p && p !== evt.dragged) {
          if (p.classList.contains('sortable-nested')) d++;
          p = p.parentElement;
        }
        if (d > innerDepth) innerDepth = d;
      });

      if (depth + innerDepth >= maxDepth) return false;
    };

    var instances = [];

    var sharedConfig = deepMerge(baseDefaults, {
      group: groupName,
      handle: '.sortable-handle',
      onMove: onMove,
    });
    var merged = deepMerge(sharedConfig, opts);
    delete merged.maxDepth;

    instances.push(Sortable.create(root, merged));

    var nested = root.querySelectorAll('.sortable-nested');
    nested.forEach(function(child) {
      instances.push(Sortable.create(child, merged));
    });

    return instances;
  }

  window.patinaSortable = patinaSortable;
  window.patinaSortableNested = patinaSortableNested;
})();
