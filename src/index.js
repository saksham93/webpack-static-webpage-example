module.exports = (function () {
    return {
        getOffset: function(target) {
            var left = target.offsetLeft,
                top = target.offsetTop,
                right = target.offsetLeft + target.offsetWidth,
                bottom = target.offsetTop + target.offsetHeight
            ;
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
        getScroll: function(target) {
            var x = 0,
                y = 0
            ;
            while (target = target.parentElement) {
                x += target.scrollLeft;
                y += target.scrollTop;
            }
            return {
                x: x,
                y: y
            };
        },
        getAbsolute: function(target) {
            var offsetPos = this.getOffset(target),
                scrollPos = this.getScroll(target)
            ;
            return {
                left: (offsetPos.left - scrollPos.x),
                top: (offsetPos.top - scrollPos.y),
                right: (offsetPos.right - scrollPos.x),
                bottom: (offsetPos.bottom - scrollPos.y)
            };
        }
    };
}());
