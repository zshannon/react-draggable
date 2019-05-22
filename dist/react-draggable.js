(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react-dom"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react-dom", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactDraggable"] = factory(require("react-dom"), require("react"));
	else
		root["ReactDraggable"] = factory(root["ReactDOM"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = findInArray;
/* harmony export (immutable) */ __webpack_exports__["d"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["e"] = isNum;
/* harmony export (immutable) */ __webpack_exports__["c"] = int;
/* harmony export (immutable) */ __webpack_exports__["a"] = dontSetMe;

// @credits https://gist.github.com/rogozhnikoff/a43cfed27c41e4e68cdc
function findInArray(array /*: Array<any> | TouchList*/, callback /*: Function*/) /*: any*/ {
  for (var i = 0, length = array.length; i < length; i++) {
    if (callback.apply(callback, [array[i], i, array])) return array[i];
  }
}

function isFunction(func /*: any*/) /*: boolean*/ {
  return typeof func === 'function' || Object.prototype.toString.call(func) === '[object Function]';
}

function isNum(num /*: any*/) /*: boolean*/ {
  return typeof num === 'number' && !isNaN(num);
}

function int(a /*: string*/) /*: number*/ {
  return parseInt(a, 10);
}

function dontSetMe(props /*: Object*/, propName /*: string*/, componentName /*: string*/) {
  if (props[propName]) {
    return new Error('Invalid prop ' + propName + ' passed to ' + componentName + ' - do not set this, set it on the child.');
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./lib/utils/shims.js
var shims = __webpack_require__(0);

// CONCATENATED MODULE: ./lib/utils/getPrefix.js
var prefixes = ['Moz', 'Webkit', 'O', 'ms'];
function getPrefix() /*: string*/ {
  var prop /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';

  // Checking specifically for 'window.document' is for pseudo-browser server-side
  // environments that define 'window' as the global context.
  // E.g. React-rails (see https://github.com/reactjs/react-rails/pull/84)
  if (typeof window === 'undefined' || typeof window.document === 'undefined') return '';

  var style = window.document.documentElement.style;

  if (prop in style) return '';

  for (var i = 0; i < prefixes.length; i++) {
    if (browserPrefixToKey(prop, prefixes[i]) in style) return prefixes[i];
  }

  return '';
}

function browserPrefixToKey(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '' + prefix + kebabToTitleCase(prop) : prop;
}

function browserPrefixToStyle(prop /*: string*/, prefix /*: string*/) /*: string*/ {
  return prefix ? '-' + prefix.toLowerCase() + '-' + prop : prop;
}

function kebabToTitleCase(str /*: string*/) /*: string*/ {
  var out = '';
  var shouldCapitalize = true;
  for (var i = 0; i < str.length; i++) {
    if (shouldCapitalize) {
      out += str[i].toUpperCase();
      shouldCapitalize = false;
    } else if (str[i] === '-') {
      shouldCapitalize = true;
    } else {
      out += str[i];
    }
  }
  return out;
}

// Default export is the prefix itself, like 'Moz', 'Webkit', etc
// Note that you may have to re-test for certain things; for instance, Chrome 50
// can handle unprefixed `transform`, but not unprefixed `user-select`
/* harmony default export */ var utils_getPrefix = (getPrefix());
// CONCATENATED MODULE: ./lib/utils/domFns.js
/* unused harmony export matchesSelector */
/* harmony export (immutable) */ __webpack_exports__["i"] = matchesSelectorAndParentsTo;
/* harmony export (immutable) */ __webpack_exports__["a"] = addEvent;
/* harmony export (immutable) */ __webpack_exports__["m"] = removeEvent;
/* harmony export (immutable) */ __webpack_exports__["k"] = domFns_outerHeight;
/* harmony export (immutable) */ __webpack_exports__["l"] = domFns_outerWidth;
/* harmony export (immutable) */ __webpack_exports__["g"] = domFns_innerHeight;
/* harmony export (immutable) */ __webpack_exports__["h"] = domFns_innerWidth;
/* harmony export (immutable) */ __webpack_exports__["j"] = offsetXYFromParent;
/* harmony export (immutable) */ __webpack_exports__["c"] = createCSSTransform;
/* harmony export (immutable) */ __webpack_exports__["d"] = createSVGTransform;
/* unused harmony export getTranslation */
/* harmony export (immutable) */ __webpack_exports__["e"] = getTouch;
/* harmony export (immutable) */ __webpack_exports__["f"] = getTouchIdentifier;
/* harmony export (immutable) */ __webpack_exports__["b"] = addUserSelectStyles;
/* harmony export (immutable) */ __webpack_exports__["n"] = removeUserSelectStyles;
/* harmony export (immutable) */ __webpack_exports__["o"] = styleHacks;
/* unused harmony export addClassName */
/* unused harmony export removeClassName */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/*:: import type {ControlPosition, PositionOffsetControlPosition, MouseTouchEvent} from './types';*/


var matchesSelectorFunc = '';
function matchesSelector(el /*: Node*/, selector /*: string*/) /*: boolean*/ {
  if (!matchesSelectorFunc) {
    matchesSelectorFunc = Object(shims["b" /* findInArray */])(['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'], function (method) {
      // $FlowIgnore: Doesn't think elements are indexable
      return Object(shims["d" /* isFunction */])(el[method]);
    });
  }

  // Might not be found entirely (not an Element?) - in that case, bail
  // $FlowIgnore: Doesn't think elements are indexable
  if (!Object(shims["d" /* isFunction */])(el[matchesSelectorFunc])) return false;

  // $FlowIgnore: Doesn't think elements are indexable
  return el[matchesSelectorFunc](selector);
}

// Works up the tree to the draggable itself attempting to match selector.
function matchesSelectorAndParentsTo(el /*: Node*/, selector /*: string*/, baseNode /*: Node*/) /*: boolean*/ {
  var node = el;
  do {
    if (matchesSelector(node, selector)) return true;
    if (node === baseNode) return false;
    node = node.parentNode;
  } while (node);

  return false;
}

function addEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, { capture: true, passive: false });
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = handler;
  }
}

function removeEvent(el /*: ?Node*/, event /*: string*/, handler /*: Function*/) /*: void*/ {
  if (!el) {
    return;
  }
  if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, { capture: true, passive: false });
  } else {
    // $FlowIgnore: Doesn't think elements are indexable
    el['on' + event] = null;
  }
}

function domFns_outerHeight(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetTop which is including margin. See getBoundPosition
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height += Object(shims["c" /* int */])(computedStyle.borderTopWidth);
  height += Object(shims["c" /* int */])(computedStyle.borderBottomWidth);
  return height;
}

function domFns_outerWidth(node /*: HTMLElement*/) /*: number*/ {
  // This is deliberately excluding margin for our calculations, since we are using
  // offsetLeft which is including margin. See getBoundPosition
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width += Object(shims["c" /* int */])(computedStyle.borderLeftWidth);
  width += Object(shims["c" /* int */])(computedStyle.borderRightWidth);
  return width;
}
function domFns_innerHeight(node /*: HTMLElement*/) /*: number*/ {
  var height = node.clientHeight;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  height -= Object(shims["c" /* int */])(computedStyle.paddingTop);
  height -= Object(shims["c" /* int */])(computedStyle.paddingBottom);
  return height;
}

function domFns_innerWidth(node /*: HTMLElement*/) /*: number*/ {
  var width = node.clientWidth;
  var computedStyle = node.ownerDocument.defaultView.getComputedStyle(node);
  width -= Object(shims["c" /* int */])(computedStyle.paddingLeft);
  width -= Object(shims["c" /* int */])(computedStyle.paddingRight);
  return width;
}

// Get from offsetParent
function offsetXYFromParent(evt /*: {clientX: number, clientY: number}*/, offsetParent /*: HTMLElement*/) /*: ControlPosition*/ {
  var isBody = offsetParent === offsetParent.ownerDocument.body;
  var offsetParentRect = isBody ? { left: 0, top: 0 } : offsetParent.getBoundingClientRect();

  var x = evt.clientX + offsetParent.scrollLeft - offsetParentRect.left;
  var y = evt.clientY + offsetParent.scrollTop - offsetParentRect.top;

  return { x: x, y: y };
}

function createCSSTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: Object*/ {
  var translation = getTranslation(controlPos, positionOffset, 'px');
  return _defineProperty({}, browserPrefixToKey('transform', utils_getPrefix), translation);
}

function createSVGTransform(controlPos /*: ControlPosition*/, positionOffset /*: PositionOffsetControlPosition*/) /*: string*/ {
  var translation = getTranslation(controlPos, positionOffset, '');
  return translation;
}
function getTranslation(_ref2, positionOffset /*: PositionOffsetControlPosition*/, unitSuffix /*: string*/) /*: string*/ {
  var x = _ref2.x,
      y = _ref2.y;

  var translation = 'translate(' + x + unitSuffix + ',' + y + unitSuffix + ')';
  if (positionOffset) {
    var defaultX = '' + (typeof positionOffset.x === 'string' ? positionOffset.x : positionOffset.x + unitSuffix);
    var defaultY = '' + (typeof positionOffset.y === 'string' ? positionOffset.y : positionOffset.y + unitSuffix);
    translation = 'translate(' + defaultX + ', ' + defaultY + ')' + translation;
  }
  return translation;
}

function getTouch(e /*: MouseTouchEvent*/, identifier /*: number*/) /*: ?{clientX: number, clientY: number}*/ {
  return e.targetTouches && Object(shims["b" /* findInArray */])(e.targetTouches, function (t) {
    return identifier === t.identifier;
  }) || e.changedTouches && Object(shims["b" /* findInArray */])(e.changedTouches, function (t) {
    return identifier === t.identifier;
  });
}

function getTouchIdentifier(e /*: MouseTouchEvent*/) /*: ?number*/ {
  if (e.targetTouches && e.targetTouches[0]) return e.targetTouches[0].identifier;
  if (e.changedTouches && e.changedTouches[0]) return e.changedTouches[0].identifier;
}

// User-select Hacks:
//
// Useful for preventing blue highlights all over everything when dragging.

// Note we're passing `document` b/c we could be iframed
function addUserSelectStyles(doc /*: ?Document*/) {
  if (!doc) return;
  var styleEl = doc.getElementById('react-draggable-style-el');
  if (!styleEl) {
    styleEl = doc.createElement('style');
    styleEl.type = 'text/css';
    styleEl.id = 'react-draggable-style-el';
    styleEl.innerHTML = '.react-draggable-transparent-selection *::-moz-selection {background: transparent;}\n';
    styleEl.innerHTML += '.react-draggable-transparent-selection *::selection {background: transparent;}\n';
    doc.getElementsByTagName('head')[0].appendChild(styleEl);
  }
  if (doc.body) addClassName(doc.body, 'react-draggable-transparent-selection');
}

function removeUserSelectStyles(doc /*: ?Document*/) {
  try {
    if (doc && doc.body) removeClassName(doc.body, 'react-draggable-transparent-selection');
    // $FlowIgnore: IE
    if (doc.selection) {
      // $FlowIgnore: IE
      doc.selection.empty();
    } else {
      window.getSelection().removeAllRanges(); // remove selection caused by scroll
    }
  } catch (e) {
    // probably IE
  }
}

function styleHacks() /*: Object*/ {
  var childStyle /*: Object*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Workaround IE pointer events; see #51
  // https://github.com/mzabriskie/react-draggable/issues/51#issuecomment-103488278
  return _extends({
    touchAction: 'none'
  }, childStyle);
}

function addClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    if (!el.className.match(new RegExp('(?:^|\\s)' + className + '(?!\\S)'))) {
      el.className += ' ' + className;
    }
  }
}

function removeClassName(el /*: HTMLElement*/, className /*: string*/) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)', 'g'), '');
  }
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(10)();
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = getBoundPosition;
/* harmony export (immutable) */ __webpack_exports__["g"] = snapToGrid;
/* harmony export (immutable) */ __webpack_exports__["a"] = canDragX;
/* harmony export (immutable) */ __webpack_exports__["b"] = canDragY;
/* harmony export (immutable) */ __webpack_exports__["f"] = getControlPosition;
/* harmony export (immutable) */ __webpack_exports__["c"] = createCoreData;
/* harmony export (immutable) */ __webpack_exports__["d"] = createDraggableData;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__domFns__ = __webpack_require__(2);




/*:: import type Draggable from '../Draggable';*/
/*:: import type {Bounds, ControlPosition, DraggableData, MouseTouchEvent} from './types';*/
/*:: import type DraggableCore from '../DraggableCore';*/


function getBoundPosition(draggable /*: Draggable*/, x /*: number*/, y /*: number*/) /*: [number, number]*/ {
  // If no bounds, short-circuit and move on
  if (!draggable.props.bounds) return [x, y];

  // Clone new bounds
  var bounds = draggable.props.bounds;

  bounds = typeof bounds === 'string' ? bounds : cloneBounds(bounds);
  var node = findDOMNode(draggable);

  if (typeof bounds === 'string') {
    var ownerDocument = node.ownerDocument;

    var ownerWindow = ownerDocument.defaultView;
    var boundNode = void 0;
    if (bounds === 'parent') {
      boundNode = node.parentNode;
    } else {
      boundNode = ownerDocument.querySelector(bounds);
    }
    if (!(boundNode instanceof ownerWindow.HTMLElement)) {
      throw new Error('Bounds selector "' + bounds + '" could not find an element.');
    }
    var nodeStyle = ownerWindow.getComputedStyle(node);
    var boundNodeStyle = ownerWindow.getComputedStyle(boundNode);
    // Compute bounds. This is a pain with padding and offsets but this gets it exactly right.
    bounds = {
      left: -node.offsetLeft + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingLeft) + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginLeft),
      top: -node.offsetTop + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingTop) + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginTop),
      right: Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["h" /* innerWidth */])(boundNode) - Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["l" /* outerWidth */])(node) - node.offsetLeft + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingRight) - Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginRight),
      bottom: Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["g" /* innerHeight */])(boundNode) - Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["k" /* outerHeight */])(node) - node.offsetTop + Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(boundNodeStyle.paddingBottom) - Object(__WEBPACK_IMPORTED_MODULE_0__shims__["c" /* int */])(nodeStyle.marginBottom)
    };
  }

  // Keep x and y below right and bottom limits...
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.right)) x = Math.min(x, bounds.right);
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.bottom)) y = Math.min(y, bounds.bottom);

  // But above left and top limits.
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.left)) x = Math.max(x, bounds.left);
  if (Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(bounds.top)) y = Math.max(y, bounds.top);

  return [x, y];
}

function snapToGrid(grid /*: [number, number]*/, pendingX /*: number*/, pendingY /*: number*/) /*: [number, number]*/ {
  var x = Math.round(pendingX / grid[0]) * grid[0];
  var y = Math.round(pendingY / grid[1]) * grid[1];
  return [x, y];
}

function canDragX(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'x';
}

function canDragY(draggable /*: Draggable*/) /*: boolean*/ {
  return draggable.props.axis === 'both' || draggable.props.axis === 'y';
}

// Get {x, y} positions from event.
function getControlPosition(e /*: MouseTouchEvent*/, touchIdentifier /*: ?number*/, draggableCore /*: DraggableCore*/) /*: ?ControlPosition*/ {
  var touchObj = typeof touchIdentifier === 'number' ? Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["e" /* getTouch */])(e, touchIdentifier) : null;
  if (typeof touchIdentifier === 'number' && !touchObj) return null; // not the right touch
  var node = findDOMNode(draggableCore);
  // User can provide an offsetParent if desired.
  var offsetParent = draggableCore.props.offsetParent || node.offsetParent || node.ownerDocument.body;
  return Object(__WEBPACK_IMPORTED_MODULE_2__domFns__["j" /* offsetXYFromParent */])(touchObj || e, offsetParent);
}

// Create an data object exposed by <DraggableCore>'s events
function createCoreData(draggable /*: DraggableCore*/, x /*: number*/, y /*: number*/) /*: DraggableData*/ {
  var state = draggable.state;
  var isStart = !Object(__WEBPACK_IMPORTED_MODULE_0__shims__["e" /* isNum */])(state.lastX);
  var node = findDOMNode(draggable);

  if (isStart) {
    // If this is our first move, use the x and y as last coords.
    return {
      node: node,
      deltaX: 0, deltaY: 0,
      lastX: x, lastY: y,
      x: x, y: y
    };
  } else {
    // Otherwise calculate proper values.
    return {
      node: node,
      deltaX: x - state.lastX, deltaY: y - state.lastY,
      lastX: state.lastX, lastY: state.lastY,
      x: x, y: y
    };
  }
}

// Create an data exposed by <Draggable>'s events
function createDraggableData(draggable /*: Draggable*/, coreData /*: DraggableData*/) /*: DraggableData*/ {
  var scale = draggable.props.scale;
  return {
    node: coreData.node,
    x: draggable.state.x + coreData.deltaX / scale,
    y: draggable.state.y + coreData.deltaY / scale,
    deltaX: coreData.deltaX / scale,
    deltaY: coreData.deltaY / scale,
    lastX: draggable.state.x,
    lastY: draggable.state.y
  };
}

// A lot faster than stringify/parse
function cloneBounds(bounds /*: Bounds*/) /*: Bounds*/ {
  return {
    left: bounds.left,
    top: bounds.top,
    right: bounds.right,
    bottom: bounds.bottom
  };
}

