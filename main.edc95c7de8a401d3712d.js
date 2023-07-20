/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/dropdown_brands.js":
/*!***********************************!*\
  !*** ./src/js/dropdown_brands.js ***!
  \***********************************/
/***/ (() => {

var dropdownBrandsBlock = ".brands-list__item--hidden";
var windowInnerWidth = document.documentElement.clientWidth;
var dropdownBrandsButton = ".brands__button";
function setToggle(buttonClass, hideClassArr) {
  var currentToggle = 0;
  var button = document.querySelector(buttonClass);
  var parent = button.parentNode;
  var elements = parent.querySelectorAll(hideClassArr);
  console.log(button, elements);
  var toggleText = ["Показать всё", "Скрыть"];
  function getToggleText() {
    return toggleText[++currentToggle % toggleText.length];
  }
  button.addEventListener("click", function () {
    button.innerHTML = getToggleText();
    button.classList.toggle("more-button--active");
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.toggle("hidden");
    }
  });
}
setToggle(dropdownBrandsButton, dropdownBrandsBlock);
setToggle(".tech__button", ".tech-list__item--hidden");

/***/ }),

/***/ "./src/js/install-swiper.js":
/*!**********************************!*\
  !*** ./src/js/install-swiper.js ***!
  \**********************************/
/***/ (() => {

var swiper = false;
var classArr = [{
  swiperClass: "brands__cards",
  pogination: "brands-pagination",
  swiper: null
}, {
  swiperClass: "prices__cards",
  pogination: "prices-pagination",
  swiper: null
}, {
  swiperClass: "tech__cards",
  pogination: "tech-pagination",
  swiper: null
}];
function setSwiper(object) {
  var swiperClass = object.swiperClass,
    pogination = object.pogination,
    swiper = object.swiper;
  object.swiper = new Swiper("." + swiperClass, {
    spaceBetween: 16,
    slidesPerView: "auto",
    pagination: {
      el: "." + pogination,
      clickable: true
    }
  });
}
classArr.forEach(function (item) {
  return setSwiper(item);
});
// window.addEventListener("resize", () => {
//   classArr.forEach((item) => setSwiper(item));
// });

/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

var burgerButtonOpen = document.querySelector('.button-burger-open');
var burgerButtonClose = document.querySelector('.button-burger-close');
var buttonCallOpen = document.querySelector('.button-phone');
var buttonFeedBackOpen = document.querySelector(".button-feedback");
// let callButtonOpen = document.querySelector('')
var menu = document.querySelector('.menu-box');
// burgerButtonOpen.addEventListener('click', () => {
//     menu.classList.add('menu-box--open');
// })
// burgerButtonClose.addEventListener('click', () => {
//     menu.classList.remove('menu-box--open');
// })
var currentOpen = null;
popUp('.button-burger-close', '.button-burger-open', '.menu-box', 'menu-box--open');
popUp('.call__button-close ', '.button-phone', '.call-box', 'popup-box--open');
popUp('.feedback__button-close ', '.button-feedback', '.feedback-box', 'popup-box--open');
function popUp(closeClass, openClass, elementClass, toggleClass, childClass) {
  var closeButton = document.querySelector(closeClass);
  var openButton = document.querySelector(openClass);
  var element = document.querySelector(elementClass);
  openButton.addEventListener('click', function () {
    if (currentOpen) {
      currentOpen.element.classList.remove(currentOpen.toggleClass);
    }
    element.classList.add(toggleClass);
    currentOpen = {
      element: element,
      toggleClass: toggleClass
    };
  });
  closeButton.addEventListener('click', function () {
    element.classList.remove(toggleClass);
    currentOpen = null;
  });
}

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_yhhu7h7snnbkl7jqfxewrll65y/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_yhhu7h7snnbkl7jqfxewrll65y/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@13.3.2_sass@1.63.6+webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_yhhu7h7snnbkl7jqfxewrll65y/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_yhhu7h7snnbkl7jqfxewrll65y/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@13.3.2_sass@1.63.6+webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Regular/TTLakes-Regular.woff2 */ "./src/fonts/TTLakes-Regular/TTLakes-Regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Regular/TTLakes-Regular.woff */ "./src/fonts/TTLakes-Regular/TTLakes-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Regular/TTLakes-Regular.ttf */ "./src/fonts/TTLakes-Regular/TTLakes-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Medium/TTLakes-Medium.woff2 */ "./src/fonts/TTLakes-Medium/TTLakes-Medium.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Medium/TTLakes-Medium.woff */ "./src/fonts/TTLakes-Medium/TTLakes-Medium.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Medium/TTLakes-Medium.ttf */ "./src/fonts/TTLakes-Medium/TTLakes-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff2 */ "./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff */ "./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Bold/TTLakesCondensed-Bold.ttf */ "./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/TTLakes-Medium/TT Lakes Neue Trial Bold.ttf */ "./src/fonts/TTLakes-Medium/TT Lakes Neue Trial Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/expand.svg */ "./src/icons/expand.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/highlight.svg */ "./src/icons/highlight.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/checkstatus.svg */ "./src/icons/checkstatus.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/repair.svg */ "./src/icons/repair.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/burger.svg */ "./src/icons/burger.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/call.svg */ "./src/icons/call.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_16___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/chat.svg */ "./src/icons/chat.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_17___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/profile.svg */ "./src/icons/profile.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_18___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/burger-close.svg */ "./src/icons/burger-close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_19___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/search.svg */ "./src/icons/search.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_20___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/go.svg */ "./src/icons/go.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_15___);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_16___);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_17___);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_18___);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_19___);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_20___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "TT Lakes";
  font-weight: 400;
  font-style: normal;
  src: local("TT Lakes Regular"), local("TT-Lakes-Regular"), url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "TT Lakes";
  font-weight: 500;
  font-style: normal;
  src: local("TT Lakes Medium"), local("TT-Lakes-Medium"), url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "TT Lakes";
  font-weight: 700;
  font-style: normal;
  src: local("TT Lakes Bold"), local("TT-Lakes-Bold"), url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff2"), url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff"), url(${___CSS_LOADER_URL_REPLACEMENT_8___}) format("truetype");
  font-display: swap;
}
@font-face {
  font-family: "TT Lakes Bold";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_6___});
  src: local("TT Lakes Condensed Medium"), local("TT-Lakes-Neue-Trial-Bold"), url(${___CSS_LOADER_URL_REPLACEMENT_9___}) format("truetype");
  font-weight: 700;
  font-style: normal;
}
.button {
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
}
.button--purple {
  background: #FF3E79;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.button:hover {
  -webkit-transform: scale(1.1);
          transform: scale(1.1);
}

.more-button {
  display: flex;
  justify-content: flex-start;
  font-family: "TT Lakes", sans-serif;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  padding: 0;
  font-weight: 500;
}
.more-button::before {
  content: "";
  display: inline-block;
  vertical-align: bottom;
  width: 24px;
  height: 24px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_10___});
}
.more-button--active::before {
  -webkit-transform: rotate(0.5turn);
          transform: rotate(0.5turn);
}

.tele {
  font-weight: 700;
  font-size: 24px;
}
.menu-box--open {
  top: 0;
  z-index: 2;
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(255, 255, 255, 0.7529411765);
  display: block;
}
.menu-box__menu {
  transition: all 0.2s;
  left: -440px;
}
.menu-box--open .menu-box__menu {
  transition: all 0.2s;
  left: 0;
}
.langs {
  display: flex;
  align-items: center;
  gap: 16px;
}
.langs__item--active {
  color: #7E7E82;
}

.contact-list {
  display: flex;
  gap: 16px;
  flex-direction: column;
}
.contact-list__item {
  display: flex;
  align-items: center;
  gap: 16px;
}

.burger-menu {
  background: white;
  z-index: 3;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  gap: 50px;
  flex-direction: column;
  padding: 18px 24px;
  padding-bottom: 32px;
  transition: all 0.2s;
  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2), -2px 0px 4px 0px rgba(69, 79, 126, 0.02);
}
.burger-menu__footer {
  display: flex;
  flex-direction: column;
  margin-top: auto;
  font-weight: 500;
}
.burger-menu__header {
  display: flex;
  justify-content: space-between;
}
.burger-menu__list {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.burger-menu__item {
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
}
.burger-menu__item:hover {
  color: rgba(255, 62, 120, 0.4039215686);
}
.burger-menu__item:hover::before {
  position: absolute;
}
.burger-menu__item--active {
  color: #7e7e82;
}
.burger-menu__item--active::before {
  position: absolute;
  content: "";
  left: 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
  width: 4px;
  height: 32px;
}
.burger-menu__langs {
  margin-top: 20px;
}

.logo {
  position: absolute;
  margin-left: 60px;
}

.icon {
  width: 40px;
  height: 40px;
}

.icon-check-status {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_12___});
  width: 40px;
  height: 40px;
}

.icon-setting {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_13___});
}

.icon-burger {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_14___});
}

.icon-phone {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_15___});
}

.icon-message {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_16___});
}

.icon-profile {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_17___});
}

.icon-burger-close {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_18___});
}

.icon-search {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_19___});
}

.icon-go {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_20___});
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 16px;
}
.nav-menu__box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-weight: 500;
  line-height: 24px;
  font-size: 16px;
}

.info-menu {
  overflow-x: auto;
}
.info-menu__box {
  display: flex;
  gap: 16px;
  white-space: nowrap;
  padding: 2px 16px 14px;
}
.info-menu__item {
  font-size: 16px;
  font-weight: 500;
  color: #7E7E82;
  cursor: pointer;
  padding: 8px 10px;
}
.info-menu__item--active {
  border-radius: 6px;
  border: 2px solid #b8ffec;
  background: white;
}
.info-menu__item:hover:not(.info-menu__item--active) {
  background: white;
  border-radius: 6px;
  outline: 2px solid rgba(255, 62, 120, 0.4039215686);
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 40px;
  padding-left: 16px;
}

.swiper-slide {
  text-align: center;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
}

.swiper-pagination {
  margin-top: 50px;
}

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  -webkit-clip-path: inset(100%);
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}

.hidden {
  display: none;
}

.section-title {
  padding: 16px;
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 24px;
  text-transform: uppercase;
  color: #7e7e82;
  font-weight: 400;
  border-top: 1px solid #d9fff5;
  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 98.61%);
}

.brands__button {
  display: none;
}
.brands__link {
  width: 240px;
  height: 72px;
  padding: 0 16px 0 16px;
  border: 1px solid #eaeaea;
  background-color: #fff;
  border-radius: 6px;
  gap: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.brands__link:hover {
  border: 1px solid #ff3e79;
}

.brands-list {
  display: none;
  flex-wrap: wrap;
  row-gap: 16px;
  -webkit-column-gap: 32px;
  column-gap: 32px;
  margin-bottom: 24px;
}
.brands-list__image {
  max-height: 45px;
  max-width: 120px;
}

.price-info__description {
  max-width: 421px;
  margin-bottom: 16px;
  font-size: 14px;
  line-height: 20px;
  color: #1B1C21;
}

.price-info__commercial {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}
.price-info__commercial:hover .price-info__commercial-text {
  color: #FF3E79;
}
.price-info__commercial:hover .svg--purple {
  fill: rgba(255, 62, 120, 0.4039215686);
}

.price-info__commercial-text {
  transition: color 0.3s;
  -webkit-text-decoration: none;
  text-decoration: none;
  font-size: 16px;
  line-height: 24px;
  color: #1B1C21;
}

.prices__table {
  display: none;
  width: 100%;
  max-width: 100%;
  table-layout: fixed;
  overflow-x: auto;
  border-collapse: collapse;
}

.prices__link {
  position: relative;
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 260px;
  height: 200px;
  padding: 16px;
  border: 1px solid #EAEAEA;
  background-color: #FFFFFF;
  display: flex;
  align-items: flex-start;
  align-content: space-between;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 6px;
  transition: all 0.3s;
}
.prices__link p {
  margin: 0;
  padding: 0;
}
.prices__link:hover {
  border: 1px solid #FF3E79;
}
.prices__link:hover .prices-list__button {
  border: 2px solid #EAEAEA;
  background-color: rgba(255, 62, 120, 0.4039215686);
}

.prices-item__title {
  font-size: 14px;
  line-height: 16px;
  color: #7E7E82;
  margin-bottom: 4px;
}

.prices-item__description {
  color: #1B1C21;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
  text-align: left;
}

.prices-item__button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  padding: 0 12px;
  justify-content: space-between;
  font-weight: 500;
  width: 119px;
  height: 32px;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.table__title {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #7E7E82;
  text-align: left;
  padding-bottom: 16px;
  padding: 0 24px 16px 24px;
}

.table__item {
  font-size: 14px;
  line-height: 18px;
  color: #1B1C21;
  padding: 23px 24px;
  background-color: #FFFFFF;
  border-bottom: 1px solid #EAEAEA;
  text-align: left;
}

.table__item--services {
  text-align: left;
}

.table__item--radius {
  border-radius: 6px;
}

.table__button {
  display: flex;
  padding: 0 12px;
  justify-content: space-between;
  margin-left: auto;
  font-weight: 500;
  height: 32px;
  font-size: 12px;
  gap: 30px;
  line-height: 24px;
  text-transform: uppercase;
  color: #FFFFFF;
}

.tech-list {
  display: none;
  flex-wrap: wrap;
  row-gap: 16px;
  -webkit-column-gap: 32px;
          column-gap: 32px;
  margin-bottom: 24px;
}

.tech__link {
  -webkit-text-decoration: none;
  text-decoration: none;
  width: 240px;
  height: 160px;
  padding: 16px;
  border: 1px solid #EAEAEA;
  background-color: #FFFFFF;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: top;
  transition: all 0.3s;
}
.tech__link:hover {
  border: 1px solid #FF3E79;
}
.tech__link:hover .tech-list__button {
  --color_fill: rgba(54,161,143,0.52549);
}

.tech-item__title {
  font-size: 16px;
  line-height: 24px;
  color: #1b1c21;
}

.tech-list__button {
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  align-self: end;
}

.tech__button {
  display: none;
}

.divider {
  height: 32px;
  width: 2px;
  border-radius: 1px;
  background: #eaeaea;
}

.pc-visible {
  display: none;
}

.phone-hidden {
  display: none;
}
.content-box__header {
  border-bottom: 1px solid #D9FFF5;
  background-color: white;
}

.pc-flex {
  display: none;
}

.main {
  font-size: 16px;
  font-weight: 500;
  background: #F8F8F8;
}
.main__header-box {
  position: relative;
}
.main__header-box::before {
  position: absolute;
  content: "";
  left: 0;
  width: 4px;
  height: 40px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_11___});
}
.main__title {
  padding-left: 16px;
  padding-right: 16px;
  color: #1b1c21;
  margin: 0;
  padding: 0;
  font-size: 28px;
  font-family: "TT Lakes Bold";
  font-weight: 700;
  font-variation-settings: "wdth" 500;
  white-space: nowrap;
}
.main__info {
  padding: 0px 16px;
  padding-bottom: 16px;
}
.main__description {
  font-size: 14px;
  font-weight: 400;
  padding-right: 5px;
}
.main__picture {
  display: block;
  width: 100%;
}
.footer {
  border-top: 1px solid #D9FFF5;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 500;
  background-color: #F8F8F8;
  width: 100%;
}

