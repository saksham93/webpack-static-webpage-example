## Element Position

### Introduction
This is a library that can calculate html element's position.

## Installation
```npm install element-position```

## Issue
[Please register your issue here!](https://github.com/TroyTae/element-position/issues)

## Usage
```javascript
// ES Module
const el = document.getElementById('id');
ElementPosition.maxZIndex(el);
ElementPosition.getAbsolute(el);
ElementPosition.getNestedOffset(el);
ElementPosition.getNestedScroll(el);
```
```javascript
// CommonJS or AMD
import * as p from 'element-position';

const el = document.getElementById('id');
console.log(
    p.maxZIndex(el),
    p.getAbsolute(el),
    p.getNestedOffset(el),
    p.getNestedScroll(el)
);
```

### Issue
https://github.com/TroyTae/element-position/issues