function findDOMNode(draggable /*: Draggable | DraggableCore*/) /*: HTMLElement*/ {
  var node = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(draggable);
  if (!node) {
    throw new Error('<DraggableCore>: Unmounted during event!');
  }
  // $FlowIgnore we can't assert on HTMLElement due to tests... FIXME
  return node;
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_domFns__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_positionFns__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_log__ = __webpack_require__(7);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/*:: import type {EventHandler, MouseTouchEvent} from './utils/types';*/


// Simple abstraction for dragging events names.
/*:: import type {Element as ReactElement} from 'react';*/
var eventsFor = {
  touch: {
    start: 'touchstart',
    move: 'touchmove',
    stop: 'touchend'
  },
  mouse: {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
  }
};

// Default to mouse events.
var dragEventFor = eventsFor.mouse;

/*:: type DraggableCoreState = {
  dragging: boolean,
  lastX: number,
  lastY: number,
  touchIdentifier: ?number
};*/
/*:: export type DraggableBounds = {
  left: number,
  right: number,
  top: number,
  bottom: number,
};*/
/*:: export type DraggableData = {
  node: HTMLElement,
  x: number, y: number,
  deltaX: number, deltaY: number,
  lastX: number, lastY: number,
};*/
/*:: export type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;*/
/*:: export type ControlPosition = {x: number, y: number};*/
/*:: export type PositionOffsetControlPosition = {x: number|string, y: number|string};*/


//
// Define <DraggableCore>.
//
// <DraggableCore> is for advanced usage of <Draggable>. It maintains minimal internal state so it can
// work well with libraries that require more control over the element.
//

/*:: export type DraggableCoreProps = {
  allowAnyClick: boolean,
  cancel: string,
  children: ReactElement<any>,
  disabled: boolean,
  enableUserSelectHack: boolean,
  offsetParent: HTMLElement,
  grid: [number, number],
  handle: string,
  onStart: DraggableEventHandler,
  onDrag: DraggableEventHandler,
  onStop: DraggableEventHandler,
  onMouseDown: (e: MouseEvent) => void,
};*/

var DraggableCore = function (_React$Component) {
  _inherits(DraggableCore, _React$Component);

  function DraggableCore() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DraggableCore);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DraggableCore.__proto__ || Object.getPrototypeOf(DraggableCore)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dragging: false,
      // Used while dragging to determine deltas.
      lastX: NaN, lastY: NaN,
      touchIdentifier: null
    }, _this.handleRef = function (elForTouchStart) {
      if (_this.elForTouchStart) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(_this.elForTouchStart, eventsFor.touch.start, _this.onTouchStart);
      _this.elForTouchStart = elForTouchStart;
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["a" /* addEvent */])(_this.elForTouchStart, eventsFor.touch.start, _this.onTouchStart);
    }, _this.handleDragStart = function (e) {
      // Make it possible to attach event handlers on top of this one.
      _this.props.onMouseDown(e);

      // Only accept left-clicks.
      if (!_this.props.allowAnyClick && typeof e.button === 'number' && e.button !== 0) return false;

      // Get nodes. Be sure to grab relative document (could be iframed)
      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this);
      if (!thisNode || !thisNode.ownerDocument || !thisNode.ownerDocument.body) {
        throw new Error('<DraggableCore> not mounted on DragStart!');
      }
      var ownerDocument = thisNode.ownerDocument;

      // Short circuit if handle or cancel prop was provided and selector doesn't match.

      if (_this.props.disabled || !(e.target instanceof ownerDocument.defaultView.Node) || _this.props.handle && !Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["i" /* matchesSelectorAndParentsTo */])(e.target, _this.props.handle, thisNode) || _this.props.cancel && Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["i" /* matchesSelectorAndParentsTo */])(e.target, _this.props.cancel, thisNode)) {
        return;
      }

      // Set touch identifier in component state if this is a touch event. This allows us to
      // distinguish between individual touches on multitouch screens by identifying which
      // touchpoint was set to this element.
      var touchIdentifier = Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["f" /* getTouchIdentifier */])(e);
      _this.setState({ touchIdentifier: touchIdentifier });

      // Get the current drag point from the event. This is used as the offset.
      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, touchIdentifier, _this);
      if (position == null) return; // not possible but satisfies flow
      var x = position.x,
          y = position.y;

      // Create an event object with all the data parents need to make a decision here.

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDragStart: %j', coreEvent);

      // Call event handler. If it returns explicit false, cancel.
      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('calling', _this.props.onStart);
      var shouldUpdate = _this.props.onStart(e, coreEvent);
      if (shouldUpdate === false) return;

      // Add a style to the body to disable user-select. This prevents text from
      // being selected all over the page.
      if (_this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["b" /* addUserSelectStyles */])(ownerDocument);

      // Initiate dragging. Set the current x and y as offsets
      // so we know how much we've moved during the drag. This allows us
      // to drag elements around even if they have been moved, without issue.
      _this.setState({
        dragging: true,

        lastX: x,
        lastY: y
      });

      // Add events to the document directly so we catch when the user's mouse/touch moves outside of
      // this element. We use different events depending on whether or not we have detected that this
      // is a touch-capable device.
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["a" /* addEvent */])(ownerDocument, dragEventFor.move, _this.handleDrag);
      Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["a" /* addEvent */])(ownerDocument, dragEventFor.stop, _this.handleDragStop);
    }, _this.handleDrag = function (e) {

      // Prevent scrolling on mobile devices, like ipad/iphone.
      if (e.type === 'touchmove') e.preventDefault();

      // Get the current drag point from the event. This is used as the offset.
      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      // Snap to grid if prop has been provided

      if (Array.isArray(_this.props.grid)) {
        var _deltaX = x - _this.state.lastX,
            _deltaY = y - _this.state.lastY;

        var _snapToGrid = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["g" /* snapToGrid */])(_this.props.grid, _deltaX, _deltaY);

        var _snapToGrid2 = _slicedToArray(_snapToGrid, 2);

        _deltaX = _snapToGrid2[0];
        _deltaY = _snapToGrid2[1];

        if (!_deltaX && !_deltaY) return; // skip useless drag
        x = _this.state.lastX + _deltaX, y = _this.state.lastY + _deltaY;
      }

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDrag: %j', coreEvent);

      // Call event handler. If it returns explicit false, trigger end.
      var shouldUpdate = _this.props.onDrag(e, coreEvent);
      if (shouldUpdate === false) {
        try {
          // $FlowIgnore
          _this.handleDragStop(new MouseEvent('mouseup'));
        } catch (err) {
          // Old browsers
          var event = ((document.createEvent('MouseEvents') /*: any*/) /*: MouseTouchEvent*/);
          // I see why this insanity was deprecated
          // $FlowIgnore
          event.initMouseEvent('mouseup', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
          _this.handleDragStop(event);
        }
        return;
      }

      _this.setState({
        lastX: x,
        lastY: y
      });
    }, _this.handleDragStop = function (e) {
      if (!_this.state.dragging) return;

      var position = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["f" /* getControlPosition */])(e, _this.state.touchIdentifier, _this);
      if (position == null) return;
      var x = position.x,
          y = position.y;

      var coreEvent = Object(__WEBPACK_IMPORTED_MODULE_4__utils_positionFns__["c" /* createCoreData */])(_this, x, y);

      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(_this);
      if (thisNode) {
        // Remove user-select hack
        if (_this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["n" /* removeUserSelectStyles */])(thisNode.ownerDocument);
      }

      Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: handleDragStop: %j', coreEvent);

      // Reset the el.
      _this.setState({
        dragging: false,
        lastX: NaN,
        lastY: NaN
      });

      // Call event handler
      _this.props.onStop(e, coreEvent);

      if (thisNode) {
        // Remove event handlers
        Object(__WEBPACK_IMPORTED_MODULE_6__utils_log__["a" /* default */])('DraggableCore: Removing handlers');
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(thisNode.ownerDocument, dragEventFor.move, _this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(thisNode.ownerDocument, dragEventFor.stop, _this.handleDragStop);
      }
    }, _this.onMouseDown = function (e) {
      dragEventFor = eventsFor.mouse; // on touchscreen laptops we could switch back to mouse

      return _this.handleDragStart(e);
    }, _this.onMouseUp = function (e) {
      dragEventFor = eventsFor.mouse;

      return _this.handleDragStop(e);
    }, _this.onTouchStart = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStart(e);
    }, _this.onTouchEnd = function (e) {
      // We're on a touch device now, so change the event handlers
      dragEventFor = eventsFor.touch;

      return _this.handleDragStop(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DraggableCore, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // Remove any leftover event handlers. Remove both touch and mouse handlers in case
      // some browser quirk caused a touch event to fire during a mouse move, or vice versa.
      var thisNode = __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this);
      if (thisNode) {
        var ownerDocument = thisNode.ownerDocument;

        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.mouse.move, this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.touch.move, this.handleDrag);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.mouse.stop, this.handleDragStop);
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(ownerDocument, eventsFor.touch.stop, this.handleDragStop);
        if (this.props.enableUserSelectHack) Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["n" /* removeUserSelectStyles */])(ownerDocument);
      }
      if (this.elForTouchStart) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["m" /* removeEvent */])(this.elForTouchStart, eventsFor.touch.start, this.onTouchStart);
      }
    }

    // Same as onMouseDown (start drag), but now consider this a touch device.

  }, {
    key: 'render',
    value: function render() {
      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children), {
        style: Object(__WEBPACK_IMPORTED_MODULE_3__utils_domFns__["o" /* styleHacks */])(this.props.children.props.style),

        // Note: mouseMove handler is attached to document so it will still function
        // when the user drags quickly and leaves the bounds of the element.
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onTouchEnd: this.onTouchEnd,
        ref: this.handleRef // onTouchStart will happen here
      });
    }
  }]);

  return DraggableCore;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

DraggableCore.displayName = 'DraggableCore';
DraggableCore.propTypes = {
  /**
   * `allowAnyClick` allows dragging using any mouse button.
   * By default, we only accept the left button.
   *
   * Defaults to `false`.
   */
  allowAnyClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * `disabled`, if true, stops the <Draggable> from dragging. All handlers,
   * with the exception of `onMouseDown`, will not fire.
   */
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * By default, we add 'user-select:none' attributes to the document body
   * to prevent ugly text selection during drag. If this is causing problems
   * for your app, set this to `false`.
   */
  enableUserSelectHack: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,

  /**
   * `offsetParent`, if set, uses the passed DOM node to compute drag offsets
   * instead of using the parent node.
   */
  offsetParent: function offsetParent(props /*: DraggableCoreProps*/, propName /*: $Keys<DraggableCoreProps>*/) {
    if (props[propName] && props[propName].nodeType !== 1) {
      throw new Error('Draggable\'s offsetParent must be a DOM Node.');
    }
  },

  /**
   * `grid` specifies the x and y that dragging should snap to.
   */
  grid: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),

  /**
   * `scale` specifies the scale of the area you are dragging inside of. It allows
   * the drag deltas to scale correctly with how far zoomed in/out you are.
   */
  scale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,

  /**
   * `handle` specifies a selector to be used as the handle that initiates drag.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable handle=".handle">
   *              <div>
   *                  <div className="handle">Click me to drag</div>
   *                  <div>This is some other content</div>
   *              </div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  handle: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * `cancel` specifies a selector to be used to prevent drag initialization.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *           return(
   *               <Draggable cancel=".cancel">
   *                   <div>
   *                     <div className="cancel">You can't drag from here</div>
   *                     <div>Dragging here works fine</div>
   *                   </div>
   *               </Draggable>
   *           );
   *       }
   *   });
   * ```
   */
  cancel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * Called when dragging starts.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onStart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * Called while dragging.
   * If this function returns the boolean false, dragging will be canceled.
   */
  onDrag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * Called when dragging stops.
   * If this function returns the boolean false, the drag will remain active.
   */
  onStop: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * A workaround option which can be passed if onMouseDown needs to be accessed,
   * since it'll always be blocked (as there is internal use of onMouseDown)
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,

  /**
   * These properties should be defined on the child, not here.
   */
  className: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */],
  style: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */],
  transform: __WEBPACK_IMPORTED_MODULE_5__utils_shims__["a" /* dontSetMe */]
};
DraggableCore.defaultProps = {
  allowAnyClick: false, // by default only accept left click
  cancel: null,
  disabled: false,
  enableUserSelectHack: true,
  offsetParent: null,
  handle: null,
  grid: null,
  transform: null,
  onStart: function onStart() {},
  onDrag: function onDrag() {},
  onStop: function onStop() {},
  onMouseDown: function onMouseDown() {}
};
/* harmony default export */ __webpack_exports__["default"] = (DraggableCore);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;

/*eslint no-console:0*/
function log() {
  var _console;

  if (true) (_console = console).log.apply(_console, arguments);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var Draggable = __webpack_require__(9).default;

// Previous versions of this lib exported <Draggable> as the root export. As to not break
// them, or TypeScript, we export *both* as the root and as 'default'.
// See https://github.com/mzabriskie/react-draggable/pull/254
// and https://github.com/mzabriskie/react-draggable/issues/266
module.exports = Draggable;
module.exports.default = Draggable;
module.exports.DraggableCore = __webpack_require__(6).default;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_domFns__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_positionFns__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_shims__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DraggableCore__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_log__ = __webpack_require__(7);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









/*:: import type {ControlPosition, PositionOffsetControlPosition, DraggableBounds, DraggableCoreProps} from './DraggableCore';*/


/*:: import type {DraggableEventHandler} from './utils/types';*/
/*:: import type {Element as ReactElement} from 'react';*/
/*:: type DraggableState = {
  dragging: boolean,
  dragged: boolean,
  x: number, y: number,
  slackX: number, slackY: number,
  isElementSVG: boolean
};*/


//
// Define <Draggable>
//

/*:: export type DraggableProps = {
  ...$Exact<DraggableCoreProps>,
  axis: 'both' | 'x' | 'y' | 'none',
  bounds: DraggableBounds | string | false,
  defaultClassName: string,
  defaultClassNameDragging: string,
  defaultClassNameDragged: string,
  defaultPosition: ControlPosition,
  positionOffset: PositionOffsetControlPosition,
  position: ControlPosition,
  scale: number
};*/

var Draggable = function (_React$Component) {
  _inherits(Draggable, _React$Component);

  function Draggable(props /*: DraggableProps*/) {
    _classCallCheck(this, Draggable);

    var _this = _possibleConstructorReturn(this, (Draggable.__proto__ || Object.getPrototypeOf(Draggable)).call(this, props));

    _this.onDragStart = function (e, coreData) {
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDragStart: %j', coreData);

      // Short-circuit if user's callback killed it.
      var shouldStart = _this.props.onStart(e, Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData));
      // Kills start event on core as well, so move handlers are never bound.
      if (shouldStart === false) return false;

      _this.setState({ dragging: true, dragged: true });
    };

    _this.onDrag = function (e, coreData) {
      if (!_this.state.dragging) return false;
      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDrag: %j', coreData);

      var uiData = Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        x: uiData.x,
        y: uiData.y
      };

      // Keep within bounds.
      if (_this.props.bounds) {
        // Save original x and y.
        var _x = newState.x,
            _y = newState.y;

        // Add slack to the values used to calculate bound position. This will ensure that if
        // we start removing slack, the element won't react to it right away until it's been
        // completely removed.

        newState.x += _this.state.slackX;
        newState.y += _this.state.slackY;

        // Get bound position. This will ceil/floor the x and y within the boundaries.

        var _getBoundPosition = Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["e" /* getBoundPosition */])(_this, newState.x, newState.y),
            _getBoundPosition2 = _slicedToArray(_getBoundPosition, 2),
            newStateX = _getBoundPosition2[0],
            newStateY = _getBoundPosition2[1];

        newState.x = newStateX;
        newState.y = newStateY;

        // Recalculate slack by noting how much was shaved by the boundPosition handler.
        newState.slackX = _this.state.slackX + (_x - newState.x);
        newState.slackY = _this.state.slackY + (_y - newState.y);

        // Update the event we fire to reflect what really happened after bounds took effect.
        uiData.x = newState.x;
        uiData.y = newState.y;
        uiData.deltaX = newState.x - _this.state.x;
        uiData.deltaY = newState.y - _this.state.y;
      }

      // Short-circuit if user's callback killed it.
      var shouldUpdate = _this.props.onDrag(e, uiData);
      if (shouldUpdate === false) return false;

      _this.setState(newState);
    };

    _this.onDragStop = function (e, coreData) {
      if (!_this.state.dragging) return false;

      // Short-circuit if user's callback killed it.
      var shouldStop = _this.props.onStop(e, Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["d" /* createDraggableData */])(_this, coreData));
      if (shouldStop === false) return false;

      Object(__WEBPACK_IMPORTED_MODULE_8__utils_log__["a" /* default */])('Draggable: onDragStop: %j', coreData);

      var newState /*: $Shape<DraggableState>*/ = {
        dragging: false,
        slackX: 0,
        slackY: 0
      };

      // If this is a controlled component, the result of this operation will be to
      // revert back to the old position. We expect a handler on `onDragStop`, at the least.
      var controlled = Boolean(_this.props.position);
      if (controlled) {
        var _this$props$position = _this.props.position,
            _x2 = _this$props$position.x,
            _y2 = _this$props$position.y;

        newState.x = _x2;
        newState.y = _y2;
      }

      _this.setState(newState);
    };

    _this.state = {
      // Whether or not we are currently dragging.
      dragging: false,

      // Whether or not we have been dragged before.
      dragged: false,

      // Current transform x and y.
      x: props.position ? props.position.x : props.defaultPosition.x,
      y: props.position ? props.position.y : props.defaultPosition.y,

      // Used for compensating for out-of-bounds drags
      slackX: 0, slackY: 0,

      // Can only determine if SVG after mounting
      isElementSVG: false
    };
    return _this;
  }

  _createClass(Draggable, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.position && !(this.props.onDrag || this.props.onStop)) {
        // eslint-disable-next-line
        console.warn('A `position` was applied to this <Draggable>, without drag handlers. This will make this ' + 'component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the ' + '`position` of this element.');
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Check to see if the element passed is an instanceof SVGElement
      if (typeof window.SVGElement !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.findDOMNode(this) instanceof window.SVGElement) {
        this.setState({ isElementSVG: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps /*: Object*/) {
      // Set x/y if position has changed
      if (nextProps.position && (!this.props.position || nextProps.position.x !== this.props.position.x || nextProps.position.y !== this.props.position.y)) {
        this.setState({ x: nextProps.position.x, y: nextProps.position.y });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.setState({ dragging: false }); // prevents invariant if unmounted while dragging
    }
  }, {
    key: 'render',
    value: function render() /*: ReactElement<any>*/ {
      var _classNames;

      var style = {},
          svgTransform = null;

      // If this is controlled, we don't want to move it - unless it's dragging.
      var controlled = Boolean(this.props.position);
      var draggable = !controlled || this.state.dragging;

      var position = this.props.position || this.props.defaultPosition;
      var transformOpts = {
        // Set left if horizontal drag is enabled
        x: Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["a" /* canDragX */])(this) && draggable ? this.state.x : position.x,

        // Set top if vertical drag is enabled
        y: Object(__WEBPACK_IMPORTED_MODULE_5__utils_positionFns__["b" /* canDragY */])(this) && draggable ? this.state.y : position.y
      };

      // If this element was SVG, we use the `transform` attribute.
      if (this.state.isElementSVG) {
        svgTransform = Object(__WEBPACK_IMPORTED_MODULE_4__utils_domFns__["d" /* createSVGTransform */])(transformOpts, this.props.positionOffset);
      } else {
        // Add a CSS transform to move the element around. This allows us to move the element around
        // without worrying about whether or not it is relatively or absolutely positioned.
        // If the item you are dragging already has a transform set, wrap it in a <span> so <Draggable>
        // has a clean slate.
        style = Object(__WEBPACK_IMPORTED_MODULE_4__utils_domFns__["c" /* createCSSTransform */])(transformOpts, this.props.positionOffset);
      }

      var _props = this.props,
          defaultClassName = _props.defaultClassName,
          defaultClassNameDragging = _props.defaultClassNameDragging,
          defaultClassNameDragged = _props.defaultClassNameDragged;


      var children = __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children);

      // Mark with class while dragging
      var className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(children.props.className || '', defaultClassName, (_classNames = {}, _defineProperty(_classNames, defaultClassNameDragging, this.state.dragging), _defineProperty(_classNames, defaultClassNameDragged, this.state.dragged), _classNames));

      // Reuse the child provided
      // This makes it flexible to use whatever element is wanted (div, ul, etc)
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"],
        _extends({}, this.props, { onStart: this.onDragStart, onDrag: this.onDrag, onStop: this.onDragStop }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(children, {
          className: className,
          style: _extends({}, children.props.style, style),
          transform: svgTransform
        })
      );
    }
  }]);

  return Draggable;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Draggable.displayName = 'Draggable';
