/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_functions/add-class-names.js":
/*!*******************************************!*\
  !*** ./src/_functions/add-class-names.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClassNames: () => (/* binding */ addClassNames)
/* harmony export */ });
// add class names

function addClassNames(attributes, classNamesString) {
  const {
    belowNavbar,
    touchFooter,
    display,
    marginBefore,
    marginAfter,
    marginLeft,
    marginRight,
    resMargin1Breakpoint,
    resMargin1Position,
    resMargin1Size,
    resMargin2Breakpoint,
    resMargin2Position,
    resMargin2Size,
    paddingBefore,
    paddingAfter,
    paddingLeft,
    paddingRight,
    bgColor,
    textColor,
    textBgColor,
    textSize,
    rounded,
    textAlign,
    resTextAlignBreakpoint,
    resTextAlign,
    textShadow,
    fontWeight,
    inverseTextColor,
    headingInheritTextColor,
    headingInheritFontWeight,
    width,
    height,
    imgThumbnail,
    borderState,
    border,
    hoverShadow,
    hoverMove,
    disabled,
    verticalAlign,
    speechBubble,
    isAlert,
    state,
    objectFit,
    overflow,
    multilayer,
    zIndex,
    isBannerInner,
    isTop0,
    isBottom0,
    isLeft0,
    isRight0,
    position,
    flexDirection
  } = attributes;
  const classNames = typeof classNamesString != 'undefined' && classNamesString.trim().length > 0 ? classNamesString.split(' ') : [];
  if (!!belowNavbar) {
    classNames.push('below-navbar-content');
  }
  if (!!touchFooter) {
    classNames.push('mb-n-footer-space');
  }
  if (!!display) {
    classNames.push('d-' + display);
  }
  if (!!marginBefore && marginBefore === marginAfter && marginBefore === marginLeft && marginBefore === marginRight) {
    // all
    classNames.push('m-' + marginBefore);
  } else {
    // top & bottom
    if (!!marginBefore && marginBefore === marginAfter) {
      classNames.push('my-' + marginBefore);
    } else {
      if (!!marginBefore) {
        classNames.push('mt-' + marginBefore);
      }
      if (!!marginAfter) {
        classNames.push('mb-' + marginAfter);
      }
    }

    // left & right
    if (!!marginLeft && marginLeft === marginRight) {
      classNames.push('mx-' + marginLeft);
    } else {
      if (!!marginLeft) {
        classNames.push('ml-' + marginLeft);
      }
      if (!!marginRight) {
        classNames.push('mr-' + marginRight);
      }
    }
  }
  if (!!resMargin1Breakpoint && !!resMargin1Position && !!resMargin1Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin1Position === 'all' ? '' : resMargin1Position) + '-' + (resMargin1Breakpoint === 'xs' ? '' : resMargin1Breakpoint + '-') + resMargin1Size);
  }
  if (!!resMargin2Breakpoint && !!resMargin2Position && !!resMargin2Size) {
    // examples: `my-sm-3`, `my-0
    classNames.push('m' + (resMargin2Position === 'all' ? '' : resMargin2Position) + '-' + (resMargin2Breakpoint === 'xs' ? '' : resMargin2Breakpoint + '-') + resMargin2Size);
  }
  if (!!paddingBefore && paddingBefore === paddingAfter && paddingBefore === paddingLeft && paddingBefore === paddingRight) {
    // all
    classNames.push('p-' + paddingBefore);
  } else {
    // top & bottom
    if (!!paddingBefore && paddingBefore === paddingAfter) {
      classNames.push('py-' + paddingBefore);
    } else {
      // top
      if (!!paddingBefore) {
        classNames.push('pt-' + paddingBefore);
      }
      // bottom
      if (!!paddingAfter) {
        classNames.push('pb-' + paddingAfter);
      }
    }

    // left & right
    if (!!paddingLeft && paddingLeft === paddingRight) {
      classNames.push('px-' + paddingLeft);
    } else {
      // left
      if (!!paddingLeft) {
        classNames.push('pl-' + paddingLeft);
      }
      // right
      if (!!paddingRight) {
        classNames.push('pr-' + paddingRight);
      }
    }
  }
  if (!!bgColor) {
    // Check if bgColor contains string `-transparent`, if so, add additional class `bg-opacity-50` and remove `-transparent` from bgColor.
    // Check if contains `-opaque`, too, add `bg-opacity-75` and remove `-opaque`.
    if (bgColor.indexOf('-transparent') !== -1) {
      classNames.push('bg-opacity-50');
      classNames.push('bg-' + bgColor.replace('-transparent', ''));
    } else if (bgColor.indexOf('-opaque') !== -1) {
      classNames.push('bg-opacity-75');
      classNames.push('bg-' + bgColor.replace('-opaque', ''));
    } else {
      classNames.push('bg-' + bgColor);
    }
  }
  if (!!textColor) {
    classNames.push('text-' + textColor);
  }
  if (!!textBgColor) {
    classNames.push('text-bg-' + textBgColor);
  }
  if (!!textSize) {
    classNames.push(textSize);
  }
  if (!!textShadow) {
    classNames.push('text-shadow-' + textShadow);
  }
  if (!!fontWeight) {
    classNames.push('font-weight-' + fontWeight);
  }
  if (!!inverseTextColor) {
    classNames.push('text-inverse');
  }
  if (!!headingInheritTextColor) {
    classNames.push('heading-inherit-text');
  }
  if (!!headingInheritFontWeight) {
    classNames.push('heading-inherit-font-weight');
  }
  if (!!rounded) {
    if (rounded == true || rounded == 'rounded') {
      classNames.push('rounded');
    } else {
      classNames.push('rounded-' + rounded);
    }
  }
  if (!!textAlign) {
    classNames.push('text-' + textAlign);
  }
  if (!!resTextAlignBreakpoint && !!resTextAlign) {
    classNames.push('text-' + resTextAlignBreakpoint + '-' + resTextAlign);
  }
  if (!!width) {
    classNames.push('w-' + width);
  }
  if (!!height) {
    classNames.push('h-' + height);
  }
  if (!!imgThumbnail) {
    classNames.push('img-thumbnail');
  }
  if (!!border) {
    if (border == 'true') {
      classNames.push('border');
    } else if (border == 'x') {
      classNames.push('border-left');
      classNames.push('border-right');
    } else if (border == 'y') {
      classNames.push('border-top');
      classNames.push('border-bottom');
    } else if (border == 'u') {
      classNames.push('border-left');
      classNames.push('border-right');
      classNames.push('border-bottom');
    } else if (border == 'inverted-u') {
      classNames.push('border-left');
      classNames.push('border-right');
      classNames.push('border-top');
    } else {
      // TODO: what about multipla values, e.g. top and bottom?
      classNames.push('border-' + border);
    }
  }
  if (!!borderState) {
    classNames.push('border-' + borderState);
  }
  if (!!hoverShadow) {
    classNames.push('hover-shadow');
  }
  if (!!hoverMove) {
    classNames.push('hover-move');
  }
  if (!!disabled) {
    classNames.push('disabled');
  }
  if (!!verticalAlign) {
    classNames.push('align-' + verticalAlign);
  }
  if (!!speechBubble) {
    classNames.push('speech-bubble');
    if (speechBubble != 'md') {
      classNames.push('speech-bubble-' + speechBubble);
    }
  }
  if (!!isAlert) {
    classNames.push('alert');
    if (!!state) {
      classNames.push('alert-' + state);
    }
  }
  if (!!objectFit) {
    classNames.push('object-fit-' + objectFit);
  }
  if (!!overflow) {
    classNames.push('overflow-' + overflow);
  }
  if (!!multilayer) {
    classNames.push('multilayer-' + multilayer);
  }
  if (!!zIndex) {
    classNames.push('z-' + zIndex);
  }
  if (!!isBannerInner) {
    classNames.push('banner-inner w-100 position-relative');
  }
  if (!!isTop0) {
    classNames.push('top-0');
  }
  if (!!isBottom0) {
    classNames.push('bottom-0');
  }
  if (!!isLeft0) {
    classNames.push('left-0');
  }
  if (!!isRight0) {
    classNames.push('right-0');
  }
  if (!!position) {
    classNames.push('position-' + position);
  }

  // Do after handle display flex above.
  if (!!flexDirection) {
    // Check if `d-flex` is already in classNames, if not, add it.
    if (classNames.indexOf('d-flex') === -1) {
      classNames.push('d-flex');
    }
    classNames.push('flex-' + flexDirection);
  }
  return classNames.join(' ');
}

/***/ }),

/***/ "./src/_functions/controls.js":
/*!************************************!*\
  !*** ./src/_functions/controls.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alertToggle: () => (/* binding */ alertToggle),
/* harmony export */   alignItemsSelect: () => (/* binding */ alignItemsSelect),
/* harmony export */   bannerInnerToggle: () => (/* binding */ bannerInnerToggle),
/* harmony export */   bannerSizeSelect: () => (/* binding */ bannerSizeSelect),
/* harmony export */   bannerTypeSelect: () => (/* binding */ bannerTypeSelect),
/* harmony export */   belowNavbarToggle: () => (/* binding */ belowNavbarToggle),
/* harmony export */   bgAttachmentFixedLimitedToggle: () => (/* binding */ bgAttachmentFixedLimitedToggle),
/* harmony export */   bgAttachmentSelect: () => (/* binding */ bgAttachmentSelect),
/* harmony export */   bgColorSelect: () => (/* binding */ bgColorSelect),
/* harmony export */   bgPositionSelect: () => (/* binding */ bgPositionSelect),
/* harmony export */   bgSizeSelect: () => (/* binding */ bgSizeSelect),
/* harmony export */   borderSelect: () => (/* binding */ borderSelect),
/* harmony export */   borderStateSelect: () => (/* binding */ borderStateSelect),
/* harmony export */   bottom0Toggle: () => (/* binding */ bottom0Toggle),
/* harmony export */   breakpointsSelect: () => (/* binding */ breakpointsSelect),
/* harmony export */   buttonStateSelect: () => (/* binding */ buttonStateSelect),
/* harmony export */   colorSelect: () => (/* binding */ colorSelect),
/* harmony export */   dataFnInput: () => (/* binding */ dataFnInput),
/* harmony export */   dataFnOptionsInput: () => (/* binding */ dataFnOptionsInput),
/* harmony export */   dataFnTargetInput: () => (/* binding */ dataFnTargetInput),
/* harmony export */   dataTgInput: () => (/* binding */ dataTgInput),
/* harmony export */   disableResponsiveDownsizingToggle: () => (/* binding */ disableResponsiveDownsizingToggle),
/* harmony export */   disabledToggle: () => (/* binding */ disabledToggle),
/* harmony export */   displaySelect: () => (/* binding */ displaySelect),
/* harmony export */   flexDirectionSelect: () => (/* binding */ flexDirectionSelect),
/* harmony export */   fontWeightSelect: () => (/* binding */ fontWeightSelect),
/* harmony export */   forInput: () => (/* binding */ forInput),
/* harmony export */   headingInheritFontWeightToggle: () => (/* binding */ headingInheritFontWeightToggle),
/* harmony export */   headingInheritTextColorToggle: () => (/* binding */ headingInheritTextColorToggle),
/* harmony export */   heightSelect: () => (/* binding */ heightSelect),
/* harmony export */   hiddenToggle: () => (/* binding */ hiddenToggle),
/* harmony export */   iconFamilySelect: () => (/* binding */ iconFamilySelect),
/* harmony export */   iconKeyInput: () => (/* binding */ iconKeyInput),
/* harmony export */   idInput: () => (/* binding */ idInput),
/* harmony export */   ignoreMailtoSpamProtectionToggle: () => (/* binding */ ignoreMailtoSpamProtectionToggle),
/* harmony export */   imgUploadButton: () => (/* binding */ imgUploadButton),
/* harmony export */   imgUploadClickableImg: () => (/* binding */ imgUploadClickableImg),
/* harmony export */   inlineTemplateSelect: () => (/* binding */ inlineTemplateSelect),
/* harmony export */   inverseTextColorToggle: () => (/* binding */ inverseTextColorToggle),
/* harmony export */   isGalleryParentToggle: () => (/* binding */ isGalleryParentToggle),
/* harmony export */   justifyContentSelect: () => (/* binding */ justifyContentSelect),
/* harmony export */   left0Toggle: () => (/* binding */ left0Toggle),
/* harmony export */   linkUrlInput: () => (/* binding */ linkUrlInput),
/* harmony export */   marginAfterSelect: () => (/* binding */ marginAfterSelect),
/* harmony export */   marginBeforeSelect: () => (/* binding */ marginBeforeSelect),
/* harmony export */   marginLeftSelect: () => (/* binding */ marginLeftSelect),
/* harmony export */   marginRightSelect: () => (/* binding */ marginRightSelect),
/* harmony export */   multilayerSelect: () => (/* binding */ multilayerSelect),
/* harmony export */   nodeNameSelect: () => (/* binding */ nodeNameSelect),
/* harmony export */   objectFitSelect: () => (/* binding */ objectFitSelect),
/* harmony export */   onclickInput: () => (/* binding */ onclickInput),
/* harmony export */   overflowSelect: () => (/* binding */ overflowSelect),
/* harmony export */   paddingAfterSelect: () => (/* binding */ paddingAfterSelect),
/* harmony export */   paddingBeforeSelect: () => (/* binding */ paddingBeforeSelect),
/* harmony export */   paddingLeftSelect: () => (/* binding */ paddingLeftSelect),
/* harmony export */   paddingRightSelect: () => (/* binding */ paddingRightSelect),
/* harmony export */   portraitImgMaxWidthBreakpointInput: () => (/* binding */ portraitImgMaxWidthBreakpointInput),
/* harmony export */   positionSelect: () => (/* binding */ positionSelect),
/* harmony export */   relInput: () => (/* binding */ relInput),
/* harmony export */   resMarginBreakpointsSelect: () => (/* binding */ resMarginBreakpointsSelect),
/* harmony export */   resMarginPositionSelect: () => (/* binding */ resMarginPositionSelect),
/* harmony export */   resMarginSizeSelect: () => (/* binding */ resMarginSizeSelect),
/* harmony export */   right0Toggle: () => (/* binding */ right0Toggle),
/* harmony export */   roleInput: () => (/* binding */ roleInput),
/* harmony export */   roundedToggle: () => (/* binding */ roundedToggle),
/* harmony export */   scaleSelect: () => (/* binding */ scaleSelect),
/* harmony export */   sizeSelect: () => (/* binding */ sizeSelect),
/* harmony export */   stateSelect: () => (/* binding */ stateSelect),
/* harmony export */   stateTypeSelect: () => (/* binding */ stateTypeSelect),
/* harmony export */   tabindexInput: () => (/* binding */ tabindexInput),
/* harmony export */   targetToggle: () => (/* binding */ targetToggle),
/* harmony export */   textAlignSelect: () => (/* binding */ textAlignSelect),
/* harmony export */   textAlignToolbar: () => (/* binding */ textAlignToolbar),
/* harmony export */   textColorSelect: () => (/* binding */ textColorSelect),
/* harmony export */   textShadowSelect: () => (/* binding */ textShadowSelect),
/* harmony export */   textSizeSelect: () => (/* binding */ textSizeSelect),
/* harmony export */   top0Toggle: () => (/* binding */ top0Toggle),
/* harmony export */   touchFooterToggle: () => (/* binding */ touchFooterToggle),
/* harmony export */   typeInput: () => (/* binding */ typeInput),
/* harmony export */   uiTemplateSelect: () => (/* binding */ uiTemplateSelect),
/* harmony export */   verticalAlignSelect: () => (/* binding */ verticalAlignSelect),
/* harmony export */   widthSelect: () => (/* binding */ widthSelect),
/* harmony export */   zIndexSelect: () => (/* binding */ zIndexSelect)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ "./src/_functions/utilities.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// wp import




