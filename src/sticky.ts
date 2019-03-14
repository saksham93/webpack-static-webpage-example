import { StickyOption } from "./sticky-option";

const elements = [];
const style = document.createElement('style');
document.head.appendChild(style);
const sheet = style.sheet as CSSStyleSheet;
sheet.insertRule(`.smooth-sticky-element {
  transition: transform 750ms;
}`, 0);

function sticky() {
  elements.forEach((element) => {
    const computedStyle = window.getComputedStyle(element).getPropertyValue('transform').match(/matrix\(.*\)/g);
    if (computedStyle !== null) {
      element.style.transform = `translateY(${ computedStyle[0].replace(/.*\,\s/g, '').replace(')', '')})px`;
    }
    element.style.transform = `translateY(${window.scrollY}px)`;
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
    element.classList.add('smooth-sticky-element');
    elements.push(this.element = element);

    window.addEventListener('scroll', sticky, {
      capture: true,
      passive: true
    });
  }
}
