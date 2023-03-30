# growfield

[![npm package version](https://img.shields.io/npm/v/growfield.svg?style=flat-square)](https://www.npmjs.com/package/growfield)
[![Travis build status](https://img.shields.io/travis/com/kodie/growfield.svg?style=flat-square)](https://travis-ci.com/kodie/growfield)
[![npm package downloads](https://img.shields.io/npm/dt/growfield.svg?style=flat-square)](https://www.npmjs.com/package/growfield)
[![code style](https://img.shields.io/badge/code_style-standard-yellow.svg?style=flat-square)](https://github.com/standard/standard)
[![license](https://img.shields.io/github/license/kodie/growfield.svg?style=flat-square)](license.md)

A tiny, dependency-free JavaScript module for making textarea elements grow with their content.


## Demo

Visit https://growfield.js.org


## Installation


### Manual Download

Download [dist/growfield.min.js](dist/growfield.min.js) and place the following HTML in your page's head element:

```html
<script type="text/javascript" src="dist/growfield.min.js"></script>
```


### CDN (Courtesy of [jsDelivr](https://jsdelivr.com))

Place the following HTML in your page's head element (check to make sure the version in the URL is the version you want):

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/kodie/growfield@0.0.1/dist/growfield.min.js"></script>
```


### [NPM](https://npmjs.com)

```
npm install growfield --save
```

```js
// ES6
import growfield from 'growfield'

// CommonJS
const growfield = require('growfield')
```


### [GPM](https://github.com/itsahappymedium/gpm)

```
gpm install kodie/growfield --save
```


### [Bower](https://bower.io)

```
bower install kodie/growfield --save
```


## Usage

### `growfield` Function

`growfield([selector], [options])`

Initializes growfield.


#### Parameters

 - `selector` (Optional) - A query string for textareas that you would like to use growfield on.

 - `options` (Optional) - An object of options.


#### Examples

```js
window.addEventListener('load', function () {
  growfield()
})
```


#### Options

```js
{
  maxRows: null, // The maximum number of rows to grow the field to before normal scrolling happens
  minRows: null  // The minimum number of rows to start with (Defaults to 1)
}
```


## Credit

A special thanks to Rick Kukiela for posting [this StackOverflow answer](https://stackoverflow.com/a/73226649/5463842) which is where the base code of this module came from.


## Related

 - [filebokz](https://github.com/kodie/filebokz) - A tiny, dependency-free, highly customizable and configurable, easy to use file input with some pretty sweet features.

 - [hashjump](https://github.com/kodie/hashjump) - A tiny, dependency-free JavaScript module for handling anchor links and scrolling elements into view.

 - [kloner](https://github.com/kodie/kloner) - A tiny, dependency-free JavaScript module for cloning/repeating elements.

 - [kolorfield](https://github.com/kodie/kolorfield) - A tiny, dependency-free, color input field helper that utilizes the native color picker.

 - [minitaur](https://github.com/kodie/minitaur) - The ultimate, dependency-free, easy to use, JavaScript plugin for creating and managing modals.

 - [peekfield](https://github.com/kodie/peekfield) - A dependency-free, easy to use, JavaScript plugin for hiding and showing fields.


## License

MIT. See the [license file](license.md) for more info.