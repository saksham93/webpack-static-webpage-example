---
layout: default
---

# Element Position

This is a library that can calculate html element's position.

## Installation

```npm install element-position```

## Usage
```js
// ES Module
const el = document.getElementById('id');
const pos = ElementPosition.getAbsolute(el);

console.log(pos.top, pos.left, pos.right, pos.bottom);
```
```js
// CommonJS or AMD
import * as p from 'element-position';

const el = document.getElementById('id');
const pos = p.getAbsolute(el);

console.log(pos.top, pos.left, pos.right, pos.bottom);
```

### API List:

- Coordinates
  - [getAbsolute](./coordinates/absolute.html)
- Nested Position
  - [getNestedOffset](./nested-position/offset.html)
  - [getNestedScroll](./nested-position/scroll.html)

<!--
#### Header 4
*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5
1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

### There's a horizontal rule below this.
* * *

### Here is an unordered list:
*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:
1.  Item one
1.  Item two
1.  Item three
1.  Item four

###### table
| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

Text can be **bold**, _italic_, or ~~strikethrough~~.

### Small image
![Octocat](https://assets-cdn.github.com/images/icons/emoji/octocat.png)

### Large image
![Branching](https://guides.github.com/activities/hello-world/branching.png)

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>
-->
