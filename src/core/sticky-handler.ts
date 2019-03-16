import { StickyElement } from "./sticky-element";
import { TEMPLATE } from "../constant";

export function StickyHandler() {
  StickyElement.elements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element).getPropertyValue('transform');
    computedStyle !== null && (element.style.transform =
      TEMPLATE.TRANSLATE_Y(parseInt(computedStyle.replace(/.*,/g, '').replace(')', ''))));
    element.style.transform = TEMPLATE.TRANSLATE_Y(window.scrollY);
  });
}
