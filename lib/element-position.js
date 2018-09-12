var Position = (function () {
    return {
        getOffset: function(target) {
            var left = target.offsetLeft,
                top = target.offsetTop
            ;
            while (target = target.offsetParent) {
                left += target.offsetLeft;
                top += target.offsetTop;
            }
            return {
                left: left,
                top: top
            };
        },
        getScroll: function(target) {
            var left = 0,
                top = 0
            ;
            while (target = target.parentElement) {
                left += target.scrollLeft;
                top += target.scrollTop;
            }
            return {
                left: left,
                top: top
            };
        },
        getAbsolute: function(target) {
            var offsetPos = this.getOffset(target),
                scrollPos = this.getScroll(target)
            ;
            return {
                left: (offsetPos.left - scrollPos.left),
                top: (offsetPos.top - scrollPos.top)
            };
        }
    };
}());
