import {Offset} from "../nested-position/offset";
import {Scroll} from "../nested-position/scroll";

export const Coordinates = {
    getCoordinates: (el: HTMLElement) => {
        let offset = Offset.getNestedOffset(el),
            scroll = Scroll.getNestedScroll(el)
        ;
        return {
            left: (offset.left - scroll.x),
            top: (offset.top - scroll.y),
            right: (offset.right - scroll.x),
            bottom: (offset.bottom - scroll.y)
        };
    }
};
