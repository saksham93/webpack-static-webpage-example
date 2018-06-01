var Cropper = (function () {
    function Cropper() {
        var _this = this;
        _this.canvas = document.createElement('canvas'), _this.canvas.width = 200, _this.canvas.height = 100;
        _this.origin = {
            width: 0,
            height: 0
        };
        _this.preview = {
            top: 0,
            left: 0,
            width: 0,
            height: 0,
            ratio: 0,
            image: document.createElement('img')
        };
        _this.dom = document.createElement('section'), _this.dom.appendChild(_this.preview.image), _this.dom.appendChild(_this.canvas);
        _this.reader = new FileReader();

        /* 나중에 지우자 */
        _this.dom.style.cssText = 'position: relative; width: 500px; height: 500px; overflow: hidden; border: 1px solid black;';
        _this.preview.image.style.cssText = 'position: absolute;';
        _this.canvas.style.cssText = 'position: absolute; cursor: pointer; border: 1px solid black;';
        /****************/
    }
    return Cropper;
}());

window.addEventListener('DOMContentLoaded', function() {
    var reader = new FileReader();
    var fileInput = document.getElementById('file');
    var preview = document.getElementById('preview');
    var cvs = document.getElementById('canvas');
    var ctx = cvs.getContext('2d');
    var ImageCropper = document.getElementById('ImageCropper');

    fileInput.addEventListener('change', function() {
        reader.readAsDataURL(fileInput.files[0]);
    });
    var originW = 0, originH = 0;
    var w = 0,
        h = 0,
        r = 0,
        t = 0,
        l = 0,
        func = function() {
            t = 250 - h / 2;
            l = 250 - w / 2;
            preview.style.top = t + 'px';
            preview.style.left = l + 'px';
            preview.style.width = w + 'px';
            preview.style.height = h + 'px';
        }
    ;
    reader.addEventListener('load', function() {
        preview.src = reader.result;
        preview.addEventListener('load', function() {
            w = preview.width, h = preview.height, r = w / h;
            originW = preview.width, originH = preview.height;
            func();
        });
    });
    ImageCropper.addEventListener('wheel', function(e) {
        e.preventDefault();
        w -= e.deltaY * r;
        h -= e.deltaY;
        func();
    });

    var cl = 150, ct = 200;
    var x = 0, y = 0;
    function mouseMove(e) {
        e.preventDefault();
        cvs.style.top = (ct += (e.clientY - y)) + 'px';
        cvs.style.left = (cl += (e.clientX - x)) + 'px';
        x = e.clientX;
        y = e.clientY;
    }
    function mouseUp() {
        ImageCropper.removeEventListener('mousemove', mouseMove);
        document.body.removeEventListener('mouseup', mouseUp);
    }
    cvs.addEventListener('mousedown', function(e) {
        x = e.clientX;
        y = e.clientY;
        ImageCropper.addEventListener('mousemove', mouseMove);
        document.body.addEventListener('mouseup', mouseUp);
    });

    document.getElementById('crop').addEventListener('click', function() {
        var ratio = originW / w;
        var img = new Image();
        ctx.drawImage(preview, Math.round((cl - l + 1) * ratio), Math.round((ct - t + 1) * ratio), 200 * ratio, 100 * ratio, 0, 0, 200, 100);
        img.src = cvs.toDataURL();
        ImageCropper.insertAdjacentElement('afterend', img);
        ctx.clearRect(0, 0, 200, 100);
    });
});
