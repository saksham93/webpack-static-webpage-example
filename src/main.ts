import {Offset} from "./nested-position/offset";
import {Scroll} from "./nested-position/scroll";
import {Coordinates} from "./coordinates/coordinates";

export default {
    getNestedOffset: Offset.getNestedOffset,
    getNestedScroll: Scroll.getNestedScroll,
    getCoordinates: Coordinates.getCoordinates
}
