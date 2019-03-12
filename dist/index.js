(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SmoothSticky = factory());
}(this, function () { 'use strict';

  var Style = (function () {
      function Style() {
          document.head.appendChild(this.element = document.createElement('style'));
          this.isActive = true;
          this.sheet = this.element.sheet;
      }
      Style.prototype.setActive = function (isActive) {
          if (this.isActive !== isActive) {
              if (this.isActive = isActive) {
                  document.head.appendChild(this.element);
              }
              else {
                  document.head.removeChild(this.element);
              }
          }
      };
      return Style;
  }());

  var elements = [];
  var style = new Style();
  function sticky() {
      elements.forEach(function (element) {
          console.log(element);
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
          elements.push(this.element = element);
          window.addEventListener('scroll', sticky, { passive: true });
      }
      return Sticky;
  }());

  return Sticky;

}));
