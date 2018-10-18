import * as offset from "./offset";
import * as scroll from "./scroll";
import * as absolute from "./absolute";
// import * as zIndex from "./zIndex";

export default {
    getNestedOffset: offset.getNestedOffset,
    getNestedScroll: scroll.getNestedScroll,
    getAbsolute: absolute.getAbsolute,
    // maxZIndex: zIndex.maxZIndex
}
