import {OFFSET} from "./nested-position/offset";
import {SCROLL} from "./nested-position/scroll";
import {ABSOLUTE} from "./coordinates/absolute";

export default {
    getNestedOffset: OFFSET.getNestedOffset,
    getNestedScroll: SCROLL.getNestedScroll,
    getAbsolute: ABSOLUTE.getAbsolute
}
