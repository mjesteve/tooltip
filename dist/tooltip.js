/*!
 * Tooltip v1.0.16
 * https://sa-si-dev.github.io/tooltip
 * Licensed under MIT (https://github.com/sa-si-dev/tooltip/blob/master/LICENSE)
 */
/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!
 * Popper v1.0.4
 * https://sa-si-dev.github.io/popper
 * Licensed under MIT (https://github.com/sa-si-dev/popper/blob/master/LICENSE)
 */!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,o){if(!t)return;if("string"==typeof t)return e(t,o);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return e(t,o)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var o=0,i=new Array(e);o<e;o++)i[o]=t[o];return i}function o(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var i=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var i,r,n;return i=e,n=[{key:"addClass",value:function(o,i){o&&(i=i.split(" "),e.getElements(o).forEach((function(e){var o;(o=e.classList).add.apply(o,t(i))})))}},{key:"removeClass",value:function(o,i){o&&(i=i.split(" "),e.getElements(o).forEach((function(e){var o;(o=e.classList).remove.apply(o,t(i))})))}},{key:"getElements",value:function(t){if(t)return void 0===t.forEach&&(t=[t]),t}},{key:"getMoreVisibleSides",value:function(t){if(!t)return{};var e=t.getBoundingClientRect(),o=window.innerWidth,i=window.innerHeight,r=e.left,n=e.top;return{horizontal:r>o-r-e.width?"left":"right",vertical:n>i-n-e.height?"top":"bottom"}}},{key:"getAbsoluteCoords",value:function(t){if(t){var e=t.getBoundingClientRect(),o=window.pageXOffset,i=window.pageYOffset;return{width:e.width,height:e.height,top:e.top+i,right:e.right+o,bottom:e.bottom+i,left:e.left+o}}}},{key:"getCoords",value:function(t){return t?t.getBoundingClientRect():{}}},{key:"getData",value:function(t,e,o){if(t){var i=t?t.dataset[e]:"";return"number"===o?i=parseFloat(i)||0:"true"===i?i=!0:"false"===i&&(i=!1),i}}},{key:"setData",value:function(t,e,o){t&&(t.dataset[e]=o)}},{key:"setStyle",value:function(t,e,o){t&&(t.style[e]=o)}},{key:"show",value:function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"block";e.setStyle(t,"display",o)}},{key:"hide",value:function(t){e.setStyle(t,"display","none")}},{key:"getHideableParent",value:function(t){for(var e,o=t.parentElement;o;){var i=getComputedStyle(o).overflow;if(-1!==i.indexOf("scroll")||-1!==i.indexOf("auto")){e=o;break}o=o.parentElement}return e}}],(r=null)&&o(i.prototype,r),n&&o(i,n),e}();function r(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=["top","bottom","left","right"].map((function(t){return"position-".concat(t)})),a={top:"rotate(180deg)",left:"rotate(90deg)",right:"rotate(-90deg)"},s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);try{this.setProps(e),this.init()}catch(t){console.warn("Couldn't initiate popper"),console.error(t)}}var e,o,s;return e=t,(o=[{key:"init",value:function(){var t=this.$popperEle;t&&this.$triggerEle&&(i.setStyle(t,"zIndex",this.zIndex),this.setPosition())}},{key:"setProps",value:function(t){var e=(t=this.setDefaultProps(t)).position?t.position.toLowerCase():"auto";if(this.$popperEle=t.$popperEle,this.$triggerEle=t.$triggerEle,this.$arrowEle=t.$arrowEle,this.margin=parseFloat(t.margin),this.offset=parseFloat(t.offset),this.enterDelay=parseFloat(t.enterDelay),this.exitDelay=parseFloat(t.exitDelay),this.showDuration=parseFloat(t.showDuration),this.hideDuration=parseFloat(t.hideDuration),this.transitionDistance=parseFloat(t.transitionDistance),this.zIndex=parseFloat(t.zIndex),this.afterShowCallback=t.afterShow,this.afterHideCallback=t.afterHide,this.hasArrow=!!this.$arrowEle,-1!==e.indexOf(" ")){var o=e.split(" ");this.position=o[0],this.secondaryPosition=o[1]}else this.position=e}},{key:"setDefaultProps",value:function(t){return Object.assign({position:"auto",margin:8,offset:5,enterDelay:0,exitDelay:0,showDuration:300,hideDuration:200,transitionDistance:10,zIndex:1},t)}},{key:"setPosition",value:function(){i.show(this.$popperEle,"inline-flex");var t,e,o,r=window.innerWidth,s=window.innerHeight,l=i.getAbsoluteCoords(this.$popperEle),p=i.getAbsoluteCoords(this.$triggerEle),f=l.width,u=l.height,h=l.top,c=l.right,d=l.bottom,y=l.left,g=p.width,m=p.height,v=p.top,w=p.right,E=p.bottom,b=p.left,D=v-h,$=b-y,k=$,x=D,S=this.position,C=this.secondaryPosition,T=g/2-f/2,P=m/2-u/2,A=this.margin,O=this.transitionDistance,F=window.scrollY-h,I=s+F,j=window.scrollX-y,H=r+j,z=this.offset;z&&(F+=z,I-=z,j+=z,H-=z),"auto"===S&&(S=i.getMoreVisibleSides(this.$triggerEle).vertical);var L={top:{top:x-u-A,left:k+T},bottom:{top:x+m+A,left:k+T},right:{top:x+P,left:k+g+A},left:{top:x+P,left:k-f-A}},B=L[S];if(x=B.top,k=B.left,C&&("top"===C?x=D:"bottom"===C?x=D+m-u:"left"===C?k=$:"right"===C&&(k=$+g-f)),k<j?"left"===S?o="right":k=j+y>w?w-y:j:k+f>H&&("right"===S?o="left":k=H+y<b?b-c:H-f),x<F?"top"===S?o="bottom":x=F+h>E?E-h:F:x+u>I&&("bottom"===S?o="top":x=I+h<v?v-d:I-u),o){var M=L[o];"top"===(S=o)||"bottom"===S?x=M.top:"left"!==S&&"right"!==S||(k=M.left)}"top"===S?(t=x+O,e=k):"right"===S?(t=x,e=k-O):"left"===S?(t=x,e=k+O):(t=x-O,e=k);var R="translate3d(".concat(e,"px, ").concat(t,"px, 0)");if(i.setStyle(this.$popperEle,"transform",R),i.setData(this.$popperEle,"fromLeft",e),i.setData(this.$popperEle,"fromTop",t),i.setData(this.$popperEle,"top",x),i.setData(this.$popperEle,"left",k),i.removeClass(this.$popperEle,n.join(" ")),i.addClass(this.$popperEle,"position-".concat(S)),this.hasArrow){var W=0,V=0,X=k+y,Y=x+h,U=this.$arrowEle.offsetWidth/2,q=a[S]||"";"top"===S||"bottom"===S?(W=g/2+b-X)<U?W=U:W>f-U&&(W=f-U):"left"!==S&&"right"!==S||((V=m/2+v-Y)<U?V=U:V>u-U&&(V=u-U)),i.setStyle(this.$arrowEle,"transform","translate3d(".concat(W,"px, ").concat(V,"px, 0) ").concat(q))}i.hide(this.$popperEle)}},{key:"resetPosition",value:function(){i.setStyle(this.$popperEle,"transform","none"),this.setPosition()}},{key:"show",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.resetPosition,r=e.data;clearTimeout(this.exitDelayTimeout),clearTimeout(this.hideDurationTimeout),o&&this.resetPosition(),this.enterDelayTimeout=setTimeout((function(){var e=i.getData(t.$popperEle,"left"),o=i.getData(t.$popperEle,"top"),n="translate3d(".concat(e,"px, ").concat(o,"px, 0)"),a=t.showDuration;i.show(t.$popperEle,"inline-flex"),i.getCoords(t.$popperEle),i.setStyle(t.$popperEle,"transitionDuration",a+"ms"),i.setStyle(t.$popperEle,"transform",n),i.setStyle(t.$popperEle,"opacity",1),t.showDurationTimeout=setTimeout((function(){"function"==typeof t.afterShowCallback&&t.afterShowCallback(r)}),a)}),this.enterDelay)}},{key:"hide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.data;clearTimeout(this.enterDelayTimeout),clearTimeout(this.showDurationTimeout),this.exitDelayTimeout=setTimeout((function(){if(t.$popperEle){var e=i.getData(t.$popperEle,"fromLeft"),r=i.getData(t.$popperEle,"fromTop"),n="translate3d(".concat(e,"px, ").concat(r,"px, 0)"),a=t.hideDuration;i.setStyle(t.$popperEle,"transitionDuration",a+"ms"),i.setStyle(t.$popperEle,"transform",n),i.setStyle(t.$popperEle,"opacity",0),t.hideDurationTimeout=setTimeout((function(){i.hide(t.$popperEle),"function"==typeof t.afterHideCallback&&t.afterHideCallback(o)}),a)}}),this.exitDelay)}},{key:"updatePosition",value:function(){i.setStyle(this.$popperEle,"transitionDuration","0ms"),this.resetPosition();var t=i.getData(this.$popperEle,"left"),e=i.getData(this.$popperEle,"top");i.show(this.$popperEle,"inline-flex"),i.setStyle(this.$popperEle,"transform","translate3d(".concat(t,"px, ").concat(e,"px, 0)"))}}])&&r(e.prototype,o),s&&r(e,s),t}();window.PopperComponent=s}();
}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

;// CONCATENATED MODULE: ./src/utils/utils.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Utils = /*#__PURE__*/function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }
  _createClass(Utils, null, [{
    key: "convertToBoolean",
    value: function convertToBoolean(value) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (value === true || value === 'true') {
        value = true;
      } else if (value === false || value === 'false') {
        value = false;
      } else {
        value = defaultValue;
      }
      return value;
    }
  }, {
    key: "convertToFloat",
    value: function convertToFloat(value) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return value !== undefined ? parseFloat(value) : defaultValue;
    }
  }]);
  return Utils;
}();
;// CONCATENATED MODULE: ./src/utils/dom-utils.js
function dom_utils_typeof(o) { "@babel/helpers - typeof"; return dom_utils_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, dom_utils_typeof(o); }
function dom_utils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function dom_utils_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, dom_utils_toPropertyKey(descriptor.key), descriptor); } }
function dom_utils_createClass(Constructor, protoProps, staticProps) { if (protoProps) dom_utils_defineProperties(Constructor.prototype, protoProps); if (staticProps) dom_utils_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function dom_utils_toPropertyKey(arg) { var key = dom_utils_toPrimitive(arg, "string"); return dom_utils_typeof(key) === "symbol" ? key : String(key); }
function dom_utils_toPrimitive(input, hint) { if (dom_utils_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (dom_utils_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var DomUtils = /*#__PURE__*/function () {
  function DomUtils() {
    dom_utils_classCallCheck(this, DomUtils);
  }
  dom_utils_createClass(DomUtils, null, [{
    key: "hasEllipsis",
    value: function hasEllipsis($ele) {
      if (!$ele) {
        return false;
      }
      return $ele.scrollWidth > $ele.offsetWidth;
    }
  }, {
    key: "setStyle",
    value: function setStyle($ele, name, value) {
      if (!$ele) {
        return;
      }
      $ele.style[name] = value;
    }
  }, {
    key: "getScrollableParents",
    value: function getScrollableParents($ele) {
      if (!$ele) {
        return [];
      }
      var $scrollableElems = [window];
      var $parent = $ele.parentElement;
      while ($parent) {
        var overflowValue = getComputedStyle($parent).overflow;
        if (overflowValue.indexOf('scroll') !== -1 || overflowValue.indexOf('auto') !== -1) {
          $scrollableElems.push($parent);
        }
        $parent = $parent.parentElement;
      }
      return $scrollableElems;
    }
  }]);
  return DomUtils;
}();
;// CONCATENATED MODULE: ./src/tooltip.js


/**
 * Available data attributes (data-tooltip-*)
 * @property {string} tooltip - Text to show (data-tooltip="")
 * @property {string} [position=auto] - Position of tooltip (top, bottom, left, right, auto)
 * @property {string} [fontSize=14px] - Text font size
 * @property {number} [margin=8] - Space between tooltip and its activator (in pixel)
 * @property {number} [offset=5] - Space between tooltip and window edge (in pixel)
 * @property {number} [enterDelay=0] - Delay time before showing tooltip (in milliseconds)
 * @property {number} [exitDelay=0] - Delay time before hiding tooltip (in milliseconds)
 * @property {number} [showDuration=300] - Transition duration for show animation (in milliseconds)
 * @property {number} [hideDuration=200] - Transition duration for hide animation (in milliseconds)
 * @property {number} [transitionDistance=10] - Distance to translate on show/hide animation (in pixel)
 * @property {number} [zIndex=1] - CSS z-index value for tooltip
 * @property {boolean} [ellipsisOnly=false] - Show the tooltip only if element text is partially hidden with ellipsis
 * @property {boolean} [allowHtml=false] - Allow html elements in the tooltip text
 * @property {string} [alignment=left] - CSS text-align value
 * @property {string} [maxWidth=300px] - CSS max-width for tootltip box
 * @property {boolean} [hideOnClick=true] - Hide tooltip on clicking the element
 * @property {boolean} [hideArrowIcon=false] - Hide arrow icon in the tooltip
 * @property {string} [additionalClasses] - Additional classes for tooltip which could be used to customize tooltip in CSS
 */
(function () {
  if (window.tooltipComponentInitiated) {
    return;
  } else {
    window.tooltipComponentInitiated = true;
  }
  var $body;
  var $popperEle;
  var $triggerEle;
  var $arrowEle;
  var $scrollableElems;
  var options = {};
  var popper;
  var isInitiated = false;
  initTooltip();
  window.addEventListener('load', initTooltip);
  function initTooltip() {
    if (isInitiated) {
      return;
    }
    $body = document.querySelector('body');
    if (!$body) {
      return;
    }
    addEvents();
    isInitiated = true;
  }

  /** event methods - start */
  function addEvents() {
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('click', onClick);
  }
  function onMouseOver(e) {
    if ($triggerEle) {
      return;
    }
    var target = e.target.closest('[data-tooltip]');
    if (!target) {
      return;
    }
    $triggerEle = target;
    showTooltip();
  }
  function onMouseOut(e) {
    if (!$triggerEle) {
      return;
    }
    var target = e.relatedTarget;
    while (target) {
      if (target === $triggerEle) {
        return;
      }
      target = target.parentNode;
    }
    hideTooltip();
  }
  function onTouchMove() {
    hideTooltip();
  }
  function onClick() {
    if (options.hideOnClick) {
      hideTooltip();
    }
  }
  /** event methods - end */

  function showTooltip() {
    if (!$triggerEle) {
      return;
    }
    var convertToBoolean = Utils.convertToBoolean;
    var convertToFloat = Utils.convertToFloat;
    var dataset = $triggerEle.dataset;
    options = {
      tooltip: dataset.tooltip,
      position: dataset.tooltipPosition || 'auto',
      zIndex: convertToFloat(dataset.tooltipZIndex, 1),
      enterDelay: convertToFloat(dataset.tooltipEnterDelay, 0),
      exitDelay: convertToFloat(dataset.tooltipExitDelay, 0),
      fontSize: dataset.tooltipFontSize || '14px',
      margin: convertToFloat(dataset.tooltipMargin, 8),
      offset: convertToFloat(dataset.tooltipOffset, 5),
      showDuration: convertToFloat(dataset.tooltipShowDuration, 300),
      hideDuration: convertToFloat(dataset.tooltipHideDuration, 200),
      transitionDistance: convertToFloat(dataset.tooltipTransitionDistance, 10),
      ellipsisOnly: convertToBoolean(dataset.tooltipEllipsisOnly),
      allowHtml: convertToBoolean(dataset.tooltipAllowHtml),
      hideOnClick: convertToBoolean(dataset.tooltipHideOnClick, true),
      hideArrowIcon: convertToBoolean(dataset.tooltipHideArrowIcon),
      alignment: dataset.tooltipAlignment || 'left',
      maxWidth: dataset.tooltipMaxWidth || '300px',
      additionalClasses: dataset.tooltipAdditionalClasses
    };
    if (!options.tooltip || isTooltipDisabled()) {
      hideTooltip();
      return;
    }
    removeTooltip();
    renderTooltip();
    initPopper();
    addScrollEventListeners();
  }
  function renderTooltip() {
    var classNames = 'tooltip-comp';
    if (options.hideArrowIcon) {
      classNames += ' hide-arrow-icon';
    }
    if (options.additionalClasses) {
      classNames += ' ' + options.additionalClasses;
    }
    var html = "<div class=\"".concat(classNames, "\">\n        <i class=\"tooltip-comp-arrow\"></i>\n        <div class=\"tooltip-comp-content\"></div>\n      </div>");
    $body.insertAdjacentHTML('beforeend', html);
    var setStyle = DomUtils.setStyle;
    $popperEle = document.querySelector('.tooltip-comp');
    $arrowEle = $popperEle.querySelector('.tooltip-comp-arrow');
    var $popperContent = $popperEle.querySelector('.tooltip-comp-content');
    if (options.allowHtml) {
      $popperContent.innerHTML = options.tooltip;
    } else {
      $popperContent.innerText = options.tooltip;
    }
    setStyle($popperEle, 'zIndex', options.zIndex);
    setStyle($popperEle, 'fontSize', options.fontSize);
    setStyle($popperEle, 'textAlign', options.alignment);
    setStyle($popperEle, 'maxWidth', options.maxWidth);
  }
  function hideTooltip() {
    if (!isTooltipShown()) {
      return;
    }
    hidePopper();
    removeScrollEventListeners();
    $triggerEle = null;
  }
  function removeTooltip() {
    if ($popperEle) {
      $popperEle.remove();
    }
  }
  function isTooltipDisabled() {
    return options.ellipsisOnly && !DomUtils.hasEllipsis($triggerEle);
  }
  function initPopper() {
    var data = {
      $popperEle: $popperEle,
      $triggerEle: $triggerEle,
      $arrowEle: $arrowEle,
      position: options.position,
      margin: options.margin,
      offset: options.offset,
      enterDelay: options.enterDelay,
      exitDelay: options.exitDelay,
      showDuration: options.showDuration,
      hideDuration: options.hideDuration,
      transitionDistance: options.transitionDistance,
      zIndex: options.zIndex
    };
    popper = new PopperComponent(data);
    popper.show();
  }
  function hidePopper() {
    if (popper) {
      popper.hide();
    }
  }
  function isTooltipShown() {
    return $popperEle || $triggerEle;
  }
  function addScrollEventListeners() {
    $scrollableElems = DomUtils.getScrollableParents($triggerEle);
    $scrollableElems.forEach(function ($ele) {
      $ele.addEventListener('scroll', onScroll);
    });
  }
  function removeScrollEventListeners() {
    if (!$scrollableElems) {
      return;
    }
    $scrollableElems.forEach(function ($ele) {
      $ele.removeEventListener('scroll', onScroll);
    });
    $scrollableElems = null;
  }
  function onScroll() {
    hideTooltip();
  }
})();
}();
/******/ })()
;