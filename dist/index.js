(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.SmoothSticky = factory());
}(this, function () { 'use strict';

  var CLASS_NAME;
  (function (CLASS_NAME) {
      CLASS_NAME["SCROLL_TRANSITION"] = "smooth-sticky-element";
  })(CLASS_NAME || (CLASS_NAME = {}));
  var TEMPLATE = {
      TRANSLATE_Y: function (y) {
          return "translateY(" + y + "px)";
      }
  };

  var StickyElement = (function () {
      var elements = [];
      return {
          get elements() { return elements; }
      };
  })();

  function StickyHandler(element) {
      var y = parseInt(window.getComputedStyle(element).getPropertyValue('transform').replace(/.*,|\)/g, ''));
      if (y === window.scrollY) {
          StickyElement.elements.some(function (el, i, els) {
              if (element === el) {
                  els.splice(i, 1);
                  return true;
              }
          });
      }
      else {
          var goal = Math.round((window.scrollY - y) / 15);
          element.style.transform = TEMPLATE.TRANSLATE_Y(isNaN(y) ? window.scrollY : window.scrollY < y ? (-1 < goal ? y - 1 : y + goal) : (goal < 1 ? y + 1 : y + goal));
          requestAnimationFrame(function () { return StickyHandler(element); });
          console.log(y);
      }
  }

  var Sticky = (function () {
      function Sticky(element, option) {
          var _this = this;
          if (!element) {
              throw 'Element is required.';
          }
          if (option.top === undefined &&
              option.left === undefined &&
              option.right === undefined &&
              option.bottom === undefined) {
              throw 'Set one or more of the options "top", "left", "right", or "bottom".';
          }
          this.element = element;
          this.top = option.top;
          this.left = option.left;
          this.right = option.right;
          this.bottom = option.bottom;
          element.classList.add(CLASS_NAME.SCROLL_TRANSITION);
          window.addEventListener('scroll', function () {
              if (!StickyElement.elements.some(function (el) { return el === _this.element; })) {
                  StickyElement.elements.push(_this.element);
                  StickyHandler(_this.element);
                  console.log('set');
              }
          }, {
              capture: true,
              passive: true
          });
      }
      return Sticky;
  }());

  var style = document.createElement('style');
  document.head.appendChild(style);
  var sheet = style.sheet;
  sheet.insertRule("." + CLASS_NAME.SCROLL_TRANSITION + " {\n  will-change: transform;\n}", sheet.cssRules.length);

  return Sticky;

}));
