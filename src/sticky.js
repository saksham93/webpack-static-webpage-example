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
        this.target = dom;
        this.children = initChildren(dom);

        var _this = this;
        window.addEventListener('scroll', function() {
            var y = Position.getAbsolute(dom).y;
            if(y < 0) {
                _this.children.forEach(function(dom) {
                    if(dom.offsetHeight < window.innerHeight) {
                        dom.style.top = (-y + 'px');
                    }
                });
            }
            else {
                _this.children.forEach(function(dom) {
                    if(dom.offsetHeight < window.innerHeight) {
                        dom.style.top = '0px';
                    }
                });
            }
        });
    };
    return Sticky;
}());