// functions


// internal vars

const marginPaddingSizes = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
}, {
  value: '0',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('none (0)', 'bsx-blocks')
}, {
  value: '1',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('extra small', 'bsx-blocks')
}, {
  value: '2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('small', 'bsx-blocks')
}, {
  value: '3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('medium', 'bsx-blocks')
}, {
  value: '4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('large', 'bsx-blocks')
}, {
  value: '5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('extra large', 'bsx-blocks')
}];
const breakpointsWithUnset = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'xs',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default (XS up)', 'bsx-blocks')
}, {
  value: 'sm',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('SM up', 'bsx-blocks')
}, {
  value: 'md',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('MD up', 'bsx-blocks')
}, {
  value: 'lg',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('LG up', 'bsx-blocks')
}, {
  value: 'xl',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('XL up', 'bsx-blocks')
}];
const marginPaddingPositions = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'all',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('All', 'bsx-blocks')
}, {
  value: 't',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Before', 'bsx-blocks')
}, {
  value: 'b',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('After', 'bsx-blocks')
}, {
  value: '2',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Y (before & after)', 'bsx-blocks')
}, {
  value: '3',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'bsx-blocks')
}, {
  value: '4',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'bsx-blocks')
}, {
  value: '5',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('X (left & right)', 'bsx-blocks')
}];
const states = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White', 'bsx-blocks')
}, {
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark', 'bsx-blocks')
}];
const textColorStates = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White', 'bsx-blocks')
}, {
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark', 'bsx-blocks')
}, {
  value: 'muted',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Muted', 'bsx-blocks')
}, {
  value: 'body',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Body', 'bsx-blocks')
}, {
  value: 'white-50',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White transparent', 'bsx-blocks')
}, {
  value: 'black-50',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black transparent', 'bsx-blocks')
}, {
  value: 'inherit',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inherit', 'bsx-blocks')
}];

// doesn’t have '', has additional 'text-link'
const btnStates = [{
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Danger', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Warning', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark', 'bsx-blocks')
}, {
  value: 'link',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Button', 'bsx-blocks')
}, {
  value: 'text-link',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text link', 'bsx-blocks')
}];
const bgStates = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'white',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White', 'bsx-blocks')
}, {
  value: 'white-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White opaque', 'bsx-blocks')
}, {
  value: 'white-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('White transparent', 'bsx-blocks')
}, {
  value: 'black',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black', 'bsx-blocks')
}, {
  value: 'black-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black opaque', 'bsx-blocks')
}, {
  value: 'black-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black transparent', 'bsx-blocks')
}, {
  value: 'primary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary', 'bsx-blocks')
}, {
  value: 'primary-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary opaque', 'bsx-blocks')
}, {
  value: 'primary-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary transparent', 'bsx-blocks')
}, {
  value: 'secondary',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary', 'bsx-blocks')
}, {
  value: 'secondary-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary opaque', 'bsx-blocks')
}, {
  value: 'secondary-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Secondary transparent', 'bsx-blocks')
}, {
  value: 'success',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success', 'bsx-blocks')
}, {
  value: 'success-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success opaque', 'bsx-blocks')
}, {
  value: 'success-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Success transparent', 'bsx-blocks')
}, {
  value: 'danger',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Danger', 'bsx-blocks')
}, {
  value: 'danger-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Danger opaque', 'bsx-blocks')
}, {
  value: 'danger-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Danger transparent', 'bsx-blocks')
}, {
  value: 'warning',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Warning', 'bsx-blocks')
}, {
  value: 'warning-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Warning opaque', 'bsx-blocks')
}, {
  value: 'warning-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Warning transparent', 'bsx-blocks')
}, {
  value: 'info',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info', 'bsx-blocks')
}, {
  value: 'info-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info opaque', 'bsx-blocks')
}, {
  value: 'info-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Info transparent', 'bsx-blocks')
}, {
  value: 'light',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light', 'bsx-blocks')
}, {
  value: 'light-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light opaque', 'bsx-blocks')
}, {
  value: 'light-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light transparent', 'bsx-blocks')
}, {
  value: 'dark',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark', 'bsx-blocks')
}, {
  value: 'dark-opaque',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark opaque', 'bsx-blocks')
}, {
  value: 'dark-transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark transparent', 'bsx-blocks')
}, {
  value: 'transparent',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transparent', 'bsx-blocks')
}];
const textAlignValues = [{
  value: '',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
}, {
  value: 'left',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('left', 'bsx-blocks')
}, {
  value: 'center',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'bsx-blocks')
}, {
  value: 'right',
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'bsx-blocks')
}];
const alignmentControls = [{
  icon: 'editor-alignleft',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align left', 'bsx-blocks'),
  align: 'left'
}, {
  icon: 'editor-aligncenter',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align center', 'bsx-blocks'),
  align: 'center'
}, {
  icon: 'editor-alignright',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align right', 'bsx-blocks'),
  align: 'right'
}, {
  icon: 'editor-alignleft',
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks'),
  align: ''
}];

// toggles

const ignoreMailtoSpamProtectionToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spam protected email link (default activated)', 'bsx-blocks'),
    checked: !value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('If activated email will not be easily readable for machines.', 'bsx-blocks')
  });
};
const targetToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Open in new tab', 'bsx-blocks'),
    checked: value == '_blank',
    onChange: onChangeFunction
  });
};
const disabledToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disabled', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const belowNavbarToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Below navbar', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable if element is overlayed by navbar and needs a spacer top.', 'bsx-blocks')
  });
};
const touchFooterToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Touch footer', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable if element touch footer without spacing.', 'bsx-blocks')
  });
};
const inverseTextColorToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inverse text color', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const headingInheritTextColorToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inherit text color to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const headingInheritFontWeightToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inherit font weight to headings', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const roundedToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rounded', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const alertToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alert', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const isGalleryParentToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is image gallery parent', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const bannerInnerToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Is Banner Inner', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const hiddenToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden (optional)', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};

// url inputs

const linkUrlInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.URLInput, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link URL', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    __nextHasNoMarginBottom: true
  });
};
const bgAttachmentFixedLimitedToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Limit fixed background', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('If enabled large displays (>=2.000px) will have static background attachement.', 'bsx-blocks')
  });
};
const disableResponsiveDownsizingToggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Disable responsive image downsizing', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enable if you don’t want smaller responsive image sizes, since small devices display image in large dimensions.', 'bsx-blocks')
  });
};
const top0Toggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const bottom0Toggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const left0Toggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};
const right0Toggle = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right: 0', 'bsx-blocks'),
    checked: !!value,
    onChange: onChangeFunction
  });
};

// text inputs

const relInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rel (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('data-fn (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnOptionsInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('data-fn-options (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataFnTargetInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('data-fn-target (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const dataTgInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('data-tg (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const iconKeyInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon key', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const portraitImgMaxWidthBreakpointInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Portrait image max width breakpoint (numeric in px)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Portrait image will be shown up to this width.', 'bsx-blocks')
  });
};
const roleInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Role (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const tabindexInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tabindex (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const forInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('For (optional, required if Node Name is Label)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const typeInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('type (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const onclickInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Onclick (optional)', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};
const idInput = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ID', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction
  });
};

// selects

const stateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('State', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bgColorSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = bgStates;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textColorSelect = (value, onChangeFunction, allowedValues, label) => {
  const defaultValues = textColorStates;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: !!label ? label : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const buttonStateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = btnStates;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Color / Appearance', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const colorSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const stateTypeSelect = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Button Type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: 'outline',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Outline', 'bsx-blocks')
    }, {
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Filled', 'bsx-blocks')
    }]
  });
};
const sizeSelect = (value, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: [{
      value: '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
    }, {
      value: 'sm',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small', 'bsx-blocks')
    }, {
      value: 'lg',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large', 'bsx-blocks')
    }]
  });
};
const marginLeftSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const marginRightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const marginBeforeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spacer before element', 'bsx-blocks')
  });
};
const marginAfterSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spacer after element', 'bsx-blocks')
  });
};
const resMarginBreakpointsSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = breakpointsWithUnset;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive margin breakpoint', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const resMarginPositionSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = marginPaddingPositions;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive margin position', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const resMarginSizeSelect = (value, onChangeFunction, allowedValues, sizeString) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive margin size', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const displaySelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'block',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block', 'bsx-blocks')
  }, {
    value: 'inline-block',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline-block', 'bsx-blocks')
  }, {
    value: 'inline',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inline', 'bsx-blocks')
  }, {
    value: 'flex',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flex', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const verticalAlignSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'middle',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Middle', 'bsx-blocks')
  }, {
    value: 'baseline',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Baseline', 'bsx-blocks')
  }, {
    value: 'top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'bsx-blocks')
  }, {
    value: 'bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'bsx-blocks')
  }, {
    value: 'text-bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text ottom', 'bsx-blocks')
  }, {
    value: 'text-top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text top', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Vertical align', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const alignItemsSelect = (value, onChangeFunction, allowedValues, disabled, sizeString) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'start',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start', 'bsx-blocks')
  }, {
    value: 'center',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center', 'bsx-blocks')
  }, {
    value: 'end',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('End', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Align items', 'bsx-blocks') + (!!sizeString ? ' ' + sizeString : ''),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    disabled: disabled
  });
};
const paddingBeforeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding before', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner spacer before', 'bsx-blocks')
  });
};
const paddingAfterSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding after', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner spacer after', 'bsx-blocks')
  });
};
const paddingLeftSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding left', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner spacer left', 'bsx-blocks')
  });
};
const paddingRightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = marginPaddingSizes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding right', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inner spacer right', 'bsx-blocks')
  });
};
const nodeNameSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'div',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('div', 'bsx-blocks')
  }, {
    value: 'span',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('span', 'bsx-blocks')
  }, {
    value: 'label',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('label', 'bsx-blocks')
  }, {
    value: 'section',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('section', 'bsx-blocks')
  }, {
    value: 'figure',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('figure', 'bsx-blocks')
  }, {
    value: 'ul',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ul', 'bsx-blocks')
  }, {
    value: 'ol',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('ol', 'bsx-blocks')
  }, {
    value: 'li',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('li', 'bsx-blocks')
  }, {
    value: 'h1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('h1', 'bsx-blocks')
  }, {
    value: 'h2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('h2', 'bsx-blocks')
  }, {
    value: 'h3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('h3', 'bsx-blocks')
  }, {
    value: 'h4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('h4', 'bsx-blocks')
  }, {
    value: 'h5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('h5', 'bsx-blocks')
  }, {
    value: 'h6',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('h6', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Node name', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Node name (please edit only if you know what you’re doing)', 'bsx-blocks')
  });
};
const bgPositionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: 'c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center center', 'bsx-blocks')
  }, {
    value: 'c25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center 25%', 'bsx-blocks')
  }, {
    value: 'c66',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center 66%', 'bsx-blocks')
  }, {
    value: 'c75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center 75%', 'bsx-blocks')
  }, {
    value: 'ct',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Center top', 'bsx-blocks')
  }, {
    value: 'lc',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left center', 'bsx-blocks')
  }, {
    value: 'rc',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right center', 'bsx-blocks')
  }, {
    value: '33c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('33% center', 'bsx-blocks')
  }, {
    value: '66c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('66% center', 'bsx-blocks')
  }, {
    value: '80c',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('80% center', 'bsx-blocks')
  }, {
    value: '66t',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('66% top', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background position', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bgSizeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: 'cover',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cover', 'bsx-blocks')
  }, {
    value: 'contain',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contain', 'bsx-blocks')
  }, {
    value: '100a',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('100% auto', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const bannerTypeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fix height', 'bsx-blocks')
  }, {
    value: 'vh',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Viewport dependent height', 'bsx-blocks')
  }, {
    value: 'st',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Static height', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Banner height type', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Viewport dependant height will be e.g. all viewport height or viewport height - ? pixels. Static height instead depends only on the banners contents.', 'bsx-blocks')
  });
};
const bannerSizeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1 (biggest)', 'bsx-blocks')
  }, {
    value: '2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'bsx-blocks')
  }, {
    value: '3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'bsx-blocks')
  }, {
    value: '4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'bsx-blocks')
  }, {
    value: '5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'bsx-blocks')
  }, {
    value: '6',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6 (smallest)', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Banner height size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Choose from 1 (maximum) to 3 (minimum)', 'bsx-blocks')
  });
};
const bgAttachmentSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'static',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('static', 'bsx-blocks')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('fixed', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background attachement', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textShadowSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'dark',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Dark', 'bsx-blocks')
  }, {
    value: 'darker',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Darker', 'bsx-blocks')
  }, {
    value: 'darkest',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Darkest', 'bsx-blocks')
  }, {
    value: 'light',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light', 'bsx-blocks')
  }, {
    value: 'primary',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Primary', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text shadow', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textSizeSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'lead',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Larger', 'bsx-blocks')
  }, {
    value: 'small',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Smaller', 'bsx-blocks')
  }, {
    value: 'h6',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading 6 (smallest)', 'bsx-blocks')
  }, {
    value: 'h5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading 5', 'bsx-blocks')
  }, {
    value: 'h4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading 4', 'bsx-blocks')
  }, {
    value: 'h3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading 3', 'bsx-blocks')
  }, {
    value: 'h2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading 2', 'bsx-blocks')
  }, {
    value: 'h1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Heading 1 (biggest)', 'bsx-blocks')
  }, {
    value: 'display-4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large 4 (smallest)', 'bsx-blocks')
  }, {
    value: 'display-3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large 3', 'bsx-blocks')
  }, {
    value: 'display-2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large 2', 'bsx-blocks')
  }, {
    value: 'display-1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large 1 (biggest)', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text size', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const fontWeightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'light',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light', 'bsx-blocks')
  }, {
    value: 'normal',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal', 'bsx-blocks')
  }, {
    value: 'bold',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bold', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font weight', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const borderSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'true',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Around', 'bsx-blocks')
  }, {
    value: 'top',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Top', 'bsx-blocks')
  }, {
    value: 'bottom',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bottom', 'bsx-blocks')
  }, {
    value: 'left',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left', 'bsx-blocks')
  }, {
    value: 'right',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right', 'bsx-blocks')
  }, {
    value: 'x',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('X (left & right)', 'bsx-blocks')
  }, {
    value: 'y',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Y (top & bottom)', 'bsx-blocks')
  }, {
    value: 'u',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('U (left, right & bottom)', 'bsx-blocks')
  }, {
    value: 'inverted-u',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Inverted U (left, right & top)', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const borderStateSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = states;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border color', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const iconFamilySelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– Default –', 'bsx-blocks')
  }, {
    value: 's',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid', 'bsx-blocks')
  }, {
    value: 'b',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Brand', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon family', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const widthSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: '25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('25 %', 'bsx-blocks')
  }, {
    value: '50',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('50 %', 'bsx-blocks')
  }, {
    value: '75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('75 %', 'bsx-blocks')
  }, {
    value: '100',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('100 %', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Width', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const heightSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: '25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('25 %', 'bsx-blocks')
  }, {
    value: '50',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('50 %', 'bsx-blocks')
  }, {
    value: '75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('75 %', 'bsx-blocks')
  }, {
    value: '100',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('100 %', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Height', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const objectFitSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'cover',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Cover', 'bsx-blocks')
  }, {
    value: 'contain',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Contain', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Object-Fit', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const overflowSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'hidden',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hidden', 'bsx-blocks')
  }, {
    value: 'auto',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overflow', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const justifyContentSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'space-between',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space between', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Justify content', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const flexDirectionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'column',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Column', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Flex direction', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const breakpointsSelect = (value, onChangeFunction, allowedValues, labelString) => {
  const defaultValues = breakpointsWithUnset;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: !!labelString ? ' ' + labelString : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Breakpoint', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const textAlignSelect = (value, onChangeFunction, allowedValues, labelString) => {
  const defaultValues = textAlignValues;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: !!labelString ? ' ' + labelString : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text align', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const multilayerSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'parent',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Parent', 'bsx-blocks')
  }, {
    value: 'absolute',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Absolute', 'bsx-blocks')
  }, {
    value: 'static',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Static', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Multilayer', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const positionSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: 'relative',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Relative', 'bsx-blocks')
  }, {
    value: 'absolute',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Absolute', 'bsx-blocks')
  }, {
    value: 'static',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Static', 'bsx-blocks')
  }, {
    value: 'fixed',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Fixed', 'bsx-blocks')
  }, {
    value: 'sticky',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Sticky', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Position', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};
const zIndexSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('– unset –', 'bsx-blocks')
  }, {
    value: '-1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('-1', 'bsx-blocks')
  }, {
    value: '0',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('0', 'bsx-blocks')
  }, {
    value: '1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('1', 'bsx-blocks')
  }, {
    value: '2',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('2', 'bsx-blocks')
  }, {
    value: '3',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('3', 'bsx-blocks')
  }, {
    value: '4',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('4', 'bsx-blocks')
  }, {
    value: '5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('5', 'bsx-blocks')
  }, {
    value: '6',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('6', 'bsx-blocks')
  }, {
    value: '7',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('7', 'bsx-blocks')
  }, {
    value: '8',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('8', 'bsx-blocks')
  }, {
    value: '9',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('9', 'bsx-blocks')
  }, {
    value: '10',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('10', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Z-Index', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues)
  });
};

// radio

const scaleSelect = (value, onChangeFunction, allowedValues) => {
  const defaultValues = [{
    value: '1',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('100%', 'bsx-blocks')
  }, {
    value: '0.75',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('75%', 'bsx-blocks')
  }, {
    value: '0.5',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('50%', 'bsx-blocks')
  }, {
    value: '0.25',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('25%', 'bsx-blocks')
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Scale', 'bsx-blocks'),
    selected: value + '',
    options: (0,_utilities_js__WEBPACK_IMPORTED_MODULE_3__.filterByAllowedValueKeys)(defaultValues, allowedValues),
    onChange: onChangeFunction
  });
};

// toolbar

const textAlignToolbar = (value, onChangeFunction) => {
  const defaultValues = states;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.AlignmentToolbar, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alignment', 'bsx-blocks'),
    value: value,
    onChange: onChangeFunction,
    alignmentControls: alignmentControls
  });
};

// uploads

const imgUploadClickableImg = (imgId, url, onChangeFunction, type) => {
  const alt = typeof type !== 'undefined' && type === 'p' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change / upload portrait image', 'bsx-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change / upload image', 'bsx-blocks');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: ({
      open
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "bsxui-config-panel-img-button has-margin-bottom",
      onClick: open,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
        class: "bsxui-config-panel-img",
        src: url,
        alt: alt
      })
    })
  });
};
const imgUploadButton = (imgId, onChangeFunction, type) => {
  const label = typeof type !== 'undefined' && type === 'p' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change / upload portrait image', 'bsx-blocks') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change / upload image', 'bsx-blocks');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onChangeFunction,
    allowedTypes: "image",
    value: imgId,
    render: ({
      open
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      isSecondary: true,
      children: label
    })
  });
};

// template selects

const inlineTemplateSelect = (templates, onChangeFunction) => {
  // has no templateName since non selected yet
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    class: "bsxui-initial-inline-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      class: "bsxui-initial-inline-control-heading",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Please select template', 'bsx-blocks')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "bsxui-icon-text-button-list",
      children: templates.map((template, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        label: template.title,
        onClick: () => {
          onChangeFunction(template.name);
        },
        className: 'bsxui-icon-text-button-list-item ',
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          class: "bsxui-icon-text-button-list-item-icon",
          children: template.icon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          class: "bsxui-icon-text-button-list-item-label",
          children: template.title
        })]
      }))
    })]
  });
};
const uiTemplateSelect = (templates, templateName, onChangeFunction) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "bsxui-icon-text-button-list",
    children: templates.map((template, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      label: template.title,
      onClick: () => {
        onChangeFunction(template.name);
      },
      className: 'bsxui-icon-text-button-list-item ' + (templateName === template.name ? 'active' : ''),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        class: "bsxui-icon-text-button-list-item-icon",
        children: template.icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        class: "bsxui-icon-text-button-list-item-label",
        children: template.title
      })]
    }))
  });
};

/***/ }),

/***/ "./src/_functions/icon.js":
/*!********************************!*\
  !*** ./src/_functions/icon.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XXXXX: () => (/* binding */ XXXXX),
/* harmony export */   accordion: () => (/* binding */ accordion),
/* harmony export */   accordionItem: () => (/* binding */ accordionItem),
/* harmony export */   badge: () => (/* binding */ badge),
/* harmony export */   banner: () => (/* binding */ banner),
/* harmony export */   bannerBottomBarContainerHeading: () => (/* binding */ bannerBottomBarContainerHeading),
/* harmony export */   bannerContainerHeadingText: () => (/* binding */ bannerContainerHeadingText),
/* harmony export */   bannerContainerWithHeading: () => (/* binding */ bannerContainerWithHeading),
/* harmony export */   bannerEmpty: () => (/* binding */ bannerEmpty),
/* harmony export */   bannerHeadingTextButtonColor: () => (/* binding */ bannerHeadingTextButtonColor),
/* harmony export */   bannerStaticContainerWithHeading: () => (/* binding */ bannerStaticContainerWithHeading),
/* harmony export */   bgText: () => (/* binding */ bgText),
/* harmony export */   button: () => (/* binding */ button),
/* harmony export */   buttonLabel: () => (/* binding */ buttonLabel),
/* harmony export */   buttons: () => (/* binding */ buttons),
/* harmony export */   buttonsLabelTextLink: () => (/* binding */ buttonsLabelTextLink),
/* harmony export */   buttonsOneButton: () => (/* binding */ buttonsOneButton),
/* harmony export */   buttonsTextLink: () => (/* binding */ buttonsTextLink),
/* harmony export */   buttonsTwoButtons: () => (/* binding */ buttonsTwoButtons),
/* harmony export */   checkList: () => (/* binding */ checkList),
/* harmony export */   checkListItem: () => (/* binding */ checkListItem),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   groups: () => (/* binding */ groups),
/* harmony export */   groupsImageHeadingParagraph: () => (/* binding */ groupsImageHeadingParagraph),
/* harmony export */   groupsImageHeadingParagraphButton: () => (/* binding */ groupsImageHeadingParagraphButton),
/* harmony export */   groupsImageParagraphButton: () => (/* binding */ groupsImageParagraphButton),
/* harmony export */   icon: () => (/* binding */ icon),
/* harmony export */   iconList: () => (/* binding */ iconList),
/* harmony export */   iconListItem: () => (/* binding */ iconListItem),
/* harmony export */   imgGallery: () => (/* binding */ imgGallery),
/* harmony export */   lazyImg: () => (/* binding */ lazyImg),
/* harmony export */   rowWithCols: () => (/* binding */ rowWithCols),
/* harmony export */   rowWithColsCol: () => (/* binding */ rowWithColsCol),
/* harmony export */   rowWithCols_1_1: () => (/* binding */ rowWithCols_1_1),
/* harmony export */   rowWithCols_1_1_1: () => (/* binding */ rowWithCols_1_1_1),
/* harmony export */   rowWithCols_1_2: () => (/* binding */ rowWithCols_1_2),
/* harmony export */   rowWithCols_1_2_1: () => (/* binding */ rowWithCols_1_2_1),
/* harmony export */   rowWithCols_2_1: () => (/* binding */ rowWithCols_2_1),
/* harmony export */   rowWithCols_custom: () => (/* binding */ rowWithCols_custom),
/* harmony export */   rowsCol: () => (/* binding */ rowsCol),
/* harmony export */   rowsFlexStatic: () => (/* binding */ rowsFlexStatic),
/* harmony export */   rowsRow: () => (/* binding */ rowsRow),
/* harmony export */   rowsSpaceBetween: () => (/* binding */ rowsSpaceBetween),
/* harmony export */   rowsStaticFlex: () => (/* binding */ rowsStaticFlex),
/* harmony export */   section: () => (/* binding */ section),
/* harmony export */   sectionBadgeHeadingTextButtonImgColumns: () => (/* binding */ sectionBadgeHeadingTextButtonImgColumns),
/* harmony export */   sectionBgHeadingIconHeadingTextColumns: () => (/* binding */ sectionBgHeadingIconHeadingTextColumns),
/* harmony export */   sectionContainerHeading: () => (/* binding */ sectionContainerHeading),
/* harmony export */   sectionContainerHeadingTextGallery: () => (/* binding */ sectionContainerHeadingTextGallery),
/* harmony export */   sectionContainerRoundedColoredBanner: () => (/* binding */ sectionContainerRoundedColoredBanner),
/* harmony export */   sectionEmpty: () => (/* binding */ sectionEmpty),
/* harmony export */   sectionHeadingListColumns: () => (/* binding */ sectionHeadingListColumns),
/* harmony export */   sectionImgBadgeHeadingTextButtonColumns: () => (/* binding */ sectionImgBadgeHeadingTextButtonColumns),
/* harmony export */   slider: () => (/* binding */ slider),
/* harmony export */   svgImg: () => (/* binding */ svgImg),
/* harmony export */   uiIconCarretLeft: () => (/* binding */ uiIconCarretLeft),
/* harmony export */   uiIconCarretRight: () => (/* binding */ uiIconCarretRight),
/* harmony export */   uiIconTrash: () => (/* binding */ uiIconTrash),
/* harmony export */   uiPlaceholderVideo: () => (/* binding */ uiPlaceholderVideo),
/* harmony export */   video: () => (/* binding */ video),
/* harmony export */   wrapper: () => (/* binding */ wrapper)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");

