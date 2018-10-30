export const Z_INDEX = {
    maxZIndex: (el: HTMLElement) => {
        let maxZIndex = 0,
            elements = [el]
        ;
        while (elements.length) {
            const zIndex = Number(window
                .getComputedStyle(el = elements.pop())
                .getPropertyValue('z-index')
            );
            zIndex > maxZIndex && (maxZIndex = zIndex);
            elements.concat(Array.prototype.slice.call(el.children));
        }
        return maxZIndex;
    }
};
