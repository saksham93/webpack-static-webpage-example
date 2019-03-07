import { Coordinates } from "type/coordinates";

declare namespace ElementPosition {
  function getNestedOffset(el: HTMLElement): {
    top: number,
    left: number,
    right: number,
    bottom: number
  }
  function getNestedScroll(el: HTMLElement): Coordinates
  function getCoordinates(el: HTMLElement): {
    top: number,
    left: number,
    right: number,
    bottom: number
  }
}

export = ElementPosition;
