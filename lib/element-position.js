(function () {
    var Position = {
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
            var offsetPos = Position.getOffset(dom),
                scrollPos = Position.getScroll(dom)
            ;
            return {
                left: (offsetPos.left - scrollPos.left),
                top: (offsetPos.top - scrollPos.top)
            };
        }
    };
    Object.defineProperty(HTMLElement.prototype, 'offsetRight', {
        get: function () {
            return this.offsetLeft + this.offsetWidth;
        }
    });
    Object.defineProperty(HTMLElement.prototype, 'offsetBottom', {
        get: function () {
            return this.offsetTop + this.offsetHeight;
        }
    });
    Object.defineProperty(HTMLElement.prototype, 'absoluteTop', {
        get: function () {
            var absolutePos = Position.getAbsolute(this);
            return absolutePos.top;
        }
    });
    Object.defineProperty(HTMLElement.prototype, 'absoluteLeft', {
        get: function () {
            var absolutePos = Position.getAbsolute(this);
            return absolutePos.left;
        }
    });
}());
