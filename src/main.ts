import {OFFSET} from "./coordinates/offset";
import {SCROLL} from "./coordinates/scroll";
import {ABSOLUTE} from "./coordinates/absolute";
import {Z_INDEX} from "./sticky/z-index";

export default {
    getNestedOffset: OFFSET.getNestedOffset,
    getNestedScroll: SCROLL.getNestedScroll,
    getAbsolute: ABSOLUTE.getAbsolute,
    maxZIndex: Z_INDEX.maxZIndex
}
