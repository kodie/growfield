(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.growfield = factory());
})(this, (function () { 'use strict';

  /*!
    growfield v0.0.1 (https://growfield.js.org)
    by Kodie Grantham (https://kodieg.com)
  */

  var growfield = function growfield(selector, options) {
    if (!selector) selector = '.growfield';
    options = Object.assign({}, growfield.defaultOptions, options);
    var elements;
    if (typeof selector === 'string') {
      elements = document.querySelectorAll(selector);
    } else if (selector instanceof HTMLElement) {
      elements = [elements];
    }
    if (elements && elements.length) {
      for (var i = 0; i < elements.length; i++) {
        (function (element) {
          element.style.setProperty('height', 'auto');
          element.style.setProperty('max-height', 'none');
          element.style.setProperty('min-height', 'none');
          element.style.setProperty('resize', 'none');
          element.growfield = options;
          element.addEventListener('input', growfield.onInput);
          element.dispatchEvent(new Event('input', {
            bubbles: true
          }));
        })(elements[i]);
      }
    }
    if (elements.length) {
      if (elements.length === 1) {
        return elements[0];
      }
      return elements;
    }
    return false;
  };
  growfield.defaultOptions = {
    maxRows: null,
    minRows: null
  };
  growfield.onInput = function (e) {
    var element = e.currentTarget;
    var opts = element.growfield;
    element.setAttribute('rows', '1');
    var style = getComputedStyle(element);
    var blockPadding = parseFloat(style['padding-top']) + parseFloat(style['padding-bottom']);
    var inlinePadding = parseFloat(style['padding-left']) + parseFloat(style['padding-right']);
    var inlineBorderWidth = parseFloat(style['border-left-width']) + parseFloat(style['border-right-width']);
    element.style.setProperty('overflow', 'hidden', 'important');
    var width = parseFloat(style.width) - inlinePadding - inlineBorderWidth;
    element.style.setProperty('border-width', '0');
    element.style.setProperty('box-sizing', 'content-box');
    element.style.setProperty('padding-inline', '0');
    element.style.setProperty('width', String(width) + 'px');
    var lineHeight = style['line-height'] === 'normal' ? parseFloat(style.height) : parseFloat(style['line-height']);
    var scrollHeight = Math.round(element.scrollHeight);
    element.style.removeProperty('border-width');
    element.style.removeProperty('box-sizing');
    element.style.removeProperty('overflow');
    element.style.removeProperty('padding-inline');
    element.style.removeProperty('width');
    var rows = Math.max(opts.minRows || 1, Math.round((scrollHeight - blockPadding) / lineHeight));
    if (opts.maxRows) {
      rows = Math.min(rows, opts.maxRows);
    }
    element.setAttribute('rows', String(rows));
  };

  return growfield;

}));
//# sourceMappingURL=growfield.js.map