Draggable.propTypes = _extends({}, __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"].propTypes, {

  /**
   * `axis` determines which axis the draggable can move.
   *
   *  Note that all callbacks will still return data as normal. This only
   *  controls flushing to the DOM.
   *
   * 'both' allows movement horizontally and vertically.
   * 'x' limits movement to horizontal axis.
   * 'y' limits movement to vertical axis.
   * 'none' limits all movement.
   *
   * Defaults to 'both'.
   */
  axis: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(['both', 'x', 'y', 'none']),

  /**
   * `bounds` determines the range of movement available to the element.
   * Available values are:
   *
   * 'parent' restricts movement within the Draggable's parent node.
   *
   * Alternatively, pass an object with the following properties, all of which are optional:
   *
   * {left: LEFT_BOUND, right: RIGHT_BOUND, bottom: BOTTOM_BOUND, top: TOP_BOUND}
   *
   * All values are in px.
   *
   * Example:
   *
   * ```jsx
   *   let App = React.createClass({
   *       render: function () {
   *         return (
   *            <Draggable bounds={{right: 300, bottom: 300}}>
   *              <div>Content</div>
   *           </Draggable>
   *         );
   *       }
   *   });
   * ```
   */
  bounds: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    left: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    right: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    top: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    bottom: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf([false])]),

  defaultClassName: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultClassNameDragging: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultClassNameDragged: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,

  /**
   * `defaultPosition` specifies the x and y that the dragged item should start at
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable defaultPosition={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  defaultPosition: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),
  positionOffset: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
  }),

  /**
   * `position`, if present, defines the current position of the element.
   *
   *  This is similar to how form elements in React work - if no `position` is supplied, the component
   *  is uncontrolled.
   *
   * Example:
   *
   * ```jsx
   *      let App = React.createClass({
   *          render: function () {
   *              return (
   *                  <Draggable position={{x: 25, y: 25}}>
   *                      <div>I start with transformX: 25px and transformY: 25px;</div>
   *                  </Draggable>
   *              );
   *          }
   *      });
   * ```
   */
  position: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    x: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
    y: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number
  }),

  /**
   * These properties should be defined on the child, not here.
   */
  className: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */],
  style: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */],
  transform: __WEBPACK_IMPORTED_MODULE_6__utils_shims__["a" /* dontSetMe */]
});
Draggable.defaultProps = _extends({}, __WEBPACK_IMPORTED_MODULE_7__DraggableCore__["default"].defaultProps, {
  axis: 'both',
  bounds: false,
  defaultClassName: 'react-draggable',
  defaultClassNameDragging: 'react-draggable-dragging',
  defaultClassNameDragged: 'react-draggable-dragged',
  defaultPosition: { x: 0, y: 0 },
  position: null,
  scale: 1
});
/* harmony default export */ __webpack_exports__["default"] = (Draggable);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(11);
var invariant = __webpack_require__(12);
var ReactPropTypesSecret = __webpack_require__(13);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIi4uL3dlYnBhY2svYm9vdHN0cmFwIDhmNWM4ZDgzYjZhYmI5NzZiOGFiIiwiLi4vLi9saWIvdXRpbHMvc2hpbXMuanMiLCIuLi9leHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3QtZG9tXCIsXCJjb21tb25qczJcIjpcInJlYWN0LWRvbVwiLFwiYW1kXCI6XCJyZWFjdC1kb21cIixcInJvb3RcIjpcIlJlYWN0RE9NXCJ9IiwiLi4vLi9saWIvdXRpbHMvZ2V0UHJlZml4LmpzIiwiLi4vLi9saWIvdXRpbHMvZG9tRm5zLmpzIiwiLi4vZXh0ZXJuYWwge1wiY29tbW9uanNcIjpcInJlYWN0XCIsXCJjb21tb25qczJcIjpcInJlYWN0XCIsXCJhbWRcIjpcInJlYWN0XCIsXCJyb290XCI6XCJSZWFjdFwifSIsIi4uLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCIuLi8uL2xpYi91dGlscy9wb3NpdGlvbkZucy5qcyIsIi4uLy4vbGliL0RyYWdnYWJsZUNvcmUuanMiLCIuLi8uL2xpYi91dGlscy9sb2cuanMiLCIuLi8uL2luZGV4LmpzIiwiLi4vLi9saWIvRHJhZ2dhYmxlLmpzIiwiLi4vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanMiLCIuLi8uL25vZGVfbW9kdWxlcy9mYmpzL2xpYi9lbXB0eUZ1bmN0aW9uLmpzIiwiLi4vLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvaW52YXJpYW50LmpzIiwiLi4vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCIuLi8uL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIl0sIm5hbWVzIjpbImZpbmRJbkFycmF5IiwiYXJyYXkiLCJjYWxsYmFjayIsImkiLCJsZW5ndGgiLCJhcHBseSIsImlzRnVuY3Rpb24iLCJmdW5jIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiaXNOdW0iLCJudW0iLCJpc05hTiIsImludCIsImEiLCJwYXJzZUludCIsImRvbnRTZXRNZSIsInByb3BzIiwicHJvcE5hbWUiLCJjb21wb25lbnROYW1lIiwiRXJyb3IiLCJwcmVmaXhlcyIsImdldFByZWZpeCIsInByb3AiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInN0eWxlIiwiZG9jdW1lbnRFbGVtZW50IiwiYnJvd3NlclByZWZpeFRvS2V5IiwicHJlZml4Iiwia2ViYWJUb1RpdGxlQ2FzZSIsImJyb3dzZXJQcmVmaXhUb1N0eWxlIiwidG9Mb3dlckNhc2UiLCJzdHIiLCJvdXQiLCJzaG91bGRDYXBpdGFsaXplIiwidG9VcHBlckNhc2UiLCJtYXRjaGVzU2VsZWN0b3JGdW5jIiwibWF0Y2hlc1NlbGVjdG9yIiwiZWwiLCJzZWxlY3RvciIsIm1ldGhvZCIsIm1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyIsImJhc2VOb2RlIiwibm9kZSIsInBhcmVudE5vZGUiLCJhZGRFdmVudCIsImV2ZW50IiwiaGFuZGxlciIsImF0dGFjaEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhcHR1cmUiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnQiLCJkZXRhY2hFdmVudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvdXRlckhlaWdodCIsImhlaWdodCIsImNsaWVudEhlaWdodCIsImNvbXB1dGVkU3R5bGUiLCJvd25lckRvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJCb3R0b21XaWR0aCIsIm91dGVyV2lkdGgiLCJ3aWR0aCIsImNsaWVudFdpZHRoIiwiYm9yZGVyTGVmdFdpZHRoIiwiYm9yZGVyUmlnaHRXaWR0aCIsImlubmVySGVpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJpbm5lcldpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJvZmZzZXRYWUZyb21QYXJlbnQiLCJldnQiLCJvZmZzZXRQYXJlbnQiLCJpc0JvZHkiLCJib2R5Iiwib2Zmc2V0UGFyZW50UmVjdCIsImxlZnQiLCJ0b3AiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsInNjcm9sbExlZnQiLCJ5IiwiY2xpZW50WSIsInNjcm9sbFRvcCIsImNyZWF0ZUNTU1RyYW5zZm9ybSIsImNvbnRyb2xQb3MiLCJwb3NpdGlvbk9mZnNldCIsInRyYW5zbGF0aW9uIiwiZ2V0VHJhbnNsYXRpb24iLCJicm93c2VyUHJlZml4IiwiY3JlYXRlU1ZHVHJhbnNmb3JtIiwidW5pdFN1ZmZpeCIsImRlZmF1bHRYIiwiZGVmYXVsdFkiLCJnZXRUb3VjaCIsImUiLCJpZGVudGlmaWVyIiwidGFyZ2V0VG91Y2hlcyIsInQiLCJjaGFuZ2VkVG91Y2hlcyIsImdldFRvdWNoSWRlbnRpZmllciIsImFkZFVzZXJTZWxlY3RTdHlsZXMiLCJkb2MiLCJzdHlsZUVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsImlkIiwiaW5uZXJIVE1MIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsImFkZENsYXNzTmFtZSIsInJlbW92ZVVzZXJTZWxlY3RTdHlsZXMiLCJyZW1vdmVDbGFzc05hbWUiLCJzZWxlY3Rpb24iLCJlbXB0eSIsImdldFNlbGVjdGlvbiIsInJlbW92ZUFsbFJhbmdlcyIsInN0eWxlSGFja3MiLCJjaGlsZFN0eWxlIiwidG91Y2hBY3Rpb24iLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJtYXRjaCIsIlJlZ0V4cCIsInJlbW92ZSIsInJlcGxhY2UiLCJnZXRCb3VuZFBvc2l0aW9uIiwiZHJhZ2dhYmxlIiwiYm91bmRzIiwiY2xvbmVCb3VuZHMiLCJmaW5kRE9NTm9kZSIsIm93bmVyV2luZG93IiwiYm91bmROb2RlIiwicXVlcnlTZWxlY3RvciIsIkhUTUxFbGVtZW50Iiwibm9kZVN0eWxlIiwiYm91bmROb2RlU3R5bGUiLCJvZmZzZXRMZWZ0IiwibWFyZ2luTGVmdCIsIm9mZnNldFRvcCIsIm1hcmdpblRvcCIsInJpZ2h0IiwibWFyZ2luUmlnaHQiLCJib3R0b20iLCJtYXJnaW5Cb3R0b20iLCJNYXRoIiwibWluIiwibWF4Iiwic25hcFRvR3JpZCIsImdyaWQiLCJwZW5kaW5nWCIsInBlbmRpbmdZIiwicm91bmQiLCJjYW5EcmFnWCIsImF4aXMiLCJjYW5EcmFnWSIsImdldENvbnRyb2xQb3NpdGlvbiIsInRvdWNoSWRlbnRpZmllciIsImRyYWdnYWJsZUNvcmUiLCJ0b3VjaE9iaiIsImNyZWF0ZUNvcmVEYXRhIiwic3RhdGUiLCJpc1N0YXJ0IiwibGFzdFgiLCJkZWx0YVgiLCJkZWx0YVkiLCJsYXN0WSIsImNyZWF0ZURyYWdnYWJsZURhdGEiLCJjb3JlRGF0YSIsInNjYWxlIiwiUmVhY3RET00iLCJldmVudHNGb3IiLCJ0b3VjaCIsInN0YXJ0IiwibW92ZSIsInN0b3AiLCJtb3VzZSIsImRyYWdFdmVudEZvciIsIkRyYWdnYWJsZUNvcmUiLCJkcmFnZ2luZyIsIk5hTiIsImhhbmRsZVJlZiIsImVsRm9yVG91Y2hTdGFydCIsIm9uVG91Y2hTdGFydCIsImhhbmRsZURyYWdTdGFydCIsIm9uTW91c2VEb3duIiwiYWxsb3dBbnlDbGljayIsImJ1dHRvbiIsInRoaXNOb2RlIiwiZGlzYWJsZWQiLCJ0YXJnZXQiLCJOb2RlIiwiaGFuZGxlIiwiY2FuY2VsIiwic2V0U3RhdGUiLCJwb3NpdGlvbiIsImNvcmVFdmVudCIsImxvZyIsIm9uU3RhcnQiLCJzaG91bGRVcGRhdGUiLCJlbmFibGVVc2VyU2VsZWN0SGFjayIsImhhbmRsZURyYWciLCJoYW5kbGVEcmFnU3RvcCIsInByZXZlbnREZWZhdWx0IiwiQXJyYXkiLCJpc0FycmF5Iiwib25EcmFnIiwiTW91c2VFdmVudCIsImVyciIsImNyZWF0ZUV2ZW50IiwiaW5pdE1vdXNlRXZlbnQiLCJvblN0b3AiLCJvbk1vdXNlVXAiLCJvblRvdWNoRW5kIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZHJlbiIsInJlZiIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCIsIm5vZGVUeXBlIiwiYXJyYXlPZiIsIm51bWJlciIsInN0cmluZyIsInRyYW5zZm9ybSIsImRlZmF1bHRQcm9wcyIsInByb2Nlc3MiLCJEcmFnZ2FibGUiLCJyZXF1aXJlIiwiZGVmYXVsdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJvbkRyYWdTdGFydCIsInNob3VsZFN0YXJ0IiwiZHJhZ2dlZCIsInVpRGF0YSIsIm5ld1N0YXRlIiwic2xhY2tYIiwic2xhY2tZIiwibmV3U3RhdGVYIiwibmV3U3RhdGVZIiwib25EcmFnU3RvcCIsInNob3VsZFN0b3AiLCJjb250cm9sbGVkIiwiQm9vbGVhbiIsImRlZmF1bHRQb3NpdGlvbiIsImlzRWxlbWVudFNWRyIsImNvbnNvbGUiLCJ3YXJuIiwiU1ZHRWxlbWVudCIsIm5leHRQcm9wcyIsInN2Z1RyYW5zZm9ybSIsInRyYW5zZm9ybU9wdHMiLCJkZWZhdWx0Q2xhc3NOYW1lIiwiZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nIiwiZGVmYXVsdENsYXNzTmFtZURyYWdnZWQiLCJjbGFzc05hbWVzIiwib25lT2YiLCJvbmVPZlR5cGUiLCJzaGFwZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixF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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSwyQjs7Ozs7OztBQ3BEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7O0FBRUE7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxVQUFVLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxrQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxvR0FBQztBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiIuL2Rpc3QvcmVhY3QtZHJhZ2dhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwicmVhY3QtZG9tXCIpLCByZXF1aXJlKFwicmVhY3RcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wicmVhY3QtZG9tXCIsIFwicmVhY3RcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJyZWFjdC1kb21cIiksIHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiUmVhY3REcmFnZ2FibGVcIl0gPSBmYWN0b3J5KHJvb3RbXCJSZWFjdERPTVwiXSwgcm9vdFtcIlJlYWN0XCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXykge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA4ZjVjOGQ4M2I2YWJiOTc2YjhhYiIsIi8vIEBmbG93XG4vLyBAY3JlZGl0cyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9yb2dvemhuaWtvZmYvYTQzY2ZlZDI3YzQxZTRlNjhjZGNcbmV4cG9ydCBmdW5jdGlvbiBmaW5kSW5BcnJheShhcnJheTogQXJyYXk8YW55PiB8IFRvdWNoTGlzdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKTogYW55IHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNhbGxiYWNrLmFwcGx5KGNhbGxiYWNrLCBbYXJyYXlbaV0sIGksIGFycmF5XSkpIHJldHVybiBhcnJheVtpXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSAnZnVuY3Rpb24nIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmdW5jKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtKG51bTogYW55KTogYm9vbGVhbiB7XG4gIHJldHVybiB0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4obnVtKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludChhOiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gcGFyc2VJbnQoYSwgMTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZG9udFNldE1lKHByb3BzOiBPYmplY3QsIHByb3BOYW1lOiBzdHJpbmcsIGNvbXBvbmVudE5hbWU6IHN0cmluZykge1xuICBpZiAocHJvcHNbcHJvcE5hbWVdKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcihgSW52YWxpZCBwcm9wICR7cHJvcE5hbWV9IHBhc3NlZCB0byAke2NvbXBvbmVudE5hbWV9IC0gZG8gbm90IHNldCB0aGlzLCBzZXQgaXQgb24gdGhlIGNoaWxkLmApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvc2hpbXMuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfMV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcImNvbW1vbmpzXCI6XCJyZWFjdC1kb21cIixcImNvbW1vbmpzMlwiOlwicmVhY3QtZG9tXCIsXCJhbWRcIjpcInJlYWN0LWRvbVwiLFwicm9vdFwiOlwiUmVhY3RET01cIn1cbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQGZsb3dcbmNvbnN0IHByZWZpeGVzID0gWydNb3onLCAnV2Via2l0JywgJ08nLCAnbXMnXTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmVmaXgocHJvcDogc3RyaW5nPSd0cmFuc2Zvcm0nKTogc3RyaW5nIHtcbiAgLy8gQ2hlY2tpbmcgc3BlY2lmaWNhbGx5IGZvciAnd2luZG93LmRvY3VtZW50JyBpcyBmb3IgcHNldWRvLWJyb3dzZXIgc2VydmVyLXNpZGVcbiAgLy8gZW52aXJvbm1lbnRzIHRoYXQgZGVmaW5lICd3aW5kb3cnIGFzIHRoZSBnbG9iYWwgY29udGV4dC5cbiAgLy8gRS5nLiBSZWFjdC1yYWlscyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJhaWxzL3B1bGwvODQpXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuICcnO1xuXG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcblxuICBpZiAocHJvcCBpbiBzdHlsZSkgcmV0dXJuICcnO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlZml4ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYnJvd3NlclByZWZpeFRvS2V5KHByb3AsIHByZWZpeGVzW2ldKSBpbiBzdHlsZSkgcmV0dXJuIHByZWZpeGVzW2ldO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYnJvd3NlclByZWZpeFRvS2V5KHByb3A6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcHJlZml4ID8gYCR7cHJlZml4fSR7a2ViYWJUb1RpdGxlQ2FzZShwcm9wKX1gIDogcHJvcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJQcmVmaXhUb1N0eWxlKHByb3A6IHN0cmluZywgcHJlZml4OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcHJlZml4ID8gYC0ke3ByZWZpeC50b0xvd2VyQ2FzZSgpfS0ke3Byb3B9YCA6IHByb3A7XG59XG5cbmZ1bmN0aW9uIGtlYmFiVG9UaXRsZUNhc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICBsZXQgb3V0ID0gJyc7XG4gIGxldCBzaG91bGRDYXBpdGFsaXplID0gdHJ1ZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2hvdWxkQ2FwaXRhbGl6ZSkge1xuICAgICAgb3V0ICs9IHN0cltpXS50b1VwcGVyQ2FzZSgpO1xuICAgICAgc2hvdWxkQ2FwaXRhbGl6ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSAnLScpIHtcbiAgICAgIHNob3VsZENhcGl0YWxpemUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXQgKz0gc3RyW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vLyBEZWZhdWx0IGV4cG9ydCBpcyB0aGUgcHJlZml4IGl0c2VsZiwgbGlrZSAnTW96JywgJ1dlYmtpdCcsIGV0Y1xuLy8gTm90ZSB0aGF0IHlvdSBtYXkgaGF2ZSB0byByZS10ZXN0IGZvciBjZXJ0YWluIHRoaW5nczsgZm9yIGluc3RhbmNlLCBDaHJvbWUgNTBcbi8vIGNhbiBoYW5kbGUgdW5wcmVmaXhlZCBgdHJhbnNmb3JtYCwgYnV0IG5vdCB1bnByZWZpeGVkIGB1c2VyLXNlbGVjdGBcbmV4cG9ydCBkZWZhdWx0IGdldFByZWZpeCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL3V0aWxzL2dldFByZWZpeC5qcyIsIi8vIEBmbG93XG5pbXBvcnQge2ZpbmRJbkFycmF5LCBpc0Z1bmN0aW9uLCBpbnR9IGZyb20gJy4vc2hpbXMnO1xuaW1wb3J0IGJyb3dzZXJQcmVmaXgsIHticm93c2VyUHJlZml4VG9LZXl9IGZyb20gJy4vZ2V0UHJlZml4JztcblxuaW1wb3J0IHR5cGUge0NvbnRyb2xQb3NpdGlvbiwgUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24sIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi90eXBlcyc7XG5cbmxldCBtYXRjaGVzU2VsZWN0b3JGdW5jID0gJyc7XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yKGVsOiBOb2RlLCBzZWxlY3Rvcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICghbWF0Y2hlc1NlbGVjdG9yRnVuYykge1xuICAgIG1hdGNoZXNTZWxlY3RvckZ1bmMgPSBmaW5kSW5BcnJheShbXG4gICAgICAnbWF0Y2hlcycsXG4gICAgICAnd2Via2l0TWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdtb3pNYXRjaGVzU2VsZWN0b3InLFxuICAgICAgJ21zTWF0Y2hlc1NlbGVjdG9yJyxcbiAgICAgICdvTWF0Y2hlc1NlbGVjdG9yJ1xuICAgIF0sIGZ1bmN0aW9uKG1ldGhvZCl7XG4gICAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgICByZXR1cm4gaXNGdW5jdGlvbihlbFttZXRob2RdKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIE1pZ2h0IG5vdCBiZSBmb3VuZCBlbnRpcmVseSAobm90IGFuIEVsZW1lbnQ/KSAtIGluIHRoYXQgY2FzZSwgYmFpbFxuICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gIGlmICghaXNGdW5jdGlvbihlbFttYXRjaGVzU2VsZWN0b3JGdW5jXSkpIHJldHVybiBmYWxzZTtcblxuICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gIHJldHVybiBlbFttYXRjaGVzU2VsZWN0b3JGdW5jXShzZWxlY3Rvcik7XG59XG5cbi8vIFdvcmtzIHVwIHRoZSB0cmVlIHRvIHRoZSBkcmFnZ2FibGUgaXRzZWxmIGF0dGVtcHRpbmcgdG8gbWF0Y2ggc2VsZWN0b3IuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGVsOiBOb2RlLCBzZWxlY3Rvcjogc3RyaW5nLCBiYXNlTm9kZTogTm9kZSk6IGJvb2xlYW4ge1xuICBsZXQgbm9kZSA9IGVsO1xuICBkbyB7XG4gICAgaWYgKG1hdGNoZXNTZWxlY3Rvcihub2RlLCBzZWxlY3RvcikpIHJldHVybiB0cnVlO1xuICAgIGlmIChub2RlID09PSBiYXNlTm9kZSkgcmV0dXJuIGZhbHNlO1xuICAgIG5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gIH0gd2hpbGUgKG5vZGUpO1xuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEV2ZW50KGVsOiA/Tm9kZSwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgaWYgKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcbiAgfSBlbHNlIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgZWxbJ29uJyArIGV2ZW50XSA9IGhhbmRsZXI7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsOiA/Tm9kZSwgZXZlbnQ6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgaWYgKCFlbCkgeyByZXR1cm47IH1cbiAgaWYgKGVsLmRldGFjaEV2ZW50KSB7XG4gICAgZWwuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBoYW5kbGVyKTtcbiAgfSBlbHNlIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlciwgeyBjYXB0dXJlOiB0cnVlLCBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyAkRmxvd0lnbm9yZTogRG9lc24ndCB0aGluayBlbGVtZW50cyBhcmUgaW5kZXhhYmxlXG4gICAgZWxbJ29uJyArIGV2ZW50XSA9IG51bGw7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dGVySGVpZ2h0KG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgLy8gVGhpcyBpcyBkZWxpYmVyYXRlbHkgZXhjbHVkaW5nIG1hcmdpbiBmb3Igb3VyIGNhbGN1bGF0aW9ucywgc2luY2Ugd2UgYXJlIHVzaW5nXG4gIC8vIG9mZnNldFRvcCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxuICBsZXQgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaGVpZ2h0ICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlclRvcFdpZHRoKTtcbiAgaGVpZ2h0ICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgcmV0dXJuIGhlaWdodDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dGVyV2lkdGgobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAvLyBUaGlzIGlzIGRlbGliZXJhdGVseSBleGNsdWRpbmcgbWFyZ2luIGZvciBvdXIgY2FsY3VsYXRpb25zLCBzaW5jZSB3ZSBhcmUgdXNpbmdcbiAgLy8gb2Zmc2V0TGVmdCB3aGljaCBpcyBpbmNsdWRpbmcgbWFyZ2luLiBTZWUgZ2V0Qm91bmRQb3NpdGlvblxuICBsZXQgd2lkdGggPSBub2RlLmNsaWVudFdpZHRoO1xuICBjb25zdCBjb21wdXRlZFN0eWxlID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlckxlZnRXaWR0aCk7XG4gIHdpZHRoICs9IGludChjb21wdXRlZFN0eWxlLmJvcmRlclJpZ2h0V2lkdGgpO1xuICByZXR1cm4gd2lkdGg7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJIZWlnaHQobm9kZTogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICBsZXQgaGVpZ2h0ID0gbm9kZS5jbGllbnRIZWlnaHQ7XG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBub2RlLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgaGVpZ2h0IC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdUb3ApO1xuICBoZWlnaHQgLT0gaW50KGNvbXB1dGVkU3R5bGUucGFkZGluZ0JvdHRvbSk7XG4gIHJldHVybiBoZWlnaHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbm5lcldpZHRoKG5vZGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgbGV0IHdpZHRoID0gbm9kZS5jbGllbnRXaWR0aDtcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICB3aWR0aCAtPSBpbnQoY29tcHV0ZWRTdHlsZS5wYWRkaW5nTGVmdCk7XG4gIHdpZHRoIC09IGludChjb21wdXRlZFN0eWxlLnBhZGRpbmdSaWdodCk7XG4gIHJldHVybiB3aWR0aDtcbn1cblxuLy8gR2V0IGZyb20gb2Zmc2V0UGFyZW50XG5leHBvcnQgZnVuY3Rpb24gb2Zmc2V0WFlGcm9tUGFyZW50KGV2dDoge2NsaWVudFg6IG51bWJlciwgY2xpZW50WTogbnVtYmVyfSwgb2Zmc2V0UGFyZW50OiBIVE1MRWxlbWVudCk6IENvbnRyb2xQb3NpdGlvbiB7XG4gIGNvbnN0IGlzQm9keSA9IG9mZnNldFBhcmVudCA9PT0gb2Zmc2V0UGFyZW50Lm93bmVyRG9jdW1lbnQuYm9keTtcbiAgY29uc3Qgb2Zmc2V0UGFyZW50UmVjdCA9IGlzQm9keSA/IHtsZWZ0OiAwLCB0b3A6IDB9IDogb2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHggPSBldnQuY2xpZW50WCArIG9mZnNldFBhcmVudC5zY3JvbGxMZWZ0IC0gb2Zmc2V0UGFyZW50UmVjdC5sZWZ0O1xuICBjb25zdCB5ID0gZXZ0LmNsaWVudFkgKyBvZmZzZXRQYXJlbnQuc2Nyb2xsVG9wIC0gb2Zmc2V0UGFyZW50UmVjdC50b3A7XG5cbiAgcmV0dXJuIHt4LCB5fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNTU1RyYW5zZm9ybShjb250cm9sUG9zOiBDb250cm9sUG9zaXRpb24sIHBvc2l0aW9uT2Zmc2V0OiBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbik6IE9iamVjdCB7XG4gIGNvbnN0IHRyYW5zbGF0aW9uID0gZ2V0VHJhbnNsYXRpb24oY29udHJvbFBvcywgcG9zaXRpb25PZmZzZXQsICdweCcpO1xuICByZXR1cm4ge1ticm93c2VyUHJlZml4VG9LZXkoJ3RyYW5zZm9ybScsIGJyb3dzZXJQcmVmaXgpXTogdHJhbnNsYXRpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNWR1RyYW5zZm9ybShjb250cm9sUG9zOiBDb250cm9sUG9zaXRpb24sIHBvc2l0aW9uT2Zmc2V0OiBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbik6IHN0cmluZyB7XG4gIGNvbnN0IHRyYW5zbGF0aW9uID0gZ2V0VHJhbnNsYXRpb24oY29udHJvbFBvcywgcG9zaXRpb25PZmZzZXQsICcnKTtcbiAgcmV0dXJuIHRyYW5zbGF0aW9uO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKHt4LCB5fTogQ29udHJvbFBvc2l0aW9uLCBwb3NpdGlvbk9mZnNldDogUG9zaXRpb25PZmZzZXRDb250cm9sUG9zaXRpb24sIHVuaXRTdWZmaXg6IHN0cmluZyk6IHN0cmluZyB7XG4gIGxldCB0cmFuc2xhdGlvbiA9IGB0cmFuc2xhdGUoJHt4fSR7dW5pdFN1ZmZpeH0sJHt5fSR7dW5pdFN1ZmZpeH0pYDtcbiAgaWYgKHBvc2l0aW9uT2Zmc2V0KSB7XG4gICAgY29uc3QgZGVmYXVsdFggPSBgJHsodHlwZW9mIHBvc2l0aW9uT2Zmc2V0LnggPT09ICdzdHJpbmcnKSA/IHBvc2l0aW9uT2Zmc2V0LnggOiBwb3NpdGlvbk9mZnNldC54ICsgdW5pdFN1ZmZpeH1gO1xuICAgIGNvbnN0IGRlZmF1bHRZID0gYCR7KHR5cGVvZiBwb3NpdGlvbk9mZnNldC55ID09PSAnc3RyaW5nJykgPyBwb3NpdGlvbk9mZnNldC55IDogcG9zaXRpb25PZmZzZXQueSArIHVuaXRTdWZmaXh9YDtcbiAgICB0cmFuc2xhdGlvbiA9IGB0cmFuc2xhdGUoJHtkZWZhdWx0WH0sICR7ZGVmYXVsdFl9KWAgKyB0cmFuc2xhdGlvbjtcbiAgfVxuICByZXR1cm4gdHJhbnNsYXRpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3VjaChlOiBNb3VzZVRvdWNoRXZlbnQsIGlkZW50aWZpZXI6IG51bWJlcik6ID97Y2xpZW50WDogbnVtYmVyLCBjbGllbnRZOiBudW1iZXJ9IHtcbiAgcmV0dXJuIChlLnRhcmdldFRvdWNoZXMgJiYgZmluZEluQXJyYXkoZS50YXJnZXRUb3VjaGVzLCB0ID0+IGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcikpIHx8XG4gICAgICAgICAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBmaW5kSW5BcnJheShlLmNoYW5nZWRUb3VjaGVzLCB0ID0+IGlkZW50aWZpZXIgPT09IHQuaWRlbnRpZmllcikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG91Y2hJZGVudGlmaWVyKGU6IE1vdXNlVG91Y2hFdmVudCk6ID9udW1iZXIge1xuICBpZiAoZS50YXJnZXRUb3VjaGVzICYmIGUudGFyZ2V0VG91Y2hlc1swXSkgcmV0dXJuIGUudGFyZ2V0VG91Y2hlc1swXS5pZGVudGlmaWVyO1xuICBpZiAoZS5jaGFuZ2VkVG91Y2hlcyAmJiBlLmNoYW5nZWRUb3VjaGVzWzBdKSByZXR1cm4gZS5jaGFuZ2VkVG91Y2hlc1swXS5pZGVudGlmaWVyO1xufVxuXG4vLyBVc2VyLXNlbGVjdCBIYWNrczpcbi8vXG4vLyBVc2VmdWwgZm9yIHByZXZlbnRpbmcgYmx1ZSBoaWdobGlnaHRzIGFsbCBvdmVyIGV2ZXJ5dGhpbmcgd2hlbiBkcmFnZ2luZy5cblxuLy8gTm90ZSB3ZSdyZSBwYXNzaW5nIGBkb2N1bWVudGAgYi9jIHdlIGNvdWxkIGJlIGlmcmFtZWRcbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyU2VsZWN0U3R5bGVzKGRvYzogP0RvY3VtZW50KSB7XG4gIGlmICghZG9jKSByZXR1cm47XG4gIGxldCBzdHlsZUVsID0gZG9jLmdldEVsZW1lbnRCeUlkKCdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnKTtcbiAgaWYgKCFzdHlsZUVsKSB7XG4gICAgc3R5bGVFbCA9IGRvYy5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlRWwudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgc3R5bGVFbC5pZCA9ICdyZWFjdC1kcmFnZ2FibGUtc3R5bGUtZWwnO1xuICAgIHN0eWxlRWwuaW5uZXJIVE1MID0gJy5yZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uICo6Oi1tb3otc2VsZWN0aW9uIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XFxuJztcbiAgICBzdHlsZUVsLmlubmVySFRNTCArPSAnLnJlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24gKjo6c2VsZWN0aW9uIHtiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDt9XFxuJztcbiAgICBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgfVxuICBpZiAoZG9jLmJvZHkpIGFkZENsYXNzTmFtZShkb2MuYm9keSwgJ3JlYWN0LWRyYWdnYWJsZS10cmFuc3BhcmVudC1zZWxlY3Rpb24nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMoZG9jOiA/RG9jdW1lbnQpIHtcbiAgdHJ5IHtcbiAgICBpZiAoZG9jICYmIGRvYy5ib2R5KSByZW1vdmVDbGFzc05hbWUoZG9jLmJvZHksICdyZWFjdC1kcmFnZ2FibGUtdHJhbnNwYXJlbnQtc2VsZWN0aW9uJyk7XG4gICAgLy8gJEZsb3dJZ25vcmU6IElFXG4gICAgaWYgKGRvYy5zZWxlY3Rpb24pIHtcbiAgICAgIC8vICRGbG93SWdub3JlOiBJRVxuICAgICAgZG9jLnNlbGVjdGlvbi5lbXB0eSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cuZ2V0U2VsZWN0aW9uKCkucmVtb3ZlQWxsUmFuZ2VzKCk7ICAvLyByZW1vdmUgc2VsZWN0aW9uIGNhdXNlZCBieSBzY3JvbGxcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBwcm9iYWJseSBJRVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHlsZUhhY2tzKGNoaWxkU3R5bGU6IE9iamVjdCA9IHt9KTogT2JqZWN0IHtcbiAgLy8gV29ya2Fyb3VuZCBJRSBwb2ludGVyIGV2ZW50czsgc2VlICM1MVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbXphYnJpc2tpZS9yZWFjdC1kcmFnZ2FibGUvaXNzdWVzLzUxI2lzc3VlY29tbWVudC0xMDM0ODgyNzhcbiAgcmV0dXJuIHtcbiAgICB0b3VjaEFjdGlvbjogJ25vbmUnLFxuICAgIC4uLmNoaWxkU3R5bGVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzTmFtZShlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKSB7XG4gIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCFlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cChgKD86XnxcXFxccykke2NsYXNzTmFtZX0oPyFcXFxcUylgKSkpIHtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzc05hbWUoZWw6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZykge1xuICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICB9IGVsc2Uge1xuICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoYCg/Ol58XFxcXHMpJHtjbGFzc05hbWV9KD8hXFxcXFMpYCwgJ2cnKSwgJycpO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvZG9tRm5zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzNfXztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCB7XCJjb21tb25qc1wiOlwicmVhY3RcIixcImNvbW1vbmpzMlwiOlwicmVhY3RcIixcImFtZFwiOlwicmVhY3RcIixcInJvb3RcIjpcIlJlYWN0XCJ9XG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9ICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmXG4gICAgU3ltYm9sLmZvciAmJlxuICAgIFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSkgfHxcbiAgICAweGVhYzc7XG5cbiAgdmFyIGlzVmFsaWRFbGVtZW50ID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmXG4gICAgICBvYmplY3QgIT09IG51bGwgJiZcbiAgICAgIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9O1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gQGZsb3dcbmltcG9ydCB7aXNOdW0sIGludH0gZnJvbSAnLi9zaGltcyc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Z2V0VG91Y2gsIGlubmVyV2lkdGgsIGlubmVySGVpZ2h0LCBvZmZzZXRYWUZyb21QYXJlbnQsIG91dGVyV2lkdGgsIG91dGVySGVpZ2h0fSBmcm9tICcuL2RvbUZucyc7XG5cbmltcG9ydCB0eXBlIERyYWdnYWJsZSBmcm9tICcuLi9EcmFnZ2FibGUnO1xuaW1wb3J0IHR5cGUge0JvdW5kcywgQ29udHJvbFBvc2l0aW9uLCBEcmFnZ2FibGVEYXRhLCBNb3VzZVRvdWNoRXZlbnR9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0IHR5cGUgRHJhZ2dhYmxlQ29yZSBmcm9tICcuLi9EcmFnZ2FibGVDb3JlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kUG9zaXRpb24oZHJhZ2dhYmxlOiBEcmFnZ2FibGUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogW251bWJlciwgbnVtYmVyXSB7XG4gIC8vIElmIG5vIGJvdW5kcywgc2hvcnQtY2lyY3VpdCBhbmQgbW92ZSBvblxuICBpZiAoIWRyYWdnYWJsZS5wcm9wcy5ib3VuZHMpIHJldHVybiBbeCwgeV07XG5cbiAgLy8gQ2xvbmUgbmV3IGJvdW5kc1xuICBsZXQge2JvdW5kc30gPSBkcmFnZ2FibGUucHJvcHM7XG4gIGJvdW5kcyA9IHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnID8gYm91bmRzIDogY2xvbmVCb3VuZHMoYm91bmRzKTtcbiAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cbiAgaWYgKHR5cGVvZiBib3VuZHMgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uc3Qge293bmVyRG9jdW1lbnR9ID0gbm9kZTtcbiAgICBjb25zdCBvd25lcldpbmRvdyA9IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgbGV0IGJvdW5kTm9kZTtcbiAgICBpZiAoYm91bmRzID09PSAncGFyZW50Jykge1xuICAgICAgYm91bmROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgIH0gZWxzZSB7XG4gICAgICBib3VuZE5vZGUgPSBvd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYm91bmRzKTtcbiAgICB9XG4gICAgaWYgKCEoYm91bmROb2RlIGluc3RhbmNlb2Ygb3duZXJXaW5kb3cuSFRNTEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JvdW5kcyBzZWxlY3RvciBcIicgKyBib3VuZHMgKyAnXCIgY291bGQgbm90IGZpbmQgYW4gZWxlbWVudC4nKTtcbiAgICB9XG4gICAgY29uc3Qgbm9kZVN0eWxlID0gb3duZXJXaW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCBib3VuZE5vZGVTdHlsZSA9IG93bmVyV2luZG93LmdldENvbXB1dGVkU3R5bGUoYm91bmROb2RlKTtcbiAgICAvLyBDb21wdXRlIGJvdW5kcy4gVGhpcyBpcyBhIHBhaW4gd2l0aCBwYWRkaW5nIGFuZCBvZmZzZXRzIGJ1dCB0aGlzIGdldHMgaXQgZXhhY3RseSByaWdodC5cbiAgICBib3VuZHMgPSB7XG4gICAgICBsZWZ0OiAtbm9kZS5vZmZzZXRMZWZ0ICsgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdMZWZ0KSArIGludChub2RlU3R5bGUubWFyZ2luTGVmdCksXG4gICAgICB0b3A6IC1ub2RlLm9mZnNldFRvcCArIGludChib3VuZE5vZGVTdHlsZS5wYWRkaW5nVG9wKSArIGludChub2RlU3R5bGUubWFyZ2luVG9wKSxcbiAgICAgIHJpZ2h0OiBpbm5lcldpZHRoKGJvdW5kTm9kZSkgLSBvdXRlcldpZHRoKG5vZGUpIC0gbm9kZS5vZmZzZXRMZWZ0ICtcbiAgICAgICAgaW50KGJvdW5kTm9kZVN0eWxlLnBhZGRpbmdSaWdodCkgLSBpbnQobm9kZVN0eWxlLm1hcmdpblJpZ2h0KSxcbiAgICAgIGJvdHRvbTogaW5uZXJIZWlnaHQoYm91bmROb2RlKSAtIG91dGVySGVpZ2h0KG5vZGUpIC0gbm9kZS5vZmZzZXRUb3AgK1xuICAgICAgICBpbnQoYm91bmROb2RlU3R5bGUucGFkZGluZ0JvdHRvbSkgLSBpbnQobm9kZVN0eWxlLm1hcmdpbkJvdHRvbSlcbiAgICB9O1xuICB9XG5cbiAgLy8gS2VlcCB4IGFuZCB5IGJlbG93IHJpZ2h0IGFuZCBib3R0b20gbGltaXRzLi4uXG4gIGlmIChpc051bShib3VuZHMucmlnaHQpKSB4ID0gTWF0aC5taW4oeCwgYm91bmRzLnJpZ2h0KTtcbiAgaWYgKGlzTnVtKGJvdW5kcy5ib3R0b20pKSB5ID0gTWF0aC5taW4oeSwgYm91bmRzLmJvdHRvbSk7XG5cbiAgLy8gQnV0IGFib3ZlIGxlZnQgYW5kIHRvcCBsaW1pdHMuXG4gIGlmIChpc051bShib3VuZHMubGVmdCkpIHggPSBNYXRoLm1heCh4LCBib3VuZHMubGVmdCk7XG4gIGlmIChpc051bShib3VuZHMudG9wKSkgeSA9IE1hdGgubWF4KHksIGJvdW5kcy50b3ApO1xuXG4gIHJldHVybiBbeCwgeV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9HcmlkKGdyaWQ6IFtudW1iZXIsIG51bWJlcl0sIHBlbmRpbmdYOiBudW1iZXIsIHBlbmRpbmdZOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcbiAgY29uc3QgeCA9IE1hdGgucm91bmQocGVuZGluZ1ggLyBncmlkWzBdKSAqIGdyaWRbMF07XG4gIGNvbnN0IHkgPSBNYXRoLnJvdW5kKHBlbmRpbmdZIC8gZ3JpZFsxXSkgKiBncmlkWzFdO1xuICByZXR1cm4gW3gsIHldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuRHJhZ1goZHJhZ2dhYmxlOiBEcmFnZ2FibGUpOiBib29sZWFuIHtcbiAgcmV0dXJuIGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAnYm90aCcgfHwgZHJhZ2dhYmxlLnByb3BzLmF4aXMgPT09ICd4Jztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbkRyYWdZKGRyYWdnYWJsZTogRHJhZ2dhYmxlKTogYm9vbGVhbiB7XG4gIHJldHVybiBkcmFnZ2FibGUucHJvcHMuYXhpcyA9PT0gJ2JvdGgnIHx8IGRyYWdnYWJsZS5wcm9wcy5heGlzID09PSAneSc7XG59XG5cbi8vIEdldCB7eCwgeX0gcG9zaXRpb25zIGZyb20gZXZlbnQuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbFBvc2l0aW9uKGU6IE1vdXNlVG91Y2hFdmVudCwgdG91Y2hJZGVudGlmaWVyOiA/bnVtYmVyLCBkcmFnZ2FibGVDb3JlOiBEcmFnZ2FibGVDb3JlKTogP0NvbnRyb2xQb3NpdGlvbiB7XG4gIGNvbnN0IHRvdWNoT2JqID0gdHlwZW9mIHRvdWNoSWRlbnRpZmllciA9PT0gJ251bWJlcicgPyBnZXRUb3VjaChlLCB0b3VjaElkZW50aWZpZXIpIDogbnVsbDtcbiAgaWYgKHR5cGVvZiB0b3VjaElkZW50aWZpZXIgPT09ICdudW1iZXInICYmICF0b3VjaE9iaikgcmV0dXJuIG51bGw7IC8vIG5vdCB0aGUgcmlnaHQgdG91Y2hcbiAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZUNvcmUpO1xuICAvLyBVc2VyIGNhbiBwcm92aWRlIGFuIG9mZnNldFBhcmVudCBpZiBkZXNpcmVkLlxuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBkcmFnZ2FibGVDb3JlLnByb3BzLm9mZnNldFBhcmVudCB8fCBub2RlLm9mZnNldFBhcmVudCB8fCBub2RlLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgcmV0dXJuIG9mZnNldFhZRnJvbVBhcmVudCh0b3VjaE9iaiB8fCBlLCBvZmZzZXRQYXJlbnQpO1xufVxuXG4vLyBDcmVhdGUgYW4gZGF0YSBvYmplY3QgZXhwb3NlZCBieSA8RHJhZ2dhYmxlQ29yZT4ncyBldmVudHNcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb3JlRGF0YShkcmFnZ2FibGU6IERyYWdnYWJsZUNvcmUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogRHJhZ2dhYmxlRGF0YSB7XG4gIGNvbnN0IHN0YXRlID0gZHJhZ2dhYmxlLnN0YXRlO1xuICBjb25zdCBpc1N0YXJ0ID0gIWlzTnVtKHN0YXRlLmxhc3RYKTtcbiAgY29uc3Qgbm9kZSA9IGZpbmRET01Ob2RlKGRyYWdnYWJsZSk7XG5cbiAgaWYgKGlzU3RhcnQpIHtcbiAgICAvLyBJZiB0aGlzIGlzIG91ciBmaXJzdCBtb3ZlLCB1c2UgdGhlIHggYW5kIHkgYXMgbGFzdCBjb29yZHMuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGUsXG4gICAgICBkZWx0YVg6IDAsIGRlbHRhWTogMCxcbiAgICAgIGxhc3RYOiB4LCBsYXN0WTogeSxcbiAgICAgIHgsIHksXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UgY2FsY3VsYXRlIHByb3BlciB2YWx1ZXMuXG4gICAgcmV0dXJuIHtcbiAgICAgIG5vZGUsXG4gICAgICBkZWx0YVg6IHggLSBzdGF0ZS5sYXN0WCwgZGVsdGFZOiB5IC0gc3RhdGUubGFzdFksXG4gICAgICBsYXN0WDogc3RhdGUubGFzdFgsIGxhc3RZOiBzdGF0ZS5sYXN0WSxcbiAgICAgIHgsIHksXG4gICAgfTtcbiAgfVxufVxuXG4vLyBDcmVhdGUgYW4gZGF0YSBleHBvc2VkIGJ5IDxEcmFnZ2FibGU+J3MgZXZlbnRzXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHJhZ2dhYmxlRGF0YShkcmFnZ2FibGU6IERyYWdnYWJsZSwgY29yZURhdGE6IERyYWdnYWJsZURhdGEpOiBEcmFnZ2FibGVEYXRhIHtcbiAgY29uc3Qgc2NhbGUgPSBkcmFnZ2FibGUucHJvcHMuc2NhbGU7XG4gIHJldHVybiB7XG4gICAgbm9kZTogY29yZURhdGEubm9kZSxcbiAgICB4OiBkcmFnZ2FibGUuc3RhdGUueCArIChjb3JlRGF0YS5kZWx0YVggLyBzY2FsZSksXG4gICAgeTogZHJhZ2dhYmxlLnN0YXRlLnkgKyAoY29yZURhdGEuZGVsdGFZIC8gc2NhbGUpLFxuICAgIGRlbHRhWDogKGNvcmVEYXRhLmRlbHRhWCAvIHNjYWxlKSxcbiAgICBkZWx0YVk6IChjb3JlRGF0YS5kZWx0YVkgLyBzY2FsZSksXG4gICAgbGFzdFg6IGRyYWdnYWJsZS5zdGF0ZS54LFxuICAgIGxhc3RZOiBkcmFnZ2FibGUuc3RhdGUueVxuICB9O1xufVxuXG4vLyBBIGxvdCBmYXN0ZXIgdGhhbiBzdHJpbmdpZnkvcGFyc2VcbmZ1bmN0aW9uIGNsb25lQm91bmRzKGJvdW5kczogQm91bmRzKTogQm91bmRzIHtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBib3VuZHMubGVmdCxcbiAgICB0b3A6IGJvdW5kcy50b3AsXG4gICAgcmlnaHQ6IGJvdW5kcy5yaWdodCxcbiAgICBib3R0b206IGJvdW5kcy5ib3R0b21cbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZERPTU5vZGUoZHJhZ2dhYmxlOiBEcmFnZ2FibGUgfCBEcmFnZ2FibGVDb3JlKTogSFRNTEVsZW1lbnQge1xuICBjb25zdCBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoZHJhZ2dhYmxlKTtcbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCc8RHJhZ2dhYmxlQ29yZT46IFVubW91bnRlZCBkdXJpbmcgZXZlbnQhJyk7XG4gIH1cbiAgLy8gJEZsb3dJZ25vcmUgd2UgY2FuJ3QgYXNzZXJ0IG9uIEhUTUxFbGVtZW50IGR1ZSB0byB0ZXN0cy4uLiBGSVhNRVxuICByZXR1cm4gbm9kZTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2xpYi91dGlscy9wb3NpdGlvbkZucy5qcyIsIi8vIEBmbG93XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHttYXRjaGVzU2VsZWN0b3JBbmRQYXJlbnRzVG8sIGFkZEV2ZW50LCByZW1vdmVFdmVudCwgYWRkVXNlclNlbGVjdFN0eWxlcywgZ2V0VG91Y2hJZGVudGlmaWVyLFxuICAgICAgICByZW1vdmVVc2VyU2VsZWN0U3R5bGVzLCBzdHlsZUhhY2tzfSBmcm9tICcuL3V0aWxzL2RvbUZucyc7XG5pbXBvcnQge2NyZWF0ZUNvcmVEYXRhLCBnZXRDb250cm9sUG9zaXRpb24sIHNuYXBUb0dyaWR9IGZyb20gJy4vdXRpbHMvcG9zaXRpb25GbnMnO1xuaW1wb3J0IHtkb250U2V0TWV9IGZyb20gJy4vdXRpbHMvc2hpbXMnO1xuaW1wb3J0IGxvZyBmcm9tICcuL3V0aWxzL2xvZyc7XG5cbmltcG9ydCB0eXBlIHtFdmVudEhhbmRsZXIsIE1vdXNlVG91Y2hFdmVudH0gZnJvbSAnLi91dGlscy90eXBlcyc7XG5pbXBvcnQgdHlwZSB7RWxlbWVudCBhcyBSZWFjdEVsZW1lbnR9IGZyb20gJ3JlYWN0JztcblxuLy8gU2ltcGxlIGFic3RyYWN0aW9uIGZvciBkcmFnZ2luZyBldmVudHMgbmFtZXMuXG5jb25zdCBldmVudHNGb3IgPSB7XG4gIHRvdWNoOiB7XG4gICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgICBtb3ZlOiAndG91Y2htb3ZlJyxcbiAgICBzdG9wOiAndG91Y2hlbmQnXG4gIH0sXG4gIG1vdXNlOiB7XG4gICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICAgIG1vdmU6ICdtb3VzZW1vdmUnLFxuICAgIHN0b3A6ICdtb3VzZXVwJ1xuICB9XG59O1xuXG4vLyBEZWZhdWx0IHRvIG1vdXNlIGV2ZW50cy5cbmxldCBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IubW91c2U7XG5cbnR5cGUgRHJhZ2dhYmxlQ29yZVN0YXRlID0ge1xuICBkcmFnZ2luZzogYm9vbGVhbixcbiAgbGFzdFg6IG51bWJlcixcbiAgbGFzdFk6IG51bWJlcixcbiAgdG91Y2hJZGVudGlmaWVyOiA/bnVtYmVyXG59O1xuXG5leHBvcnQgdHlwZSBEcmFnZ2FibGVCb3VuZHMgPSB7XG4gIGxlZnQ6IG51bWJlcixcbiAgcmlnaHQ6IG51bWJlcixcbiAgdG9wOiBudW1iZXIsXG4gIGJvdHRvbTogbnVtYmVyLFxufTtcblxuZXhwb3J0IHR5cGUgRHJhZ2dhYmxlRGF0YSA9IHtcbiAgbm9kZTogSFRNTEVsZW1lbnQsXG4gIHg6IG51bWJlciwgeTogbnVtYmVyLFxuICBkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXIsXG4gIGxhc3RYOiBudW1iZXIsIGxhc3RZOiBudW1iZXIsXG59O1xuXG5leHBvcnQgdHlwZSBEcmFnZ2FibGVFdmVudEhhbmRsZXIgPSAoZTogTW91c2VFdmVudCwgZGF0YTogRHJhZ2dhYmxlRGF0YSkgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgQ29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlciwgeTogbnVtYmVyfTtcbmV4cG9ydCB0eXBlIFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uID0ge3g6IG51bWJlcnxzdHJpbmcsIHk6IG51bWJlcnxzdHJpbmd9O1xuXG5leHBvcnQgdHlwZSBEcmFnZ2FibGVDb3JlUHJvcHMgPSB7XG4gIGFsbG93QW55Q2xpY2s6IGJvb2xlYW4sXG4gIGNhbmNlbDogc3RyaW5nLFxuICBjaGlsZHJlbjogUmVhY3RFbGVtZW50PGFueT4sXG4gIGRpc2FibGVkOiBib29sZWFuLFxuICBlbmFibGVVc2VyU2VsZWN0SGFjazogYm9vbGVhbixcbiAgb2Zmc2V0UGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZ3JpZDogW251bWJlciwgbnVtYmVyXSxcbiAgaGFuZGxlOiBzdHJpbmcsXG4gIG9uU3RhcnQ6IERyYWdnYWJsZUV2ZW50SGFuZGxlcixcbiAgb25EcmFnOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIsXG4gIG9uU3RvcDogRHJhZ2dhYmxlRXZlbnRIYW5kbGVyLFxuICBvbk1vdXNlRG93bjogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQsXG59O1xuXG4vL1xuLy8gRGVmaW5lIDxEcmFnZ2FibGVDb3JlPi5cbi8vXG4vLyA8RHJhZ2dhYmxlQ29yZT4gaXMgZm9yIGFkdmFuY2VkIHVzYWdlIG9mIDxEcmFnZ2FibGU+LiBJdCBtYWludGFpbnMgbWluaW1hbCBpbnRlcm5hbCBzdGF0ZSBzbyBpdCBjYW5cbi8vIHdvcmsgd2VsbCB3aXRoIGxpYnJhcmllcyB0aGF0IHJlcXVpcmUgbW9yZSBjb250cm9sIG92ZXIgdGhlIGVsZW1lbnQuXG4vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGVDb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PERyYWdnYWJsZUNvcmVQcm9wcywgRHJhZ2dhYmxlQ29yZVN0YXRlPiB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0RyYWdnYWJsZUNvcmUnO1xuXG4gIGVsRm9yVG91Y2hTdGFydDogUmVhY3RFbGVtZW50PGFueT47XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBgYWxsb3dBbnlDbGlja2AgYWxsb3dzIGRyYWdnaW5nIHVzaW5nIGFueSBtb3VzZSBidXR0b24uXG4gICAgICogQnkgZGVmYXVsdCwgd2Ugb25seSBhY2NlcHQgdGhlIGxlZnQgYnV0dG9uLlxuICAgICAqXG4gICAgICogRGVmYXVsdHMgdG8gYGZhbHNlYC5cbiAgICAgKi9cbiAgICBhbGxvd0FueUNsaWNrOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIGBkaXNhYmxlZGAsIGlmIHRydWUsIHN0b3BzIHRoZSA8RHJhZ2dhYmxlPiBmcm9tIGRyYWdnaW5nLiBBbGwgaGFuZGxlcnMsXG4gICAgICogd2l0aCB0aGUgZXhjZXB0aW9uIG9mIGBvbk1vdXNlRG93bmAsIHdpbGwgbm90IGZpcmUuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgd2UgYWRkICd1c2VyLXNlbGVjdDpub25lJyBhdHRyaWJ1dGVzIHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgICogdG8gcHJldmVudCB1Z2x5IHRleHQgc2VsZWN0aW9uIGR1cmluZyBkcmFnLiBJZiB0aGlzIGlzIGNhdXNpbmcgcHJvYmxlbXNcbiAgICAgKiBmb3IgeW91ciBhcHAsIHNldCB0aGlzIHRvIGBmYWxzZWAuXG4gICAgICovXG4gICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogYG9mZnNldFBhcmVudGAsIGlmIHNldCwgdXNlcyB0aGUgcGFzc2VkIERPTSBub2RlIHRvIGNvbXB1dGUgZHJhZyBvZmZzZXRzXG4gICAgICogaW5zdGVhZCBvZiB1c2luZyB0aGUgcGFyZW50IG5vZGUuXG4gICAgICovXG4gICAgb2Zmc2V0UGFyZW50OiBmdW5jdGlvbihwcm9wczogRHJhZ2dhYmxlQ29yZVByb3BzLCBwcm9wTmFtZTogJEtleXM8RHJhZ2dhYmxlQ29yZVByb3BzPikge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSAmJiBwcm9wc1twcm9wTmFtZV0ubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEcmFnZ2FibGVcXCdzIG9mZnNldFBhcmVudCBtdXN0IGJlIGEgRE9NIE5vZGUuJyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIGBncmlkYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCBkcmFnZ2luZyBzaG91bGQgc25hcCB0by5cbiAgICAgKi9cbiAgICBncmlkOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbiAgICBcbiAgICAvKipcbiAgICAgKiBgc2NhbGVgIHNwZWNpZmllcyB0aGUgc2NhbGUgb2YgdGhlIGFyZWEgeW91IGFyZSBkcmFnZ2luZyBpbnNpZGUgb2YuIEl0IGFsbG93c1xuICAgICAqIHRoZSBkcmFnIGRlbHRhcyB0byBzY2FsZSBjb3JyZWN0bHkgd2l0aCBob3cgZmFyIHpvb21lZCBpbi9vdXQgeW91IGFyZS5cbiAgICAgKi9cbiAgICBzY2FsZTogUHJvcFR5cGVzLm51bWJlcixcblxuICAgIC8qKlxuICAgICAqIGBoYW5kbGVgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgYXMgdGhlIGhhbmRsZSB0aGF0IGluaXRpYXRlcyBkcmFnLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICA8RHJhZ2dhYmxlIGhhbmRsZT1cIi5oYW5kbGVcIj5cbiAgICAgKiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFuZGxlXCI+Q2xpY2sgbWUgdG8gZHJhZzwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgPGRpdj5UaGlzIGlzIHNvbWUgb3RoZXIgY29udGVudDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICApO1xuICAgICAqICAgICAgIH1cbiAgICAgKiAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGhhbmRsZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIGBjYW5jZWxgIHNwZWNpZmllcyBhIHNlbGVjdG9yIHRvIGJlIHVzZWQgdG8gcHJldmVudCBkcmFnIGluaXRpYWxpemF0aW9uLlxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgcmV0dXJuKFxuICAgICAqICAgICAgICAgICAgICAgPERyYWdnYWJsZSBjYW5jZWw9XCIuY2FuY2VsXCI+XG4gICAgICogICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FuY2VsXCI+WW91IGNhbid0IGRyYWcgZnJvbSBoZXJlPC9kaXY+XG4gICAgICogICAgICAgICAgICAgICAgICAgICA8ZGl2PkRyYWdnaW5nIGhlcmUgd29ya3MgZmluZTwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAqICAgICAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICAgICk7XG4gICAgICogICAgICAgfVxuICAgICAqICAgfSk7XG4gICAgICogYGBgXG4gICAgICovXG4gICAgY2FuY2VsOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQ2FsbGVkIHdoZW4gZHJhZ2dpbmcgc3RhcnRzLlxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgZHJhZ2dpbmcgd2lsbCBiZSBjYW5jZWxlZC5cbiAgICAgKi9cbiAgICBvblN0YXJ0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGlsZSBkcmFnZ2luZy5cbiAgICAgKiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIGJvb2xlYW4gZmFsc2UsIGRyYWdnaW5nIHdpbGwgYmUgY2FuY2VsZWQuXG4gICAgICovXG4gICAgb25EcmFnOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIENhbGxlZCB3aGVuIGRyYWdnaW5nIHN0b3BzLlxuICAgICAqIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgYm9vbGVhbiBmYWxzZSwgdGhlIGRyYWcgd2lsbCByZW1haW4gYWN0aXZlLlxuICAgICAqL1xuICAgIG9uU3RvcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBBIHdvcmthcm91bmQgb3B0aW9uIHdoaWNoIGNhbiBiZSBwYXNzZWQgaWYgb25Nb3VzZURvd24gbmVlZHMgdG8gYmUgYWNjZXNzZWQsXG4gICAgICogc2luY2UgaXQnbGwgYWx3YXlzIGJlIGJsb2NrZWQgKGFzIHRoZXJlIGlzIGludGVybmFsIHVzZSBvZiBvbk1vdXNlRG93bilcbiAgICAgKi9cbiAgICBvbk1vdXNlRG93bjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgICAvKipcbiAgICAgKiBUaGVzZSBwcm9wZXJ0aWVzIHNob3VsZCBiZSBkZWZpbmVkIG9uIHRoZSBjaGlsZCwgbm90IGhlcmUuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBkb250U2V0TWUsXG4gICAgc3R5bGU6IGRvbnRTZXRNZSxcbiAgICB0cmFuc2Zvcm06IGRvbnRTZXRNZVxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWxsb3dBbnlDbGljazogZmFsc2UsIC8vIGJ5IGRlZmF1bHQgb25seSBhY2NlcHQgbGVmdCBjbGlja1xuICAgIGNhbmNlbDogbnVsbCxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgZW5hYmxlVXNlclNlbGVjdEhhY2s6IHRydWUsXG4gICAgb2Zmc2V0UGFyZW50OiBudWxsLFxuICAgIGhhbmRsZTogbnVsbCxcbiAgICBncmlkOiBudWxsLFxuICAgIHRyYW5zZm9ybTogbnVsbCxcbiAgICBvblN0YXJ0OiBmdW5jdGlvbigpe30sXG4gICAgb25EcmFnOiBmdW5jdGlvbigpe30sXG4gICAgb25TdG9wOiBmdW5jdGlvbigpe30sXG4gICAgb25Nb3VzZURvd246IGZ1bmN0aW9uKCl7fVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAvLyBVc2VkIHdoaWxlIGRyYWdnaW5nIHRvIGRldGVybWluZSBkZWx0YXMuXG4gICAgbGFzdFg6IE5hTiwgbGFzdFk6IE5hTixcbiAgICB0b3VjaElkZW50aWZpZXI6IG51bGxcbiAgfTtcblxuICBoYW5kbGVSZWY6IFJlYWN0RWxlbWVudDxhbnk+ID0gKGVsRm9yVG91Y2hTdGFydCkgPT4ge1xuICAgIGlmICh0aGlzLmVsRm9yVG91Y2hTdGFydCkgcmVtb3ZlRXZlbnQodGhpcy5lbEZvclRvdWNoU3RhcnQsIGV2ZW50c0Zvci50b3VjaC5zdGFydCwgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgIHRoaXMuZWxGb3JUb3VjaFN0YXJ0ID0gZWxGb3JUb3VjaFN0YXJ0O1xuICAgIGFkZEV2ZW50KHRoaXMuZWxGb3JUb3VjaFN0YXJ0LCBldmVudHNGb3IudG91Y2guc3RhcnQsIHRoaXMub25Ub3VjaFN0YXJ0KTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFJlbW92ZSBhbnkgbGVmdG92ZXIgZXZlbnQgaGFuZGxlcnMuIFJlbW92ZSBib3RoIHRvdWNoIGFuZCBtb3VzZSBoYW5kbGVycyBpbiBjYXNlXG4gICAgLy8gc29tZSBicm93c2VyIHF1aXJrIGNhdXNlZCBhIHRvdWNoIGV2ZW50IHRvIGZpcmUgZHVyaW5nIGEgbW91c2UgbW92ZSwgb3IgdmljZSB2ZXJzYS5cbiAgICBjb25zdCB0aGlzTm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGlmICh0aGlzTm9kZSkge1xuICAgICAgY29uc3Qge293bmVyRG9jdW1lbnR9ID0gdGhpc05vZGU7XG4gICAgICByZW1vdmVFdmVudChvd25lckRvY3VtZW50LCBldmVudHNGb3IubW91c2UubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICAgIHJlbW92ZUV2ZW50KG93bmVyRG9jdW1lbnQsIGV2ZW50c0Zvci50b3VjaC5tb3ZlLCB0aGlzLmhhbmRsZURyYWcpO1xuICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLm1vdXNlLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgICAgcmVtb3ZlRXZlbnQob3duZXJEb2N1bWVudCwgZXZlbnRzRm9yLnRvdWNoLnN0b3AsIHRoaXMuaGFuZGxlRHJhZ1N0b3ApO1xuICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXMob3duZXJEb2N1bWVudCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsRm9yVG91Y2hTdGFydCkge1xuICAgICAgcmVtb3ZlRXZlbnQodGhpcy5lbEZvclRvdWNoU3RhcnQsIGV2ZW50c0Zvci50b3VjaC5zdGFydCwgdGhpcy5vblRvdWNoU3RhcnQpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZURyYWdTdGFydDogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuICAgIC8vIE1ha2UgaXQgcG9zc2libGUgdG8gYXR0YWNoIGV2ZW50IGhhbmRsZXJzIG9uIHRvcCBvZiB0aGlzIG9uZS5cbiAgICB0aGlzLnByb3BzLm9uTW91c2VEb3duKGUpO1xuXG4gICAgLy8gT25seSBhY2NlcHQgbGVmdC1jbGlja3MuXG4gICAgaWYgKCF0aGlzLnByb3BzLmFsbG93QW55Q2xpY2sgJiYgdHlwZW9mIGUuYnV0dG9uID09PSAnbnVtYmVyJyAmJiBlLmJ1dHRvbiAhPT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gR2V0IG5vZGVzLiBCZSBzdXJlIHRvIGdyYWIgcmVsYXRpdmUgZG9jdW1lbnQgKGNvdWxkIGJlIGlmcmFtZWQpXG4gICAgY29uc3QgdGhpc05vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBpZiAoIXRoaXNOb2RlIHx8ICF0aGlzTm9kZS5vd25lckRvY3VtZW50IHx8ICF0aGlzTm9kZS5vd25lckRvY3VtZW50LmJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignPERyYWdnYWJsZUNvcmU+IG5vdCBtb3VudGVkIG9uIERyYWdTdGFydCEnKTtcbiAgICB9XG4gICAgY29uc3Qge293bmVyRG9jdW1lbnR9ID0gdGhpc05vZGU7XG5cbiAgICAvLyBTaG9ydCBjaXJjdWl0IGlmIGhhbmRsZSBvciBjYW5jZWwgcHJvcCB3YXMgcHJvdmlkZWQgYW5kIHNlbGVjdG9yIGRvZXNuJ3QgbWF0Y2guXG4gICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHxcbiAgICAgICghKGUudGFyZ2V0IGluc3RhbmNlb2Ygb3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5Ob2RlKSkgfHxcbiAgICAgICh0aGlzLnByb3BzLmhhbmRsZSAmJiAhbWF0Y2hlc1NlbGVjdG9yQW5kUGFyZW50c1RvKGUudGFyZ2V0LCB0aGlzLnByb3BzLmhhbmRsZSwgdGhpc05vZGUpKSB8fFxuICAgICAgKHRoaXMucHJvcHMuY2FuY2VsICYmIG1hdGNoZXNTZWxlY3RvckFuZFBhcmVudHNUbyhlLnRhcmdldCwgdGhpcy5wcm9wcy5jYW5jZWwsIHRoaXNOb2RlKSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTZXQgdG91Y2ggaWRlbnRpZmllciBpbiBjb21wb25lbnQgc3RhdGUgaWYgdGhpcyBpcyBhIHRvdWNoIGV2ZW50LiBUaGlzIGFsbG93cyB1cyB0b1xuICAgIC8vIGRpc3Rpbmd1aXNoIGJldHdlZW4gaW5kaXZpZHVhbCB0b3VjaGVzIG9uIG11bHRpdG91Y2ggc2NyZWVucyBieSBpZGVudGlmeWluZyB3aGljaFxuICAgIC8vIHRvdWNocG9pbnQgd2FzIHNldCB0byB0aGlzIGVsZW1lbnQuXG4gICAgY29uc3QgdG91Y2hJZGVudGlmaWVyID0gZ2V0VG91Y2hJZGVudGlmaWVyKGUpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3RvdWNoSWRlbnRpZmllcn0pO1xuXG4gICAgLy8gR2V0IHRoZSBjdXJyZW50IGRyYWcgcG9pbnQgZnJvbSB0aGUgZXZlbnQuIFRoaXMgaXMgdXNlZCBhcyB0aGUgb2Zmc2V0LlxuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0Q29udHJvbFBvc2l0aW9uKGUsIHRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjsgLy8gbm90IHBvc3NpYmxlIGJ1dCBzYXRpc2ZpZXMgZmxvd1xuICAgIGNvbnN0IHt4LCB5fSA9IHBvc2l0aW9uO1xuXG4gICAgLy8gQ3JlYXRlIGFuIGV2ZW50IG9iamVjdCB3aXRoIGFsbCB0aGUgZGF0YSBwYXJlbnRzIG5lZWQgdG8gbWFrZSBhIGRlY2lzaW9uIGhlcmUuXG4gICAgY29uc3QgY29yZUV2ZW50ID0gY3JlYXRlQ29yZURhdGEodGhpcywgeCwgeSk7XG5cbiAgICBsb2coJ0RyYWdnYWJsZUNvcmU6IGhhbmRsZURyYWdTdGFydDogJWonLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCBjYW5jZWwuXG4gICAgbG9nKCdjYWxsaW5nJywgdGhpcy5wcm9wcy5vblN0YXJ0KTtcbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uU3RhcnQoZSwgY29yZUV2ZW50KTtcbiAgICBpZiAoc2hvdWxkVXBkYXRlID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgLy8gQWRkIGEgc3R5bGUgdG8gdGhlIGJvZHkgdG8gZGlzYWJsZSB1c2VyLXNlbGVjdC4gVGhpcyBwcmV2ZW50cyB0ZXh0IGZyb21cbiAgICAvLyBiZWluZyBzZWxlY3RlZCBhbGwgb3ZlciB0aGUgcGFnZS5cbiAgICBpZiAodGhpcy5wcm9wcy5lbmFibGVVc2VyU2VsZWN0SGFjaykgYWRkVXNlclNlbGVjdFN0eWxlcyhvd25lckRvY3VtZW50KTtcblxuICAgIC8vIEluaXRpYXRlIGRyYWdnaW5nLiBTZXQgdGhlIGN1cnJlbnQgeCBhbmQgeSBhcyBvZmZzZXRzXG4gICAgLy8gc28gd2Uga25vdyBob3cgbXVjaCB3ZSd2ZSBtb3ZlZCBkdXJpbmcgdGhlIGRyYWcuIFRoaXMgYWxsb3dzIHVzXG4gICAgLy8gdG8gZHJhZyBlbGVtZW50cyBhcm91bmQgZXZlbiBpZiB0aGV5IGhhdmUgYmVlbiBtb3ZlZCwgd2l0aG91dCBpc3N1ZS5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRyYWdnaW5nOiB0cnVlLFxuXG4gICAgICBsYXN0WDogeCxcbiAgICAgIGxhc3RZOiB5XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgZXZlbnRzIHRvIHRoZSBkb2N1bWVudCBkaXJlY3RseSBzbyB3ZSBjYXRjaCB3aGVuIHRoZSB1c2VyJ3MgbW91c2UvdG91Y2ggbW92ZXMgb3V0c2lkZSBvZlxuICAgIC8vIHRoaXMgZWxlbWVudC4gV2UgdXNlIGRpZmZlcmVudCBldmVudHMgZGVwZW5kaW5nIG9uIHdoZXRoZXIgb3Igbm90IHdlIGhhdmUgZGV0ZWN0ZWQgdGhhdCB0aGlzXG4gICAgLy8gaXMgYSB0b3VjaC1jYXBhYmxlIGRldmljZS5cbiAgICBhZGRFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3IubW92ZSwgdGhpcy5oYW5kbGVEcmFnKTtcbiAgICBhZGRFdmVudChvd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gIH07XG5cbiAgaGFuZGxlRHJhZzogRXZlbnRIYW5kbGVyPE1vdXNlVG91Y2hFdmVudD4gPSAoZSkgPT4ge1xuXG4gICAgLy8gUHJldmVudCBzY3JvbGxpbmcgb24gbW9iaWxlIGRldmljZXMsIGxpa2UgaXBhZC9pcGhvbmUuXG4gICAgaWYgKGUudHlwZSA9PT0gJ3RvdWNobW92ZScpIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEdldCB0aGUgY3VycmVudCBkcmFnIHBvaW50IGZyb20gdGhlIGV2ZW50LiBUaGlzIGlzIHVzZWQgYXMgdGhlIG9mZnNldC5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcbiAgICBsZXQge3gsIHl9ID0gcG9zaXRpb247XG5cbiAgICAvLyBTbmFwIHRvIGdyaWQgaWYgcHJvcCBoYXMgYmVlbiBwcm92aWRlZFxuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucHJvcHMuZ3JpZCkpIHtcbiAgICAgIGxldCBkZWx0YVggPSB4IC0gdGhpcy5zdGF0ZS5sYXN0WCwgZGVsdGFZID0geSAtIHRoaXMuc3RhdGUubGFzdFk7XG4gICAgICBbZGVsdGFYLCBkZWx0YVldID0gc25hcFRvR3JpZCh0aGlzLnByb3BzLmdyaWQsIGRlbHRhWCwgZGVsdGFZKTtcbiAgICAgIGlmICghZGVsdGFYICYmICFkZWx0YVkpIHJldHVybjsgLy8gc2tpcCB1c2VsZXNzIGRyYWdcbiAgICAgIHggPSB0aGlzLnN0YXRlLmxhc3RYICsgZGVsdGFYLCB5ID0gdGhpcy5zdGF0ZS5sYXN0WSArIGRlbHRhWTtcbiAgICB9XG5cbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcblxuICAgIGxvZygnRHJhZ2dhYmxlQ29yZTogaGFuZGxlRHJhZzogJWonLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyLiBJZiBpdCByZXR1cm5zIGV4cGxpY2l0IGZhbHNlLCB0cmlnZ2VyIGVuZC5cbiAgICBjb25zdCBzaG91bGRVcGRhdGUgPSB0aGlzLnByb3BzLm9uRHJhZyhlLCBjb3JlRXZlbnQpO1xuICAgIGlmIChzaG91bGRVcGRhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyAkRmxvd0lnbm9yZVxuICAgICAgICB0aGlzLmhhbmRsZURyYWdTdG9wKG5ldyBNb3VzZUV2ZW50KCdtb3VzZXVwJykpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIE9sZCBicm93c2Vyc1xuICAgICAgICBjb25zdCBldmVudCA9ICgoZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk6IGFueSk6IE1vdXNlVG91Y2hFdmVudCk7XG4gICAgICAgIC8vIEkgc2VlIHdoeSB0aGlzIGluc2FuaXR5IHdhcyBkZXByZWNhdGVkXG4gICAgICAgIC8vICRGbG93SWdub3JlXG4gICAgICAgIGV2ZW50LmluaXRNb3VzZUV2ZW50KCdtb3VzZXVwJywgdHJ1ZSwgdHJ1ZSwgd2luZG93LCAwLCAwLCAwLCAwLCAwLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgMCwgbnVsbCk7XG4gICAgICAgIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZXZlbnQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGFzdFg6IHgsXG4gICAgICBsYXN0WTogeVxuICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZURyYWdTdG9wOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmRyYWdnaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IGdldENvbnRyb2xQb3NpdGlvbihlLCB0aGlzLnN0YXRlLnRvdWNoSWRlbnRpZmllciwgdGhpcyk7XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCB7eCwgeX0gPSBwb3NpdGlvbjtcbiAgICBjb25zdCBjb3JlRXZlbnQgPSBjcmVhdGVDb3JlRGF0YSh0aGlzLCB4LCB5KTtcblxuICAgIGNvbnN0IHRoaXNOb2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XG4gICAgaWYgKHRoaXNOb2RlKSB7XG4gICAgICAvLyBSZW1vdmUgdXNlci1zZWxlY3QgaGFja1xuICAgICAgaWYgKHRoaXMucHJvcHMuZW5hYmxlVXNlclNlbGVjdEhhY2spIHJlbW92ZVVzZXJTZWxlY3RTdHlsZXModGhpc05vZGUub3duZXJEb2N1bWVudCk7XG4gICAgfVxuXG4gICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBoYW5kbGVEcmFnU3RvcDogJWonLCBjb3JlRXZlbnQpO1xuXG4gICAgLy8gUmVzZXQgdGhlIGVsLlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxuICAgICAgbGFzdFg6IE5hTixcbiAgICAgIGxhc3RZOiBOYU5cbiAgICB9KTtcblxuICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlclxuICAgIHRoaXMucHJvcHMub25TdG9wKGUsIGNvcmVFdmVudCk7XG5cbiAgICBpZiAodGhpc05vZGUpIHtcbiAgICAgIC8vIFJlbW92ZSBldmVudCBoYW5kbGVyc1xuICAgICAgbG9nKCdEcmFnZ2FibGVDb3JlOiBSZW1vdmluZyBoYW5kbGVycycpO1xuICAgICAgcmVtb3ZlRXZlbnQodGhpc05vZGUub3duZXJEb2N1bWVudCwgZHJhZ0V2ZW50Rm9yLm1vdmUsIHRoaXMuaGFuZGxlRHJhZyk7XG4gICAgICByZW1vdmVFdmVudCh0aGlzTm9kZS5vd25lckRvY3VtZW50LCBkcmFnRXZlbnRGb3Iuc3RvcCwgdGhpcy5oYW5kbGVEcmFnU3RvcCk7XG4gICAgfVxuICB9O1xuXG4gIG9uTW91c2VEb3duOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlOyAvLyBvbiB0b3VjaHNjcmVlbiBsYXB0b3BzIHdlIGNvdWxkIHN3aXRjaCBiYWNrIHRvIG1vdXNlXG5cbiAgICByZXR1cm4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSk7XG4gIH07XG5cbiAgb25Nb3VzZVVwOiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLm1vdXNlO1xuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0b3AoZSk7XG4gIH07XG5cbiAgLy8gU2FtZSBhcyBvbk1vdXNlRG93biAoc3RhcnQgZHJhZyksIGJ1dCBub3cgY29uc2lkZXIgdGhpcyBhIHRvdWNoIGRldmljZS5cbiAgb25Ub3VjaFN0YXJ0OiBFdmVudEhhbmRsZXI8TW91c2VUb3VjaEV2ZW50PiA9IChlKSA9PiB7XG4gICAgLy8gV2UncmUgb24gYSB0b3VjaCBkZXZpY2Ugbm93LCBzbyBjaGFuZ2UgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgZHJhZ0V2ZW50Rm9yID0gZXZlbnRzRm9yLnRvdWNoO1xuXG4gICAgcmV0dXJuIHRoaXMuaGFuZGxlRHJhZ1N0YXJ0KGUpO1xuICB9O1xuXG4gIG9uVG91Y2hFbmQ6IEV2ZW50SGFuZGxlcjxNb3VzZVRvdWNoRXZlbnQ+ID0gKGUpID0+IHtcbiAgICAvLyBXZSdyZSBvbiBhIHRvdWNoIGRldmljZSBub3csIHNvIGNoYW5nZSB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICBkcmFnRXZlbnRGb3IgPSBldmVudHNGb3IudG91Y2g7XG5cbiAgICByZXR1cm4gdGhpcy5oYW5kbGVEcmFnU3RvcChlKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0YylcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksIHtcbiAgICAgIHN0eWxlOiBzdHlsZUhhY2tzKHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHMuc3R5bGUpLFxuXG4gICAgICAvLyBOb3RlOiBtb3VzZU1vdmUgaGFuZGxlciBpcyBhdHRhY2hlZCB0byBkb2N1bWVudCBzbyBpdCB3aWxsIHN0aWxsIGZ1bmN0aW9uXG4gICAgICAvLyB3aGVuIHRoZSB1c2VyIGRyYWdzIHF1aWNrbHkgYW5kIGxlYXZlcyB0aGUgYm91bmRzIG9mIHRoZSBlbGVtZW50LlxuICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgb25Ub3VjaEVuZDogdGhpcy5vblRvdWNoRW5kLFxuICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlZiwgLy8gb25Ub3VjaFN0YXJ0IHdpbGwgaGFwcGVuIGhlcmVcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbGliL0RyYWdnYWJsZUNvcmUuanMiLCIvLyBAZmxvd1xuLyplc2xpbnQgbm8tY29uc29sZTowKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvZyguLi5hcmdzOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52LkRSQUdHQUJMRV9ERUJVRykgY29uc29sZS5sb2coLi4uYXJncyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvdXRpbHMvbG9nLmpzIiwidmFyIERyYWdnYWJsZSA9IHJlcXVpcmUoJy4vbGliL0RyYWdnYWJsZScpLmRlZmF1bHQ7XG5cbi8vIFByZXZpb3VzIHZlcnNpb25zIG9mIHRoaXMgbGliIGV4cG9ydGVkIDxEcmFnZ2FibGU+IGFzIHRoZSByb290IGV4cG9ydC4gQXMgdG8gbm90IGJyZWFrXG4vLyB0aGVtLCBvciBUeXBlU2NyaXB0LCB3ZSBleHBvcnQgKmJvdGgqIGFzIHRoZSByb290IGFuZCBhcyAnZGVmYXVsdCcuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL3B1bGwvMjU0XG4vLyBhbmQgaHR0cHM6Ly9naXRodWIuY29tL216YWJyaXNraWUvcmVhY3QtZHJhZ2dhYmxlL2lzc3Vlcy8yNjZcbm1vZHVsZS5leHBvcnRzID0gRHJhZ2dhYmxlO1xubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IERyYWdnYWJsZTtcbm1vZHVsZS5leHBvcnRzLkRyYWdnYWJsZUNvcmUgPSByZXF1aXJlKCcuL2xpYi9EcmFnZ2FibGVDb3JlJykuZGVmYXVsdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2luZGV4LmpzIiwiLy8gQGZsb3dcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7Y3JlYXRlQ1NTVHJhbnNmb3JtLCBjcmVhdGVTVkdUcmFuc2Zvcm19IGZyb20gJy4vdXRpbHMvZG9tRm5zJztcbmltcG9ydCB7Y2FuRHJhZ1gsIGNhbkRyYWdZLCBjcmVhdGVEcmFnZ2FibGVEYXRhLCBnZXRCb3VuZFBvc2l0aW9ufSBmcm9tICcuL3V0aWxzL3Bvc2l0aW9uRm5zJztcbmltcG9ydCB7ZG9udFNldE1lfSBmcm9tICcuL3V0aWxzL3NoaW1zJztcbmltcG9ydCBEcmFnZ2FibGVDb3JlIGZyb20gJy4vRHJhZ2dhYmxlQ29yZSc7XG5pbXBvcnQgdHlwZSB7Q29udHJvbFBvc2l0aW9uLCBQb3NpdGlvbk9mZnNldENvbnRyb2xQb3NpdGlvbiwgRHJhZ2dhYmxlQm91bmRzLCBEcmFnZ2FibGVDb3JlUHJvcHN9IGZyb20gJy4vRHJhZ2dhYmxlQ29yZSc7XG5pbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcbmltcG9ydCB0eXBlIHtEcmFnZ2FibGVFdmVudEhhbmRsZXJ9IGZyb20gJy4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHR5cGUge0VsZW1lbnQgYXMgUmVhY3RFbGVtZW50fSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRHJhZ2dhYmxlU3RhdGUgPSB7XG4gIGRyYWdnaW5nOiBib29sZWFuLFxuICBkcmFnZ2VkOiBib29sZWFuLFxuICB4OiBudW1iZXIsIHk6IG51bWJlcixcbiAgc2xhY2tYOiBudW1iZXIsIHNsYWNrWTogbnVtYmVyLFxuICBpc0VsZW1lbnRTVkc6IGJvb2xlYW5cbn07XG5cbmV4cG9ydCB0eXBlIERyYWdnYWJsZVByb3BzID0ge1xuICAuLi4kRXhhY3Q8RHJhZ2dhYmxlQ29yZVByb3BzPixcbiAgYXhpczogJ2JvdGgnIHwgJ3gnIHwgJ3knIHwgJ25vbmUnLFxuICBib3VuZHM6IERyYWdnYWJsZUJvdW5kcyB8IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0Q2xhc3NOYW1lOiBzdHJpbmcsXG4gIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZzogc3RyaW5nLFxuICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZDogc3RyaW5nLFxuICBkZWZhdWx0UG9zaXRpb246IENvbnRyb2xQb3NpdGlvbixcbiAgcG9zaXRpb25PZmZzZXQ6IFBvc2l0aW9uT2Zmc2V0Q29udHJvbFBvc2l0aW9uLFxuICBwb3NpdGlvbjogQ29udHJvbFBvc2l0aW9uLFxuICBzY2FsZTogbnVtYmVyXG59O1xuXG4vL1xuLy8gRGVmaW5lIDxEcmFnZ2FibGU+XG4vL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmFnZ2FibGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RHJhZ2dhYmxlUHJvcHMsIERyYWdnYWJsZVN0YXRlPiB7XG5cbiAgc3RhdGljIGRpc3BsYXlOYW1lID0gJ0RyYWdnYWJsZSc7XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvLyBBY2NlcHRzIGFsbCBwcm9wcyA8RHJhZ2dhYmxlQ29yZT4gYWNjZXB0cy5cbiAgICAuLi5EcmFnZ2FibGVDb3JlLnByb3BUeXBlcyxcblxuICAgIC8qKlxuICAgICAqIGBheGlzYCBkZXRlcm1pbmVzIHdoaWNoIGF4aXMgdGhlIGRyYWdnYWJsZSBjYW4gbW92ZS5cbiAgICAgKlxuICAgICAqICBOb3RlIHRoYXQgYWxsIGNhbGxiYWNrcyB3aWxsIHN0aWxsIHJldHVybiBkYXRhIGFzIG5vcm1hbC4gVGhpcyBvbmx5XG4gICAgICogIGNvbnRyb2xzIGZsdXNoaW5nIHRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiAnYm90aCcgYWxsb3dzIG1vdmVtZW50IGhvcml6b250YWxseSBhbmQgdmVydGljYWxseS5cbiAgICAgKiAneCcgbGltaXRzIG1vdmVtZW50IHRvIGhvcml6b250YWwgYXhpcy5cbiAgICAgKiAneScgbGltaXRzIG1vdmVtZW50IHRvIHZlcnRpY2FsIGF4aXMuXG4gICAgICogJ25vbmUnIGxpbWl0cyBhbGwgbW92ZW1lbnQuXG4gICAgICpcbiAgICAgKiBEZWZhdWx0cyB0byAnYm90aCcuXG4gICAgICovXG4gICAgYXhpczogUHJvcFR5cGVzLm9uZU9mKFsnYm90aCcsICd4JywgJ3knLCAnbm9uZSddKSxcblxuICAgIC8qKlxuICAgICAqIGBib3VuZHNgIGRldGVybWluZXMgdGhlIHJhbmdlIG9mIG1vdmVtZW50IGF2YWlsYWJsZSB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBBdmFpbGFibGUgdmFsdWVzIGFyZTpcbiAgICAgKlxuICAgICAqICdwYXJlbnQnIHJlc3RyaWN0cyBtb3ZlbWVudCB3aXRoaW4gdGhlIERyYWdnYWJsZSdzIHBhcmVudCBub2RlLlxuICAgICAqXG4gICAgICogQWx0ZXJuYXRpdmVseSwgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXMsIGFsbCBvZiB3aGljaCBhcmUgb3B0aW9uYWw6XG4gICAgICpcbiAgICAgKiB7bGVmdDogTEVGVF9CT1VORCwgcmlnaHQ6IFJJR0hUX0JPVU5ELCBib3R0b206IEJPVFRPTV9CT1VORCwgdG9wOiBUT1BfQk9VTkR9XG4gICAgICpcbiAgICAgKiBBbGwgdmFsdWVzIGFyZSBpbiBweC5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICogICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICAgICByZXR1cm4gKFxuICAgICAqICAgICAgICAgICAgPERyYWdnYWJsZSBib3VuZHM9e3tyaWdodDogMzAwLCBib3R0b206IDMwMH19PlxuICAgICAqICAgICAgICAgICAgICA8ZGl2PkNvbnRlbnQ8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICogICAgICAgICApO1xuICAgICAqICAgICAgIH1cbiAgICAgKiAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGJvdW5kczogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBsZWZ0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICByaWdodDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgdG9wOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBib3R0b206IFByb3BUeXBlcy5udW1iZXJcbiAgICAgIH0pLFxuICAgICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIFByb3BUeXBlcy5vbmVPZihbZmFsc2VdKVxuICAgIF0pLFxuXG4gICAgZGVmYXVsdENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdENsYXNzTmFtZURyYWdnZWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBgZGVmYXVsdFBvc2l0aW9uYCBzcGVjaWZpZXMgdGhlIHggYW5kIHkgdGhhdCB0aGUgZHJhZ2dlZCBpdGVtIHNob3VsZCBzdGFydCBhdFxuICAgICAqXG4gICAgICogRXhhbXBsZTpcbiAgICAgKlxuICAgICAqIGBgYGpzeFxuICAgICAqICAgICAgbGV0IEFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICAgKiAgICAgICAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgKiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgKiAgICAgICAgICAgICAgICAgIDxEcmFnZ2FibGUgZGVmYXVsdFBvc2l0aW9uPXt7eDogMjUsIHk6IDI1fX0+XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgICAgICApO1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKiAgICAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIGRlZmF1bHRQb3NpdGlvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICB5OiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfSksXG4gICAgcG9zaXRpb25PZmZzZXQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG4gICAgICB5OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIGBwb3NpdGlvbmAsIGlmIHByZXNlbnQsIGRlZmluZXMgdGhlIGN1cnJlbnQgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiAgVGhpcyBpcyBzaW1pbGFyIHRvIGhvdyBmb3JtIGVsZW1lbnRzIGluIFJlYWN0IHdvcmsgLSBpZiBubyBgcG9zaXRpb25gIGlzIHN1cHBsaWVkLCB0aGUgY29tcG9uZW50XG4gICAgICogIGlzIHVuY29udHJvbGxlZC5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICpcbiAgICAgKiBgYGBqc3hcbiAgICAgKiAgICAgIGxldCBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAgICogICAgICAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICogICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICogICAgICAgICAgICAgICAgICA8RHJhZ2dhYmxlIHBvc2l0aW9uPXt7eDogMjUsIHk6IDI1fX0+XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgPGRpdj5JIHN0YXJ0IHdpdGggdHJhbnNmb3JtWDogMjVweCBhbmQgdHJhbnNmb3JtWTogMjVweDs8L2Rpdj5cbiAgICAgKiAgICAgICAgICAgICAgICAgIDwvRHJhZ2dhYmxlPlxuICAgICAqICAgICAgICAgICAgICApO1xuICAgICAqICAgICAgICAgIH1cbiAgICAgKiAgICAgIH0pO1xuICAgICAqIGBgYFxuICAgICAqL1xuICAgIHBvc2l0aW9uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgeDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgIHk6IFByb3BUeXBlcy5udW1iZXJcbiAgICB9KSxcblxuICAgIC8qKlxuICAgICAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIGJlIGRlZmluZWQgb24gdGhlIGNoaWxkLCBub3QgaGVyZS5cbiAgICAgKi9cbiAgICBjbGFzc05hbWU6IGRvbnRTZXRNZSxcbiAgICBzdHlsZTogZG9udFNldE1lLFxuICAgIHRyYW5zZm9ybTogZG9udFNldE1lXG4gIH07XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAuLi5EcmFnZ2FibGVDb3JlLmRlZmF1bHRQcm9wcyxcbiAgICBheGlzOiAnYm90aCcsXG4gICAgYm91bmRzOiBmYWxzZSxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lOiAncmVhY3QtZHJhZ2dhYmxlJyxcbiAgICBkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dpbmc6ICdyZWFjdC1kcmFnZ2FibGUtZHJhZ2dpbmcnLFxuICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkOiAncmVhY3QtZHJhZ2dhYmxlLWRyYWdnZWQnLFxuICAgIGRlZmF1bHRQb3NpdGlvbjoge3g6IDAsIHk6IDB9LFxuICAgIHBvc2l0aW9uOiBudWxsLFxuICAgIHNjYWxlOiAxXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IERyYWdnYWJsZVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHdlIGFyZSBjdXJyZW50bHkgZHJhZ2dpbmcuXG4gICAgICBkcmFnZ2luZzogZmFsc2UsXG5cbiAgICAgIC8vIFdoZXRoZXIgb3Igbm90IHdlIGhhdmUgYmVlbiBkcmFnZ2VkIGJlZm9yZS5cbiAgICAgIGRyYWdnZWQ6IGZhbHNlLFxuXG4gICAgICAvLyBDdXJyZW50IHRyYW5zZm9ybSB4IGFuZCB5LlxuICAgICAgeDogcHJvcHMucG9zaXRpb24gPyBwcm9wcy5wb3NpdGlvbi54IDogcHJvcHMuZGVmYXVsdFBvc2l0aW9uLngsXG4gICAgICB5OiBwcm9wcy5wb3NpdGlvbiA/IHByb3BzLnBvc2l0aW9uLnkgOiBwcm9wcy5kZWZhdWx0UG9zaXRpb24ueSxcblxuICAgICAgLy8gVXNlZCBmb3IgY29tcGVuc2F0aW5nIGZvciBvdXQtb2YtYm91bmRzIGRyYWdzXG4gICAgICBzbGFja1g6IDAsIHNsYWNrWTogMCxcblxuICAgICAgLy8gQ2FuIG9ubHkgZGV0ZXJtaW5lIGlmIFNWRyBhZnRlciBtb3VudGluZ1xuICAgICAgaXNFbGVtZW50U1ZHOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMucG9zaXRpb24gJiYgISh0aGlzLnByb3BzLm9uRHJhZyB8fCB0aGlzLnByb3BzLm9uU3RvcCkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgY29uc29sZS53YXJuKCdBIGBwb3NpdGlvbmAgd2FzIGFwcGxpZWQgdG8gdGhpcyA8RHJhZ2dhYmxlPiwgd2l0aG91dCBkcmFnIGhhbmRsZXJzLiBUaGlzIHdpbGwgbWFrZSB0aGlzICcgK1xuICAgICAgICAnY29tcG9uZW50IGVmZmVjdGl2ZWx5IHVuZHJhZ2dhYmxlLiBQbGVhc2UgYXR0YWNoIGBvbkRyYWdgIG9yIGBvblN0b3BgIGhhbmRsZXJzIHNvIHlvdSBjYW4gYWRqdXN0IHRoZSAnICtcbiAgICAgICAgJ2Bwb3NpdGlvbmAgb2YgdGhpcyBlbGVtZW50LicpO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZWxlbWVudCBwYXNzZWQgaXMgYW4gaW5zdGFuY2VvZiBTVkdFbGVtZW50XG4gICAgaWYodHlwZW9mIHdpbmRvdy5TVkdFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSBpbnN0YW5jZW9mIHdpbmRvdy5TVkdFbGVtZW50KSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgaXNFbGVtZW50U1ZHOiB0cnVlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzOiBPYmplY3QpIHtcbiAgICAvLyBTZXQgeC95IGlmIHBvc2l0aW9uIGhhcyBjaGFuZ2VkXG4gICAgaWYgKG5leHRQcm9wcy5wb3NpdGlvbiAmJlxuICAgICAgICAoIXRoaXMucHJvcHMucG9zaXRpb24gfHxcbiAgICAgICAgICBuZXh0UHJvcHMucG9zaXRpb24ueCAhPT0gdGhpcy5wcm9wcy5wb3NpdGlvbi54IHx8XG4gICAgICAgICAgbmV4dFByb3BzLnBvc2l0aW9uLnkgIT09IHRoaXMucHJvcHMucG9zaXRpb24ueVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB4OiBuZXh0UHJvcHMucG9zaXRpb24ueCwgeTogbmV4dFByb3BzLnBvc2l0aW9uLnkgfSk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7ZHJhZ2dpbmc6IGZhbHNlfSk7IC8vIHByZXZlbnRzIGludmFyaWFudCBpZiB1bm1vdW50ZWQgd2hpbGUgZHJhZ2dpbmdcbiAgfVxuXG4gIG9uRHJhZ1N0YXJ0OiBEcmFnZ2FibGVFdmVudEhhbmRsZXIgPSAoZSwgY29yZURhdGEpID0+IHtcbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnU3RhcnQ6ICVqJywgY29yZURhdGEpO1xuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuICAgIGNvbnN0IHNob3VsZFN0YXJ0ID0gdGhpcy5wcm9wcy5vblN0YXJ0KGUsIGNyZWF0ZURyYWdnYWJsZURhdGEodGhpcywgY29yZURhdGEpKTtcbiAgICAvLyBLaWxscyBzdGFydCBldmVudCBvbiBjb3JlIGFzIHdlbGwsIHNvIG1vdmUgaGFuZGxlcnMgYXJlIG5ldmVyIGJvdW5kLlxuICAgIGlmIChzaG91bGRTdGFydCA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe2RyYWdnaW5nOiB0cnVlLCBkcmFnZ2VkOiB0cnVlfSk7XG4gIH07XG5cbiAgb25EcmFnOiBEcmFnZ2FibGVFdmVudEhhbmRsZXIgPSAoZSwgY29yZURhdGEpID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuZHJhZ2dpbmcpIHJldHVybiBmYWxzZTtcbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnOiAlaicsIGNvcmVEYXRhKTtcblxuICAgIGNvbnN0IHVpRGF0YSA9IGNyZWF0ZURyYWdnYWJsZURhdGEodGhpcywgY29yZURhdGEpO1xuXG4gICAgY29uc3QgbmV3U3RhdGU6ICRTaGFwZTxEcmFnZ2FibGVTdGF0ZT4gPSB7XG4gICAgICB4OiB1aURhdGEueCxcbiAgICAgIHk6IHVpRGF0YS55XG4gICAgfTtcblxuICAgIC8vIEtlZXAgd2l0aGluIGJvdW5kcy5cbiAgICBpZiAodGhpcy5wcm9wcy5ib3VuZHMpIHtcbiAgICAgIC8vIFNhdmUgb3JpZ2luYWwgeCBhbmQgeS5cbiAgICAgIGNvbnN0IHt4LCB5fSA9IG5ld1N0YXRlO1xuXG4gICAgICAvLyBBZGQgc2xhY2sgdG8gdGhlIHZhbHVlcyB1c2VkIHRvIGNhbGN1bGF0ZSBib3VuZCBwb3NpdGlvbi4gVGhpcyB3aWxsIGVuc3VyZSB0aGF0IGlmXG4gICAgICAvLyB3ZSBzdGFydCByZW1vdmluZyBzbGFjaywgdGhlIGVsZW1lbnQgd29uJ3QgcmVhY3QgdG8gaXQgcmlnaHQgYXdheSB1bnRpbCBpdCdzIGJlZW5cbiAgICAgIC8vIGNvbXBsZXRlbHkgcmVtb3ZlZC5cbiAgICAgIG5ld1N0YXRlLnggKz0gdGhpcy5zdGF0ZS5zbGFja1g7XG4gICAgICBuZXdTdGF0ZS55ICs9IHRoaXMuc3RhdGUuc2xhY2tZO1xuXG4gICAgICAvLyBHZXQgYm91bmQgcG9zaXRpb24uIFRoaXMgd2lsbCBjZWlsL2Zsb29yIHRoZSB4IGFuZCB5IHdpdGhpbiB0aGUgYm91bmRhcmllcy5cbiAgICAgIGNvbnN0IFtuZXdTdGF0ZVgsIG5ld1N0YXRlWV0gPSBnZXRCb3VuZFBvc2l0aW9uKHRoaXMsIG5ld1N0YXRlLngsIG5ld1N0YXRlLnkpO1xuICAgICAgbmV3U3RhdGUueCA9IG5ld1N0YXRlWDtcbiAgICAgIG5ld1N0YXRlLnkgPSBuZXdTdGF0ZVk7XG5cbiAgICAgIC8vIFJlY2FsY3VsYXRlIHNsYWNrIGJ5IG5vdGluZyBob3cgbXVjaCB3YXMgc2hhdmVkIGJ5IHRoZSBib3VuZFBvc2l0aW9uIGhhbmRsZXIuXG4gICAgICBuZXdTdGF0ZS5zbGFja1ggPSB0aGlzLnN0YXRlLnNsYWNrWCArICh4IC0gbmV3U3RhdGUueCk7XG4gICAgICBuZXdTdGF0ZS5zbGFja1kgPSB0aGlzLnN0YXRlLnNsYWNrWSArICh5IC0gbmV3U3RhdGUueSk7XG5cbiAgICAgIC8vIFVwZGF0ZSB0aGUgZXZlbnQgd2UgZmlyZSB0byByZWZsZWN0IHdoYXQgcmVhbGx5IGhhcHBlbmVkIGFmdGVyIGJvdW5kcyB0b29rIGVmZmVjdC5cbiAgICAgIHVpRGF0YS54ID0gbmV3U3RhdGUueDtcbiAgICAgIHVpRGF0YS55ID0gbmV3U3RhdGUueTtcbiAgICAgIHVpRGF0YS5kZWx0YVggPSBuZXdTdGF0ZS54IC0gdGhpcy5zdGF0ZS54O1xuICAgICAgdWlEYXRhLmRlbHRhWSA9IG5ld1N0YXRlLnkgLSB0aGlzLnN0YXRlLnk7XG4gICAgfVxuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuICAgIGNvbnN0IHNob3VsZFVwZGF0ZSA9IHRoaXMucHJvcHMub25EcmFnKGUsIHVpRGF0YSk7XG4gICAgaWYgKHNob3VsZFVwZGF0ZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9O1xuXG4gIG9uRHJhZ1N0b3A6IERyYWdnYWJsZUV2ZW50SGFuZGxlciA9IChlLCBjb3JlRGF0YSkgPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5kcmFnZ2luZykgcmV0dXJuIGZhbHNlO1xuXG4gICAgLy8gU2hvcnQtY2lyY3VpdCBpZiB1c2VyJ3MgY2FsbGJhY2sga2lsbGVkIGl0LlxuICAgIGNvbnN0IHNob3VsZFN0b3AgPSB0aGlzLnByb3BzLm9uU3RvcChlLCBjcmVhdGVEcmFnZ2FibGVEYXRhKHRoaXMsIGNvcmVEYXRhKSk7XG4gICAgaWYgKHNob3VsZFN0b3AgPT09IGZhbHNlKSByZXR1cm4gZmFsc2U7XG5cbiAgICBsb2coJ0RyYWdnYWJsZTogb25EcmFnU3RvcDogJWonLCBjb3JlRGF0YSk7XG5cbiAgICBjb25zdCBuZXdTdGF0ZTogJFNoYXBlPERyYWdnYWJsZVN0YXRlPiA9IHtcbiAgICAgIGRyYWdnaW5nOiBmYWxzZSxcbiAgICAgIHNsYWNrWDogMCxcbiAgICAgIHNsYWNrWTogMFxuICAgIH07XG5cbiAgICAvLyBJZiB0aGlzIGlzIGEgY29udHJvbGxlZCBjb21wb25lbnQsIHRoZSByZXN1bHQgb2YgdGhpcyBvcGVyYXRpb24gd2lsbCBiZSB0b1xuICAgIC8vIHJldmVydCBiYWNrIHRvIHRoZSBvbGQgcG9zaXRpb24uIFdlIGV4cGVjdCBhIGhhbmRsZXIgb24gYG9uRHJhZ1N0b3BgLCBhdCB0aGUgbGVhc3QuXG4gICAgY29uc3QgY29udHJvbGxlZCA9IEJvb2xlYW4odGhpcy5wcm9wcy5wb3NpdGlvbik7XG4gICAgaWYgKGNvbnRyb2xsZWQpIHtcbiAgICAgIGNvbnN0IHt4LCB5fSA9IHRoaXMucHJvcHMucG9zaXRpb247XG4gICAgICBuZXdTdGF0ZS54ID0geDtcbiAgICAgIG5ld1N0YXRlLnkgPSB5O1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdEVsZW1lbnQ8YW55PiB7XG4gICAgbGV0IHN0eWxlID0ge30sIHN2Z1RyYW5zZm9ybSA9IG51bGw7XG5cbiAgICAvLyBJZiB0aGlzIGlzIGNvbnRyb2xsZWQsIHdlIGRvbid0IHdhbnQgdG8gbW92ZSBpdCAtIHVubGVzcyBpdCdzIGRyYWdnaW5nLlxuICAgIGNvbnN0IGNvbnRyb2xsZWQgPSBCb29sZWFuKHRoaXMucHJvcHMucG9zaXRpb24pO1xuICAgIGNvbnN0IGRyYWdnYWJsZSA9ICFjb250cm9sbGVkIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmc7XG5cbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucHJvcHMucG9zaXRpb24gfHwgdGhpcy5wcm9wcy5kZWZhdWx0UG9zaXRpb247XG4gICAgY29uc3QgdHJhbnNmb3JtT3B0cyA9IHtcbiAgICAgIC8vIFNldCBsZWZ0IGlmIGhvcml6b250YWwgZHJhZyBpcyBlbmFibGVkXG4gICAgICB4OiBjYW5EcmFnWCh0aGlzKSAmJiBkcmFnZ2FibGUgP1xuICAgICAgICB0aGlzLnN0YXRlLnggOlxuICAgICAgICBwb3NpdGlvbi54LFxuXG4gICAgICAvLyBTZXQgdG9wIGlmIHZlcnRpY2FsIGRyYWcgaXMgZW5hYmxlZFxuICAgICAgeTogY2FuRHJhZ1kodGhpcykgJiYgZHJhZ2dhYmxlID9cbiAgICAgICAgdGhpcy5zdGF0ZS55IDpcbiAgICAgICAgcG9zaXRpb24ueVxuICAgIH07XG5cbiAgICAvLyBJZiB0aGlzIGVsZW1lbnQgd2FzIFNWRywgd2UgdXNlIHRoZSBgdHJhbnNmb3JtYCBhdHRyaWJ1dGUuXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNFbGVtZW50U1ZHKSB7XG4gICAgICBzdmdUcmFuc2Zvcm0gPSBjcmVhdGVTVkdUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cywgdGhpcy5wcm9wcy5wb3NpdGlvbk9mZnNldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFkZCBhIENTUyB0cmFuc2Zvcm0gdG8gbW92ZSB0aGUgZWxlbWVudCBhcm91bmQuIFRoaXMgYWxsb3dzIHVzIHRvIG1vdmUgdGhlIGVsZW1lbnQgYXJvdW5kXG4gICAgICAvLyB3aXRob3V0IHdvcnJ5aW5nIGFib3V0IHdoZXRoZXIgb3Igbm90IGl0IGlzIHJlbGF0aXZlbHkgb3IgYWJzb2x1dGVseSBwb3NpdGlvbmVkLlxuICAgICAgLy8gSWYgdGhlIGl0ZW0geW91IGFyZSBkcmFnZ2luZyBhbHJlYWR5IGhhcyBhIHRyYW5zZm9ybSBzZXQsIHdyYXAgaXQgaW4gYSA8c3Bhbj4gc28gPERyYWdnYWJsZT5cbiAgICAgIC8vIGhhcyBhIGNsZWFuIHNsYXRlLlxuICAgICAgc3R5bGUgPSBjcmVhdGVDU1NUcmFuc2Zvcm0odHJhbnNmb3JtT3B0cywgdGhpcy5wcm9wcy5wb3NpdGlvbk9mZnNldCk7XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgZGVmYXVsdENsYXNzTmFtZSxcbiAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2luZyxcbiAgICAgIGRlZmF1bHRDbGFzc05hbWVEcmFnZ2VkXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAvLyBNYXJrIHdpdGggY2xhc3Mgd2hpbGUgZHJhZ2dpbmdcbiAgICBjb25zdCBjbGFzc05hbWUgPSBjbGFzc05hbWVzKChjaGlsZHJlbi5wcm9wcy5jbGFzc05hbWUgfHwgJycpLCBkZWZhdWx0Q2xhc3NOYW1lLCB7XG4gICAgICBbZGVmYXVsdENsYXNzTmFtZURyYWdnaW5nXTogdGhpcy5zdGF0ZS5kcmFnZ2luZyxcbiAgICAgIFtkZWZhdWx0Q2xhc3NOYW1lRHJhZ2dlZF06IHRoaXMuc3RhdGUuZHJhZ2dlZFxuICAgIH0pO1xuXG4gICAgLy8gUmV1c2UgdGhlIGNoaWxkIHByb3ZpZGVkXG4gICAgLy8gVGhpcyBtYWtlcyBpdCBmbGV4aWJsZSB0byB1c2Ugd2hhdGV2ZXIgZWxlbWVudCBpcyB3YW50ZWQgKGRpdiwgdWwsIGV0YylcbiAgICByZXR1cm4gKFxuICAgICAgPERyYWdnYWJsZUNvcmUgey4uLnRoaXMucHJvcHN9IG9uU3RhcnQ9e3RoaXMub25EcmFnU3RhcnR9IG9uRHJhZz17dGhpcy5vbkRyYWd9IG9uU3RvcD17dGhpcy5vbkRyYWdTdG9wfT5cbiAgICAgICAge1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICAgIHN0eWxlOiB7Li4uY2hpbGRyZW4ucHJvcHMuc3R5bGUsIC4uLnN0eWxlfSxcbiAgICAgICAgICB0cmFuc2Zvcm06IHN2Z1RyYW5zZm9ybVxuICAgICAgICB9KX1cbiAgICAgIDwvRHJhZ2dhYmxlQ29yZT5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9saWIvRHJhZ2dhYmxlLmpzIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBlbXB0eUZ1bmN0aW9uID0gcmVxdWlyZSgnZmJqcy9saWIvZW1wdHlGdW5jdGlvbicpO1xudmFyIGludmFyaWFudCA9IHJlcXVpcmUoJ2ZianMvbGliL2ludmFyaWFudCcpO1xudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAvLyBJdCBpcyBzdGlsbCBzYWZlIHdoZW4gY2FsbGVkIGZyb20gUmVhY3QuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGludmFyaWFudChcbiAgICAgIGZhbHNlLFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgfTtcbiAgc2hpbS5pc1JlcXVpcmVkID0gc2hpbTtcbiAgZnVuY3Rpb24gZ2V0U2hpbSgpIHtcbiAgICByZXR1cm4gc2hpbTtcbiAgfTtcbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW1cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGVtcHR5RnVuY3Rpb247XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogXG4gKi9cblxuZnVuY3Rpb24gbWFrZUVtcHR5RnVuY3Rpb24oYXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFyZztcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGFjY2VwdHMgYW5kIGRpc2NhcmRzIGlucHV0czsgaXQgaGFzIG5vIHNpZGUgZWZmZWN0cy4gVGhpcyBpc1xuICogcHJpbWFyaWx5IHVzZWZ1bCBpZGlvbWF0aWNhbGx5IGZvciBvdmVycmlkYWJsZSBmdW5jdGlvbiBlbmRwb2ludHMgd2hpY2hcbiAqIGFsd2F5cyBuZWVkIHRvIGJlIGNhbGxhYmxlLCBzaW5jZSBKUyBsYWNrcyBhIG51bGwtY2FsbCBpZGlvbSBhbGEgQ29jb2EuXG4gKi9cbnZhciBlbXB0eUZ1bmN0aW9uID0gZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9O1xuXG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zID0gbWFrZUVtcHR5RnVuY3Rpb247XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zRmFsc2UgPSBtYWtlRW1wdHlGdW5jdGlvbihmYWxzZSk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVHJ1ZSA9IG1ha2VFbXB0eUZ1bmN0aW9uKHRydWUpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc051bGwgPSBtYWtlRW1wdHlGdW5jdGlvbihudWxsKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNUaGlzID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdGhpcztcbn07XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zQXJndW1lbnQgPSBmdW5jdGlvbiAoYXJnKSB7XG4gIHJldHVybiBhcmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVtcHR5RnVuY3Rpb247XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgdmFsaWRhdGVGb3JtYXQgPSBmdW5jdGlvbiB2YWxpZGF0ZUZvcm1hdChmb3JtYXQpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YWxpZGF0ZUZvcm1hdCA9IGZ1bmN0aW9uIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCkge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIHZhbGlkYXRlRm9ybWF0KGZvcm1hdCk7XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcignTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ZianMvbGliL2ludmFyaWFudC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNiBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpKTtcblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9