let elements = [];

const sticky = function() {
  console.log('sticky!');
};

export class Sticky {
  target: HTMLElement;


  constructor(target: HTMLElement) {
    this.target = target;
    window.addEventListener('scroll', sticky, { passive: true });
  }
}
