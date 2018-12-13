import {getNestedOffset} from "./offset";
import {getNestedScroll} from "./scroll";

export function getCoordinates(el: HTMLElement) {
	let offset = getNestedOffset(el),
			scroll = getNestedScroll(el)
	;
	return {
		left: (offset.left - scroll.x),
		top: (offset.top - scroll.y),
		right: (offset.right - scroll.x),
		bottom: (offset.bottom - scroll.y)
	};
}
