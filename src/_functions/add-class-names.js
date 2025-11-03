// add class names

// Order of responsive property keys – used to add class names in correct order
const respPropOrder = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];

// Map property keys to Bootstrap class name prefixes
const propertyMap = {
    'margin': 'm',
    'padding': 'p',
    'textAlign': 'text',
    'display': 'd',
    // Add more properties as needed
};

// Transforms saved array positions (top, start, bottom, end) to Bootstrap class positions
const spacingPosMap = ['t', 's', 'b', 'e']; // 's' for start (left), 'e' for end (right)
const spacingCombinedPosMap = {
    'all': '',
    'y': 'y',
    'x': 'x',
};


/**
 * Generates Bootstrap classes for the responsive margin/padding object schema.
 * @param {string} property     'margin' or 'padding'
 * @param {object} spacingObj   { sm: [top, right, bottom, left], ... }
 * @returns {string}            class names string
 */

function getResponsiveSpacingClasses(property, spacingObj) {
    if (!spacingObj || typeof spacingObj !== 'object') {
        return '';
    }
    const propPrefix = propertyMap[property];
    let classes = [];
    respPropOrder.forEach((bp) => {
        const arr = spacingObj[bp];
        if (!Array.isArray(arr)) return;
        let vals = arr.map(v => v || '');
        const bpPart = bp !== 'xs' ? bp + '-' : '';
        // 1. All 4 equal?
        if (vals.every(v => v !== '' && v === vals[0])) {
            classes.push(`${propPrefix}${spacingCombinedPosMap['all']}-${bpPart}${vals[0]}`);
            return;
        }
        // Helper array for processing
        let used = [false, false, false, false];
        // 2. top & bottom equal?
        if (vals[0] !== '' && vals[0] === vals[2]) {
            classes.push(`${propPrefix}${spacingCombinedPosMap['y']}-${bpPart}${vals[0]}`);
            used[0] = used[2] = true;
        }
        // 3. left & right equal?
        if (vals[1] !== '' && vals[1] === vals[3]) {
            classes.push(`${propPrefix}${spacingCombinedPosMap['x']}-${bpPart}${vals[1]}`);
            used[1] = used[3] = true;
        }
        // 4. Single values
        spacingPosMap.forEach((pos, idx) => {
            if (!used[idx] && vals[idx] !== '') {
                classes.push(`${propPrefix}${pos}-${bpPart}${vals[idx]}`);
            }
        });
    });
    return classes.join(' ');
}

/**
 * Generates responsive Bootstrap classes for a generic property object schema.
 * @param {string} property     e.g. 'textAlign', 'display'
 * @param {object} propertyObj  { xs: 'center', md: 'start', ... }
 * @returns {string}            class names string
 */
function getResponsivePropertyClasses(property, propertyObj) {
    if (!propertyObj || typeof propertyObj !== 'object') {
        return '';
    }
    const propPrefix = propertyMap[property];
    let classes = [];
    respPropOrder.forEach((bp) => {
        const val = propertyObj[bp];
        if (!val) return;
        let bpPart = bp !== 'xs' ? bp + '-' : '';
        classes.push(`${propPrefix}-${bpPart}${val}`);
    });
    return classes.join(' ');
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
        padding,
    } = attributes;

    const classNames = (typeof classNamesString != 'undefined' && classNamesString.trim().length > 0) ? classNamesString.split(' ') : [];

    if (!!belowNavbar) {
        classNames.push('below-navbar-content');
    }
    if (!!touchFooter) {
        classNames.push('mb-n-footer-space');
    }

    // if (!!display) {
    //     classNames.push('d-' + display);
    // }

    // DEPRECATED - use margin object instead
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


    // Responsive margin object
    if (margin && typeof margin === 'object') {
        const responsiveMarginClasses = getResponsiveSpacingClasses('margin', margin);
        if (responsiveMarginClasses) {
            classNames.push(responsiveMarginClasses);
        }
    }

    // Responsive padding object
    if (padding && typeof padding === 'object') {
        const responsivePaddingClasses = getResponsiveSpacingClasses('padding', padding);
        if (responsivePaddingClasses) {
            classNames.push(responsivePaddingClasses);
        }
    }

    // Responsive textAlign object
    if (textAlign && typeof textAlign === 'object') {
        const responsiveTextAlignClasses = getResponsivePropertyClasses('textAlign', textAlign);
        if (responsiveTextAlignClasses) {
            classNames.push(responsiveTextAlignClasses);
        }
    }

    // Responsive display object
    if (display && typeof display === 'object') {
        const responsiveDisplayClasses = getResponsivePropertyClasses('display', display);
        if (responsiveDisplayClasses) {
            classNames.push(responsiveDisplayClasses);
        }
    }


    // DEPRECATED - use padding object instead
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

    // if (!!textAlign) {
    //     classNames.push('text-' + textAlign);
    // }
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