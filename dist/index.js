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

  var elements = [];
  function sticky() {
      elements.forEach(function (element) {
          console.log(element);
      });
  }
  var Sticky = (function () {
      function Sticky(target, option) {
          this.target = target;
          this.option = option;
          window.addEventListener('scroll', sticky, { passive: true });
      }
      return Sticky;
  }());

  var main = {
      getNestedOffset: ComputePosition.getNestedOffset,
      getNestedScroll: ComputePosition.getNestedScroll,
      getCoordinates: ComputePosition.getCoordinates,
      Sticky: Sticky
  };

  return main;

}));
