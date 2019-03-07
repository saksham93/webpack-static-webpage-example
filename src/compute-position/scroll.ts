import { Coordinates } from "type/coordinates";

export function getNestedScroll(el: HTMLElement): Coordinates {
  let x = 0,
      y = 0
  ;
  while (el = el.parentElement) {
    x += el.scrollLeft;
    y += el.scrollTop;
  }
  return { x, y };
}
