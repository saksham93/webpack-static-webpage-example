import {StickyOption} from "./sticky.d";

let elements = [];

function sticky() {
  elements.forEach((element) => {
    console.log(element);
  });
}

export class Sticky {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  element: HTMLElement;

  constructor(element: HTMLElement, option: StickyOption) {
    
    this.element = element;
    this.top = option.top;
    this.left = option.left;
    this.right = option.right;
    this.bottom = option.bottom;

    window.addEventListener('scroll', sticky, { passive: true });
  }
}
