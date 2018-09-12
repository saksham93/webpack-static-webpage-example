var Position = (function () {
    return {
        getOffset: function(dom) {
            var left = dom.offsetLeft,
                top = dom.offsetTop
            ;
            while (dom = dom.offsetParent) {
                left += dom.offsetLeft;
                top += dom.offsetTop;
            }
            return {
                left: left,
                top: top
            };
        },
        getScroll: function(dom) {
            var left = 0,
                top = 0
            ;
            while (dom = dom.parentElement) {
                left += dom.scrollLeft;
                top += dom.scrollTop;
            }
            return {
                left: left,
                top: top
            };
        },
        getAbsolute: function(dom) {
            var offsetPos = this.getOffset(dom),
                scrollPos = this.getScroll(dom)
            ;
            return {
                left: (offsetPos.left - scrollPos.left),
                top: (offsetPos.top - scrollPos.top)
            };
        }
    };
}());
