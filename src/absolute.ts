import * as offset from "./offset";
import * as scroll from "./scroll";

export function getAbsolute(target) {
    let offsetPos = offset.getNestedOffset(target),
        scrollPos = scroll.getNestedScroll(target)
    ;
    return {
        left: (offsetPos.left - scrollPos.x),
        top: (offsetPos.top - scrollPos.y),
        right: (offsetPos.right - scrollPos.x),
        bottom: (offsetPos.bottom - scrollPos.y)
    };
}
