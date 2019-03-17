export const StickyElement = (() => {
  const elements: HTMLElement[] = [];
  return {
    get elements() { return elements; }
  };
})()