const accordion = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "1",
    y: "16",
    width: "18",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M1.75,14h7.49C9.66,14,10,13.7,10,13.33v-0.66C10,12.3,9.66,12,9.25,12H1.75C1.34,12,1,12.3,1,12.67v0.66 C1,13.7,1.34,14,1.75,14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.04,14.06l1.83-1.83c0.27-0.27,0.08-0.73-0.3-0.73h-3.66c-0.38,0-0.57,0.46-0.3,0.73l1.83,1.83 C16.61,14.22,16.88,14.22,17.04,14.06z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "1",
    y: "8",
    width: "18",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M1.75,6h7.49C9.66,6,10,5.7,10,5.33V4.67C10,4.3,9.66,4,9.25,4H1.75C1.34,4,1,4.3,1,4.67v0.66C1,5.7,1.34,6,1.75,6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16.44,6.06c0.17,0.17,0.44,0.17,0.6,0l1.83-1.83c0.27-0.27,0.08-0.73-0.3-0.73h-3.66c-0.38,0-0.57,0.46-0.3,0.73 L16.44,6.06z"
  })]
});
const accordionItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16.44,10.05c0.17,0.17,0.44,0.17,0.6,0l1.83-1.83c0.27-0.27,0.08-0.73-0.3-0.73h-3.66c-0.38,0-0.57,0.46-0.3,0.73 L16.44,10.05z M1.75,9.99h7.49c0.42,0,0.75-0.3,0.75-0.67V8.66c0-0.37-0.34-0.67-0.75-0.67H1.75C1.34,7.99,1,8.29,1,8.66v0.66 C1,9.69,1.34,9.99,1.75,9.99z M1,11.99v1h18v-1H1z"
  })
});
const badge = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M14.5,7.5c0,0,0,0-9,0C4.12,7.5,3,8.62,3,10c0,1.38,1.12,2.5,2.5,2.5c9,0,9,0,9,0c1.38,0,2.5-1.12,2.5-2.5 C17,8.62,15.88,7.5,14.5,7.5z M14.5,10.5c0,0,0,0-9,0v0C5.22,10.5,5,10.28,5,10c0-0.28,0.22-0.5,0.5-0.5c9,0,9,0,9,0 c0.28,0,0.5,0.22,0.5,0.5C15,10.27,14.78,10.5,14.5,10.5z"
  })
});
const banner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17,5H3C1.9,5,1,5.9,1,7v6c0,1.11,0.9,2,2,2h14c1.1,0,2-0.89,2-2V7C19,5.9,18.1,5,17,5z M4.5,7C5.33,7,6,7.67,6,8.5 C6,9.33,5.33,10,4.5,10C3.67,10,3,9.33,3,8.5C3,7.67,3.67,7,4.5,7z M17,13H3l-0.02-1L7,10l2,1l5-3l3,2V13z"
  })
});
const bannerEmpty = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M10,25c-0.6,0-1-0.4-1-1 s0.4-1,1-1s1,0.4,1,1S10.6,25,10,25z M13,25c-0.6,0-1-0.4-1-1s0.4-1,1-1s1,0.4,1,1S13.6,25,13,25z M16,25c-0.6,0-1-0.4-1-1 s0.4-1,1-1s1,0.4,1,1S16.6,25,16,25z"
  })
});
const bannerContainerWithHeading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M24,26H13v-3h11V26z"
  })
});
const bannerStaticContainerWithHeading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,18H9c-1.1,0-2,0.9-2,2v8c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2v-8C41,18.9,40.1,18,39,18z M24,26H13v-3h11V26z"
  })
});
const bannerBottomBarContainerHeading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M13,21h11v3H13V21z M40,30 c0,0.6-0.4,1-1,1H9c-0.6,0-1-0.4-1-1v-2h32V30z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "29",
    width: "7",
    height: "1"
  })]
});
const bannerContainerHeadingText = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M27.5,28h-7v-1h7V28z M29.5,25 h-11v-3h11V25z"
  })
});
const bannerHeadingTextButtonColor = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,16H9c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V18C41,16.9,40.1,16,39,16z M39,30H9V18h30V30z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "18.5",
    y: "20",
    width: "11",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "24",
    width: "22",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M26.1,26h-4.1c-0.5,0-0.9,0.4-0.9,0.9v0.1c0,0.5,0.4,0.9,0.9,0.9h4.1c0.5,0,0.9-0.4,0.9-0.9v-0.1C27,26.4,26.6,26,26.1,26z "
  })]
});
const bgText = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "12,4 12,4 12,4 "
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19,7V2H1v4v1v3v1v3v1v4h11v-4h7v-5h-2V7H19z M4,8h10v1H4V8z M9,17H4v-1h5V17z M16,13H4v-1h12V13z M16,5H4V4h12V5z"
  })]
});
const buttons = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M13,11c0,0,0,0-6,0v0 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1c6,0,6,0,6,0c0.55,0,1,0.45,1,1C14,10.55,13.55,11,13,11z"
  })
});
const button = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16,7H4C2.9,7,2,7.9,2,9v2c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2V9C18,7.9,17.1,7,16,7z M15,11H5V9h10V11z"
  })
});
const buttonLabel = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M4,3v3.5h1v-1c0-0.55,0.45-1,1-1h3.25V15c0,0.55-0.45,1-1,1h-1v1h5.5v-1h-1c-0.55,0-1-0.45-1-1V4.5H14c0.55,0,1,0.45,1,1v1 h1V3H4z"
  })
});
const buttonsOneButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M30,20H18c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C32,20.9,31.1,20,30,20z M29,25.5H19v-3h10V25.5z"
  })
});
const buttonsTwoButtons = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M21,20H9c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C23,20.9,22.1,20,21,20z M20,25.5H10v-3h10V25.5z M39,20H27c-1.1,0-2,0.9-2,2v4c0,1.11,0.9,2,2,2h12c1.1,0,2-0.89,2-2v-4C41,20.9,40.1,20,39,20z M38,25.5H28v-3h10V25.5z"
  })
});
const buttonsTextLink = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M19,20c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H28c0.55,0,1,0.45,1,1v1h1v-5H18v5h1 V20z M17,30v2h14v-2H17z"
  })
});
const buttonsLabelTextLink = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M27,21c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H36c0.55,0,1,0.45,1,1v1h1v-5H26v5h1 V21z M10,22h1v-1c0-0.55,0.45-1,1-1h2.5v7c0,0.55-0.45,1-1,1h-1v1h7v-1h-1c-0.55,0-1-0.45-1-1v-7H20c0.55,0,1,0.45,1,1v1h1v-5H10V22 z M25,31v2h14v-2H25z"
  })
});
const checkList = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10,3v3h8V3H10z M5.79,2.79L4,4.58L3.71,4.29c-0.39-0.39-1.03-0.39-1.42,0c-0.39,0.39-0.39,1.02,0,1.41h0l1,1 C3.48,6.9,3.73,7,4,7s0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,2.4,6.18,2.4,5.79,2.79z M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41c-0.39-0.39-1.02-0.39-1.41,0 L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z M10,18h8v-3h-8V18z M5.79,14.79L4,16.58 l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1C3.48,18.89,3.73,19,4,19c0.27,0,0.52-0.1,0.71-0.29 l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,14.4,6.18,14.4,5.79,14.79z"
  })
});
const checkListItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10,12h8V9h-8V12z M3.29,12.71C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41 c-0.39-0.39-1.02-0.39-1.41,0L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41L3.29,12.71z"
  })
});
const imgGallery = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M8,10L6,9l-2,1v2.99h9V9l-2-1L8,10z M7,8c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2S5,4.9,5,6C5,7.1,5.9,8,7,8z M18.71,4.29 C18.52,4.1,18.27,4,18,4h-2V2c0-0.27-0.1-0.52-0.29-0.71C15.52,1.1,15.27,1,15,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2 v13c0,0.26,0.11,0.52,0.29,0.71C1.48,15.89,1.74,16,2,16h2v2c0,0.26,0.11,0.52,0.29,0.71C4.48,18.89,4.74,19,5,19h13 c0.27,0,0.52-0.1,0.71-0.29C18.9,18.52,19,18.27,19,18V5C19,4.73,18.9,4.48,18.71,4.29z M3,14V3h11v11H3z M17,17H6v-1h9 c0.27,0,0.52-0.1,0.71-0.29C15.9,15.52,16,15.27,16,15V6h1V17z"
  })
});
const container = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M18,3H2C1.4,3,1,3.4,1,4v12c0,0.6,0.4,1,1,1h16c0.6,0,1-0.4,1-1V4C19,3.4,18.6,3,18,3z M17,15H3V5h14V15z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "5",
    y: "6",
    width: "2",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "5",
    y: "9",
    width: "2",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "5",
    y: "12",
    width: "2",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "6",
    width: "2",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "9",
    width: "2",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "12",
    width: "2",
    height: "2"
  })]
});
const groups = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M7,7h6c0.55,0,1-0.45,1-1V4c0-0.55-0.45-1-1-1H7C6.45,3,6,3.45,6,4v2C6,6.55,6.45,7,7,7z M13,13H7c-0.55,0-1,0.45-1,1v2 c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1v-2C14,13.45,13.55,13,13,13z M9.5,11V9c0-0.55-0.45-1-1-1H3C2.45,8,2,8.45,2,9v2 c0,0.55,0.45,1,1,1h5.5C9.05,12,9.5,11.55,9.5,11z M17,8h-5.5c-0.55,0-1,0.45-1,1v2c0,0.55,0.45,1,1,1H17c0.55,0,1-0.45,1-1V9 C18,8.45,17.55,8,17,8z"
  })
});
const groupsImageParagraphButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "30",
    width: "34",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "33",
    width: "34",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16.3,36h-8C7.6,36,7,36.4,7,37v1c0,0.6,0.6,1,1.3,1h8c0.7,0,1.3-0.4,1.3-1v-1C17.7,36.4,17.1,36,16.3,36z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M7,10v17h34V10H7z M14.5,13c1.4,0,2.5,1.1,2.5,2.5S15.9,18,14.5,18S12,16.9,12,15.5S13.1,13,14.5,13z M38,24H10v-1.8l7-2.2 l4,2l12-6l5,3.6V24z"
  })]
});
const groupsImageHeadingParagraph = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "34",
    width: "34",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "30",
    width: "25.5",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "37",
    width: "34",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M7,10v17h34V10H7z M14.5,13c1.4,0,2.5,1.1,2.5,2.5S15.9,18,14.5,18S12,16.9,12,15.5S13.1,13,14.5,13z M38,24H10v-1.8l7-2.2 l4,2l12-6l5,3.6V24z"
  })]
});
const groupsImageHeadingParagraphButton = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "31",
    width: "34",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "27",
    width: "25.5",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "34",
    width: "34",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M16.3,37h-8C7.6,37,7,37.4,7,38v1c0,0.6,0.6,1,1.3,1h8c0.7,0,1.3-0.4,1.3-1v-1C17.7,37.4,17.1,37,16.3,37z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M7,7v17h34V7H7z M14.5,10c1.4,0,2.5,1.1,2.5,2.5S15.9,15,14.5,15S12,13.9,12,12.5S13.1,10,14.5,10z M38,21H10v-1.8l7-2.2 l4,2l12-6l5,3.6V21z"
  })]
});
const icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10,3c-3.87,0-7,3.13-7,7c0,3.87,3.13,7,7,7c3.87,0,7-3.13,7-7C17,6.13,13.87,3,10,3z M13.08,9.08l-3.75,3.75 c-0.19,0.19-0.44,0.29-0.71,0.29c-0.27,0-0.52-0.1-0.71-0.29l-1.5-1.5c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.42,0 l0.79,0.79l3.04-3.04c0.39-0.39,1.02-0.39,1.41,0C13.47,8.06,13.47,8.69,13.08,9.08z"
  })
});
const iconList = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10,3v3h8V3H10z M4.75,1.88L3.9,3.61L2,3.88l1.37,1.34L3.05,7.12l1.7-0.89l1.7,0.89L6.13,5.22L7.5,3.88L5.6,3.61L4.75,1.88z M10,12h8V9h-8V12z M5.79,8.79L4,10.58l-0.29-0.29c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.02,0,1.41l1,1 C3.48,12.89,3.73,13,4,13c0.27,0,0.52-0.1,0.71-0.29l2.5-2.5c0.39-0.39,0.39-1.02,0-1.41C6.82,8.4,6.18,8.4,5.79,8.79z M10,18h8v-3 h-8V18z M6.71,14.54c-0.39-0.39-1.02-0.39-1.41,0l-0.54,0.54l-0.54-0.54c-0.39-0.39-1.02-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.42 l0.54,0.54l-0.54,0.54c-0.39,0.39-0.39,1.02,0,1.41c0.2,0.2,0.45,0.29,0.71,0.29c0.26,0,0.51-0.1,0.71-0.29l0.54-0.54l0.54,0.54 c0.19,0.2,0.45,0.29,0.71,0.29s0.51-0.1,0.71-0.29c0.39-0.39,0.39-1.02,0-1.41L6.16,16.5l0.54-0.54C7.1,15.57,7.1,14.93,6.71,14.54z "
  })
});
const iconListItem = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10,9v3h8V9H10z M4.8,7.9L3.9,9.6L2,9.9l1.4,1.3L3,13.1l1.7-0.9l1.7,0.9l-0.3-1.9l1.4-1.3L5.6,9.6L4.8,7.9z"
  })
});
const lazyImg = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M3,17V3h14 l0,14H3z M9,12l-2-1l-3,2v2.98h12V11l-3-2L9,12z M7.5,9C8.88,9,10,7.88,10,6.5S8.88,4,7.5,4S5,5.12,5,6.5S6.12,9,7.5,9z"
  })
});
const rowsCol = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29  C18.89,18.52,19,18.26,19,18V2c0-0.26-0.11-0.52-0.29-0.71C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29z M3,8h14v4H3V8z M3,17v-3h14v3H3z M17,6H3V3l14,0V6z"
  })
});
const rowsRow = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29  C18.89,18.52,19,18.26,19,18V2c0-0.26-0.11-0.52-0.29-0.71C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29z M3,8h14v4H3V8z M3,17v-3h14v3H3z M17,6H3V3l14,0V6z"
  })
});
const rowsFlexStatic = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-4h30V34z M39,28H9 V14h30V28z"
  })
});
const rowsStaticFlex = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V20h30V34z M39,18H9 v-4h30V18z"
  })
});
const rowsSpaceBetween = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9v-4h30V34z M39,28H9 v-8h30V28z M39,18H9v-4h30V18z"
  })
});
const rowWithCols = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
  })
});
const rowWithColsCol = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M12,3v14H8V3 H12z M3,3h3v14H3V3z M14,17V3h3l0,14H14z"
  })
});
const rowWithCols_1_1_1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM28.5 34h-9V14h9v20zm2 0V14H39v20h-8.5zm-13 0H9V14h8.5v20z"
  })
});
const rowWithCols_1_1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H25V34H39ZM23 34H9V14H23V34Z"
  })
});
const rowWithCols_1_2 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H20V34H39ZM18 34H9V14H18V34Z"
  })
});
const rowWithCols_2_1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39 12C40.1046 12 41 12.8954 41 14V34C41 35.1046 40.1046 36 39 36H9C7.89543 36 7 35.1046 7 34V14C7 12.8954 7.89543 12 9 12H39ZM39 34V14H30V34H39ZM28 34H9V14H28V34Z"
  })
});
const rowWithCols_1_2_1 = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M41 14a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h30a2 2 0 0 0 2-2V14zM31 34H17V14h14v20zm2 0V14h6v20h-6zm-18 0H9V14h6v20z"
  })
});
const rowWithCols_custom = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  xmlns: "http://www.w3.org/2000/svg",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
  })
});
const section = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M14,4h-3v2h3V4z M8.29,5.71C8.48,5.9,8.73,6,9,6h0V3.59L7.71,2.29C7.52,2.1,7.26,2,7,2H6v2h0.58L8.29,5.71z M19,7V5 c0-0.27-0.1-0.52-0.29-0.71C18.52,4.1,18.27,4,18,4h-2v2h1v9L3,15v-2H1v3c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2 h2v2h3v-2h2v2h3v-2h2v2h2c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16v-2h-2v-2h2V9h-2V7H19z M3,4h1V2H2 C1.74,2,1.48,2.11,1.29,2.29C1.11,2.48,1,2.74,1,3v3h2V4z M3,8H1v3h2V8z"
  })
});
const sectionEmpty = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M38.96,30h2l0.01-3h-2L38.96,30z M23,18h3v-2h-3V18z M28,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M13,36h3v-2h-3V36z M33,18h3v-2h-3 V18z M18,36h3v-2h-3V36z M28,18h3v-2h-3V18z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M9,23H7v3h2 V23z M9,18H7v3h2V18z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M9,28H7v3h2V28z M38.98,25h2l0.01-3h-2L38.98,25z M18.41,14L17,15.41 l2.29,2.29C19.48,17.9,19.73,18,20,18h1v-2h-0.59L18.41,14z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2 V14z"
  })
});
const sectionContainerHeading = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M13,24h22v-3H13V24z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9 V33z M9,18H7v3h2V18z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M26,16h-3v2h3V16 z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M23,36h3v-2h-3V36z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M33,36h3v-2h-3V36z M13,36h3v-2h-3V36z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M28,36h3v-2h-3 V36z"
  })
});
const sectionContainerHeadingTextGallery = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M35,20H13v3h22V20z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M26,16h-3v2h3V16z M9,14h1v-2H8 c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59 l-2-2L17,15.41L19.29,17.71z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M38.95,34H38v2h1.95 c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.96,30h2l0.01-3h-2L38.96,30z M15.58,14L17,12.59l-0.29-0.29C16.52,12.11,16.26,12,16,12 h-4v2L15.58,14L15.58,14z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2 L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2 h-3V36z M35,31v-3h-6v3H35z M21,31h6v-3h-6V31z M13,31h6v-3h-6V31z M35,24H13v1h22V24z M35,26H13v1h22V26z"
  })
});
const sectionContainerRoundedColoredBanner = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M31,16h-3v2h3V16z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29 C7.11,12.48,7,12.74,7,13v3h2V14z M26,16h-3v2h3V16z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29 C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1 l0.01-3h-2L38.95,34z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M38.98,25h2 l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2h-3V36z M33,36h3v-2 h-3V36z M13,22v5c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H14C13.45,21,13,21.45,13,22z M26,27h-4v-1h4V27z M20,22h8v1h-8V22z M15,24h18v1H15V24z"
  })
});
const sectionImgBadgeHeadingTextButtonColumns = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,33H7v2c0,0.3,0.1,0.5,0.3,0.7C7.5,35.9,7.7,36,8,36h3v-2H9V33z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "23",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "28",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15.6,14l1.4-1.4l-0.3-0.3C16.5,12.1,16.3,12,16,12h-4v2L15.6,14L15.6,14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "18",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,14h1v-2H8c-0.3,0-0.5,0.1-0.7,0.3C7.1,12.5,7,12.7,7,13v3h2V14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19.3,17.7c0.2,0.2,0.4,0.3,0.7,0.3h1v-2h-0.6l-2-2L17,15.4L19.3,17.7z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M40.7,16.3C40.5,16.1,40.3,16,40,16h-2v2h1l0,2h2l0-3C41,16.7,40.9,16.5,40.7,16.3z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,34h-1v2h2c0.6,0,1-0.4,1-1l0-3h-2L39,34z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,30 41,30 41,27 39,27 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,25 41,25 41,22 39,22 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "18",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "24",
    y: "23",
    width: "11",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "24",
    y: "25",
    width: "11",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M30,27h-5c-0.5,0-1,0.5-1,1s0.5,1,1,1h5c0.5,0,1-0.5,1-1S30.5,27,30,27z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M28.5,22c0.3,0,0.5-0.2,0.5-0.5S28.8,21,28.5,21h-4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H28.5z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "17.5",
    cy: "25.5",
    r: "4.5"
  })]
});
const sectionBadgeHeadingTextButtonImgColumns = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "23",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "18",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "28",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15.6,14l1.4-1.4l-0.3-0.3C16.5,12.1,16.3,12,16,12h-4v2L15.6,14L15.6,14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,33H7v2c0,0.3,0.1,0.5,0.3,0.7C7.5,35.9,7.7,36,8,36h3v-2H9V33z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,14h1v-2H8c-0.3,0-0.5,0.1-0.7,0.3C7.1,12.5,7,12.7,7,13v3h2V14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19.3,17.7c0.2,0.2,0.4,0.3,0.7,0.3h1v-2h-0.6l-2-2L17,15.4L19.3,17.7z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,34h-1v2h2c0.6,0,1-0.4,1-1l0-3h-2L39,34z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,25 41,25 41,22 39,22 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "18",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M40.7,16.3C40.5,16.1,40.3,16,40,16h-2v2h1l0,2h2l0-3C41,16.7,40.9,16.5,40.7,16.3z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,30 41,30 41,27 39,27 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "23",
    width: "11",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "25",
    width: "11",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M14,27c-0.5,0-1,0.5-1,1s0.5,1,1,1h5c0.5,0,1-0.5,1-1s-0.5-1-1-1H14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M17.5,22c0.3,0,0.5-0.2,0.5-0.5S17.8,21,17.5,21h-4c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5H17.5z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
    cx: "30.5",
    cy: "25.5",
    r: "4.5"
  })]
});
const sectionHeadingListColumns = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "20",
    y: "20.7",
    width: "8",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "23",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "18",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "28",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15.6,14l1.4-1.4l-0.3-0.3C16.5,12.1,16.3,12,16,12h-4v2L15.6,14L15.6,14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,33H7v2c0,0.3,0.1,0.5,0.3,0.7C7.5,35.9,7.7,36,8,36h3v-2H9V33z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,25 41,25 41,22 39,22 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "18",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,14h1v-2H8c-0.3,0-0.5,0.1-0.7,0.3C7.1,12.5,7,12.7,7,13v3h2V14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19.3,17.7c0.2,0.2,0.4,0.3,0.7,0.3h1v-2h-0.6l-2-2L17,15.4L19.3,17.7z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M40.7,16.3C40.5,16.1,40.3,16,40,16h-2v2h1l0,2h2l0-3C41,16.7,40.9,16.5,40.7,16.3z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,34h-1v2h2c0.6,0,1-0.4,1-1l0-3h-2L39,34z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,30 41,30 41,27 39,27 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "24.7",
    width: "6",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "15.5",
    y: "27.7",
    width: "3.5",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M14.7,27.6c-0.1-0.1-0.3-0.1-0.5,0l-0.6,0.6l-0.1-0.1c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l0.3,0.3 c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1l0.8-0.8C14.9,27.9,14.9,27.7,14.7,27.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "15.5",
    y: "29.7",
    width: "3.5",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M14.3,29.6l-0.6,0.6l-0.1-0.1c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l0.3,0.3c0.1,0.1,0.1,0.1,0.2,0.1 c0.1,0,0.2,0,0.2-0.1l0.8-0.8c0.1-0.1,0.1-0.3,0-0.5C14.6,29.5,14.4,29.5,14.3,29.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "21",
    y: "24.7",
    width: "6",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23.5",
    y: "27.7",
    width: "3.5",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M22.3,27.6l-0.6,0.6l-0.1-0.1c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l0.3,0.3c0.1,0.1,0.1,0.1,0.2,0.1 c0.1,0,0.2,0,0.2-0.1l0.8-0.8c0.1-0.1,0.1-0.3,0-0.5C22.6,27.5,22.4,27.5,22.3,27.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23.5",
    y: "29.7",
    width: "3.5",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M22.3,29.6l-0.6,0.6l-0.1-0.1c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l0.3,0.3c0.1,0.1,0.1,0.1,0.2,0.1 c0.1,0,0.2,0,0.2-0.1l0.8-0.8c0.1-0.1,0.1-0.3,0-0.5C22.6,29.5,22.4,29.5,22.3,29.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "29",
    y: "24.7",
    width: "6",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "31.5",
    y: "27.7",
    width: "3.5",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M30.7,27.6c-0.1-0.1-0.3-0.1-0.5,0l-0.6,0.6l-0.1-0.1c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l0.3,0.3 c0.1,0.1,0.1,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1l0.8-0.8C30.9,27.9,30.9,27.7,30.7,27.6z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "31.5",
    y: "29.7",
    width: "3.5",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M30.3,29.6l-0.6,0.6l-0.1-0.1c-0.1-0.1-0.3-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l0.3,0.3c0.1,0.1,0.1,0.1,0.2,0.1 c0.1,0,0.2,0,0.2-0.1l0.8-0.8c0.1-0.1,0.1-0.3,0-0.5C30.6,29.5,30.4,29.5,30.3,29.6z"
  })]
});
const sectionBgHeadingIconHeadingTextColumns = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "20",
    y: "20",
    width: "8",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "23",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "28",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,33H7v2c0,0.3,0.1,0.5,0.3,0.7C7.5,35.9,7.7,36,8,36h3v-2H9V33z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M15.6,14l1.4-1.4l-0.3-0.3C16.5,12.1,16.3,12,16,12h-4v2L15.6,14L15.6,14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M9,14h1v-2H8c-0.3,0-0.5,0.1-0.7,0.3C7.1,12.5,7,12.7,7,13v3h2V14z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M19.3,17.7c0.2,0.2,0.4,0.3,0.7,0.3h1v-2h-0.6l-2-2L17,15.4L19.3,17.7z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "7",
    y: "18",
    width: "2",
    height: "3"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,30 41,30 41,27 39,27 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M39,34h-1v2h2c0.6,0,1-0.4,1-1l0-3h-2L39,34z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "39,25 41,25 41,22 39,22 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "18",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M40.7,16.3C40.5,16.1,40.3,16,40,16h-2v2h1l0,2h2l0-3C41,16.7,40.9,16.5,40.7,16.3z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "16",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "28",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "23",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "33",
    y: "34",
    width: "3",
    height: "2"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "28",
    width: "6",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "13",
    y: "30",
    width: "6",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "21",
    y: "28",
    width: "6",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "21",
    y: "30",
    width: "6",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "29",
    y: "28",
    width: "6",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
    x: "29",
    y: "30",
    width: "6",
    height: "1"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
    points: "16.7,24.4 16.2,23.3 15.6,24.4 14.3,24.6 15.2,25.5 15,26.7 16.2,26.1 17.3,26.7 17.1,25.5 18,24.6 \t"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M24.9,23.7l-1.2,1.2l-0.2-0.2c-0.3-0.3-0.7-0.3-0.9,0c-0.3,0.3-0.3,0.7,0,0.9l0.7,0.7c0.1,0.1,0.3,0.2,0.5,0.2 s0.3-0.1,0.5-0.2l1.7-1.7c0.3-0.3,0.3-0.7,0-0.9C25.5,23.4,25.1,23.4,24.9,23.7z"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M30.9,24.6l0.4,0.4l-0.4,0.4c-0.3,0.3-0.3,0.7,0,0.9c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2l0.4-0.4l0.4,0.4 c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-0.9L33.1,25l0.4-0.4c0.3-0.3,0.3-0.7,0-0.9c-0.3-0.3-0.7-0.3-0.9,0 l-0.4,0.4l-0.4-0.4c-0.3-0.3-0.7-0.3-0.9,0C30.6,24,30.6,24.4,30.9,24.6z"
  })]
});
const svgImg = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M18.9,7.9c-0.1-0.4-0.5-0.7-0.9-0.7l-4.9-0.7L11,1.9c-0.2-0.4-0.6-0.6-1-0.6c-0.4,0-0.8,0.2-1,0.6L6.8,6.4L1.9,7.1 C1.5,7.2,1.2,7.5,1.1,7.9C0.9,8.3,1,8.7,1.3,9l3.6,3.5l-0.8,5c-0.1,0.4,0.1,0.8,0.4,1.1c0.3,0.2,0.8,0.3,1.2,0.1l4.4-2.3l4.4,2.3 c0.4,0.2,0.8,0.2,1.1-0.1c0.3-0.2,0.5-0.7,0.4-1.1l-0.8-5L18.7,9C19,8.7,19.1,8.3,18.9,7.9z M13,10.2c0,0.5-0.2,1-0.6,1.3l-2.1,2 c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-2.1-2C7.2,11.1,7,10.7,7,10.2v-0.1c0-0.8,0.6-1.5,1.4-1.7c0.5-0.1,1.1,0.1,1.5,0.5 L10,9.1l0.1-0.1c0.4-0.4,0.9-0.6,1.5-0.5C12.4,8.6,13,9.3,13,10.2L13,10.2z"
  })
});
const slider = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M10,17c-0.55,0-1,0.45-1,1s0.45,1,1,1c0.55,0,1-0.45,1-1S10.55,17,10,17z M7,17c-0.55,0-1,0.45-1,1s0.45,1,1,1 c0.55,0,1-0.45,1-1S7.55,17,7,17z M13,17c-0.55,0-1,0.45-1,1s0.45,1,1,1s1-0.45,1-1S13.55,17,13,17z M12.61,11.57 c-0.23-0.56-0.1-1.21,0.33-1.63L14.88,8l-1.94-1.94c-0.43-0.43-0.56-1.07-0.33-1.63S13.39,3.5,14,3.5h2V2c0-0.55-0.45-1-1-1H5 C4.45,1,4,1.45,4,2v1.5h2c0.61,0,1.15,0.37,1.39,0.93c0.23,0.56,0.1,1.21-0.33,1.63L5.12,8l1.94,1.94 c0.43,0.43,0.56,1.07,0.33,1.63C7.15,12.13,6.61,12.5,6,12.5H4V14c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1v-1.5h-2 C13.39,12.5,12.85,12.13,12.61,11.57z M3,8l3-3H3L0,8l3,3h3L3,8z M17,5h-3l3,3l-3,3h3l3-3L17,5z"
  })
});
const uiIconCarretLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M14 5l-5 5 5 5-1 2-7-7 7-7z"
  })
});
const uiIconCarretRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M6 15l5-5-5-5 1-2 7 7-7 7z"
  })
});
const uiIconTrash = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z"
  })
});
const uiPlaceholderVideo = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "360",
  height: "240",
  viewBox: "0 0 360 240",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    d: "M0,0v240h360V0H0z M160,160V80l69.28,40L160,160z"
  })
});
const video = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    role: "img",
    focusable: "false",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M17,4H3C1.9,4,1,5.07,1,6.4v7.2C1,14.93,1.9,16,3,16h14c1.1,0,2-1.07,2-2.4V6.4C19,5.07,18.1,4,17,4z M8,13V7l5.2,3L8,13z"
    })
  })
});
const wrapper = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  "aria-hidden": "true",
  role: "img",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    d: "M11,5h3V3h-3V5z M3,9H1v3h2V9z M6,5h3V3H6V5z M6,17h3v-2H6V17z M18.71,3.29C18.52,3.1,18.27,3,18,3h-2v2h1v1h2V4 C19,3.73,18.9,3.48,18.71,3.29z M17,11h2V8h-2V11z M3,14H1v2c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2H3V14z M17,15 h-1v2h2c0.27,0,0.52-0.1,0.71-0.29C18.9,16.52,19,16.27,19,16v-3h-2V15z M11,17h3v-2h-3V17z M1.29,3.29C1.11,3.48,1,3.74,1,4v3h2V5 h1V3H2C1.74,3,1.48,3.11,1.29,3.29z"
  })
});
const XXXXX = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "48",
  height: "48",
  viewBox: "0 0 48 48",
  role: "img",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"
  })
}));

