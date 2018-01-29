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
        this.target = dom;
        this.posY = Position.getAbsolute(dom).y;
        this.children = initChildren(dom);
        window.addEventListener('scroll', function() { _this.scrolling(); });
    };

    Sticky.prototype.scrolling = function() {
        var wrap = this.target,
            children = this.children,
            posY = Position.getAbsolute(wrap).y
        ;
        var originY = this.posY;
        if(posY < 0) {
            children.forEach(function(dom) {
                var height = dom.offsetHeight;
                if(height < window.innerHeight) dom.style.top = (-posY + 'px');
                else {
                    if(originY - posY < 0) {
                        if(-posY < parseInt(dom.style.top))
                        dom.style.top = (-posY + 'px');
                    }
                    else {
                        var t = (height - window.innerHeight) + posY;
                        if(t < 0) {
                            dom.style.top = (height - t < wrap.offsetHeight ? -t : wrap.offsetHeight - height) + 'px';
                        }
                    }
                }
            });
        }
        else {
            children.forEach(function(dom) {
                dom.style.top = '0px';
            });
        }
        this.posY = posY;
    };

    return Sticky;
}());
