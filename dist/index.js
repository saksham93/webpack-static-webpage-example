(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SmoothSticky = factory());
}(this, function () { 'use strict';

  var elements = [];
  var style = document.createElement('style');
  document.head.appendChild(style);
  var sheet = style.sheet;
  sheet.insertRule(".smooth-sticky-element {\n  transition: transform 750ms;\n}", 0);
  function sticky() {
      elements.forEach(function (element) {
          console.log(1);
          var computedStyle = window.getComputedStyle(element).getPropertyValue('transform').match(/matrix\(.*\)/g);
          if (computedStyle !== null) {
              element.style.transform = "translateY(" + computedStyle[0].replace(/.*\,\s/g, '').replace(')', '') + ")px";
          }
          element.style.transform = "translateY(" + window.scrollY + "px)";
      });
  }
  var Sticky = (function () {
      function Sticky(element, option) {
          if (!element) {
              throw 'Element is required.';
          }
          if (option.top === undefined &&
              option.left === undefined &&
              option.right === undefined &&
              option.bottom === undefined) {
              throw 'Set one or more of the options "top", "left", "right", or "bottom".';
          }
          this.top = option.top;
          this.left = option.left;
          this.right = option.right;
          this.bottom = option.bottom;
          element.classList.add('smooth-sticky-element');
          elements.push(this.element = element);
          window.addEventListener('scroll', sticky, { passive: true });
      }
      return Sticky;
  }());

  return Sticky;

}));
