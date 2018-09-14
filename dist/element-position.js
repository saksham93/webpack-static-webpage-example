(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Position = factory());
}(this, (function () { 'use strict';

    var main = {
        getNestedOffset: function (target) {
            var left = target.offsetLeft, top = target.offsetTop, right = target.offsetLeft + target.offsetWidth, bottom = target.offsetTop + target.offsetHeight;
            while (target = target.offsetParent) {
                left += target.offsetLeft;
                top += target.offsetTop;
                right += target.offsetLeft;
                bottom += target.offsetTop;
            }
            return {
                left: left,
                top: top,
                right: right,
                bottom: bottom
            };
        },
        getNestedScroll: function (target) {
            var x = 0, y = 0;
            while (target = target.parentElement) {
                x += target.scrollLeft;
                y += target.scrollTop;
            }
            return {
                x: x,
                y: y
            };
        },
        getAbsolute: function (target) {
            var offsetPos = this.getNestedOffset(target), scrollPos = this.getNestedScroll(target);
            return {
                left: (offsetPos.left - scrollPos.x),
                top: (offsetPos.top - scrollPos.y),
                right: (offsetPos.right - scrollPos.x),
                bottom: (offsetPos.bottom - scrollPos.y)
            };
        }
    };

    return main;

})));
