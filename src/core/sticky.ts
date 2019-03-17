import { StickyOption } from "../type";
import { CLASS_NAME } from "../constant";
import { StickyElement } from "./sticky-element";
import { StickyHandler } from "./sticky-handler";

export class Sticky {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  element: HTMLElement;

  constructor(element: HTMLElement, option: StickyOption) {
    if (!element) {
      throw 'Element is required.';
    }
    if (option.top === undefined &&
      option.left === undefined &&
      option.right === undefined &&
      option.bottom === undefined) {
      throw 'Set one or more of the options "top", "left", "right", or "bottom".';
    }
    
    this.top = option.top;
    this.left = option.left;
    this.right = option.right;
    this.bottom = option.bottom;
    
    element.classList.add(CLASS_NAME.SCROLL_TRANSITION);
    StickyElement.elements.push(this.element = element);

    window.addEventListener('scroll', StickyHandler, {
      capture: true,
      passive: true
    });
  }
}
