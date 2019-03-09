(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ElementPosition = factory());
}(this, function () { 'use strict';

  function getNestedOffset(el) {
      var left = el.offsetLeft, top = el.offsetTop, right = el.offsetLeft + el.offsetWidth, bottom = el.offsetTop + el.offsetHeight;
      while (el = el.offsetParent) {
          left += el.offsetLeft;
          top += el.offsetTop;
          right += el.offsetLeft;
          bottom += el.offsetTop;
      }
      return { left: left, top: top, right: right, bottom: bottom };
  }

  function getNestedScroll(el) {
      var x = 0, y = 0;
      while (el = el.parentElement) {
          x += el.scrollLeft;
          y += el.scrollTop;
      }
      return { x: x, y: y };
  }

  function getCoordinates(el) {
      var offset = getNestedOffset(el), scroll = getNestedScroll(el);
      return {
          left: (offset.left - scroll.x),
          top: (offset.top - scroll.y),
          right: (offset.right - scroll.x),
          bottom: (offset.bottom - scroll.y)
      };
  }

  var ComputePosition = {
      getNestedOffset: getNestedOffset,
      getNestedScroll: getNestedScroll,
      getCoordinates: getCoordinates
  };

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
  window['aa'] = style;
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

  var main = {
      Sticky: Sticky,
      getNestedOffset: ComputePosition.getNestedOffset,
      getNestedScroll: ComputePosition.getNestedScroll,
      getCoordinates: ComputePosition.getCoordinates
  };

  return main;

}));
