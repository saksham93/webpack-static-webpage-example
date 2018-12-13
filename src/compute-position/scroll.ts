export function getNestedScroll(el: HTMLElement) {
  let x = 0,
      y = 0
  ;
  while (el = el.parentElement) {
    x += el.scrollLeft;
    y += el.scrollTop;
  }
  return {
    x: x,
    y: y
  };
}
