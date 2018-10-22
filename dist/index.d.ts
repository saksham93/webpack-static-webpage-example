declare namespace Position {
    function getNestedOffset(el: Element): {
        top: number,
        left: number,
        right: number,
        bottom: number
    }
    function getNestedScroll(el: Element): {
        x: number,
        y: number
    }
    function getAbsolute(el: Element): {
        top: number,
        left: number,
        right: number,
        bottom: number
    }
}
export = Position;
