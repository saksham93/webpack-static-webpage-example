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

  function StickyHandler() {
      var i = 0, element, elements = StickyElement.elements;
      while (element = elements[i++]) {
          var computedStyle = window.getComputedStyle(element).getPropertyValue('transform');
          computedStyle !== null && (element.style.transform =
              TEMPLATE.TRANSLATE_Y(parseFloat(computedStyle.replace(/.*,|\)/g, ''))));
          element.style.transform = TEMPLATE.TRANSLATE_Y(window.scrollY);
      }
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
          element.classList.add(CLASS_NAME.SCROLL_TRANSITION);
          StickyElement.elements.push(this.element = element);
          window.addEventListener('scroll', StickyHandler, {
              capture: true,
              passive: true
          });
      }
      return Sticky;
  }());

  var style = document.createElement('style');
  document.head.appendChild(style);
  var sheet = style.sheet;
  sheet.insertRule("." + CLASS_NAME.SCROLL_TRANSITION + " {\n  transition: transform 750ms;\n}", sheet.rules.length);

  return Sticky;

}));
