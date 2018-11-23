---
layout: default
---

## ElementPosition.getNestedOffset

> Calculate element's nested offset position.
> This method is calculated by using offsetParent and offsetTop/Left.
> If there is no scroll, result appears exact coordinates.

### Syntax

```js
ElementPosition.getNestedOffset(target);
```

##### Parameters

<dl>
<dt>target</dt>
<dd>The HTML element you want to calculate.</dd>
</dl>

##### Return

<dl>
<dt>type</dt>
<dd>The object containing top/left/right/bottom properties.</dd>
</dl>

### Example
```js
var el = document.getElementById('id1');
var pos = ElementPosition.getNestedOffset(el);

el.style.top = (pos.bottom + 'px');
el.style.left = (pos.right + 'px');
```
