import {StickyOption} from "./sticky-option";

let elements = [];

function sticky() {
  elements.forEach((element) => {
    console.log(element);
  });
}

export class Sticky {
  target: HTMLElement;
  option: StickyOption;

  constructor(target: HTMLElement, option: StickyOption) {
    this.target = target;
    this.option = option;
    window.addEventListener('scroll', sticky, { passive: true });
  }
}
