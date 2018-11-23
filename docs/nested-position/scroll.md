---
layout: default
---

## ElementPosition.getNestedScroll

> Calculate element's nested scroll value.
> This method is calculated by using parentElement and scrollTop/Left.

### Syntax

```js
ElementPosition.getNestedScroll(target);
```

##### Parameters

<dl>
<dt>target</dt>
<dd>The HTML element you want to calculate.</dd>
</dl>

##### Return

<dl>
<dt>type</dt>
<dd>The object containing x/y properties.</dd>
</dl>

### Example
```js
var el = document.getElementById('id1');
var scroll = ElementPosition.getNestedScroll(el);

console.log('x: ', scroll.x, 'y: ', scroll.y);
```
