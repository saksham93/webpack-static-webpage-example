(function() {
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
}());