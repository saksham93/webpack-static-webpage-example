export function maxZIndex(target) {
    let zIndex= 0,
        nodes = [target]
    ;
    while (nodes.length) {
        let node = nodes.pop();
        nodes.concat(...node.children);
    }
    return zIndex;
}