/***/ }),

/***/ "./src/_functions/img.js":
/*!*******************************!*\
  !*** ./src/_functions/img.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkFullImgIsScaled: () => (/* binding */ checkFullImgIsScaled),
/* harmony export */   getAllImageSizes: () => (/* binding */ getAllImageSizes),
/* harmony export */   getImgAllDataFromMediaSizes: () => (/* binding */ getImgAllDataFromMediaSizes),
/* harmony export */   getImgSizesData: () => (/* binding */ getImgSizesData),
/* harmony export */   getImgWidthHeight: () => (/* binding */ getImgWidthHeight),
/* harmony export */   getOriginalImgUrl: () => (/* binding */ getOriginalImgUrl),
/* harmony export */   getSizeSlugFromUrl: () => (/* binding */ getSizeSlugFromUrl),
/* harmony export */   getSizesAndWithoutSizesTruncFromUrlTrunc: () => (/* binding */ getSizesAndWithoutSizesTruncFromUrlTrunc),
/* harmony export */   getUrlTruncAndExtension: () => (/* binding */ getUrlTruncAndExtension),
/* harmony export */   imgExists: () => (/* binding */ imgExists),
/* harmony export */   makeBase64PreloadImgSrc: () => (/* binding */ makeBase64PreloadImgSrc),
/* harmony export */   makeImgData: () => (/* binding */ makeImgData),
/* harmony export */   makeImgSizesFromImgData: () => (/* binding */ makeImgSizesFromImgData),
/* harmony export */   makeSizedImgs: () => (/* binding */ makeSizedImgs),
/* harmony export */   makeSrcset: () => (/* binding */ makeSrcset),
/* harmony export */   maximizeImgData: () => (/* binding */ maximizeImgData),
/* harmony export */   minimizeImgData: () => (/* binding */ minimizeImgData),
/* harmony export */   removeFileExt: () => (/* binding */ removeFileExt),
/* harmony export */   toggleSizeKey: () => (/* binding */ toggleSizeKey)
/* harmony export */ });
/**
 * Loads an image fully to get its natural dimensions.
 *
 * @param {string} url
 * @returns {Promise<{ width: number, height: number } | null>}
 */
async function loadImageDimensions(url) {
  return new Promise(resolve => {
    const img = new Image();
    img.onload = () => resolve({
      width: img.naturalWidth,
      height: img.naturalHeight
    });
    img.onerror = () => resolve(null);
    img.src = url;
  });
}

/**
 * Checks if an image exists using a HEAD request.
 *
 * @param {string} url
 * @returns {Promise<boolean>}
 */
async function doesImageExist(url) {
  try {
    const res = await fetch(url, {
      method: 'HEAD'
    });
    return res.ok;
  } catch {
    return false;
  }
}

/**
 * Scales dimensions proportionally.
 *
 * @param {number} originalWidth
 * @param {number} originalHeight
 * @param {number} max
 * @returns {{ width: number, height: number }}
 */
function getScaledDimensions(originalWidth, originalHeight, max) {
  if (originalWidth >= originalHeight) {
    return {
      width: max,
      height: Math.round(originalHeight / originalWidth * max)
    };
  } else {
    return {
      height: max,
      width: Math.round(originalWidth / originalHeight * max)
    };
  }
}

/**
 * Returns all known and calculated image sizes from a WP image object.
 *
 * @param {Object} image
 * @returns {Promise<Array<{ key: string, url: string, width: number, height: number }>>}
 */
