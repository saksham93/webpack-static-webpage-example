import { TEMPLATE } from "../constant";
import { StickyElement } from "./sticky-element";

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
    element.style.cssText = `transform: ${TEMPLATE.TRANSLATE_Y(isNaN(y) ? window.scrollY : window.scrollY < y ? y - 1 : y + 1)};`;
    requestAnimationFrame(() => StickyHandler(element));
    console.log(y);
  }
}
