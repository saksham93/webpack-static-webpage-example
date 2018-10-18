declare namespace Position {
    function getNestedOffset(el): {
        top: number,
        left: number,
        right: number,
        bottom: number
    };
    function getNestedScroll(el): {
        x: number,
        y: number
    };
    function getAbsolute(el): {
        top: number,
        left: number,
        right: number,
        bottom: number
    };
}
