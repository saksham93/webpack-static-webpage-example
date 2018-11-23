import {OFFSET} from "../nested-position/offset";
import {SCROLL} from "../nested-position/scroll";

export const ABSOLUTE = {
    getAbsolute: (el: HTMLElement) => {
        let offset = OFFSET.getNestedOffset(el),
            scroll = SCROLL.getNestedScroll(el)
        ;
        return {
            left: (offset.left - scroll.x),
            top: (offset.top - scroll.y),
            right: (offset.right - scroll.x),
            bottom: (offset.bottom - scroll.y)
        };
    }
};
