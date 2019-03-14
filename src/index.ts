import { CLASS_NAME } from "./constant";
import { Sticky } from "./core/sticky";

const style = document.createElement('style');
document.head.appendChild(style);
(style.sheet as CSSStyleSheet).insertRule(`.${CLASS_NAME.SCROLL_TRANSITION} {
  transition: transform 750ms;
}`, 0);

export default Sticky;
