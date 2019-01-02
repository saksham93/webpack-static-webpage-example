declare namespace ElementPosition {
  function getNestedOffset(el: HTMLElement): {
    top: number,
    left: number,
    right: number,
    bottom: number
  }
  function getNestedScroll(el: HTMLElement): {
    x: number,
    y: number
  }
  function getCoordinates(el: HTMLElement): {
    top: number,
    left: number,
    right: number,
    bottom: number
  }
}

export = ElementPosition;
