import {OFFSET} from "./nested-position/offset";
import {SCROLL} from "./nested-position/scroll";
import {Coordinates} from "./coordinates/coordinates";

export default {
    getNestedOffset: OFFSET.getNestedOffset,
    getNestedScroll: SCROLL.getNestedScroll,
    getCoordinates: Coordinates.getCoordinates
}
