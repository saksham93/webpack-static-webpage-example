export const Z_INDEX = {
    maxZIndex: (el: HTMLElement) => {
        let zIndex = 0,
            elements = [el]
        ;
        while (elements.length) {
            el = elements.pop();
            elements.concat(Array.prototype.slice.call(el.children));
        }
        return zIndex;
    }
};
