import { CLASS_NAME } from "./constant";
import { Sticky } from "./core/sticky";

/* style init for animation */
const style = document.createElement('style');
document.head.appendChild(style);
const sheet = (style.sheet as CSSStyleSheet);
sheet.insertRule(`.${CLASS_NAME.SCROLL_TRANSITION} {
  will-change: transform;
}`, sheet.cssRules.length);

export default Sticky;
