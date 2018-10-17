export function getNestedOffset(target) {
    let left = target.offsetLeft,
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
}
