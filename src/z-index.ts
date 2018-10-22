export const Z_INDEX = {
    maxZIndex: (target: HTMLElement) => {
        let zIndex= 0,
            nodes = [target]
        ;
        while (nodes.length) {
            let node = nodes.pop();
            nodes.concat(Array.prototype.slice.call(node.children));
        }
        return zIndex;
    }
};
