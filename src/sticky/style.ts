export class Style {
  element: HTMLStyleElement;
  isActive: boolean;
  sheet: StyleSheet;

  constructor() {
    document.head.appendChild(this.element = document.createElement('style'));
    this.isActive = true;
    this.sheet = this.element.sheet;
  }

  setActive(isActive: boolean) {
    if (this.isActive !== isActive) {
      if (this.isActive = isActive) {
        document.head.appendChild(this.element);
      } else {
        document.head.removeChild(this.element);
      }
    }
  }
}