async function getAllImageSizes(image) {
  const sizes = image.sizes || {};
  const results = [];

  // Add standard sizes if available
  for (const key of ['thumbnail', 'medium', 'large', 'full']) {
    const size = sizes[key];
    if (size?.url && size?.width && size?.height) {
      results.push({
        key,
        url: size.url,
        width: size.width,
        height: size.height
      });
    }
  }
  let originalSize = null;

  // Load true original size
  if (image.originalImageURL) {
    originalSize = await loadImageDimensions(image.originalImageURL);
    if (originalSize) {
      results.push({
        key: 'original',
        url: image.originalImageURL,
        width: originalSize.width,
        height: originalSize.height
      });
    }
  }

  // Include medium_large if available or reconstruct if missing
  if (sizes.medium_large?.url) {
    results.push({
      key: 'medium_large',
      url: sizes.medium_large.url,
      width: sizes.medium_large.width,
      height: sizes.medium_large.height
    });
  } else if (originalSize && originalSize.width > 770 && image.originalImageURL) {
    const extMatch = image.originalImageURL.match(/\.(jpe?g|png|webp|gif|avif|svg)$/i);
    const extension = extMatch ? extMatch[0] : '';
    const base = image.originalImageURL.replace(/\-[0-9]+x[0-9]+(?=\.\w+$)/, '').replace(/\.(jpe?g|png|webp|gif|avif|svg)$/i, '');

    // Size `medium_large` has a differen calculation: It always reduces the width (not the height) to 768px.
    const mediumLargeWidth = 768;
    const ratio = originalSize.height / originalSize.width;
    const mediumLargeHeight = Math.round(mediumLargeWidth * ratio);
    const mediumLargeUrl = `${base}-${mediumLargeWidth}x${mediumLargeHeight}${extension}`;
    if (await doesImageExist(mediumLargeUrl)) {
      results.push({
        key: 'medium_large',
        url: mediumLargeUrl,
        width: mediumLargeWidth,
        height: mediumLargeHeight
      });
    }
  }

  // Reconstructed 2048 and 1536 versions
  if (originalSize && image.originalImageURL) {
    const extMatch = image.originalImageURL.match(/\.(jpe?g|png|webp|gif|avif|svg)$/i);
    const extension = extMatch ? extMatch[0] : '';
    const base = image.originalImageURL.replace(/\-[0-9]+x[0-9]+(?=\.\w+$)/, '').replace(/\.(jpe?g|png|webp|gif|avif|svg)$/i, '');
    for (const max of [2048, 1536]) {
      const {
        width,
        height
      } = getScaledDimensions(originalSize.width, originalSize.height, max);
      const constructedUrl = `${base}-${width}x${height}${extension}`;
      if (await doesImageExist(constructedUrl)) {
        results.push({
          key: `${max}`,
          url: constructedUrl,
          width,
          height
        });
      }
    }
  }

  // Sort by size (area) ascending
  results.sort((a, b) => a.width * a.height - b.width * b.height);
  return results;
}
const toggleSizeKey = keyOrVal => {
  const keys = new Map([['t', 'thumbnail'], ['m', 'medium'], ['e', 'medium_large'], ['l', 'large'], ['1', '1536'], ['2', '2048'], ['f', 'full'], ['o', 'original']]);
  const largeKey = keys.get(keyOrVal);
  if (largeKey) {
    return largeKey;
  }
  const shortKey = [...keys.entries()].find(([, val]) => val === keyOrVal)?.[0];
  // [...myMap.entries()].find(([, val]) => val === '#198754')?.[0];
  if (shortKey) {
    return shortKey;
  }
};
const maximizeImgData = imgData => {
  const fullImgData = [];
  if (typeof imgData[0] !== 'undefined' && typeof imgData[0].sizes !== 'undefined' && typeof imgData[0].trunc !== 'undefined' && typeof imgData[0].ext !== 'undefined') {
    imgData[0].sizes.forEach((size, index) => {
      if (typeof size.s !== 'undefined' && typeof size.w !== 'undefined' && typeof size.h !== 'undefined') {
        fullImgData.push({
          key: toggleSizeKey(size?.k) || null,
          url: imgData[0].trunc + size.s + '.' + imgData[0].ext,
          width: size.w,
          height: size.h
        });
      }
    });
  }
  return fullImgData;
};
const minimizeImgData = sizes => {
  const ext = sizes[0].url.split('.').pop();
  const trunc = sizes[0].url.replace(/\-[0-9]+x[0-9]+(?=\.\w+$)/, '').replace(/\.(jpe?g|png|webp|gif|avif|svg)$/i, '');
  const shortSizes = [];
  sizes.forEach(size => {
    shortSizes.push({
      s: size.url.replace(trunc, '').replace('.' + ext, ''),
      w: size.width,
      h: size.height,
      k: toggleSizeKey(size.key)
    });
  });
  const imgData = [{
    trunc,
    ext,
    sizes: shortSizes
  }];
  return imgData;
};
const makeSrcset = attributes => {
  const {
    fullImgData,
    sizeIndex,
    disableResponsiveDownsizing
  } = attributes;

  // console.log( 'fullImgData: ' + JSON.stringify( fullImgData, null, 2 ) + '\n' );
  // console.log( 'sizeIndex: ' + sizeIndex );

  const srcsetList = [];
  if (disableResponsiveDownsizing) {
    // exactly one src
    srcsetList.push(fullImgData[sizeIndex].url + ' ' + fullImgData[sizeIndex].width + 'w');
  } else {
    // multiple sources
    fullImgData.forEach((imgSize, index) => {
      if (index === 0) {
        // first loop, thumbnail image – add only if selected or if image has square format (use largest size since current loop size will always be square at first loop)
        if (sizeIndex == 0 || fullImgData[fullImgData.length - 1].width == fullImgData[fullImgData.length - 1].height) {
          // add thumbnail to srcset
          srcsetList.push(imgSize.url + ' ' + imgSize.width + 'w');
        }
      } else {
        // other loops, non thumbnail images
        // never add img larger current selected size (or if allowing larger sizes than selected, never allow unscaled img index >6)
        if (index <= sizeIndex) {
          // add if current size is smaller than selected size
          srcsetList.push(imgSize.url + ' ' + imgSize.width + 'w');
        }
      }
    });
  }

  // console.log( 'srcsetList: ' + JSON.stringify( srcsetList, null, 2 ) + '\n' );

  return srcsetList.join(', ');
};

// Old functions...

function getUrlTruncAndExtension(url) {
  const urlExplode = url.split('.');
  const fileExtension = urlExplode[urlExplode.length - 1];
  urlExplode.pop();
  const urlWithoutFileExtension = urlExplode.join('.');
  return {
    trunc: urlWithoutFileExtension,
    extension: fileExtension
  };
}
function checkFullImgIsScaled(fullUrl) {
  const urlWithoutFileExtension = getUrlTruncAndExtension(fullUrl).trunc;
  return urlWithoutFileExtension.lastIndexOf('-scaled') === urlWithoutFileExtension.length - 7;
}
function getOriginalImgUrl(fullUrl) {
  const truncAndExtension = getUrlTruncAndExtension(fullUrl);
  return truncAndExtension.trunc.substring(0, truncAndExtension.trunc.length - 7) + '.' + truncAndExtension.extension;
}
function getSizesAndWithoutSizesTruncFromUrlTrunc(urlTrunc) {
  // input may be
  // http://my-domain.local/wp-content/uploads/2024/02/my-img-name-1024x768
  // http://my-domain.local/wp-content/uploads/2024/02/my-img-name-768x1333
  // http://my-domain.local/wp-content/uploads/2024/02/my-img-name

  // remove file name after last '-'
  const urlWithoutFileExtensionExplode = urlTrunc.split('-');
  const sizes = urlWithoutFileExtensionExplode[urlWithoutFileExtensionExplode.length - 1].split('x');
  urlWithoutFileExtensionExplode.pop();
  return {
    width: sizes[0],
    height: sizes[1],
    withoutSizeSlugTrunc: urlWithoutFileExtensionExplode.join('-')
  };
}
function removeFileExt(fullUrl) {
  const urlExplode = fullUrl.split('.');
  urlExplode.pop();
  return urlExplode.join('.');
}
function getSizeSlugFromUrl(fullUrl, originalImgUrl) {
  // console.log( '------> fullUrl: ' + fullUrl + ', originalImgUrl: ' + originalImgUrl )

  const sizeSlugWithFileExt = fullUrl.replace(removeFileExt(originalImgUrl), '');
  return removeFileExt(sizeSlugWithFileExt);
}
function makeSizedImgs(config) {
  const {
    originalWidth,
    originalHeight,
    url,
    scaleList
  } = config;
  const ratio = originalWidth / originalHeight;

  // need to separate if img size 'large' img is scaled down of a larger original img or is original size
  // doesn’t depend on ratio but only on width (not height!)
  const imgIsBetween770And1024 = originalWidth <= 1024 && originalWidth >= 770;

  // console.log( 'ratio: ' + ratio )
  // console.log( 'original size: ' + originalWidth + 'x' + originalHeight )
  // console.log( 'imgIsBetween770And1024: ' + ( imgIsBetween770And1024 ? 'true' : 'false' ) )

  const urlTruncAndExtension = getUrlTruncAndExtension(url);

  // console.log( 'urlTruncAndExtension: \n' + JSON.stringify( urlTruncAndExtension, null, 2 ) );

  const fileExtension = urlTruncAndExtension.extension;
  const urlWithoutFileExtension = urlTruncAndExtension.trunc;
  const sizesAndWithoutSizeSlugTrunc = imgIsBetween770And1024 ? {
    width: originalWidth,
    height: originalHeight,
    withoutSizeSlugTrunc: urlWithoutFileExtension
  } :
  // split img name to get sizes
  getSizesAndWithoutSizesTruncFromUrlTrunc(urlWithoutFileExtension);
  // console.log( 'sizesAndWithoutSizeSlugTrunc: \n' + JSON.stringify( sizesAndWithoutSizeSlugTrunc, null, 2 ) );

  // base width for scaling is still 1024 even for smaller images
  // const width = imgIsBetween770And1024 ? 1024 : sizesAndWithoutSizeSlugTrunc.width;
  const urlWithoutSizeSlugAndFileExtension = sizesAndWithoutSizeSlugTrunc.withoutSizeSlugTrunc;

  // console.log( 'width: ' + width )
  // console.log( 'urlWithoutSizeSlugAndFileExtension: ' + urlWithoutSizeSlugAndFileExtension )

  const returnList = [];
  scaleList.forEach((scale, index) => {
    // calculate new size

    let scaledWidth, scaledHeight;
    if (ratio >= 1 || scale === 768) {
      // is landscape or scale size is 768 (has a different calculation)

      scaledWidth = scale;
      scaledHeight = Math.round(scale / originalWidth * originalHeight);
    } else {
      // is portrait and not scale size 768

      scaledWidth = Math.round(scale / originalHeight * originalWidth);
      scaledHeight = scale;
    }

    // console.log( 'scaled size: ' + scaledWidth + 'x' + scaledHeight + ' (' + ( ratio >= 1 ? 'landscape' : 'portrait' ) + ')' )

    // check if default size exists for current img (only if original img is larger)
    if (scaledWidth <= originalWidth) {
      const sizeSlug = '-' + scaledWidth + 'x' + scaledHeight;
      const scaledUrl = urlWithoutSizeSlugAndFileExtension + sizeSlug + '.' + fileExtension;
      returnList.push({
        url: scaledUrl,
        // deprecated soon
        sizeSlug: sizeSlug,
        width: scaledWidth,
        height: scaledHeight
      });
    }
  });
  return returnList;
}
function getImgWidthHeight(imgUrl) {
  return new Promise((resolve, reject) => {
    let img = document.createElement('img');
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
      img.remove;
    };
    img.onerror = err => {
      reject('Error on loading image "' + imgUrl + '"', err);
    };
    img.src = imgUrl;
    document.body.appendChild(img);
  });
}
function imgExists(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          resolve(true);
        } else {
          resolve(false);
        }
      }
    };
    xhr.send(null);
  });
}

// getting sorted list of all imgs (default and hidden scaled)
async function getImgSizesData(img) {
  // console.log( 'getImgSizesData()' );

  // console.log( 'img.sizes: \n' + JSON.stringify( img.sizes, null, 2 ) );
  // console.log( 'img.media_details: \n' + JSON.stringify( img.media_details, null, 2 ) );

  // scaled (hidden) img settings

  const imgScaleList = [768, 1536, 2048];
  const defaultImgList = ['thumbnail', 'medium', 'large', 'full'];
  const imgSizesOrder = ['thumbnail', 'medium', imgScaleList[0] + '', 'large', imgScaleList[1] + '', imgScaleList[2] + '', 'full', 'original'];
  let originalImgUrl = '';
  let originalWidth = 0;
  let originalHeight = 0;
  const fullImgIsScaled = checkFullImgIsScaled(img.url);
  const imgIsBetween770And1024 = img.width <= 1024 && img.width >= 770;
  if (fullImgIsScaled) {
    // get original, get sizes
    originalImgUrl = getOriginalImgUrl(img.url);
    let originalImgSizes;
    try {
      originalImgSizes = await getImgWidthHeight(originalImgUrl);
    } catch (err) {
      console.error(err);
    }
    originalWidth = originalImgSizes.width;
    originalHeight = originalImgSizes.height;
  } else {
    // get sizes from full img
    originalImgUrl = img.sizes.full.url;
    originalWidth = img.sizes.full.width;
    originalHeight = img.sizes.full.height;
  }
  const originalImgUrlTruncAndExt = getUrlTruncAndExtension(originalImgUrl);
  const truncWithoutSizeSlug = originalImgUrlTruncAndExt.trunc;
  const fileExt = originalImgUrlTruncAndExt.extension;
  let scaledImgs = new Map();
  const returnImgs = [];

  // console.log( 'img.width: ' + img.width )

  // make sizes only if large img exists or original img has 1024px width
  if (img.sizes.large != undefined || imgIsBetween770And1024) {
    // if ( img.sizes.large != undefined ) {

    // config for making sizes (might change in newer WP versions)
    const sizedImgsConfig = {
      url: imgIsBetween770And1024 ? img.url : img.sizes.large.url,
      scaleList: imgScaleList,
      originalWidth: originalWidth,
      originalHeight: originalHeight
    };
    const sizedImgs = makeSizedImgs(sizedImgsConfig);

    // console.log( 'sizedImgsConfig: ' + JSON.stringify( sizedImgsConfig, null, 2 ) );
    // console.log( 'sizedImgs: ' + JSON.stringify( sizedImgs, null, 2 ) );

    // check all imgs if exist (since WordPress might change hidden img sizes one day);
    await Promise.all(sizedImgs.map(async (sizedImg, index) => {
      const currentImageExists = await imgExists(sizedImg.url);
      if (currentImageExists) {
        scaledImgs.set(imgScaleList[index] + '', sizedImg);
      }
    }));
  }

  // console.log( 'scaledImgs.length: ' + scaledImgs.length );

  // make ordered list of all existing default img sizes and scaled (hidden) img sizes
  imgSizesOrder.forEach((imgSizeKey, index) => {
    if (defaultImgList.indexOf(imgSizeKey) != -1 && img.sizes[imgSizeKey] != undefined) {
      // get from default img list
      returnImgs.push({
        url: img.sizes[imgSizeKey].url,
        sizeSlug: getSizeSlugFromUrl(img.sizes[imgSizeKey].url, originalImgUrl),
        width: img.sizes[imgSizeKey].width,
        height: img.sizes[imgSizeKey].height
      });
    } else if (imgScaleList.indexOf(parseFloat(imgSizeKey)) != -1 && scaledImgs.get(imgSizeKey) != undefined) {
      // get from scaled imgs list
      returnImgs.push(scaledImgs.get(imgSizeKey));
    } else if (imgSizeKey == 'original' && fullImgIsScaled) {
      // add unscaled original
      returnImgs.push({
        url: originalImgUrl,
        sizeSlug: getSizeSlugFromUrl(originalImgUrl, originalImgUrl),
        width: originalWidth,
        height: originalHeight
      });
    }
  });

  // sort by width since current order might not correspond to sizes (e.g. portrait image at scale 768)
  returnImgs.sort((a, b) => a.width - b.width);

  // console.log( 'returnImgs: \n' + JSON.stringify( returnImgs, null, 2 ) );
  // console.log( 'truncWithoutSizeSlug: ' + truncWithoutSizeSlug );
  // console.log( 'fileExt: ' + fileExt );

  return {
    imgs: returnImgs,
    originalWidth: originalWidth,
    originalHeight: originalHeight,
    truncWithoutSizeSlug: truncWithoutSizeSlug,
    fileExt: fileExt
  };
}
const getImgAllDataFromMediaSizes = mediaSizes => {
  if (typeof mediaSizes === 'undefined') {
    return {};
  }
  const returnImgs = [];
  const largestMediaSize = Object.values(mediaSizes)[Object.keys(mediaSizes).length - 1];
  Object.values(mediaSizes).forEach(mediaSize => {
    returnImgs.push({
      url: mediaSize.source_url,
      sizeSlug: getSizeSlugFromUrl(mediaSize.source_url, largestMediaSize.source_url),
      width: mediaSize.width,
      height: mediaSize.height
    });
  });
  // console.log( '----> returnImgs ( ' + imgId + ' ): ' + JSON.stringify( returnImgs, null, 2 ) + '\n' );

  const originalImgUrlTruncAndExt = getUrlTruncAndExtension(largestMediaSize.source_url);

  // sort by width or height
  if (largestMediaSize.width > largestMediaSize.height) {
    // landscape format, sort by width
    returnImgs.sort((a, b) => a.width - b.width);
  } else {
    // portrait format, sort by height
    returnImgs.sort((a, b) => a.height - b.height);
  }
  return {
    imgs: returnImgs,
    originalWidth: largestMediaSize.width,
    originalHeight: largestMediaSize.height,
    truncWithoutSizeSlug: originalImgUrlTruncAndExt.trunc,
    fileExt: originalImgUrlTruncAndExt.extension
  };
};
const makeBase64PreloadImgSrc = (imgWidth, imgHeight) => {
  const img = '<svg xmlns="http://www.w3.org/2000/svg" width="' + imgWidth + 'px" height="' + imgHeight + 'px" viewBox="0 0 ' + imgWidth + ' ' + imgHeight + '"><rect fill="none" width="' + imgWidth + '" height="' + imgHeight + '"/></svg>';
  const imgBase64 = btoa(img);
  return 'data:image/svg+xml;base64,' + imgBase64;
};

