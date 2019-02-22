let elements = [];

export class Sticky {
  target: HTMLElement;


  constructor(target: HTMLElement) {
    this.target = target;
    window.addEventListener('scroll', this.event, { passive: true });
  }

  event() {
    console.log('111');
  }
}
