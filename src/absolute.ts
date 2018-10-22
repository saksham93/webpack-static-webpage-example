import { OFFSET } from "./offset";
import { SCROLL } from "./scroll";

export const ABSOLUTE = {
    getAbsolute: (target: HTMLElement) => {
        let offsetPos = OFFSET.getNestedOffset(target),
            scrollPos = SCROLL.getNestedScroll(target)
        ;
        return {
            left: (offsetPos.left - scrollPos.x),
            top: (offsetPos.top - scrollPos.y),
            right: (offsetPos.right - scrollPos.x),
            bottom: (offsetPos.bottom - scrollPos.y)
        };
    }
};
