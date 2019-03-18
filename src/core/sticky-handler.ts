import { StickyElement } from "./sticky-element";
import { TEMPLATE } from "../constant";

export function StickyHandler() {
  let i = 0,
      element: HTMLElement,
      elements = StickyElement.elements
  ;
  while (element = elements[i++]) {
    const computedStyle = window.getComputedStyle(element).getPropertyValue('transform');
    computedStyle !== null && (element.style.transform =
      TEMPLATE.TRANSLATE_Y(parseFloat(computedStyle.replace(/.*,|\)/g, ''))));
    element.style.transform = TEMPLATE.TRANSLATE_Y(window.scrollY);
  }
}
