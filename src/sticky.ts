import { Style } from "./style";
import { StickyOption } from "./sticky-option";

const elements = [];
const style = new Style();

function sticky() {
  elements.forEach((element) => {
    console.log(element);
  });
}

export default class Sticky {
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
    elements.push(this.element = element);

    window.addEventListener('scroll', sticky, { passive: true });
  }
}