.footer-list {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 16px;
}

.footer-list__item {
  font-size: 14px;
  line-height: 16px;
  color: #7E7E82;
}

.call-form {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.call-form__input {
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  padding: 12px 16px;
  transition: border 0.3s;
}
.call-form__input::-webkit-input-placeholder {
  color: #212529;
  opacity: 0.4;
}
.call-form__input::placeholder {
  color: #212529;
  opacity: 0.4;
}
.call-form__input:hover {
  border: 1px solid #FF3E79;
}
.call-form__input:focus {
  border: 1px solid rgba(255, 62, 120, 0.4039215686);
  outline: 0;
}

.call-form__textarea {
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  padding: 12px 16px;
  resize: none;
  transition: border 0.3s;
}
.call-form__textarea::-webkit-input-placeholder {
  color: #212529;
  opacity: 0.4;
}
.call-form__textarea::placeholder {
  color: #212529;
  opacity: 0.4;
}
.call-form__textarea:hover {
  border: 1px solid #FF3E79;
}
.call-form__textarea:focus {
  border: 1px solid rgba(255, 62, 120, 0.4039215686);
  outline: 0;
}

.call-main__info {
  font-size: 14px;
  line-height: 16px;
  color: #7E7E82;
}

.call-main__info--purple {
  color: #FF3E79;
}

.call-header__title {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #1b1c21;
}

.call-header__title::before {
  content: "";
  width: 4px;
  height: 40px;
  background: #41F6D7;
  -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
          transform: matrix(-1, 0, 0, 1, 0, 0);
  position: absolute;
  margin: -10px 0 0 -16px;
}

.call-header__button {
  width: 40px;
  height: 40px;
}

.call-main {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.call {
  padding: 24px 16px 0 16px;
  width: 320px;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 3;
  top: 0px;
  right: -440px;
  flex-direction: column;
  min-height: 100vh;
  scrollbar-width: none;
  background-color: #FFFFFF;
  transition: right 0.2s;
}

.call__header {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 40px;
}

.call--animation-open {
  width: 320px;
  right: 0px;
}

.feedback-form {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.feedback-form__input {
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  padding: 12px 16px;
  transition: border 0.3s;
}
.feedback-form__input::-webkit-input-placeholder {
  color: #212529;
  opacity: 0.4;
}
.feedback-form__input::placeholder {
  color: #212529;
  opacity: 0.4;
}
.feedback-form__input:hover {
  border: 1px solid #FF3E79;
}
.feedback-form__input:focus {
  border: 1px solid rgba(255, 62, 120, 0.4039215686);
  outline: 0;
}

.feedback-form__textarea {
  border: 1px solid #EAEAEA;
  border-radius: 8px;
  padding: 12px 16px;
  resize: none;
  transition: border 0.3s;
}
.feedback-form__textarea::-webkit-input-placeholder {
  color: #212529;
  opacity: 0.4;
}
.feedback-form__textarea::placeholder {
  color: #212529;
  opacity: 0.4;
}
.feedback-form__textarea:hover {
  border: 1px solid #FF3E79;
}
.feedback-form__textarea:focus {
  border: 1px solid rgba(255, 62, 120, 0.4039215686);
  outline: 0;
}

.feedback-main__info {
  font-size: 14px;
  line-height: 16px;
  color: #7E7E82;
}

.feedback-main__info--purple {
  color: #FF3E79;
}

.feedback-header__title {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #1b1c21;
}

.feedback-header__title::before {
  content: "";
  width: 4px;
  height: 40px;
  background: #41F6D7;
  -webkit-transform: matrix(-1, 0, 0, 1, 0, 0);
          transform: matrix(-1, 0, 0, 1, 0, 0);
  position: absolute;
  margin: -10px 0 0 -16px;
}

.feedback-header__button {
  width: 40px;
  height: 40px;
}

.feedback-main {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

.feedback {
  padding: 24px 16px 0 16px;
  width: 320px;
  height: 100vh;
  display: flex;
  position: fixed;
  z-index: 3;
  top: 0px;
  right: -440px;
  flex-direction: column;
  min-height: 100vh;
  scrollbar-width: none;
  background-color: #FFFFFF;
  transition: right 0.2s;
}

.feedback__header {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 40px;
}

.feedback--open {
  width: 320px;
  right: 0px;
}

.popup-box--open {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(242, 242, 242, 0.8);
  z-index: 2;
}
.popup-box--open .popup-box__menu {
  width: 320px;
  right: 0px;
}
.popup-box--open--left .popup-box__menu {
  width: 320px;
  left: 0px;
}

* {
  box-sizing: border-box;
}

body {
  font-family: "TT Lakes", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #1b1c21;
  background-color: #f8f8f8;
}

h2 {
  margin: 0;
}

.global-wrapper {
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
@media (min-width: 320px) {
  .call {
    box-shadow: -2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2);
  }
  .feedback {
    box-shadow: -2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2);
  }
}
@media (min-width: 361px) {
  .burger-menu {
    width: 320px;
  }
}
@media (min-width: 768px) {
  .brands__content {
    padding-bottom: 32px;
  }
  .brands__button {
    display: flex;
  }
  .brands-list {
    display: flex;
    -webkit-column-gap: 24px;
            column-gap: 24px;
  }
  .swiper {
    display: none;
  }
  .section-title {
    padding: 16px 24px;
  }
  .navigation__list {
    padding: 19px 24px;
  }
  .navigation__left-column .navigation__divider {
    display: block;
  }
  .main__description--first-half {
    display: inline;
  }
  .main-header__title {
    padding: 24px 0 24px 24px;
  }
  .content-wrapper {
    display: flex;
    align-content: flex-start;
    padding: 0 24px 0 24px;
  }
  .features-list {
    padding: 2px 24px 14px;
  }
  .prices-info__content {
    padding-bottom: 80px;
  }
  .prices__content {
    padding-bottom: 24px;
  }
  .prices__table {
    display: inline-table;
  }
  .tech__content {
    padding-bottom: 32px;
  }
  .tech-list {
    display: flex;
    -webkit-column-gap: 24px;
            column-gap: 24px;
  }
  .tech__link {
    width: 224px;
  }
  .tech__button {
    display: block;
  }
  .main__content-wrapper {
    display: flex;
    padding: 10px 24px;
    padding-bottom: 42px;
    justify-content: space-between;
  }
  .main__picture {
    display: block;
    border-radius: 10px;
    flex-grow: 1;
    flex-shrink: 1;
    width: 50%;
    max-width: 530px;
  }
  .main__info {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .nav-menu {
    padding: 24px 24px;
  }
  .phone-hidden {
    display: inline;
    display: initial;
  }
  .footer-list {
    padding: 32px 24px;
    flex-direction: row;
  }
  .footer-list__item {
    max-width: 218px;
  }
  .call-header__title::before {
    margin: -10px 0 0 -32px;
  }
  .call-header__button {
    position: absolute;
    top: 30px;
    left: -60px;
  }
  .call {
    padding: 40px 32px 0 32px;
  }
  .call--animation-open {
    width: 440px;
    right: 0px;
  }
  .feedback-header__title::before {
    margin: -10px 0 0 -32px;
  }
  .feedback-header__button {
    position: absolute;
    top: 30px;
    left: -60px;
  }
  .feedback {
    padding: 40px 32px 0 32px;
  }
  .feedback--open {
    width: 440px;
    right: 0px;
  }
  .popup-box--open .popup-box__menu {
    width: 440px;
    right: 0px;
  }
  .popup-box--open--left .popup-box__menu {
    width: 440px;
    right: 0px;
  }
}
@media (min-width: 1440px) {
  .menu-box {
    margin: 0;
    position: static;
    width: auto;
    width: initial;
  }
  .menu-box {
    margin: 0;
    position: static;
    -webkit-transform: translateX(0);
            transform: translateX(0);
    width: auto;
    width: initial;
  }
  .logo {
    position: static;
    margin: 0;
  }
  .langs {
    position: static;
    margin: 0;
  }
  .burger-menu {
    box-shadow: none;
    box-shadow: initial;
    position: relative;
    left: 0;
  }
  .burger-menu__footer {
    margin-top: 241px;
  }
  .info-menu__box {
    flex-wrap: wrap;
  }
  .prices-info__content {
    padding-bottom: 83px;
  }
  .prices__content {
    padding-bottom: 32px;
  }
  .prices__table {
    display: inline-table;
  }
  .tech__content {
    padding-bottom: 50px;
  }
  .tech-list {
    display: flex;
    -webkit-column-gap: 32px;
            column-gap: 32px;
  }
  .tech__link {
    width: 240px;
  }
  .content-box {
    width: 1120px;
    background: #F8F8F8;
    padding-bottom: 42px;
  }
  .main__info {
    max-width: 490px;
  }
  .pc-visible {
    display: inline;
    display: initial;
  }
  .pc-static {
    position: static;
  }
  .pc-flex {
    display: flex;
  }
  .pc-hidden {
    display: none;
  }
  .header {
    border-bottom: none;
  }
  .nav-menu {
    padding-bottom: 8px;
  }
  .footer {
    width: 1120px;
  }
  .footer-list {
    padding: 32px 32px;
  }
  .call-header__title::before {
    margin: -10px 0 0 -32px;
  }
  .feedback-header__title::before {
    margin: -10px 0 0 -32px;
  }
  .global-wrapper {
    display: flex;
    justify-content: center;
  }
}
@media (max-width: 768px) {
  .prices-info__content {
    padding: 0 16px 57px 16px;
  }
}`, "",{"version":3,"sources":["webpack://./src/style/fonts.scss","webpack://./src/index.scss","webpack://./src/style/elements.scss","webpack://./src/style/var.scss","webpack://./src/style/menu/box.scss","webpack://./src/style/menu/langs.scss","webpack://./src/style/menu/list.scss","webpack://./src/style/menu/menu.scss","webpack://./src/style/icons.scss","webpack://./src/style/main/nav-menu.scss","webpack://./src/style/main/info-menu.scss","webpack://./src/style/main/brands.scss","webpack://./src/style/main/prices-info.scss","webpack://./src/style/main/prices.scss","webpack://./src/style/main/table.scss","webpack://./src/style/main/tech.scss","webpack://./src/style/main/main.scss","webpack://./src/style/footer.scss","webpack://./src/style/call/call-form.scss","webpack://./src/style/call/call-header.scss","webpack://./src/style/call/call-main.scss","webpack://./src/style/call/call.scss","webpack://./src/style/feedback/feedback-form.scss","webpack://./src/style/feedback/feedback-header.scss","webpack://./src/style/feedback/feedback-main.scss","webpack://./src/style/feedback/feedback.scss","webpack://./src/style/popup-box.scss","webpack://./<no source>"],"names":[],"mappings":"AAAA;EACC,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,sOAAA;EAIA,kBAAA;ACFD;ADKA;EACC,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oOAAA;EAIA,kBAAA;ACND;ADSA;EACC,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gOAAA;EAIA,kBAAA;ACVD;ADYA;EACI,4BAAA;EACA,4CAAA;EACA,sIAAA;EAEA,gBAAA;EACA,kBAAA;ACXJ;AC3BA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,eAAA;AD6BF;AC5BE;EACE,mBCHU;EDIV,mBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,oBAAA;AD8BJ;AC1BE;EACE,6BAAA;UAAA,qBAAA;AD4BJ;;ACxBA;EACE,aAAA;EACA,2BAAA;EACA,mCAAA;EACA,mBAAA;EACA,QAAA;EACA,eAAA;EACA,UAAA;EACA,gBAAA;AD2BF;AC1BE;EACE,WAAA;EACA,qBAAA;EACA,sBAAA;EACA,WAAA;EACA,YAAA;EACA,0DAAA;AD4BJ;AC1BE;EACE,kCAAA;UAAA,0BAAA;AD4BJ;;AGpEA;EACE,gBAAA;EACA,eAAA;AHuEF;AG/DE;EACE,MAAA;EACA,UAAA;EACA,eAAA;EACA,YAAA;EACA,WAAA;EACA,6CAAA;EACA,cAAA;AHyEJ;AGvEE;EACE,oBAAA;EACA,YAAA;AHyEJ;AGvEE;EACE,oBAAA;EACA,OAAA;AHyEJ;AIlGA;EACI,aAAA;EACA,mBAAA;EACA,SAAA;AJiHJ;AIhHI;EACE,cFFM;AFoHZ;;AKvHA;EACI,aAAA;EACA,SAAA;EACA,sBAAA;ALgIJ;AK/HI;EACE,aAAA;EACA,mBAAA;EACA,SAAA;ALiIN;;AMxIA;EACE,iBAAA;EACA,UAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,aAAA;EACA,SAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;EACA,oBAAA;EACA,6FAAA;AN2IF;AM9HE;EACE,aAAA;EACA,sBAAA;EACA,gBAAA;EACA,gBAAA;AN+IJ;AM7IE;EACE,aAAA;EACA,8BAAA;AN+IJ;AM7IE;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AN+IJ;AM7IE;EACE,aAAA;EACA,mBAAA;EACA,gBAAA;EACA,eAAA;AN+IJ;AM9II;EACE,uCJzCQ;AFyLd;AM/IM;EACE,kBAAA;ANiJR;AM7IE;EACE,cAAA;AN+IJ;AM9II;EACE,kBAAA;EACA,WAAA;EACA,OAAA;EACA,0DAAA;EACA,UAAA;EACA,YAAA;ANgJN;AM7IE;EACE,gBAAA;AN+IJ;;AM5IA;EACE,kBAAA;EACA,iBAAA;AN+IF;;AOrNA;EACE,WAAA;EACA,YAAA;APwNF;;AOtNA;EACE,0DAAA;EACA,WAAA;EACA,YAAA;APyNF;;AOvNA;EACE,0DAAA;AP0NF;;AOxNA;EACE,0DAAA;AP2NF;;AOzNA;EACE,0DAAA;AP4NF;;AO1NA;EACE,0DAAA;AP6NF;;AO3NA;EACE,0DAAA;AP8NF;;AO5NA;EACE,0DAAA;AP+NF;;AO7NA;EACE,0DAAA;APgOF;;AO9NA;EACI,0DAAA;APiOJ;;AQ/PA;EACI,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;ARkQJ;AQjQI;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,gBAAA;EACA,iBAAA;EACA,eAAA;ARmQN;;AShRA;EACI,gBAAA;ATmRJ;ASlRI;EACE,aAAA;EACA,SAAA;EACA,mBAAA;EACA,sBAAA;AToRN;ASlRI;EACE,eAAA;EACA,gBAAA;EACA,cPRM;EOSN,eAAA;EACA,iBAAA;AToRN;ASnRM;EACE,kBAAA;EACA,yBAAA;EACA,iBAAA;ATqRR;ASnRM;EACE,iBAAA;EACA,kBAAA;EACA,mDAAA;ATqRR;;AUzSA;EACE,SAAA;EACA,UAAA;EACA,gBAAA;AViTF;;AU/SA;EACE,WAAA;EACA,YAAA;EACA,oBAAA;EACA,kBAAA;AVkTF;;AUhTA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,YAAA;AVmTF;;AUjTA;EACE,gBAAA;AVoTF;;AUlTA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,UAAA;EACA,mBAAA;EACA,8BAAA;EACA,sBAAA;EACA,mBAAA;EACA,gBAAA;AVqTF;;AUnTA;EACE,aAAA;AVsTF;;AUpTA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;EACA,6BAAA;EACA,+DAAA;AVuTF;;AUpTE;EACE,aAAA;AVuTJ;AUrTE;EACE,YAAA;EACA,YAAA;EACA,sBAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,SAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AVuTJ;AUtTI;EACE,yBAAA;AVwTN;;AU5SA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;EACA,gBAAA;EACA,mBAAA;AVuTF;AUlTE;EACE,gBAAA;EACA,gBAAA;AV0TJ;;AWxYA;EACC,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;EACA,cTfO;AFscR;;AWpbA;EACC,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,SAAA;AXubD;AWrbC;EACC,cTxBY;AF+cd;AWpbC;EACC,sCT3BY;AFidd;;AWhbA;EACC,sBAAA;EACA,6BAAA;EAAA,qBAAA;EACA,eAAA;EACA,iBAAA;EACA,cTxCO;AF2dR;;AYrdA;EACC,aAAA;EACA,WAAA;EACA,eAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;AZmeD;;AYxdA;EACC,kBAAA;EACA,6BAAA;EAAA,qBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,yBAAA;EACA,yBVlCO;EUmCP,aAAA;EACA,uBAAA;EACA,4BAAA;EACA,8BAAA;EACA,sBAAA;EACA,kBAAA;EACA,oBAAA;AZqeD;AYpeC;EACC,SAAA;EACA,UAAA;AZseF;AYneC;EACC,yBAAA;AZqeF;AYleC;EACC,yBAAA;EACA,kDV/CY;AFmhBd;;AYheA;EACC,eAAA;EACA,iBAAA;EACA,cVzDW;EU0DX,kBAAA;AZmeD;;AYheA;EACC,cV7DO;EU8DP,eAAA;EACA,iBAAA;EACA,mBAAA;EACA,gBAAA;AZmeD;;AYheA;EACC,kBAAA;EACA,YAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,8BAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,yBAAA;EACA,cVrFO;AFwjBR;;AaxjBA;EACC,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cXDW;EWEX,gBAAA;EACA,oBAAA;EACA,yBAAA;Ab2jBD;;AaxjBA;EACC,eAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,yBXfO;EWgBP,gCAAA;EACA,gBAAA;Ab2jBD;;AaxjBA;EACC,gBAAA;Ab2jBD;;AaxjBA;EACC,kBAAA;Ab2jBD;;AaxjBA;EACC,aAAA;EACA,eAAA;EACA,8BAAA;EACA,iBAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,SAAA;EACA,iBAAA;EACA,yBAAA;EACA,cXvCO;AFkmBR;;AcxlBA;EACE,aAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;UAAA,gBAAA;EACA,mBAAA;AdsmBF;;AczlBA;EACE,6BAAA;EAAA,qBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,yBAAA;EACA,yBZlCM;EYmCN,kBAAA;EACA,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,oBAAA;AdwmBF;ActmBE;EACE,yBAAA;AdwmBJ;AcrmBE;EACE,sCAAA;AdumBJ;;Ac3lBA;EACE,eAAA;EACA,iBAAA;EACA,cAAA;AdwmBF;;AcrmBA;EACE,WAAA;EACA,YAAA;EACA,yBZnEM;EYoEN,eAAA;AdwmBF;;ActmBA;EACE,aAAA;AdymBF;;AehrBA;EACE,YAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;AfwrBF;;AetrBA;EACE,aAAA;AfyrBF;;AetrBA;EACE,aAAA;AfyrBF;AejrBE;EACE,gCAAA;EACA,uBAAA;Af2rBJ;;AexrBA;EACE,aAAA;Af2rBF;;AezrBA;EACE,eAAA;EACA,gBAAA;EACA,mBb7BW;AFytBb;AevqBE;EACE,kBAAA;Af6rBJ;Ae5rBI;EACE,kBAAA;EACA,WAAA;EACA,OAAA;EACA,UAAA;EACA,YAAA;EACA,0DAAA;Af8rBN;AetrBE;EACE,kBAAA;EAAA,mBAAA;EACA,cAAA;EACA,SAAA;EACA,UAAA;EACA,eAAA;EACA,4BAAA;EACA,gBAAA;EACA,mCAAA;EACA,mBAAA;Af6rBJ;Ae3rBE;EACE,iBAAA;EACA,oBAAA;Af6rBJ;Ae3rBE;EACE,eAAA;EACA,gBAAA;EACA,kBAAA;Af6rBJ;Ae3rBE;EACE,cAAA;EACA,WAAA;Af6rBJ;AgBtxBA;EACC,6BAAA;EACA,cAAA;EACA,eAAA;EACA,gBAAA;EACA,yBdJY;EcKZ,WAAA;AhBqzBD;;AgB7yBA;EACC,eAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,SAAA;AhBqzBD;;AgBzyBA;EACC,eAAA;EACA,iBAAA;EACA,cdjCW;AFw1BZ;;AiB31BA;EACC,aAAA;EACA,sBAAA;EACA,aAAA;AjBm2BD;;AiBh2BA;EACC,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;AjBm2BD;AiBj2BC;EACA,cAAA;EACA,YAAA;AjBm2BD;AiBr2BC;EACA,cAAA;EACA,YAAA;AjBm2BD;AiBh2BC;EACC,yBAAA;AjBk2BF;AiB/1BC;EACC,kDAAA;EACA,UAAA;AjBi2BF;;AiB71BA;EACC,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;AjBg2BD;AiB91BC;EACC,cAAA;EACA,YAAA;AjBg2BF;AiBl2BC;EACC,cAAA;EACA,YAAA;AjBg2BF;AiB71BC;EACC,yBAAA;AjB+1BF;AiB51BC;EACC,kDAAA;EACA,UAAA;AjB81BF;;AiB11BA;EACC,eAAA;EACA,iBAAA;EACA,cfjDW;AF84BZ;;AiB11BA;EACC,cfnDa;AFg5Bd;;AkBr5BA;EACC,SAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AlBw5BD;;AkBr5BA;EACC,WAAA;EACA,UAAA;EACA,YAAA;EACA,mBhBHM;EgBIN,4CAAA;UAAA,oCAAA;EACA,kBAAA;EACA,uBAAA;AlBw5BD;;AkB74BA;EACC,WAAA;EACA,YAAA;AlB05BD;;AmBr7BA;EACC,aAAA;EACA,sBAAA;EACA,aAAA;AnB+7BD;;AoBl8BA;EACE,yBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,UAAA;EACA,QAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,qBAAA;EACA,yBlBZM;EkBaN,sBAAA;ApBq8BF;;AoBz7BA;EACE,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;ApBs8BF;;AoBn8BA;EACE,YAAA;EACA,UAAA;ApBs8BF;;AqBz+BA;EACC,aAAA;EACA,sBAAA;EACA,aAAA;ArBk/BD;;AqB/+BA;EACC,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,uBAAA;ArBk/BD;AqBh/BC;EACA,cAAA;EACA,YAAA;ArBk/BD;AqBp/BC;EACA,cAAA;EACA,YAAA;ArBk/BD;AqB/+BC;EACC,yBAAA;ArBi/BF;AqB9+BC;EACC,kDAAA;EACA,UAAA;ArBg/BF;;AqB5+BA;EACC,yBAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;EACA,uBAAA;ArB++BD;AqB7+BC;EACC,cAAA;EACA,YAAA;ArB++BF;AqBj/BC;EACC,cAAA;EACA,YAAA;ArB++BF;AqB5+BC;EACC,yBAAA;ArB8+BF;AqB3+BC;EACC,kDAAA;EACA,UAAA;ArB6+BF;;AqBz+BA;EACC,eAAA;EACA,iBAAA;EACA,cnBjDW;AF6hCZ;;AqBz+BA;EACC,cnBnDa;AF+hCd;;AsBpiCA;EACC,SAAA;EACA,eAAA;EACA,gBAAA;EACA,cAAA;AtBuiCD;;AsBpiCA;EACC,WAAA;EACA,UAAA;EACA,YAAA;EACA,mBpBHM;EoBIN,4CAAA;UAAA,oCAAA;EACA,kBAAA;EACA,uBAAA;AtBuiCD;;AsB5hCA;EACC,WAAA;EACA,YAAA;AtByiCD;;AuBpkCA;EACC,aAAA;EACA,sBAAA;EACA,aAAA;AvB8kCD;;AwBjlCA;EACC,yBAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,eAAA;EACA,UAAA;EACA,QAAA;EACA,aAAA;EACA,sBAAA;EACA,iBAAA;EACA,qBAAA;EACA,yBtBZO;EsBaP,sBAAA;AxBolCD;;AwBzkCA;EACC,mBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,aAAA;AxBslCD;;AwBnlCA;EACC,YAAA;EACA,UAAA;AxBslCD;;AyBvnCI;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,0CAAA;EACA,UAAA;AzBgoCN;AyB9nCI;EACE,YAAA;EACA,UAAA;AzBgoCN;AyBznCI;EACE,YAAA;EACA,SAAA;AzBioCN;;AA5oCA;EACE,sBAAA;AAqpCF;;AAnpCA;EACE,mCAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,yBAAA;AAspCF;;AAlpCA;EACE,SAAA;AAqpCF;;AAnpCA;EACE,kBAAA;EACA,WAAA;EACA,cAAA;EACA,gBAAA;AAspCF;A0BprCA;ENAA;IAgBI,qFAAA;EpBs8BF;EwBt9BF;IAgBE,qFAAA;ExBqlCA;AA9OF;A0Bv3BA;EpBAA;IAgBI,YAAA;EN4IF;AAguBF;A0B53BA;EhBuEI;IACE,oBAAA;EVuTJ;EUrTE;IACE,aAAA;EVuTJ;EUnTF;IAQI,aAAA;IACA,wBAAA;YAAA,gBAAA;EVyTF;EUhTA;IACE,aAAA;EVyTF;EUvTA;IACE,kBAAA;EVyTF;EUvTA;IACE,kBAAA;EVyTF;EUvTA;IACE,cAAA;EVyTF;EUtTA;IACE,eAAA;EVwTF;EUrTA;IACE,yBAAA;EVuTF;EUrTA;IACE,aAAA;IACA,yBAAA;IACA,sBAAA;EVuTF;EUrTA;IACE,sBAAA;EVuTF;EWlbF;IAME,oBAAA;EXsbA;EY5bF;IAEE,oBAAA;EZkeA;EY1dF;IASE,qBAAA;EZoeA;EcvfF;IAEI,oBAAA;EdqmBF;Ec7lBF;IAQI,aAAA;IACA,wBAAA;YAAA,gBAAA;EdumBF;Ec9lBF;IAsBI,YAAA;EdumBF;EcnlBF;IAGI,cAAA;Ed2mBF;EeppBE;IACE,aAAA;IACA,kBAAA;IACA,oBAAA;IACA,8BAAA;Ef6rBJ;Ee3rBE;IACE,cAAA;IACA,mBAAA;IACA,YAAA;IACA,cAAA;IACA,UAAA;IACA,gBAAA;Ef6rBJ;Ee3rBE;IACE,YAAA;IACA,cAAA;Ef6rBJ;Ee/oBA;IACE,kBAAA;Ef4rBF;Ee1rBA;IACE,eAAA;IAAA,gBAAA;Ef4rBF;EgBhxBF;IAUE,kBAAA;IACA,mBAAA;EhBszBA;EgB9yBF;IAME,gBAAA;EhBwzBA;EkBx1BF;IAUI,uBAAA;ElBy5BF;EkBj5BF;IAKE,kBAAA;IACA,SAAA;IACA,WAAA;ElB25BA;EoB37BF;IAqBI,yBAAA;EpBs8BF;EoB17BF;IAKI,YAAA;IACA,UAAA;EpBu8BF;EsBv+BF;IAUI,uBAAA;EtBwiCF;EsBhiCF;IAKE,kBAAA;IACA,SAAA;IACA,WAAA;EtB0iCA;EwB1kCF;IAoBE,yBAAA;ExBslCA;EwB1kCF;IAKE,YAAA;IACA,UAAA;ExBulCA;EyBnnCE;IAKI,YAAA;IACA,UAAA;EzBioCN;EyB9nCE;IAKI,YAAA;IACA,UAAA;EzBkoCN;AA9JF;A0B7/BA;EvBIA;IAEI,SAAA;IACA,gBAAA;IACA,WAAA;IAAA,cAAA;EHwEF;EGnDA;IACE,SAAA;IACA,gBAAA;IACA,gCAAA;YAAA,wBAAA;IACA,WAAA;IAAA,cAAA;EHyEF;EGvEA;IACE,gBAAA;IACA,SAAA;EHyEF;EI9GF;IAQM,gBAAA;IACA,SAAA;EJmHJ;EM5HF;IAmBI,gBAAA;IAAA,mBAAA;IACA,kBAAA;IACA,OAAA;EN8IF;EM7IE;IACE,iBAAA;EN+IJ;ES3II;IACE,eAAA;ETmRN;EW/SF;IAUE,oBAAA;EXubA;EYjcF;IAME,oBAAA;EZmeA;EY/dF;IAaE,qBAAA;EZqeA;Ec5fF;IAMI,oBAAA;EdsmBF;EclmBF;IAaI,aAAA;IACA,wBAAA;YAAA,gBAAA;EdwmBF;EcpmBF;IA0BI,YAAA;EdwmBF;EejpBF;IAEI,aAAA;IACA,mBbfS;IagBT,oBAAA;Ef0rBF;Ee5oBE;IACE,gBAAA;Ef6rBJ;EetpBA;IACE,eAAA;IAAA,gBAAA;Ef2rBF;EezrBA;IACE,gBAAA;Ef2rBF;EezrBA;IACE,aAAA;Ef2rBF;EexrBA;IACE,aAAA;Ef0rBF;EexrBA;IACE,mBAAA;Ef0rBF;EexrBA;IACE,mBAAA;Ef0rBF;EgBlzBF;IASE,aAAA;EhBszBA;EgBjzBF;IAeE,kBAAA;EhBuzBA;EkB70BF;IAcE,uBAAA;ElB05BA;EsBx6BF;IAcE,uBAAA;EtByiCA;EApiCF;IAMI,aAAA;IACA,uBAAA;EAwpCF;AA/FF;A0B1lCA;EfAA;IAEE,yBAAA;EXqbA;AAwqBF","sourcesContent":["@font-face {\r\n\tfont-family: \"TT Lakes\";\r\n\tfont-weight: 400;\r\n\tfont-style: normal;\r\n\tsrc: local(\"TT Lakes Regular\"), local(\"TT-Lakes-Regular\"),\r\n\t\t\turl(\"../fonts/TTLakes-Regular/TTLakes-Regular.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/TTLakes-Regular/TTLakes-Regular.woff\") format(\"woff\"),\r\n\t\t\turl(\"../fonts/TTLakes-Regular/TTLakes-Regular.ttf\") format(\"truetype\");\r\n\tfont-display: swap;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: \"TT Lakes\";\r\n\tfont-weight: 500;\r\n\tfont-style: normal;\r\n\tsrc: local(\"TT Lakes Medium\"), local(\"TT-Lakes-Medium\"),\r\n\t\t\turl(\"../fonts/TTLakes-Medium/TTLakes-Medium.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/TTLakes-Medium/TTLakes-Medium.woff\") format(\"woff\"),\r\n\t\t\turl(\"../fonts/TTLakes-Medium/TTLakes-Medium.ttf\") format(\"truetype\");\r\n\tfont-display: swap;\r\n}\r\n\r\n@font-face {\r\n\tfont-family: \"TT Lakes\";\r\n\tfont-weight: 700;\r\n\tfont-style: normal;\r\n\tsrc: local(\"TT Lakes Bold\"), local(\"TT-Lakes-Bold\"),\r\n\t\t\turl(\"../fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff2\") format(\"woff2\"),\r\n\t\t\turl(\"../fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff\") format(\"woff\"),\r\n\t\t\turl(\"../fonts/TTLakes-Bold/TTLakesCondensed-Bold.ttf\") format(\"truetype\");\r\n\tfont-display: swap;\r\n}\r\n@font-face {\r\n    font-family: 'TT Lakes Bold';\r\n    src: url('../fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff2');\r\n    src: local('TT Lakes Condensed Medium'), local('TT-Lakes-Neue-Trial-Bold'),\r\n        url('../fonts/TTLakes-Medium/TT\\ Lakes\\ Neue\\ Trial\\ Bold.ttf') format('truetype');\r\n    font-weight: 700;\r\n    font-style: normal;\r\n}","@import 'style/var.scss';\n@import 'style/fonts';\n@import'style/elements';\n@import 'style/menu/index.scss';\n@import 'style/icons.scss';\n@import 'style/main/index.scss';\n@import 'style/footer.scss';\n@import 'style/call/index.scss';\n@import 'style/feedback/index.scss';\n@import 'style/popup-box.scss';\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-family: \"TT Lakes\", sans-serif;\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 24px;\n  color: #1b1c21;\n  background-color: #f8f8f8;\n\n\n}\nh2 {\n  margin: 0;\n}\n.global-wrapper {\n  position: relative;\n  width: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n  @media (min-width: 1440px) {\n    display: flex;\n    justify-content: center;\n  }\n}",".button {\r\n  border: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: none;\r\n  cursor: pointer;\r\n  &--purple {\r\n    background: $base-purble;\r\n    border-radius: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: all 0.3s;\r\n  \r\n    \r\n  }\r\n  &:hover {\r\n    transform: scale(1.1);\r\n  }\r\n}\r\n\r\n.more-button {\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  font-family: \"TT Lakes\", sans-serif;\r\n  align-items: center;\r\n  gap: 8px;\r\n  font-size: 16px;\r\n  padding: 0;\r\n  font-weight: 500;\r\n  &::before {\r\n    content: \"\";\r\n    display: inline-block;\r\n    vertical-align: bottom;\r\n    width: 24px;\r\n    height: 24px;\r\n    background-image: url(\"../icons/expand.svg\");\r\n  }\r\n  &--active::before {\r\n    transform: rotate(0.5turn);\r\n  }\r\n}\r\n","$white: #FFFFFF;\n$light-gray: #F8F8F8;\n$gray: #EAEAEA;\n$dark-gray: #7E7E82;\n$black: #1B1C21;\n$base-purble: #FF3E79;\n$dark-purple: #FF3E7867;\n$light-blue: #D9FFF5;\n$blue: #41F6D7;\n\n\n",".tele {\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n}\r\n.menu-box {\r\n  @media (min-width: 1440px) {\r\n    margin: 0;\r\n    position: static;\r\n    width: unset;\r\n  }\r\n  &--open {\r\n    top: 0;\r\n    z-index: 2;\r\n    position: fixed;\r\n    height: 100%;\r\n    width: 100%;\r\n    background: #ffffffc0;\r\n    display: block;\r\n  }\r\n  &__menu {\r\n    transition: all 0.2s;\r\n    left: -440px;\r\n  }\r\n  &--open &__menu {\r\n    transition: all 0.2s;\r\n    left: 0;\r\n  }\r\n}\r\n@media (min-width: 1440px) {\r\n  .menu-box {\r\n    margin: 0;\r\n    position: static;\r\n    transform: translateX(0);\r\n    width: unset;\r\n  }\r\n  .logo {\r\n    position: static;\r\n    margin: 0;\r\n  }\r\n}\r\n",".langs {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 16px;\r\n    &__item--active {\r\n      color: $dark-gray;\r\n    }\r\n    @media (min-width: 1440px) { \r\n      position: static;\r\n      margin: 0;\r\n    }\r\n  }",".contact-list {\r\n    display: flex;\r\n    gap: 16px;\r\n    flex-direction: column;\r\n    &__item {\r\n      display: flex;\r\n      align-items: center;\r\n      gap: 16px;\r\n    }\r\n  }",".burger-menu {\r\n  background: white;\r\n  z-index: 3;\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-y: auto;\r\n  display: flex;\r\n  gap: 50px;\r\n  flex-direction: column;\r\n  padding: 18px 24px;\r\n  padding-bottom: 32px;\r\n  transition: all 0.2s;\r\n  box-shadow: 16px 0px 52px 0px rgba(14, 24, 80, 0.2),\r\n    -2px 0px 4px 0px rgba(69, 79, 126, 0.02);\r\n  @media (min-width:361px) {\r\n    width: 320px;\r\n  }  \r\n  @media (min-width: 1440px) {\r\n    box-shadow: unset;\r\n    position: relative;\r\n    left: 0;\r\n    &__footer {\r\n      margin-top: 241px;\r\n    }\r\n  }\r\n  &__footer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: auto;\r\n    font-weight: 500;\r\n  }\r\n  &__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  &__list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 32px;\r\n  }\r\n  &__item {\r\n    display: flex;\r\n    align-items: center;\r\n    font-weight: 500;\r\n    cursor: pointer;\r\n    &:hover {\r\n      color: $dark-purple;\r\n      &::before {\r\n        position: absolute;\r\n      }\r\n    }\r\n  }\r\n  &__item--active {\r\n    color: #7e7e82;\r\n    &::before {\r\n      position: absolute;\r\n      content: \"\";\r\n      left: 0;\r\n      background-image: url(\"../../icons/highlight.svg\");\r\n      width: 4px;\r\n      height: 32px;\r\n    }\r\n  }\r\n  &__langs {\r\n    margin-top: 20px;\r\n  }\r\n}\r\n.logo {\r\n  position: absolute;\r\n  margin-left: 60px;\r\n}\r\n",".icon {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.icon-check-status {\r\n  background-image: url(../icons/checkstatus.svg);\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n.icon-setting {\r\n  background-image: url(../icons/repair.svg);\r\n}\r\n.icon-burger {\r\n  background-image: url(../icons/burger.svg);\r\n}\r\n.icon-phone {\r\n  background-image: url(../icons/call.svg);\r\n}\r\n.icon-message {\r\n  background-image: url(../icons/chat.svg);\r\n}\r\n.icon-profile {\r\n  background-image: url(../icons/profile.svg);\r\n}\r\n.icon-burger-close {\r\n  background-image: url(\"../icons/burger-close.svg\");\r\n}\r\n.icon-search {\r\n  background-image: url(\"../icons/search.svg\");\r\n}\r\n.icon-go {\r\n    background-image: url(../icons/go.svg);\r\n}\r\n","\r\n.nav-menu {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 24px 16px;\r\n    &__box {\r\n      display: flex;\r\n      justify-content: space-between;\r\n      align-items: center;\r\n      gap: 16px;\r\n      font-weight: 500;\r\n      line-height: 24px;\r\n      font-size: 16px;\r\n    }\r\n  }",".info-menu {\r\n    overflow-x: auto;\r\n    &__box {\r\n      display: flex;\r\n      gap: 16px;\r\n      white-space: nowrap;\r\n      padding: 2px 16px 14px;\r\n    }\r\n    &__item {\r\n      font-size: 16px;\r\n      font-weight: 500;\r\n      color: $dark-gray;\r\n      cursor: pointer;\r\n      padding: 8px 10px;\r\n      &--active {\r\n        border-radius: 6px;\r\n        border: 2px solid #b8ffec;\r\n        background: white;\r\n      }\r\n      &:hover:not(&--active) {\r\n        background: white;\r\n        border-radius: 6px;\r\n        outline: 2px solid $dark-purple;\r\n      \r\n      }\r\n    }\r\n    @media (min-width: 1440px) {\r\n      &__box {\r\n        flex-wrap: wrap;\r\n      }\r\n    }\r\n  }\r\n  ","\r\n\r\n.list {\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n.swiper {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding-bottom: 40px;\r\n  padding-left: 16px;\r\n}\r\n.swiper-slide {\r\n  text-align: center;\r\n  background: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 240px;\r\n}\r\n.swiper-pagination {\r\n  margin-top: 50px;\r\n}\r\n.visually-hidden {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  margin: -1px;\r\n  border: 0;\r\n  padding: 0;\r\n  white-space: nowrap;\r\n  -webkit-clip-path: inset(100%);\r\n  clip-path: inset(100%);\r\n  clip: rect(0 0 0 0);\r\n  overflow: hidden;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n.section-title {\r\n  padding: 16px;\r\n  margin-bottom: 24px;\r\n  font-size: 16px;\r\n  line-height: 24px;\r\n  text-transform: uppercase;\r\n  color: #7e7e82;\r\n  font-weight: 400;\r\n  border-top: 1px solid #d9fff5;\r\n  background: linear-gradient(135deg, #f8f8f8 0%, #ffffff 98.61%);\r\n}\r\n.brands {\r\n  &__button {\r\n    display: none;\r\n  }\r\n  &__link {\r\n    width: 240px;\r\n    height: 72px;\r\n    padding: 0 16px 0 16px;\r\n    border: 1px solid #eaeaea;\r\n    background-color: #fff;\r\n    border-radius: 6px;\r\n    gap: 16px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    &:hover {\r\n      border: 1px solid #ff3e79;\r\n    }\r\n  }\r\n  @media (min-width: 768px) {\r\n    &__content {\r\n      padding-bottom: 32px;\r\n    }\r\n    &__button {\r\n      display: flex;\r\n    }\r\n  }\r\n}\r\n.brands-list {\r\n  display: none;\r\n  flex-wrap: wrap;\r\n  row-gap: 16px;\r\n  -webkit-column-gap: 32px;\r\n  column-gap: 32px;\r\n  margin-bottom: 24px;\r\n  @media (min-width: 768px) {\r\n    display: flex;\r\n    column-gap: 24px;\r\n  }\r\n  &__image {\r\n    max-height: 45px;\r\n    max-width: 120px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .swiper {\r\n    display: none;\r\n  }\r\n  .section-title {\r\n    padding: 16px 24px;\r\n  }\r\n  .navigation__list {\r\n    padding: 19px 24px;\r\n  }\r\n  .navigation__left-column .navigation__divider {\r\n    display: block;\r\n  }\r\n\r\n  .main__description--first-half {\r\n    display: inline;\r\n  }\r\n\r\n  .main-header__title {\r\n    padding: 24px 0 24px 24px;\r\n  }\r\n  .content-wrapper {\r\n    display: flex;\r\n    align-content: flex-start;\r\n    padding: 0 24px 0 24px;\r\n  }\r\n  .features-list {\r\n    padding: 2px 24px 14px;\r\n  }\r\n}\r\n",".prices-info__content {\n\t@media (max-width: 768px) {\n\t\tpadding:0 16px 57px 16px;\n\t}\n\n\t@media (min-width: 768px) {\n\t\tpadding-bottom: 80px;\n  }\n\n\t@media (min-width: 1440px) {\n\t\tpadding-bottom: 83px;\n  }\n}\n\n.price-info__description {\n\tmax-width: 421px;\n\tmargin-bottom: 16px;\n\tfont-size: 14px;\n\tline-height: 20px;\n\tcolor: $black;\n}\n\n.price-info__commercial {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tgap: 10px;\n\n\t&:hover .price-info__commercial-text {\n\t\tcolor: $base-purble;\n\t}\n\n\t&:hover .svg--purple {\n\t\tfill: $dark-purple;\n\t}\n\n\t\n}\n\n.price-info__commercial-text {\n\ttransition: color 0.3s;\n\ttext-decoration: none;\n\tfont-size: 16px;\n\tline-height: 24px;\n\tcolor: $black;\n}",".prices__content {\n\t@media (min-width: 768px) {\n\t\tpadding-bottom: 24px;\n  }\n\n\t@media (min-width: 1440px) {\n\t\tpadding-bottom: 32px;\n  }\n}\n\n.prices__table {\n\tdisplay: none;\n\twidth: 100%; \n\tmax-width: 100%; \n\ttable-layout: fixed;\n\toverflow-x: auto;\n\tborder-collapse: collapse;\n\n\t@media (min-width: 768px) {\n\t\tdisplay: inline-table\n  }\n\n\t@media (min-width: 1440px) {\n\t\tdisplay: inline-table\n  }\n}\n\n.prices__link {\n\tposition: relative;\n\ttext-decoration: none;\n\twidth: 260px;\n\theight: 200px;\n\tpadding: 16px;\n\tborder: 1px solid $gray;\n\tbackground-color: $white;\n\tdisplay: flex;\n\talign-items: flex-start;\n\talign-content: space-between;\n\tjustify-content: space-between;\n\tflex-direction: column;\n\tborder-radius: 6px;\n\ttransition: all 0.3s;\n\tp {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\t&:hover {\n\t\tborder: 1px solid $base-purble;\n\t}\n\n\t&:hover .prices-list__button {\n\t\tborder: 2px solid $gray;\n\t\tbackground-color: $dark-purple;\n\t}\n}\n\n.prices-item__title {\n\tfont-size: 14px;\n\tline-height: 16px;\n\tcolor: $dark-gray;\n\tmargin-bottom: 4px;\n}\n\n.prices-item__description {\n\tcolor: $black;\n\tfont-size: 14px;\n\tline-height: 18px;\n\tmargin-bottom: 16px;\n\ttext-align: left;\n}\n\n.prices-item__button {\n\tposition: absolute;\n\tbottom: 16px;\n\tright: 16px;\n\tdisplay: flex;\n\tpadding: 0 12px;\n\tjustify-content: space-between;\n\tfont-weight: 500;\n\twidth: 119px;\n\theight: 32px;\n\tfont-size: 12px;\n\tline-height: 24px;\n\ttext-transform: uppercase;\n\tcolor: $white\n}",".table__title {\n\tfont-weight: 400;\n\tfont-size: 14px;\n\tline-height: 16px;\n\tcolor: $dark-gray;\n\ttext-align: left;\n\tpadding-bottom: 16px;\n\tpadding: 0 24px 16px 24px;\n}\n\n.table__item {\n\tfont-size: 14px;\n\tline-height: 18px;\n\tcolor: #1B1C21;\n\tpadding: 23px 24px;\n\tbackground-color: $white;\n\tborder-bottom: 1px solid $gray;\n\ttext-align: left;\n}\n\n.table__item--services {\n\ttext-align: left;\n}\n\n.table__item--radius {\n\tborder-radius: 6px;\n}\n\n.table__button {\n\tdisplay: flex;\n\tpadding: 0 12px;\n\tjustify-content: space-between;\n\tmargin-left: auto;\n\tfont-weight: 500;\n\theight: 32px;\n\tfont-size: 12px;\n\tgap: 30px;\n\tline-height: 24px;\n\ttext-transform: uppercase;\n\tcolor: $white\n}",".tech__content {\n  @media (min-width: 768px) {\n    padding-bottom: 32px;\n  }\n\n  @media (min-width: 1440px) {\n    padding-bottom: 50px;\n  }\n}\n\n.tech-list {\n  display: none;\n  flex-wrap: wrap;\n  row-gap: 16px;\n  column-gap: 32px;\n  margin-bottom: 24px;\n\n  @media (min-width: 768px) {\n    display: flex;\n    column-gap: 24px;\n  }\n\n  @media (min-width: 1440px) {\n    display: flex;\n    column-gap: 32px;\n  }\n}\n\n.tech__link {\n  text-decoration: none;\n  width: 240px;\n  height: 160px;\n  padding: 16px;\n  border: 1px solid $gray;\n  background-color: $white;\n  border-radius: 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: top;\n  transition: all 0.3s;\n\n  &:hover {\n    border: 1px solid $base-purble;\n  }\n\n  &:hover .tech-list__button {\n    --color_fill: #36a18f86;\n  }\n\n  @media (min-width: 768px) {\n    width: 224px;\n  }\n\n  @media (min-width: 1440px) {\n    width: 240px;\n  }\n}\n\n.tech-item__title {\n  font-size: 16px;\n  line-height: 24px;\n  color: #1b1c21;\n}\n\n.tech-list__button {\n  width: 40px;\n  height: 40px;\n  background-color: $white;\n  align-self: end;\n}\n.tech__button {\n  display: none;\n  @media (min-width: 768px) {\n    display: block;\n  }\n}\n",".divider {\r\n  height: 32px;\r\n  width: 2px;\r\n  border-radius: 1px;\r\n  background: #eaeaea;\r\n}\r\n.pc-visible {\r\n  display: none;\r\n}\r\n\r\n.phone-hidden {\r\n  display: none;\r\n}\r\n.content-box {\r\n  @media (min-width: 1440px) {\r\n    width: 1120px;\r\n    background: $light-gray;\r\n    padding-bottom: 42px;\r\n  }\r\n  &__header {\r\n    border-bottom: 1px solid $light-blue;\r\n    background-color: white;\r\n  }\r\n}\r\n.pc-flex {\r\n  display: none;\r\n}\r\n.main {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  background: $light-gray;\r\n  @media (min-width: 768px) {\r\n    &__content-wrapper {\r\n      display: flex;\r\n      padding: 10px 24px;\r\n      padding-bottom: 42px;\r\n      justify-content: space-between;\r\n    }\r\n    &__picture {\r\n      display: block;\r\n      border-radius: 10px;\r\n      flex-grow: 1;\r\n      flex-shrink: 1;\r\n      width: 50%;\r\n      max-width: 530px;\r\n    }\r\n    &__info {\r\n      flex-grow: 1;\r\n      flex-shrink: 1;\r\n    }\r\n  }\r\n  &__header-box {\r\n    position: relative;\r\n    &::before {\r\n      position: absolute;\r\n      content: \"\";\r\n      left: 0;\r\n      width: 4px;\r\n      height: 40px;\r\n      background-image: url(\"../../icons/highlight.svg\");\r\n    }\r\n  }\r\n  @media (min-width: 1440px) {\r\n    &__info {\r\n      max-width: 490px;\r\n    }\r\n  }\r\n  &__title {\r\n    padding-inline: 16px;\r\n    color: #1b1c21;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 28px;\r\n    font-family: \"TT Lakes Bold\";\r\n    font-weight: 700;\r\n    font-variation-settings: \"wdth\" 500;\r\n    white-space: nowrap;\r\n  }\r\n  &__info {\r\n    padding: 0px 16px;\r\n    padding-bottom: 16px;\r\n  }\r\n  &__description {\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    padding-right: 5px;\r\n  }\r\n  &__picture {\r\n    display: block;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .nav-menu {\r\n    padding: 24px 24px;\r\n  }\r\n  .phone-hidden {\r\n    display: unset;\r\n  }\r\n}\r\n\r\n@media (min-width: 1440px) {\r\n  .pc-visible {\r\n    display: unset;\r\n  }\r\n  .pc-static {\r\n    position: static;\r\n  }\r\n  .pc-flex {\r\n    display: flex;\r\n  }\r\n\r\n  .pc-hidden {\r\n    display: none;\r\n  }\r\n  .header {\r\n    border-bottom: none;\r\n  }\r\n  .nav-menu {\r\n    padding-bottom: 8px;\r\n  }\r\n}\r\n",".footer {\n\tborder-top: 1px solid $light-blue;\n\tmargin: 0 auto;\n\tfont-size: 16px;\n\tfont-weight: 500;\n\tbackground-color: $light-gray;\n\twidth: 100%;\n\n\t@media (min-width: 1440px) {\n\t\twidth: 1120px;\n  }\n}\n\n\n.footer-list {\n\tpadding: 16px 0;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\talign-items: center;\n\ttext-align: center;\n\tgap: 16px;\n\n\t@media (min-width: 768px) {\n\t\tpadding: 32px 24px;\n\t\tflex-direction: row;\n  }\n\n\t@media (min-width: 1440px) {\n\t\tpadding: 32px 32px;\n  }\n}\n\n.footer-list__item {\n\tfont-size: 14px;\n\tline-height: 16px;\n\tcolor: $dark-gray;\n\n\t@media (min-width: 768px) {\n\t\tmax-width: 218px;\n  }\n}",".call-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 16px;\n}\n\n.call-form__input {\n\tborder: 1px solid $gray;\n\tborder-radius: 8px;\n\tpadding: 12px 16px;\n\ttransition: border 0.3s;\n\n\t&::placeholder {\n\tcolor: #212529;\n\topacity: 0.4;\n\t}\n\n\t&:hover {\n\t\tborder: 1px solid $base-purble;\n\t}\n\n\t&:focus {\n\t\tborder: 1px solid $dark-purple;\n\t\toutline: 0;\n\t} \n}\n\n.call-form__textarea {\n\tborder: 1px solid $gray;\n\tborder-radius: 8px;\n\tpadding: 12px 16px;\n\tresize: none;\n\ttransition: border 0.3s;\n\n\t&::placeholder {\n\t\tcolor: #212529;\n\t\topacity: 0.4;\n\t}\n\t\n\t&:hover {\n\t\tborder: 1px solid $base-purble;\n\t}\n\n\t&:focus {\n\t\tborder: 1px solid $dark-purple;\n\t\toutline: 0;\n\t} \n}\n\n.call-main__info {\n\tfont-size: 14px;\n\tline-height: 16px;\n\tcolor: $dark-gray;\n}\n\n.call-main__info--purple {\n\tcolor: $base-purble;\n}",".call-header__title {\n\tmargin: 0;\n\tfont-size: 28px;\n\tfont-weight: 700;\n\tcolor: #1b1c21;\n}\n\n.call-header__title::before {\n\tcontent: \"\";\n\twidth: 4px;\n\theight: 40px;\n\tbackground: $blue;\n\ttransform: matrix(-1, 0, 0, 1, 0, 0);\n\tposition: absolute;\n\tmargin: -10px 0 0 -16px;\n\n\t@media (min-width: 768px) {\n    margin: -10px 0 0 -32px;\n  }\n\n\t@media (min-width: 1440px) {\n\t\tmargin: -10px 0 0 -32px;\n  }\n}\n\n.call-header__button {\n\twidth: 40px;\n\theight: 40px;\n\n\t@media (min-width: 768px) {\n\t\tposition: absolute;\n\t\ttop: 30px;\n\t\tleft: -60px;\n  }\n}",".call-main {\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 16px;\n}",".call {\n  padding: 24px 16px 0 16px;\n  width: 320px;\n  height: 100vh;\n  display: flex;\n  position: fixed;\n  z-index: 3;\n  top: 0px;\n  right: -440px;\n  flex-direction: column;\n  min-height: 100vh;\n  scrollbar-width: none;\n  background-color: $white;\n  transition: right 0.2s;\n\n  @media (min-width: 320px) {\n    box-shadow: -2px 0px 4px rgba(69, 79, 126, 0.02),\n      16px 0px 52px rgba(14, 24, 80, 0.2);\n  }\n\n  @media (min-width: 768px) {\n    padding: 40px 32px 0 32px;\n  }\n}\n\n.call__header {\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  row-gap: 40px;\n}\n\n.call--animation-open {\n  width: 320px;\n  right: 0px;\n\n  @media (min-width: 768px) {\n    width: 440px;\n    right: 0px;\n  }\n}\n",".feedback-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 16px;\n}\n\n.feedback-form__input {\n\tborder: 1px solid $gray;\n\tborder-radius: 8px;\n\tpadding: 12px 16px;\n\ttransition: border 0.3s;\n\n\t&::placeholder {\n\tcolor: #212529;\n\topacity: 0.4;\n\t}\n\n\t&:hover {\n\t\tborder: 1px solid $base-purble;\n\t}\n\n\t&:focus {\n\t\tborder: 1px solid $dark-purple;\n\t\toutline: 0;\n\t} \n}\n\n.feedback-form__textarea {\n\tborder: 1px solid $gray;\n\tborder-radius: 8px;\n\tpadding: 12px 16px;\n\tresize: none;\n\ttransition: border 0.3s;\n\n\t&::placeholder {\n\t\tcolor: #212529;\n\t\topacity: 0.4;\n\t}\n\t\n\t&:hover {\n\t\tborder: 1px solid $base-purble;\n\t}\n\n\t&:focus {\n\t\tborder: 1px solid $dark-purple;\n\t\toutline: 0;\n\t} \n}\n\n.feedback-main__info {\n\tfont-size: 14px;\n\tline-height: 16px;\n\tcolor: $dark-gray;\n}\n\n.feedback-main__info--purple {\n\tcolor: $base-purble;\n}",".feedback-header__title {\n\tmargin: 0;\n\tfont-size: 28px;\n\tfont-weight: 700;\n\tcolor: #1b1c21;\n}\n\n.feedback-header__title::before {\n\tcontent: \"\";\n\twidth: 4px;\n\theight: 40px;\n\tbackground: $blue;\n\ttransform: matrix(-1, 0, 0, 1, 0, 0);\n\tposition: absolute;\n\tmargin: -10px 0 0 -16px;\n\n\t@media (min-width: 768px) {\n    margin: -10px 0 0 -32px;\n  }\n\n\t@media (min-width: 1440px) {\n\t\tmargin: -10px 0 0 -32px;\n  }\n}\n\n.feedback-header__button {\n\twidth: 40px;\n\theight: 40px;\n\n\t@media (min-width: 768px) {\n\t\tposition: absolute;\n\t\ttop: 30px;\n\t\tleft: -60px;\n  }\n}",".feedback-main {\n\tdisplay: flex;\n\tflex-direction: column;\n\trow-gap: 16px;\n}",".feedback {\n\tpadding: 24px 16px 0 16px;\n\twidth: 320px;\n\theight: 100vh;\n\tdisplay: flex;\n\tposition: fixed;\n\tz-index: 3;\n\ttop: 0px;\n\tright: -440px;\n\tflex-direction: column;\n\tmin-height: 100vh;\n\tscrollbar-width: none;\n\tbackground-color: $white;\n\ttransition: right 0.2s;\n\n\t@media (min-width: 320px) {\n\t\tbox-shadow: -2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2);\n  }\n\n\t@media (min-width: 768px) {\n\t\tpadding: 40px 32px 0 32px;\n  }\n}\n\n.feedback__header {\n\tmargin-bottom: 24px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\trow-gap: 40px;\n}\n\n.feedback--open {\n\twidth: 320px;\n\tright: 0px;\n\n\t@media (min-width: 768px) {\n\t\twidth: 440px;\n\t\tright: 0px;\n  }\n}",".popup-box {\r\n    &--open {\r\n      position: fixed;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      background-color: #f2f2f2cc;\r\n      z-index: 2;\r\n    }\r\n    &--open &__menu {\r\n      width: 320px;\r\n      right: 0px;\r\n  \r\n      @media (min-width: 768px) {\r\n        width: 440px;\r\n        right: 0px;\r\n      }\r\n    }\r\n    &--open--left &__menu {\r\n      width: 320px;\r\n      left: 0px;\r\n  \r\n      @media (min-width: 768px) {\r\n        width: 440px;\r\n        right: 0px;\r\n      }\r\n    }\r\n\r\n  }",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/getUrl.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/getUrl.js ***!
  \***********************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \***************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/.pnpm/html-loader@4.2.0_webpack@5.88.2/node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.88.2/node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/Group.svg */ "./src/icons/Group.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/CPS_about.jpg */ "./src/img/CPS_about.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Lenovo-logo.png */ "./src/img/Lenovo-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Samsung-logo.png */ "./src/img/Samsung-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Apple-logo.png */ "./src/img/Apple-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Bosh-logo.png */ "./src/img/Bosh-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./img/HP-logo.png */ "./src/img/HP-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Acer-logo.png */ "./src/img/Acer-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./img/ViewSonic-logo.png */ "./src/img/ViewSonic-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Sony-logo.png */ "./src/img/Sony-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Asus-logo.png */ "./src/img/Asus-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Philips-logo.png */ "./src/img/Philips-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./img/Epson-logo.png */ "./src/img/Epson-logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./icons/go.svg */ "./src/icons/go.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_pnpm_html_loader_4_2_0_webpack_5_88_2_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css\">\n    <" + "script defer src=\"https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js\"><" + "/script>\n    <title>Document</title>\n</head>\n\n<body>\n    <div class=\"global-wrapper\">\n        <div class=\"menu-box \">\n            <div class=\"burger-menu menu-box__menu\">\n                <div class=\"burger-menu__header header\">\n                    <button\n                        class=\"button header__item icon button-burger-close  burger__button icon-burger-close pc-hidden \"></button>\n                    <img class=\"header__item logo pc-static\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Логотип компании\">\n                    <button class=\"button header__item burger__button icon icon-search\"></button>\n                </div>\n                <div class=\"burger-menu__list\">\n                    <div class=\"burger-menu__item burger-menu__item--active\">\n                        Ремонт техники\n                    </div>\n                    <div class=\"burger-menu__item\">\n                        Услуги и сервисы\n                    </div>\n                    <div class=\"burger-menu__item\">\n                        Корпоративным клиентам\n                    </div>\n                    <div class=\"burger-menu__item\">\n                        Продавцам техники\n                    </div>\n                    <div class=\"burger-menu__item\">\n                        Партнерам\n                    </div>\n                    <div class=\"burger-menu__item\">\n                        Производителям\n                    </div>\n                    <div class=\"burger-menu__item\">\n                        Контакты\n                    </div>\n                </div>\n                <footer class=\"burger-menu__footer\">\n                    <div class=\"burger-menu__contact-list contact-list\">\n                        <div class=\"contact-list__item\">\n                            <button class=\"button button-phone icon icon-phone \"></button>\n                            <button class=\"button button-feedback icon icon-message \"></button>\n                            <button class=\"button button-profile icon icon-profile \"></button>\n                        </div>\n                        <div class=\"contact-list__item\">mail@cps.com</div>\n                        <div class=\"contact-list__item tele\">8 800 890 8900</div>\n                    </div>\n                    <div class=\"burger-menu__langs langs\">\n                        <div class=\"langs__item langs__item--active\">RU</div>\n                        <div class=\"langs__item\">EN</div>\n                        <div class=\"langs__item\">CH</div>\n                    </div>\n                </footer>\n            </div>\n        </div>\n        <div class=\"content-box \">\n            <header class=\"header content-box__header pc-hidden\">\n                <div class=\"nav-menu\">\n                    <div class=\"nav-menu__box\">\n                        <button class=\"button button-burger-open  icon  icon-burger nav-menu__item\">\n                        </button>\n                        <div class=\"divider phone-hidden\"></div>\n                        <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" class=\"logo\">\n                    </div>\n                    <div class=\"nav-menu__box\">\n                        <button class=\"nav-menu__item button phone-hidden icon icon-phone pc-hidden\">\n                        </button>\n                        <button class=\"nav-menu__item button phone-hidden icon icon-message pc-hidden\">\n                        </button>\n                        <button class=\"nav-menu__item button phone-hidden icon icon-profile pc-hidden\">\n                        </button>\n                        <div class=\"nav-menu__item divider pc-hidden\"></div>\n                        <button class=\"nav-menu__item button  icon icon-setting\">\n                        </button>\n                        <button class=\"nav-menu__item button icon icon-search\">\n                        </button>\n                    </div>\n                </div>\n            </header>\n            <main class=\"main\">\n                <header class=\"main__header\">\n                    <div class=\"main__header-box nav-menu\">\n\n                        <h1 class=\"main__title nav-menu__box\">Услуги и сервисы</h1>\n                        <div class=\"nav-menu__box pc-flex\">\n                            <div class=\"nav-menu__item \">Оставить заявку</div>\n                            <button class=\"nav-menu__item button  icon icon-setting\">\n                            </button>\n                            <div class=\"nav-menu__item \">Статус ремонта</div>\n                            <button class=\"nav-menu__item button icon icon-search\">\n                            </button>\n                        </div>\n                    </div>\n                </header>\n                <div class=\"info-menu\">\n                    <div class=\"info-menu__box\">\n                        <div class=\"info-menu__item info-menu__item--active\">Ремонтируемые устройства</div>\n                        <div class=\"info-menu__item\">Ремонтируемые бренды</div>\n                        <div class=\"info-menu__item\">Дополнительные услуги</div>\n                        <div class=\"info-menu__item\">Адреса сервисных центров</div>\n\n                        <div class=\"info-menu__item\">Цены на услуги</div>\n                        <div class=\"info-menu__item\">Специальные цены</div>\n                        <div class=\"info-menu__item\">Отзывы</div>\n                    </div>\n                </div>\n                <div class=\"main__content-wrapper\">\n                    <div class=\"main__info\">\n                        <p class=\"main__description\">Мы являемся авторизованным сервисным центром по ремонту техники\n                            Dell.\n                            Только у нас вы можете отремонтировать свой ноутбук Dell с официальной гарантией\n                            производителя.\n                        </p>\n                        <p class=\"main__description phone-hidden\"> Мы успешно работаем с 1992 года и заслужили репутацию\n                            надежного партнера<span class=\"pc-visible\">,\n                                что подтверждает большое количество постоянных клиентов. Мы гордимся тем, что к нам\n                                обращаются по\n                                рекомендациям и, в свою очередь, советуют нас родным и близким.</span></p>\n                        <button class=\"button more-button\">Читать далее</button>\n                    </div>\n                    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" class=\"main__picture\" alt=\"Логотип CPS\">\n\n                </div>\n                <section class=\"brands\">\n                    <h2 class=\"section-title\">Ремонт техники различных брендов</h2>\n                    <div class=\"swiper brands__cards\">\n                        <div class=\"swiper-wrapper\">\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип бренда Lenovo\" />\n                                    <button type=\"button\" class=\"button brands-list__button icon icon-go \">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Логотип бренда Samsung\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Логотип бренда Apple\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Логотип бренда Apple\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\" src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\"\n                                        alt=\"Логотип бренда Apple\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Логотип бренда Apple\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Логотип бренда Apple\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Логотип бренда Apple\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Логотип бренда Lenovo\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Логотип бренда Lenovo\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                        src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Логотип бренда Lenovo\" />\n                                    <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"swiper-pagination brands-pagination\"></div>\n                    </div>\n                    <div class=\"content-wrapper\">\n                        <div class=\"brands__content\">\n                            <ul class=\"list brands-list\">\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Логотип бренда Lenovo\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"Логотип бренда Samsung\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"Логотип бренда Apple\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"Логотип бренда Bosh\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"Логотип бренда HP\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"Логотип бренда Acer\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Логотип бренда ViewSonic\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Логотип бренда Sony\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item brands-list__item--hidden hidden\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Логотип бренда Asus\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item brands-list__item--hidden hidden\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Логотип бренда Epson\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"brands-list__item brands-list__item--hidden hidden\">\n                                    <a class=\"brands__link\" href=\"\"> <img class=\"brands-list__image\"\n                                            src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Логотип бренда Philips\" />\n                                        <button type=\"button\" class=\"button  brands-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                            </ul>\n                            <button type=\"button\" class=\"button brands__button more-button\"> <span>Показать всё</span>\n                            </button>\n                        </div>\n                    </div>\n                </section>\n                <section class=\"main__tech tech\">\n                    <h2 class=\"section-title\">Ремонт различных видов техники</h2>\n                    <!-- Swiper Начало -->\n                    <div class=\"swiper tech__cards\">\n                        <div class=\"swiper-wrapper\">\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт ноутбуков</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go \">\n                                        <svg class=\"logo33\">\n                                            <use xlink:href=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\"></use>\n                                        </svg>\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт планшетов</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт ПК</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт мониторов</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт телевизоров</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт пылесосов</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт кофемашин</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт смартфонов</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"tech__link\" href=\"\">\n                                    <p class=\"tech-item__title\">Ремонт принтеров</p>\n                                    <button type=\"button\" class=\"button button--white tech-list__button icon icon-go\">\n\n                                    </button>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"swiper-pagination tech-pagination\"></div>\n                    </div>\n                    <!-- Swiper Конец -->\n                    <div class=\"content-wrapper\">\n                        <div class=\"tech__content\">\n                            <ul class=\"list tech-list\">\n                                <li class=\"tech-list__item tech-item\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт ноутбуков</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item tech-item\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт планшетов</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт ПК</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item tech-list__item--hidden\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт мониторов</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item tech-list__item--hidden hidden\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт телевизоров</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item tech-list__item--hidden hidden\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт пылесосов</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item tech-list__item--hidden hidden\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт кофемашин</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item tech-list__item--hidden hidden\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт смартфонов</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                                <li class=\"tech-list__item tech-list__item--hidden hidden\">\n                                    <a class=\"tech__link\" href=\"\">\n                                        <p class=\"tech-item__title\">Ремонт принтеров</p>\n                                        <button type=\"button\"\n                                            class=\"button button--white tech-list__button icon icon-go\">\n\n                                        </button>\n                                    </a>\n                                </li>\n                            </ul>\n                            <button type=\"button\" class=\"button tech__button more-button\"> <span>Показать всё</span>\n                            </button>\n                        </div>\n                    </div>\n                </section>\n                <section class=\"main__prices prices\">\n                    <h2 class=\"section-title\">Цены на услуги</h2>\n                    <!-- Swiper Начало -->\n                    <div class=\"swiper prices__cards\">\n                        <div class=\"swiper-wrapper\">\n                            <div class=\"swiper-slide\">\n                                <a class=\"prices__link\" href=\"\">\n                                    <p class=\"prices-item__title\">Ремонтные услуги</p>\n                                    <p class=\"prices-item__description\">Диагностика устройства и выдача акта</p>\n                                    <p class=\"prices-item__title\">Цена</p>\n                                    <p class=\"prices-item__description\">Бесплатно</p>\n                                    <p class=\"prices-item__title\">Срок</p>\n                                    <p class=\"prices-item__description\">30 мин</p>\n                                    <button type=\"button\" class=\"button button--purple prices-item__button\">\n                                        <span>Заказать</span>\n                                        <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"10\"\n                                            fill=\"none\">\n                                            <path fill-rule=\"evenodd\"\n                                                d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                clip-rule=\"evenodd\" />\n                                        </svg>\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"prices__link\" href=\"\">\n                                    <p class=\"prices-item__title\">Ремонтные услуги</p>\n                                    <p class=\"prices-item__description\">Замена дисплея на смартфоне среднего бюджета</p>\n                                    <p class=\"prices-item__title\">Цена</p>\n                                    <p class=\"prices-item__description\">1 000 ₽</p>\n                                    <p class=\"prices-item__title\">Срок</p>\n                                    <p class=\"prices-item__description\">30-120 мин</p>\n                                    <button type=\"button\" class=\"button button--purple prices-item__button \">\n                                        <span>Заказать</span>\n                                        <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"10\"\n                                            fill=\"none\">\n                                            <path fill-rule=\"evenodd\"\n                                                d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                clip-rule=\"evenodd\" />\n                                        </svg>\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"prices__link\" href=\"\">\n                                    <p class=\"prices-item__title\">Ремонтные услуги</p>\n                                    <p class=\"prices-item__description\">Замена полифонического динамика</p>\n                                    <p class=\"prices-item__title\">Цена</p>\n                                    <p class=\"prices-item__description\">1 000 ₽</p>\n                                    <p class=\"prices-item__title\">Срок</p>\n                                    <p class=\"prices-item__description\">30-120 мин</p>\n                                    <button type=\"button\" class=\"button button--purple prices-item__button\">\n                                        <span>Заказать</span>\n                                        <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"10\"\n                                            fill=\"none\">\n                                            <path fill-rule=\"evenodd\"\n                                                d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                clip-rule=\"evenodd\" />\n                                        </svg>\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"prices__link\" href=\"\">\n                                    <p class=\"prices-item__title\">Ремонтные услуги</p>\n                                    <p class=\"prices-item__description\">Тестирование с выдачей технического заключения\n                                    </p>\n                                    <p class=\"prices-item__title\">Цена</p>\n                                    <p class=\"prices-item__description\">1 000 ₽</p>\n                                    <p class=\"prices-item__title\">Срок</p>\n                                    <p class=\"prices-item__description\">30-120 мин</p>\n                                    <button type=\"button\" class=\"button button--purple prices-item__button\">\n                                        <span>Заказать</span>\n                                        <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"10\"\n                                            fill=\"none\">\n                                            <path fill-rule=\"evenodd\"\n                                                d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                clip-rule=\"evenodd\" />\n                                        </svg>\n                                    </button>\n                                </a>\n                            </div>\n                            <div class=\"swiper-slide\">\n                                <a class=\"prices__link\" href=\"\">\n                                    <p class=\"prices-item__title\">Ремонтные услуги</p>\n                                    <p class=\"prices-item__description\">Замена программного обеспечения</p>\n                                    <p class=\"prices-item__title\">Цена</p>\n                                    <p class=\"prices-item__description\">1 000 ₽</p>\n                                    <p class=\"prices-item__title\">Срок</p>\n                                    <p class=\"prices-item__description\">30-120 мин</p>\n                                    <button type=\"button\" class=\"button button--purple prices-item__button\">\n                                        <span>Заказать</span>\n                                        <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"10\"\n                                            fill=\"none\">\n                                            <path fill-rule=\"evenodd\"\n                                                d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                clip-rule=\"evenodd\" />\n                                        </svg>\n                                    </button>\n                                </a>\n                            </div>\n                        </div>\n                        <div class=\"swiper-pagination prices-pagination\"></div>\n                    </div>\n                    <!-- Swiper Конец -->\n                    <div class=\"content-wrapper\">\n                        <div class=\"prices__content\">\n                            <table class=\"prices__table table\">\n                                <tbody>\n                                    <tr>\n                                        <th class=\"table__title\">Ремонтные услуги</th>\n                                        <th class=\"table__title\">Цена</th>\n                                        <th class=\"table__title\">Срок</th>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"table__item table__item--services table__item--radius\">Диагностика\n                                        </td>\n                                        <td class=\"table__item\">Бесплатно</td>\n                                        <td class=\"table__item\">30 мин</td>\n                                        <td class=\"table__item table__item--button table__item--radius\">\n                                            <button type=\"button\" class=\"button button--purple table__button\">\n                                                <span>Заказать</span>\n                                                <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\"\n                                                    height=\"10\" fill=\"none\">\n                                                    <path fill-rule=\"evenodd\"\n                                                        d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                        clip-rule=\"evenodd\" />\n                                                </svg>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"table__item table__item--services\">Замена дисплея</td>\n                                        <td class=\"table__item\">1 000 ₽</td>\n                                        <td class=\"table__item\">30-120 мин</td>\n                                        <td class=\"table__item table__item--button\">\n                                            <button type=\"button\" class=\"button button--purple table__button\">\n                                                <span>Заказать</span>\n                                                <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\"\n                                                    height=\"10\" fill=\"none\">\n                                                    <path fill-rule=\"evenodd\"\n                                                        d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                        clip-rule=\"evenodd\" />\n                                                </svg>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"table__item table__item--services\">Замена полифонического динамика\n                                        </td>\n                                        <td class=\"table__item\">1 000 ₽</td>\n                                        <td class=\"table__item\">30-120 мин</td>\n                                        <td class=\"table__item table__item--button\">\n                                            <button type=\"button\" class=\"button button--purple table__button\">\n                                                <span>Заказать</span>\n                                                <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\"\n                                                    height=\"10\" fill=\"none\">\n                                                    <path fill-rule=\"evenodd\"\n                                                        d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                        clip-rule=\"evenodd\" />\n                                                </svg>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"table__item table__item--services\">Тестирование с выдачей\n                                            технического заключения</td>\n                                        <td class=\"table__item\">1 000 ₽</td>\n                                        <td class=\"table__item\">30-120 мин</td>\n                                        <td class=\"table__item table__item--button\">\n                                            <button type=\"button\" class=\"button button--purple table__button\">\n                                                <span>Заказать</span>\n                                                <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\"\n                                                    height=\"10\" fill=\"none\">\n                                                    <path fill-rule=\"evenodd\"\n                                                        d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                        clip-rule=\"evenodd\" />\n                                                </svg>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"table__item table__item--services table__item--radius\">Замена\n                                            программного обеспечения</td>\n                                        <td class=\"table__item\">1 000 ₽</td>\n                                        <td class=\"table__item\">30-120 мин</td>\n                                        <td class=\"table__item table__item--button table__item--radius\">\n                                            <button type=\"button\" class=\"button button--purple table__button\">\n                                                <span>Заказать</span>\n                                                <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\"\n                                                    height=\"10\" fill=\"none\">\n                                                    <path fill-rule=\"evenodd\"\n                                                        d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                                        clip-rule=\"evenodd\" />\n                                                </svg>\n                                            </button>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </section>\n                <section class=\"main__price-info price-info\">\n                    <div class=\"content-wrapper\">\n                        <div class=\"prices-info__content\">\n                            <p class=\"price-info__description\">Все цены указаны с учетом НДС. Стоимость ремонта указана\n                                на единичную услугу. Для получения коммерческого предложения на постоянное обслуживание,\n                                оставьте заявку.</p>\n                            <div class=\"price-info__commercial\"> <a class=\"price-info__commercial-text\" href=\"\">Получить\n                                    коммерческое предложение</a>\n                                <svg class=\"svg--purple\" xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"10\"\n                                    fill=\"none\">\n                                    <path fill-rule=\"evenodd\"\n                                        d=\"M.294 8.236a1 1 0 0 0 0 1.407l.046.047a1 1 0 0 0 1.422 0l3.944-3.987a1 1 0 0 0 0-1.406L1.762.31A1 1 0 0 0 .34.31L.294.358a1 1 0 0 0 0 1.406L3.496 5 .294 8.236Z\"\n                                        clip-rule=\"evenodd\" />\n                                </svg>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            </main>\n\n            <footer class=\"footer\">\n                <ul class=\"list footer-list\">\n                    <li class=\"footer-list__item\">© 2019 CPS\n                        <br>Разработано командой Apesong\n                    </li>\n                    <li class=\"footer-list__item\">Политика конфиденциальности</li>\n                    <li class=\"footer-list__item\">Информация, размещенная на данной странице, не является публичной\n                        офертой</li>\n                </ul>\n            </footer>\n        </div>\n        <div class=\"feedback-box popup-box\">\n            <div class=\"feedback popup-box__menu\">\n                <section class=\"feedback__header feedback-header\">\n                    <button class=\"button button--purple feedback__button-close icon    icon-burger-close   feedback-header__button\"> <span class=\"visually-hidden\">Закрыть меня</span>\n                    </button>\n                    <h2 class=\"feedback-header__title\">Обратная связь</h2>\n                </section>\n                <section class=\"feedback__main feedback-main\">\n                    <form class=\"feedback-main__form feedback-form\" action=\"\" method=\"get\">\n                        <input class=\"feedback-form__input\" type=\"text\" name=\"name\" id=\"name\" placeholder=\"Имя\">\n                        <input class=\"feedback-form__input\" type=\"text\" name=\"phone\" id=\"phone\" placeholder=\"Телефон\">\n                        <input class=\"feedback-form__input\" type=\"text\" name=\"mail\" id=\"mail\"\n                            placeholder=\"Электронная почта\">\n                        <textarea class=\"feedback-form__textarea\" name=\"comment\" name=\"mail\" id=\"mail\"\n                            placeholder=\"Сообщение\" cols=\"30\" rows=\"5\"></textarea>\n                    </form>\n                    <p class=\"feedback-main__info\">Нажимая “отправить”, вы даете согласие на <span\n                            class=\"feedback-main__info--purple\">обработку персональных данных</span> и соглашаетесь с\n                        нашей <span class=\"feedback-main__info--purple\">политикой конфиденциальности</span></p>\n                    <button type=\"button\" class=\"button button--purple table__button\"> <span>Отправить</span>\n                        <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"10\" fill=\"none\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                clip-rule=\"evenodd\" />\n                        </svg>\n                    </button>\n                </section>\n            </div>\n        </div>\n        <div class=\"call-box popup-box\">\n            <div class=\"call popup-box__menu\">\n                <section class=\"call__header call-header\">\n                    <button class=\"button button--purple icon icon-burger-close call__button-close call-header__button\">\n           \n                    </button>\n                    <h2 class=\"call-header__title\">Заказать звонок</h2>\n                </section>\n                <section class=\"call__main call-main\">\n                    <form class=\"call-main__form call-form\" action=\"\" method=\"get\">\n                        <input class=\"call-form__input\" type=\"text\" name=\"phone\" id=\"phone\" placeholder=\"Телефон\">\n                    </form>\n                    <p class=\"call-main__info\">Нажимая “отправить”, вы даете согласие на <span\n                            class=\"call-main__info--purple\">обработку персональных данных</span> и соглашаетесь с нашей\n                        <span class=\"call-main__info--purple\">политикой конфиденциальности</span></p>\n                    <button type=\"button\" class=\"button button--purple table__button\"> <span>Отправить</span>\n                        <svg class=\"svg--white\" xmlns=\"http://www.w3.org/2000/svg\" width=\"7\" height=\"10\" fill=\"none\">\n                            <path fill-rule=\"evenodd\"\n                                d=\"M3.8 5 .792 2.229A1 1 0 0 1 .785.764L.92.637A1 1 0 0 1 2.284.633l4.654 4.31a.078.078 0 0 1 0 .114L2.347 9.31A1.092 1.092 0 1 1 .865 7.704L3.8 5Z\"\n                                clip-rule=\"evenodd\" />\n                        </svg>\n                    </button>\n                </section>\n            </div>\n        </div>\n    </div>\n\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/.pnpm/html-loader@4.2.0_webpack@5.88.2/node_modules/html-loader/dist/runtime/getUrl.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/html-loader@4.2.0_webpack@5.88.2/node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_3_yhhu7h7snnbkl7jqfxewrll65y_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_yhhu7h7snnbkl7jqfxewrll65y_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_63_6_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!../node_modules/.pnpm/postcss-loader@7.3.3_yhhu7h7snnbkl7jqfxewrll65y/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../node_modules/.pnpm/group-css-media-queries-loader@4.3.0_yhhu7h7snnbkl7jqfxewrll65y/node_modules/group-css-media-queries-loader/lib/index.js!../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../node_modules/.pnpm/sass-loader@13.3.2_sass@1.63.6+webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./index.scss */ "./node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./node_modules/.pnpm/postcss-loader@7.3.3_yhhu7h7snnbkl7jqfxewrll65y/node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/.pnpm/group-css-media-queries-loader@4.3.0_yhhu7h7snnbkl7jqfxewrll65y/node_modules/group-css-media-queries-loader/lib/index.js!./node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!./node_modules/.pnpm/sass-loader@13.3.2_sass@1.63.6+webpack@5.88.2/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[1].use[5]!./src/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_3_yhhu7h7snnbkl7jqfxewrll65y_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_yhhu7h7snnbkl7jqfxewrll65y_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_63_6_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_3_yhhu7h7snnbkl7jqfxewrll65y_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_yhhu7h7snnbkl7jqfxewrll65y_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_63_6_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_3_yhhu7h7snnbkl7jqfxewrll65y_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_yhhu7h7snnbkl7jqfxewrll65y_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_63_6_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_node_modules_pnpm_postcss_loader_7_3_3_yhhu7h7snnbkl7jqfxewrll65y_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_pnpm_group_css_media_queries_loader_4_3_0_yhhu7h7snnbkl7jqfxewrll65y_node_modules_group_css_media_queries_loader_lib_index_js_node_modules_pnpm_resolve_url_loader_5_0_0_node_modules_resolve_url_loader_index_js_node_modules_pnpm_sass_loader_13_3_2_sass_1_63_6_webpack_5_88_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_1_use_5_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*********************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*************************************************************************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \********************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**************************************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.ttf":
/*!**********************************************************!*\
  !*** ./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/TTLakesCondensed-Bold.ttf";

/***/ }),

/***/ "./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff":
/*!***********************************************************!*\
  !*** ./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakesCondensed-Bold.woff";

/***/ }),

/***/ "./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff2":
/*!************************************************************!*\
  !*** ./src/fonts/TTLakes-Bold/TTLakesCondensed-Bold.woff2 ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakesCondensed-Bold.woff2";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium/TT Lakes Neue Trial Bold.ttf":
/*!***************************************************************!*\
  !*** ./src/fonts/TTLakes-Medium/TT Lakes Neue Trial Bold.ttf ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/TT Lakes Neue Trial Bold.ttf";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium/TTLakes-Medium.ttf":
/*!*****************************************************!*\
  !*** ./src/fonts/TTLakes-Medium/TTLakes-Medium.ttf ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/TTLakes-Medium.ttf";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium/TTLakes-Medium.woff":
/*!******************************************************!*\
  !*** ./src/fonts/TTLakes-Medium/TTLakes-Medium.woff ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium.woff";

/***/ }),

/***/ "./src/fonts/TTLakes-Medium/TTLakes-Medium.woff2":
/*!*******************************************************!*\
  !*** ./src/fonts/TTLakes-Medium/TTLakes-Medium.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Medium.woff2";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular/TTLakes-Regular.ttf":
/*!*******************************************************!*\
  !*** ./src/fonts/TTLakes-Regular/TTLakes-Regular.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/TTLakes-Regular.ttf";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular/TTLakes-Regular.woff":
/*!********************************************************!*\
  !*** ./src/fonts/TTLakes-Regular/TTLakes-Regular.woff ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.woff";

/***/ }),

/***/ "./src/fonts/TTLakes-Regular/TTLakes-Regular.woff2":
/*!*********************************************************!*\
  !*** ./src/fonts/TTLakes-Regular/TTLakes-Regular.woff2 ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/TTLakes-Regular.woff2";

/***/ }),

/***/ "./src/icons/Group.svg":
/*!*****************************!*\
  !*** ./src/icons/Group.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Group.svg";

/***/ }),

/***/ "./src/icons/burger-close.svg":
/*!************************************!*\
  !*** ./src/icons/burger-close.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/burger-close.svg";

/***/ }),

/***/ "./src/icons/burger.svg":
/*!******************************!*\
  !*** ./src/icons/burger.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/burger.svg";

/***/ }),

/***/ "./src/icons/call.svg":
/*!****************************!*\
  !*** ./src/icons/call.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/call.svg";

/***/ }),

/***/ "./src/icons/chat.svg":
/*!****************************!*\
  !*** ./src/icons/chat.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/chat.svg";

/***/ }),

/***/ "./src/icons/checkstatus.svg":
/*!***********************************!*\
  !*** ./src/icons/checkstatus.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/checkstatus.svg";

/***/ }),

/***/ "./src/icons/expand.svg":
/*!******************************!*\
  !*** ./src/icons/expand.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/expand.svg";

/***/ }),

/***/ "./src/icons/go.svg":
/*!**************************!*\
  !*** ./src/icons/go.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/go.svg";

/***/ }),

/***/ "./src/icons/highlight.svg":
/*!*********************************!*\
  !*** ./src/icons/highlight.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/highlight.svg";

/***/ }),

/***/ "./src/icons/profile.svg":
/*!*******************************!*\
  !*** ./src/icons/profile.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/profile.svg";

/***/ }),

/***/ "./src/icons/repair.svg":
/*!******************************!*\
  !*** ./src/icons/repair.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/repair.svg";

/***/ }),

/***/ "./src/icons/search.svg":
/*!******************************!*\
  !*** ./src/icons/search.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/search.svg";

/***/ }),

/***/ "./src/img/Acer-logo.png":
/*!*******************************!*\
  !*** ./src/img/Acer-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Acer-logo.png";

/***/ }),

/***/ "./src/img/Apple-logo.png":
/*!********************************!*\
  !*** ./src/img/Apple-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Apple-logo.png";

/***/ }),

/***/ "./src/img/Asus-logo.png":
/*!*******************************!*\
  !*** ./src/img/Asus-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Asus-logo.png";

/***/ }),

/***/ "./src/img/Bosh-logo.png":
/*!*******************************!*\
  !*** ./src/img/Bosh-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Bosh-logo.png";

/***/ }),

/***/ "./src/img/CPS_about.jpg":
/*!*******************************!*\
  !*** ./src/img/CPS_about.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/CPS_about.jpg";

/***/ }),

/***/ "./src/img/Epson-logo.png":
/*!********************************!*\
  !*** ./src/img/Epson-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Epson-logo.png";

/***/ }),

/***/ "./src/img/HP-logo.png":
/*!*****************************!*\
  !*** ./src/img/HP-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/HP-logo.png";

/***/ }),

/***/ "./src/img/Lenovo-logo.png":
/*!*********************************!*\
  !*** ./src/img/Lenovo-logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Lenovo-logo.png";

/***/ }),

/***/ "./src/img/Philips-logo.png":
/*!**********************************!*\
  !*** ./src/img/Philips-logo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Philips-logo.png";

/***/ }),

/***/ "./src/img/Samsung-logo.png":
/*!**********************************!*\
  !*** ./src/img/Samsung-logo.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Samsung-logo.png";

/***/ }),

/***/ "./src/img/Sony-logo.png":
/*!*******************************!*\
  !*** ./src/img/Sony-logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/Sony-logo.png";

/***/ }),

/***/ "./src/img/ViewSonic-logo.png":
/*!************************************!*\
  !*** ./src/img/ViewSonic-logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ViewSonic-logo.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _js_install_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/install-swiper */ "./src/js/install-swiper.js");
/* harmony import */ var _js_install_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_install_swiper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_dropdown_brands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/dropdown_brands */ "./src/js/dropdown_brands.js");
/* harmony import */ var _js_dropdown_brands__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_dropdown_brands__WEBPACK_IMPORTED_MODULE_4__);





})();

/******/ })()
;
//# sourceMappingURL=main.edc95c7de8a401d3712d.js.map