/*
example:

// was saved in attibutes before
imgSizes = [
    {
        url: '', // url was very large
        width: '',
        height: '',
    },
    // ... (1...n)
];

// is saved in attributes now, replaces imgSizes
imgData = [
    sizes: [
        {
            s: '', // size slug is short
            w: '',
            h: '',
        },
        // ... (1...n)
    ],
    trunc: '',
    ext: '',
];
*/
// DEPRECATED: Replace makeImgSizesFromImgData by maximizeImgData.
const makeImgSizesFromImgData = imgData => {
  const imgSizes = [];
  if (typeof imgData[0] !== 'undefined' && typeof imgData[0].sizes !== 'undefined' && typeof imgData[0].trunc !== 'undefined' && typeof imgData[0].ext !== 'undefined') {
    imgData[0].sizes.forEach((size, index) => {
      if (typeof size.s !== 'undefined' && typeof size.w !== 'undefined' && typeof size.h !== 'undefined') {
        imgSizes.push({
          url: imgData[0].trunc + size.s + '.' + imgData[0].ext,
          width: size.w,
          height: size.h
        });
      }
    });
  }
  return imgSizes;
};
const makeImgData = (imgSizes, truncWithoutSizeSlug, fileExt) => {
  const sizes = [];
  imgSizes.forEach((img, index) => {
    sizes.push({
      s: img.sizeSlug,
      w: img.width,
      h: img.height
    });
  });
  return [{
    sizes: sizes,
    trunc: truncWithoutSizeSlug,
    ext: fileExt
  }];
};

// export async function getOriginalImgSizes( img ) {

//     if ( fullImgIsScaled( img.url ) ) {
//         // find original img

//         let originalImgSizes;

//         try {
//             originalImgSizes = await getImgWidthHeight( getOriginalImgUrl( img.url ) );
//         } catch( err ) {
//             console.error( err );
//         }

//         return {
//             width: originalImgSizes.width,
//             height: originalImgSizes.height,
//         };

//     }
//     else {
//         // get sizes from full img
//         return {
//             width: img.sizes.full.width,
//             height: img.sizes.full.height,
//         };
//     }
// }

/***/ }),

/***/ "./src/_functions/utilities.js":
/*!*************************************!*\
  !*** ./src/_functions/utilities.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   filterByAllowedValueKeys: () => (/* binding */ filterByAllowedValueKeys),
/* harmony export */   getFileName: () => (/* binding */ getFileName),
/* harmony export */   getFileSuffix: () => (/* binding */ getFileSuffix),
/* harmony export */   getTemplate: () => (/* binding */ getTemplate)
/* harmony export */ });
const filterByAllowedValueKeys = (mapArray, allowedValues) => {
  let filteredValues = [];
  if (typeof allowedValues !== 'undefined' && allowedValues != null && Array.isArray(allowedValues) && allowedValues.length > 0) {
    mapArray.forEach(item => {
      if (typeof allowedValues.find(key => key === item.value) !== 'undefined') {
        filteredValues.push(item);
      }
    });
  } else {
    filteredValues = mapArray;
  }
  return filteredValues;
};
const getTemplate = (templates, currentTemplateName) => {
  const currentTemplate = templates.find(item => item.name === currentTemplateName);
  return currentTemplate ? currentTemplate : {};
};
const getFileSuffix = filePath => {
  if (!!filePath && filePath.indexOf('.') != -1) {
    const explode = filePath.split('.');
    return explode[explode.length - 1];
  } else {
    return '';
  }
};
const getFileName = filePath => {
  if (!!filePath && filePath.indexOf('/') != -1) {
    const explode = filePath.split('/');
    return explode[explode.length - 1];
  } else {
    return '';
  }
};

/***/ }),

/***/ "./src/slider/block.json":
/*!*******************************!*\
  !*** ./src/slider/block.json ***!
  \*******************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"bsx-blocks/slider","version":"0.1.0","title":"BSX Slider","category":"design","description":"Create a Slider.","example":{},"attributes":{"sliderType":{"type":"string","default":"citation"},"imgSize":{"type":"string"},"itemData":{"type":"array","source":"query","selector":".item","query":{"imgId":{"type":"number","source":"attribute","selector":"figure","attribute":"data-id"},"imgUrl":{"type":"string","source":"attribute","selector":"figure","attribute":"data-url"},"imgWidth":{"type":"string","source":"attribute","selector":"figure","attribute":"data-width"},"imgHeight":{"type":"string","source":"attribute","selector":"figure","attribute":"data-height"},"imgAlt":{"type":"string","source":"attribute","selector":"figure","attribute":"data-alt"},"heading":{"type":"string","source":"html","selector":"[data-slide-heading]"},"subline":{"type":"string","source":"html","selector":"[data-slide-subline]"},"text":{"type":"string","source":"html","selector":"[data-slide-text]"},"footerText_1":{"type":"string","source":"html","selector":"[data-slide-footer-1]"},"footerText_2":{"type":"string","source":"html","selector":"[data-slide-footer-2]"},"url":{"type":"string","selector":"a","source":"attribute","attribute":"href"},"target":{"type":"string","selector":"a","source":"attribute","attribute":"target"},"rel":{"type":"string","selector":"a","source":"attribute","attribute":"rel"}},"default":[]},"hint":{"type":"string"},"prevText":{"type":"string"},"nextText":{"type":"string"},"rounded":{"type":"string","default":"circle"},"imgThumbnail":{"type":"boolean"},"bgColor":{"type":"string"},"borderState":{"type":"string"},"marginBefore":{"type":"string","default":""},"marginAfter":{"type":"string","default":""}},"supports":{"html":false,"className":false},"textdomain":"bsx-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

/***/ }),

/***/ "./src/slider/edit.js":
/*!****************************!*\
  !*** ./src/slider/edit.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_controls_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_functions/controls.js */ "./src/_functions/controls.js");
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _functions_icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../_functions/icon.js */ "./src/_functions/icon.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./src/slider/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';




// utils


// templates
// import templates from './templates';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

