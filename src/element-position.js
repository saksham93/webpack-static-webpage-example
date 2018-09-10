(function () {
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
}());
