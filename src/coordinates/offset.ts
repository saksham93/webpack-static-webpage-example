export const OFFSET = {
    getNestedOffset: (el: HTMLElement) => {
        let left = el.offsetLeft,
            top = el.offsetTop,
            right = el.offsetLeft + el.offsetWidth,
            bottom = el.offsetTop + el.offsetHeight
        ;
        while (el = (el.offsetParent as HTMLElement)) {
            left += el.offsetLeft;
            top += el.offsetTop;
            right += el.offsetLeft;
            bottom += el.offsetTop;
        }
        return {
            left: left,
            top: top,
            right: right,
            bottom: bottom
        };
    }
};
