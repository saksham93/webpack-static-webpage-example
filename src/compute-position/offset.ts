import { PositionRect } from "type/position-rect";

export function getNestedOffset(el: HTMLElement): PositionRect {
  let left = el.offsetLeft,
      top = el.offsetTop,
      right = el.offsetLeft + el.offsetWidth,
      bottom = el.offsetTop + el.offsetHeight
  ;
  while (el = (el.offsetParent as HTMLElement)) {
    left += el.offsetLeft;
    top += el.offsetTop;
    right += el.offsetLeft;
    bottom += el.offsetTop;
  }
  return { left, top, right, bottom };
}
