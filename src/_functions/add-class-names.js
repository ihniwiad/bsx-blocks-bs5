// add class names

const sizesMap = {
    0: '', // XS: default, no size letter
    1: 'sm',
    2: 'md',
    3: 'lg',
    4: 'xl',
    5: 'xxl',
};
// Map position keys (top, bottom, left, right, all) to Bootstrap class name letters
const positionsMap = {
    'all': '', // all: default, no position letter
    't': 't',
    'b': 'b',
    'y': 'y',
    'l': 's', // Left: 's' for 'start'
    'r': 'e', // Right: 'e' for 'end'
    'x': 'x',
};
// Map property keys to Bootstrap class name prefixes
const propertyMap = {
    'margin': 'm',
    'padding': 'p',
};

// TODO: Reduce property data keys from size, positions, value to s, p, v.
/**
 * Get responsive Bootstrap classes for a given property.
 *
 * @param {string} property         E.g. 'margin', 'padding'
 * @param {array} propertyArray     Array of property values with size, positions, and value
 * @returns {string}
 */
function getResponsivePositionPropertyClasses(property, propertyArray) {
    if (!Array.isArray(propertyArray)) {
        // console.log('propertyArray is not an array:', propertyArray);
        return '';
    }
    // TODO: Make position optional for responsive non-positioned properties, e.g. `text-md-center`
    const propertyClasses = propertyArray
        .filter(item => item && item.v && item.p && (Array.isArray(item.p) ? item.p.length : !!item.p))
        .map(item => {
            // Positions: Array or String
            const positionsArr = Array.isArray(item.p) ? item.p : [item.p];
            const size = item.s ? sizesMap[item.s] : '';
            const bsSize = size && size !== 'xs' ? size + '-' : ''; // 'xs' is default, no breakpoint prefix
            const val = item.v;
            return positionsArr
                .map(pos => {
                    let p = positionsMap[pos] || pos;
                    p = p === 'all' ? '' : p; // 'all' is default, no position letter
                    return `${propertyMap[property]}${p}-${bsSize}${val}`;
                })
                .join(' ');
        })
        .join(' ');

    // console.log('Generated margin classes:', propertyClasses);
    return propertyClasses;
}

export function addClassNames(attributes, classNamesString) {

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
        flexDirection,
        alignItems,
        gutter,
        rowReverse,
        justifyContent,
        textColumns,
        margin,
    } = attributes;

    const classNames = (typeof classNamesString != 'undefined' && classNamesString.trim().length > 0) ? classNamesString.split(' ') : [];

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
    }
    else {

        // top & bottom
        if (!!marginBefore && marginBefore === marginAfter) {
            classNames.push('my-' + marginBefore);
        }
        else {
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
        }
        else {
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
        classNames.push('m' + ((resMargin1Position === 'all') ? '' : resMargin1Position) + '-' + ((resMargin1Breakpoint === 'xs') ? '' : resMargin1Breakpoint + '-') + resMargin1Size);
    }
    if (!!resMargin2Breakpoint && !!resMargin2Position && !!resMargin2Size) {
        // examples: `my-sm-3`, `my-0
        classNames.push('m' + ((resMargin2Position === 'all') ? '' : resMargin2Position) + '-' + ((resMargin2Breakpoint === 'xs') ? '' : resMargin2Breakpoint + '-') + resMargin2Size);
    }

    // Responsive margin – will replace all old margin... attributes.

    // Responsive Margin Array auswerten
    if (margin && Array.isArray(margin)) {
        const responsiveMarginClasses = getResponsivePositionPropertyClasses('margin', margin);
        if (responsiveMarginClasses) {
            classNames.push(responsiveMarginClasses);
        }
    }



    if (!!paddingBefore && paddingBefore === paddingAfter && paddingBefore === paddingLeft && paddingBefore === paddingRight) {
        // all
        classNames.push('p-' + paddingBefore);
    }
    else {

        // top & bottom
        if (!!paddingBefore && paddingBefore === paddingAfter) {
            classNames.push('py-' + paddingBefore);
        }
        else {
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
        }
        else {
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
        }
        else if (bgColor.indexOf('-opaque') !== -1) {
            classNames.push('bg-opacity-75');
            classNames.push('bg-' + bgColor.replace('-opaque', ''));
        }
        else {
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
        }
        else {
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
        }
        else if (border == 'x') {
            classNames.push('border-left');
            classNames.push('border-right');
        }
        else if (border == 'y') {
            classNames.push('border-top');
            classNames.push('border-bottom');
        }
        else if (border == 'u') {
            classNames.push('border-left');
            classNames.push('border-right');
            classNames.push('border-bottom');
        }
        else if (border == 'inverted-u') {
            classNames.push('border-left');
            classNames.push('border-right');
            classNames.push('border-top');
        }
        else {
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

    if (typeof gutter !== '' && typeof gutter !== 'undefined') {
        classNames.push('g-' + gutter);
    }

    if (rowReverse) {
        if (rowReverse == 'xs') {
            classNames.push('flex-row-reverse');
        }
        else {
            classNames.push('flex-' + rowReverse + '-row-reverse');
        }
    }

    if (justifyContent) {
        classNames.push('justify-content-' + justifyContent);
    }

    if (textColumns) {
        classNames.push('text-columns-' + textColumns);
    }
    

    // Do after handle display flex above.
    if (!!flexDirection) {
        // Check if `d-flex` is already in classNames, if not, add it.
        if (classNames.indexOf('d-flex') === -1) {
            classNames.push('d-flex');
        }
        classNames.push('flex-' + flexDirection);
    }

    if (!!alignItems) {
        // Check if `d-flex` is already in classNames, if not, add it.
        if (classNames.indexOf('d-flex') === -1) {
            classNames.push('d-flex');
        }
        classNames.push('align-items-' + alignItems);
    }


    return classNames.join(' ');
}