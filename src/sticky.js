var Sticky = (function() {
    var Position = {
        getOffset: function(dom) {
            var x = (dom.offsetLeft - dom.scrollLeft), y = (dom.offsetTop - dom.scrollTop);
            while (dom = dom.offsetParent) {
                x += (dom.offsetLeft - dom.scrollLeft);
                y += (dom.offsetTop - dom.scrollTop);
            }
            return { x: x, y: y };
        },
        getScroll: function(dom) {
            /*var x = window.scrollX, y = window.scrollY;
            x = (x ? x * 2 : window.pageXOffset), y = (y ? y * 2 : window.pageYOffset);*/
            var x = 0, y = 0;
            while (dom = dom.parentElement) {
                x += dom.scrollLeft;
                y += dom.scrollTop;
            }
            return { x: x, y: y };
        },
        getAbsolute: function(dom) {
            var offsetPos = Position.getOffset(dom), scrollPos = Position.getScroll(dom);
            return {
                x: (offsetPos['x'] - scrollPos['x']),
                y: (offsetPos['y'] - scrollPos['y'])
            };
        }
    };

    function initChildren(dom) {
        var children = Array.prototype.slice.call(dom.children);
        dom.style.height = (dom.offsetHeight + 'px');
        children.forEach(function(dom) { dom.style.left = (dom.offsetLeft + 'px'); });
        children.forEach(function(dom) { dom.style.position = 'absolute'; });
        return children;
    }

    function Sticky(dom) {
        var _this = this;
        _this.target = dom;
        _this.posY = Position.getAbsolute(dom).y;
        _this.children = initChildren(dom);
        window.addEventListener('scroll', function() { _this.scrolling(); });
    };

    Sticky.prototype.scrolling = function() {
        var wrap = this.target,
            children = this.children,
            posY = Position.getAbsolute(wrap).y,
            originY = this.posY
        ;
        console.log(Position.getAbsolute(wrap));
        if(0 < posY) {
            children.forEach(function(dom) { dom.style.top = '0px'; });
        }
        else {
            children.forEach(function(dom) {
                var wh = window.innerHeight,
                    h1 = dom.offsetHeight,
                    h2 = wrap.offsetHeight
                ;
                if(h1 < wh) dom.style.top = (-posY + 'px');
                else {
                    var s = dom.style;
                    if(originY - posY < 0) {
                        if(-posY < parseInt(s.top)) {
                            s.top = (-posY + 'px');
                        }
                    }
                    else {
                        var t = (h1 - wh) + posY;
                        if(t < 0) {
                            s.top = (h1 - t < h2 ? -t : h2 - h1) + 'px';
                        }
                    }
                }
            });
        }
        this.posY = posY;
    };

    return Sticky;
}());
