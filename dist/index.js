(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ElementPosition = factory());
}(this, (function () { 'use strict';

    var OFFSET = {
        getNestedOffset: function (el) {
            var left = el.offsetLeft, top = el.offsetTop, right = el.offsetLeft + el.offsetWidth, bottom = el.offsetTop + el.offsetHeight;
            while (el = el.offsetParent) {
                left += el.offsetLeft;
                top += el.offsetTop;
                right += el.offsetLeft;
                bottom += el.offsetTop;
            }
            return {
                left: left,
                top: top,
                right: right,
                bottom: bottom
            };
        }
    };

    var SCROLL = {
        getNestedScroll: function (el) {
            var x = 0, y = 0;
            while (el = el.parentElement) {
                x += el.scrollLeft;
                y += el.scrollTop;
            }
            return {
                x: x,
                y: y
            };
        }
    };

    var ABSOLUTE = {
        getAbsolute: function (el) {
            var offset = OFFSET.getNestedOffset(el), scroll = SCROLL.getNestedScroll(el);
            return {
                left: (offset.left - scroll.x),
                top: (offset.top - scroll.y),
                right: (offset.right - scroll.x),
                bottom: (offset.bottom - scroll.y)
            };
        }
    };

    var PROPERTY_NAME = 'z-index';
    var Z_INDEX = {
        maxZIndex: function (el) {
            var maxZIndex = 0, elements = [el];
            while (elements.length) {
                var zIndex = Number(window
                    .getComputedStyle(el = elements.pop())
                    .getPropertyValue(PROPERTY_NAME));
                zIndex > maxZIndex && (maxZIndex = zIndex);
                elements.concat(Array.prototype.slice.call(el.children));
            }
            return maxZIndex;
        }
    };

    var main = {
        getNestedOffset: OFFSET.getNestedOffset,
        getNestedScroll: SCROLL.getNestedScroll,
        getAbsolute: ABSOLUTE.getAbsolute,
        maxZIndex: Z_INDEX.maxZIndex
    };

    return main;

})));
