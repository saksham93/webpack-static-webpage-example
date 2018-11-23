(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.ElementPosition = factory());
}(this, (function () { 'use strict';

    var Offset = {
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

    var Scroll = {
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

    var Coordinates = {
        getCoordinates: function (el) {
            var offset = Offset.getNestedOffset(el), scroll = Scroll.getNestedScroll(el);
            return {
                left: (offset.left - scroll.x),
                top: (offset.top - scroll.y),
                right: (offset.right - scroll.x),
                bottom: (offset.bottom - scroll.y)
            };
        }
    };

    var main = {
        getNestedOffset: Offset.getNestedOffset,
        getNestedScroll: Scroll.getNestedScroll,
        getCoordinates: Coordinates.getCoordinates
    };

    return main;

})));