function Edit({
  attributes,
  setAttributes
}) {
  // const { getBlock } = useSelect( blockEditorStore );

  const {
    sliderType,
    imgSize,
    itemData,
    hint,
    prevText,
    nextText,
    rounded,
    imgThumbnail,
    borderState,
    bgColor,
    marginBefore,
    marginAfter
  } = attributes;

  // console.log( 'itemData: ' + JSON.stringify( itemData, null, 2 ) );

  // const hasInnerBlocks = () => {
  // 	const block = getBlock( clientId );
  // 	if ( typeof block.innerBlocks === 'undefined' ) return false;
  // 	return block.innerBlocks.length > 0;
  // }

  // let template = getTemplate( templates, templateName ).template;

  // initial overwrites
  itemData.forEach((item, index) => {
    if (item.subline === '&nbsp;') {
      item.subline = '';
    }
  });

  // update itemData all `item` at position `index`
  const updateItemDataItem = (index, newItem) => {
    const newItemData = [...itemData.slice(0, index), newItem, ...itemData.slice(index + 1)];
    setAttributes({
      itemData: newItemData
    });
  };

  // update itemData single `value` for `key` at position `index`
  const updateItemDataValue = (index, key, value) => {
    let newItem = itemData[index];
    newItem[key] = value;
    updateItemDataItem(index, newItem);
  };

  // // update imgList all `item` at position `index`
  // const updateImgListItem = ( index, newItem ) => {
  //     const newImgList = [
  //         ...imgList.slice( 0, index ),
  //         newItem,
  //         ...imgList.slice( index + 1 )
  //     ];
  //     setAttributes( { imgList: newImgList } );
  // }

  // // update imgList single `value` for `key` at position `index`
  // const updateImgListValue = ( index, key, value ) => {
  //     let newItem = imgList[ index ];
  //     newItem[ key ] = value;
  //     updateImgListItem( index, newItem );
  // }

  const onChangeSliderType = value => {
    if (value === 'product-gallery') {
      setAttributes({
        sliderType: value,
        rounded: ''
      });
    } else {
      setAttributes({
        sliderType: value
      });
    }
  };
  const onChangeImgSize = value => {
    setAttributes({
      imgSize: value
    });

    // TODO: change all img urls & sizes

    itemData.forEach((item, index) => {
      console.log('imgId: ' + item.imgId);
    });
  };
  const onChangeImg = (index, img) => {
    // TODO: make img url configurable

    const newImg = {};
    if (sliderType === 'product-gallery') {
      newImg.url = img.sizes.medium.url;
      newImg.width = img.sizes.medium.width;
      newImg.height = img.sizes.medium.height;
    } else {
      newImg.url = img.sizes.thumbnail.url;
      newImg.width = img.sizes.thumbnail.width;
      newImg.height = img.sizes.thumbnail.height;
    }
    updateItemDataItem(index, {
      imgId: img.id,
      imgUrl: newImg.url,
      imgWidth: newImg.width,
      imgHeight: newImg.height,
      imgAlt: img.alt,
      heading: itemData[index].heading,
      subline: itemData[index].subline,
      text: itemData[index].text,
      footerText_1: itemData[index].footerText_1,
      footerText_2: itemData[index].footerText_2
    });
    // updateImgListItem( index, { 
    //     imgId: img.id,
    //     imgUrl: img.sizes.thumbnail.url,
    //     imgWidth: img.sizes.thumbnail.width,
    //     imgHeight: img.sizes.thumbnail.height,
    //     imgAlt: img.alt,
    // } );
  };
  const onChangeAlt = (index, value) => {
    updateItemDataValue(index, 'imgAlt', value);
    // updateImgListValue( index, 'imgAlt', value );
  };
  const onChangeText = (index, value) => {
    updateItemDataValue(index, 'text', value);
  };
  const onChangeHeading = (index, value) => {
    updateItemDataValue(index, 'heading', value);
  };
  const onChangeSubline = (index, value) => {
    updateItemDataValue(index, 'subline', value);
  };
  const onChangeFooterText_1 = (index, value) => {
    updateItemDataValue(index, 'footerText_1', value);
  };
  const onChangeFooterText_2 = (index, value) => {
    updateItemDataValue(index, 'footerText_2', value);
  };
  const onChangeUrl = (index, value) => {
    updateItemDataValue(index, 'url', value);
  };
  const onChangeTarget = (index, value) => {
    updateItemDataValue(index, 'target', value);
  };
  const onChangeRel = (index, value) => {
    updateItemDataValue(index, 'rel', value);
  };
  const onChangeBgColor = value => {
    setAttributes({
      bgColor: value
    });
  };
  const onAddItem = () => {
    setAttributes({
      itemData: [...itemData, {}]
    });
  };
  const deleteItemDataItem = index => {
    const newMediaList = [...itemData.slice(0, index), ...itemData.slice(index + 1)];
    setAttributes({
      itemData: newMediaList
    });
  };
  const itemDataItemMoveTo = (index, newIndex) => {
    const newMediaList = [...itemData.slice(0, index), ...itemData.slice(index + 1)];
    const newMediaList2 = [...newMediaList.slice(0, newIndex), itemData[index], ...newMediaList.slice(newIndex)];
    setAttributes({
      itemData: newMediaList2
    });
  };
  const onClickDelete = index => {
    const response = confirm((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Delete item') + ' ' + (index + 1) + '?');
    if (response == true) {
      deleteItemDataItem(index);
    } else {
      // do nothing
    }
  };
  const onClickMoveUp = index => {
    const newIndex = index > 0 ? index - 1 : itemData.length - 1;
    itemDataItemMoveTo(index, newIndex);
  };
  const onClickMoveDown = index => {
    const newIndex = index < itemData.length - 1 ? index + 1 : 0;
    itemDataItemMoveTo(index, newIndex);
  };
  const onChangeHint = value => {
    setAttributes({
      hint: value
    });
  };
  const onChangePrevText = value => {
    setAttributes({
      prevText: value
    });
  };
  const onChangeNextText = value => {
    setAttributes({
      nextText: value
    });
  };
  const onChangeRounded = value => {
    setAttributes({
      rounded: value
    });
  };
  const onChangeImgThumbnail = value => {
    setAttributes({
      imgThumbnail: value
    });
  };
  const onChangeBorderState = value => {
    setAttributes({
      borderState: value
    });
  };
  const onChangeMarginBefore = value => {
    setAttributes({
      marginBefore: value
    });
  };
  const onChangeMarginAfter = value => {
    setAttributes({
      marginAfter: value
    });
  };

  // class names

  let sliderWrapperClassName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_7__["default"])({
    sliderType
  });
  sliderWrapperClassName = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__.addClassNames)({
    marginBefore,
    marginAfter
  }, sliderWrapperClassName);
  const sliderClassName = 'owl-carousel owl-theme';
  let imgClassName = 'owl-lazy img-fluid';
  imgClassName = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_3__.addClassNames)({
    rounded,
    imgThumbnail,
    borderState
  }, imgClassName);

  // must contain .item to get attributes from html
  const itemClassName = sliderType === 'citation' ? 'item d-block text-center' : 'item px-3 py-2 text-center' + (typeof bgColor !== 'undefined' && !!bgColor ? ' bg-' + bgColor : '');

  // const textClassName = 'h4 font-weight-normal font-italic mb-4';
  // const headingClassName = 'test-1';
  // const sublineClassName = 'test-2';
  // const footer1ClassName = 'font-weight-bold text-uppercase';
  // const footer2ClassName = '';

  const textClassName = 'h4 font-weight-normal font-italic mb-4';
  const headingClassName = 'h4 text-center';
  const sublineClassName = 'small text-center mb-2';
  const footer1ClassName = sliderType === 'product-gallery' ? '' : 'font-weight-bold text-uppercase';
  const footer2ClassName = sliderType === 'product-gallery' ? 'lead text-danger font-weight-bold' : '';
  const hintClassName = sliderType === 'product-gallery' ? 'text-danger font-weight-bold' : '';
  const sliderRowClassName = sliderType === 'product-gallery' ? 'row' : '';
  const TagName = 'div';
  const controls = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider settings', 'bsx-blocks'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Slider type', 'bsx-blocks'),
        value: sliderType,
        onChange: onChangeSliderType,
        options: [{
          value: 'citation',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Citation', 'bsx-blocks')
        }, {
          value: 'product-gallery',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Gallery', 'bsx-blocks')
        }]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Hint', 'bsx-blocks'),
        value: hint,
        onChange: onChangeHint
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Prev button text', 'bsx-blocks'),
        value: prevText,
        onChange: onChangePrevText
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Next button text', 'bsx-blocks'),
        value: nextText,
        onChange: onChangeNextText
      }), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__.bgColorSelect)(bgColor, onChangeBgColor)]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image appearance', 'bsx-blocks'),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Rounded', 'bsx-blocks'),
        checked: !!rounded ? 'circle' : '',
        onChange: onChangeRounded
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Border', 'bsx-blocks'),
        checked: !!imgThumbnail,
        onChange: onChangeImgThumbnail
      }), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__.borderStateSelect)(borderState, onChangeBorderState), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image size', 'bsx-blocks'),
        value: imgSize,
        onChange: onChangeImgSize,
        options: [{
          value: 'thumbnail',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Thumbnail (square format)', 'bsx-blocks')
        }, {
          value: 'medium',
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium', 'bsx-blocks')
        }]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'bsx-blocks'),
      children: [(0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__.marginBeforeSelect)(marginBefore, onChangeMarginBefore), (0,_functions_controls_js__WEBPACK_IMPORTED_MODULE_4__.marginAfterSelect)(marginAfter, onChangeMarginAfter)]
    })]
  });

  // add class names to blockProps
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    className: sliderWrapperClassName
  });
  // console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(TagName, {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        class: sliderRowClassName,
        children: itemData.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [sliderType === 'citation' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            class: itemClassName,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              class: "row",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                class: "col-4 col-sm-3 col-lg-2 mx-auto",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("figure", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                    onSelect: value => onChangeImg(index, value),
                    allowedTypes: "image",
                    value: item.imgId,
                    render: ({
                      open
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                      children: item.imgUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        className: "bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle",
                        onClick: open,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                          className: imgClassName,
                          src: item.imgUrl,
                          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change/upload Image', 'bsx-blocks')
                        })
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        className: "button button-large bsxui-w-100",
                        onClick: open,
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Image', 'bsx-blocks')
                      })
                    })
                  }, index)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  class: "bsxui-inline-control",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alt text', 'bsx-blocks'),
                    value: item.imgAlt,
                    onChange: value => {
                      onChangeAlt(index, value);
                    }
                  })
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              class: "px-3 px-md-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: textClassName,
                multiline: false,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert text here...', 'bsx-blocks'),
                value: item.text,
                onChange: value => {
                  onChangeText(index, value);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: footer1ClassName,
                multiline: false,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert footer text 1 here...', 'bsx-blocks'),
                value: item.footerText_1,
                onChange: value => {
                  onChangeFooterText_1(index, value);
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "div",
                className: footer2ClassName,
                multiline: false,
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Insert footer text 2 here...', 'bsx-blocks'),
                value: item.footerText_2,
                onChange: value => {
                  onChangeFooterText_2(index, value);
                }
              })]
            })]
          }), sliderType === 'product-gallery' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            class: "bsxui-owl-slide-1-2-3-4 col-md-6 col-lg-3 p-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              class: itemClassName,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                class: "",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("figure", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                    onSelect: value => onChangeImg(index, value),
                    allowedTypes: "image",
                    value: item.imgId,
                    render: ({
                      open
                    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
                      children: item.imgUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        className: "bsxui-h-auto bsxui-w-100 bsxui-p-0 bsxui-va-middle",
                        onClick: open,
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
                          className: imgClassName,
                          src: item.imgUrl,
                          alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change/upload Image', 'bsx-blocks')
                        })
                      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                        className: "button button-large bsxui-w-100",
                        onClick: open,
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Image', 'bsx-blocks')
                      })
                    })
                  }, index)
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                  class: "bsxui-inline-control",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
                    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Alt text', 'bsx-blocks'),
                    value: item.imgAlt,
                    onChange: value => {
                      onChangeAlt(index, value);
                    }
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                class: "px-3",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "div",
                  className: headingClassName,
                  multiline: false,
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add heading here...', 'bsx-blocks'),
                  value: item.heading,
                  onChange: value => {
                    onChangeHeading(index, value);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                  tagName: "div",
                  className: sublineClassName,
                  multiline: false,
                  placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add subline here...', 'bsx-blocks'),
                  value: item.subline,
                  onChange: value => {
                    onChangeSubline(index, value);
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                  class: "row no-gutters align-items-end",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
                    class: "col-auto",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                      tagName: "div",
                      className: footer1ClassName,
                      multiline: false,
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Original price...', 'bsx-blocks'),
                      value: item.footerText_1,
                      onChange: value => {
                        onChangeFooterText_1(index, value);
                      }
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                    class: "col text-right",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("small", {
                      class: hintClassName,
                      children: hint
                    }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                      tagName: "div",
                      className: footer2ClassName + ' bsxui-inline-editor',
                      multiline: false,
                      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Current price...', 'bsx-blocks'),
                      value: item.footerText_2,
                      onChange: value => {
                        onChangeFooterText_2(index, value);
                      }
                    })]
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
              class: "bsxui-inline-control bsxui-mb-3",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: "bsxui-d-flex",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  className: "button bsxui-icon-button",
                  onClick: () => {
                    onClickMoveUp(index);
                  },
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move backward', 'bsx-blocks'),
                  children: _functions_icon_js__WEBPACK_IMPORTED_MODULE_6__.uiIconCarretLeft
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  className: "button bsxui-icon-button",
                  onClick: () => {
                    onClickMoveDown(index);
                  },
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move forward', 'bsx-blocks'),
                  children: _functions_icon_js__WEBPACK_IMPORTED_MODULE_6__.uiIconCarretRight
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  className: "button bsxui-icon-button bsxui-text-danger bsxui-border-danger bsxui-ml-auto",
                  onClick: () => {
                    onClickDelete(index);
                  },
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Item', 'bsx-blocks'),
                  children: _functions_icon_js__WEBPACK_IMPORTED_MODULE_6__.uiIconTrash
                })]
              })
            })]
          })]
        }))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
        className: "bsxui-inline-control",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          className: "button button-large bsxui-w-100",
          onClick: onAddItem,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add item', 'bsx-blocks')
        })
      })]
    }), controls]
  });
}

/***/ }),

/***/ "./src/slider/save.js":
/*!****************************!*\
  !*** ./src/slider/save.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_functions/add-class-names.js */ "./src/_functions/add-class-names.js");
/* harmony import */ var _functions_img_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../_functions/img.js */ "./src/_functions/img.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/slider/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



// import { makeSaveAttributes } from './../_functions/attributes.js';


// utils


/**
 * @return {Element} Element to render.
 */

function save({
  attributes
}) {
  const {
    sliderType,
    imgSize,
    itemData,
    hint,
    prevText,
    nextText,
    rounded,
    imgThumbnail,
    borderState,
    bgColor,
    marginBefore,
    marginAfter
  } = attributes;

  // class names

  let sliderWrapperClassName = (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__["default"])({
    sliderType
  });
  sliderWrapperClassName = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__.addClassNames)({
    marginBefore,
    marginAfter
  }, sliderWrapperClassName);
  const sliderClassName = 'owl-carousel owl-theme outer-nav nav-lg' + (sliderType === 'citation' ? ' bsx-slider-fadeout' : '');
  let imgClassName = 'img-fluid' + (sliderType === 'product-gallery' ? ' owl-lazy' : '');
  imgClassName = (0,_functions_add_class_names_js__WEBPACK_IMPORTED_MODULE_2__.addClassNames)({
    rounded,
    imgThumbnail,
    borderState
  }, imgClassName);

  // must contain .item to get attributes from html
  const itemClassName = sliderType === 'citation' ? 'item d-block text-center' : 'item d-block px-3 py-2 text-center' + (typeof bgColor !== 'undefined' && !!bgColor ? ' bg-' + bgColor : '');
  const textClassName = 'h4 font-weight-normal font-italic mb-4';
  const headingClassName = 'h4 text-center';
  const sublineClassName = 'small text-center mb-2';
  const footer1ClassName = sliderType === 'product-gallery' ? '' : 'font-weight-bold text-uppercase';
  const footer2ClassName = sliderType === 'product-gallery' ? 'lead text-danger font-weight-bold' : '';
  const hintClassName = sliderType === 'product-gallery' ? 'text-danger font-weight-bold' : '';
  const TagName = 'div';
  const prevLabel = !!prevText ? prevText : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Prev', 'bsx-blocks');
  const nextLabel = !!nextText ? nextText : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Next', 'bsx-blocks');
  const prevHtml = '<i class="fa fa-chevron-left" aria-label="' + prevLabel + '"></i>';
  const nextHtml = '<i class="fa fa-chevron-right" aria-label="' + nextLabel + '"></i>';

  // if lazyLoad: true use data-src="..." data-g-fn="lazyload"
  // if lazyLoad: false, multiLazyload: true use class="... owl-lazy" data-g-src="..." loading="lazy"
  const options = sliderType === 'citation' ? "{ lazyLoad: false, multiLazyload: true, responsive: { 0: { items: 1 } }, margin: 0, encodeUriNavText: [ '" + encodeURI(prevHtml) + "', '" + encodeURI(nextHtml) + "' ], navClass: [ 'btn btn-link is-prev', 'btn btn-link is-next' ] }" : "{ lazyLoad: true, responsive: { 0: { items: 1 }, 480: { items: 2 }, 768: { items: 3 }, 992: { items: 4 } }, encodeUriNavText: [ '" + encodeURI(prevHtml) + "', '" + encodeURI(nextHtml) + "' ], navClass: [ 'btn btn-primary is-prev', 'btn btn-primary is-next' ], navSpeed: 300, autoplaySpeed: 400, dotsSpeed: 400, smartSpeed: 300, fluidSpeed: 400, dragEndSpeed: 200 }";
  // makeBase64PreloadImgSrc( item.imgWidth, item.imgHeight )

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TagName, {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: sliderWrapperClassName
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      class: sliderClassName,
      "data-fn": "owl-carousel",
      "data-fn-options": options,
      children: itemData.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        class: itemClassName,
        children: [sliderType === 'citation' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            class: "row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              class: "col-4 col-sm-3 col-lg-2 mx-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("figure", {
                "data-id": item.imgId,
                "data-url": item.imgUrl,
                "data-width": item.imgWidth,
                "data-height": item.imgHeight,
                "data-alt": item.imgAlt,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("script", {
                  children: ["document.write( '", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    className: imgClassName,
                    src: (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_3__.makeBase64PreloadImgSrc)(item.imgWidth, item.imgHeight),
                    alt: item.imgAlt,
                    width: item.imgWidth,
                    height: item.imgHeight,
                    "data-g-src": item.imgUrl,
                    "data-g-fn": "lazyload"
                  }), "' );"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("noscript", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                    className: imgClassName,
                    src: item.imgUrl,
                    alt: item.imgAlt,
                    width: item.imgWidth,
                    height: item.imgHeight
                  })
                })]
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            class: "px-3 px-md-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "div",
              className: textClassName,
              "data-slide-text": true,
              value: item.text
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "div",
              className: footer1ClassName,
              "data-slide-footer-1": true,
              value: item.footerText_1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "div",
              className: footer2ClassName,
              "data-slide-footer-2": true,
              value: item.footerText_2
            })]
          })]
        }), sliderType === 'product-gallery' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            class: "",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("figure", {
              "data-id": item.imgId,
              "data-url": item.imgUrl,
              "data-width": item.imgWidth,
              "data-height": item.imgHeight,
              "data-alt": item.imgAlt,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("script", {
                children: ["document.write( '", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  className: imgClassName,
                  src: (0,_functions_img_js__WEBPACK_IMPORTED_MODULE_3__.makeBase64PreloadImgSrc)(item.imgWidth, item.imgHeight),
                  alt: item.imgAlt,
                  width: item.imgWidth,
                  height: item.imgHeight,
                  "data-src": item.imgUrl,
                  loading: "lazy"
                }), "' );"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("noscript", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("img", {
                  className: imgClassName,
                  src: item.imgUrl,
                  alt: item.imgAlt,
                  width: item.imgWidth,
                  height: item.imgHeight
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            class: "",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "div",
              className: headingClassName,
              "data-slide-heading": true,
              value: item.heading
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
              tagName: "div",
              className: sublineClassName,
              "data-slide-subline": true,
              value: item.subline == '' ? '&nbsp;' : item.subline
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              class: "row no-gutters align-items-end",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
                class: "col-auto",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  tagName: "strike",
                  className: footer1ClassName,
                  "data-slide-footer-1": true,
                  value: item.footerText_1
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                class: "col text-right",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("small", {
                  class: hintClassName,
                  children: hint
                }), "\xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
                  tagName: "strong",
                  className: footer2ClassName,
                  "data-slide-footer-2": true,
                  value: item.footerText_2
                })]
              })]
            })]
          })]
        })]
      }))
    })
  });
}

/***/ }),

/***/ "./src/slider/utils.js":
/*!*****************************!*\
  !*** ./src/slider/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeClassName = attributes => {
  const {
    sliderType
  } = attributes;
  const classNames = ['bsx-slider-wrapper'];
  if (!!sliderType) {
    if (sliderType == 'citation') {
      classNames.push('bsx-citation-slider');
    }
  }
  return classNames.join(' ');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeClassName);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/slider/index.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _functions_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_functions/icon.js */ "./src/_functions/icon.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/slider/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/slider/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/slider/block.json");
/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */





// import deprecated from './deprecated';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  icon: _functions_icon_js__WEBPACK_IMPORTED_MODULE_1__.slider,
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map