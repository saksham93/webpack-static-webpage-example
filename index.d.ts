import { Coordinates } from "./type/coordinates";
import { PositionRect } from "./type/position-rect";

declare namespace ElementPosition {
  function getNestedOffset(el: HTMLElement): PositionRect
  function getNestedScroll(el: HTMLElement): Coordinates
  function getCoordinates(el: HTMLElement): PositionRect
}

export = ElementPosition;
