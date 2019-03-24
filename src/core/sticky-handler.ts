import { TEMPLATE } from "../constant";
import { StickyElement } from "./sticky-element";
import { getPackedSettings } from "http2";

export function StickyHandler(element: HTMLElement) {
  const y = parseInt(window.getComputedStyle(element).getPropertyValue('transform').replace(/.*,|\)/g, ''));
  if (y === window.scrollY) {
    StickyElement.elements.some((el, i, els) => {
      if (element === el) {
        els.splice(i, 1);
        return true;
      }
    });
  } else {
    const goal = Math.round((window.scrollY - y) / 15);
    element.style.transform = TEMPLATE.TRANSLATE_Y(isNaN(y) ? window.scrollY : window.scrollY < y ? (-1 < goal ? y - 1 : y + goal) : (goal < 1 ? y + 1 : y + goal));
    requestAnimationFrame(() => StickyHandler(element));
    console.log(y);
  }
}
