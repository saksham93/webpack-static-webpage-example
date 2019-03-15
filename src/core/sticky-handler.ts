import { StickyElement } from "./sticky-element";

export function StickyHandler() {
  StickyElement.elements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element).getPropertyValue('transform');
    computedStyle !== null && (element.style.transform = `translateY(${ computedStyle.replace(/.*\,\s/g, '').replace(')', '')})px`);
    element.style.transform = `translateY(${window.scrollY}px)`;
  });
}
