import { PositionRect } from "type/position-rect";

const elements = [];
const style = document.createElement('style');
document.head.appendChild(style);
const sheet = style.sheet;

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

  constructor(element: HTMLElement, option: PositionRect) {
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
