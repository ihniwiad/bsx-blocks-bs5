import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    BlockControls,
    AlignmentToolbar,
    useInnerBlocksProps,
} from '@wordpress/block-editor';
import { 
    PanelBody,
    SelectControl,
    ToggleControl,
    TextControl,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    idInput,
	belowNavbarToggle,
    touchFooterToggle,
    textShadowSelect,
    textSizeSelect,
    fontWeightSelect,
    inverseTextColorToggle,
    headingInheritTextColorToggle,
    headingInheritFontWeightToggle,
    stateSelect,
    textColorSelect,
    bgColorSelect,
    roundedToggle,
    borderSelect,
    borderStateSelect,
    displaySelect,
    verticalAlignSelect,
    dataFnInput,
    dataTgInput,
    dataFnOptionsInput,
    dataFnTargetInput,
    alertToggle,
    widthSelect,
    heightSelect,
    nodeNameSelect,
    isGalleryParentToggle,
    textAlignToolbar,
    breakpointsSelect,
    textAlignSelect,
    multilayerSelect,
    zIndexSelect,
    bannerInnerToggle,
    positionSelect,
    top0Toggle,
    bottom0Toggle,
    left0Toggle,
    right0Toggle,
    roleInput,
    tabindexInput,
    hiddenToggle,
    overflowSelect,
    textColumnSelect,
	respSpacingControl,
    respPropertyControl,
} from './../_functions/controls.js';
import {
	makeOnChange,
} from './../_functions/block-handlers.js';


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
export default function Edit({ attributes, setAttributes }) {

	// const { getBlock } = useSelect(blockEditorStore);

	const {
        nodeName,
        id,
        dataFn,
        dataFnOptions,
        dataFnTarget,
        dataTg,
        belowNavbar,
        bgColor,
        textColor,
        textSize,
        textAlign,
        textShadow,
        fontWeight,
        inverseTextColor,
        headingInheritTextColor,
        headingInheritFontWeight,
        width,
        height,
        rounded,
        border,
        borderState,
        touchFooter,
        display,
        verticalAlign,
        speechBubble,
        isAlert,
        state,
        isGalleryParent,
        multilayer,
        zIndex,
        isBannerInner,
        position,
        isTop0,
        isBottom0,
        isLeft0,
        isRight0,
        role,
        tabindex,
        hidden,
        overflow,
        // href,
        // target,
        // rel,
        textColumns,
        margin,
        padding,
    } = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock(clientId);
	// 	if (typeof block.innerBlocks === 'undefined') return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// let template = getTemplate(templates, templateName).template;

    const onChangeId = (value) => {
        setAttributes({ id: value });
    };

    const onChangeNodeName = (value) => {
        setAttributes({ nodeName: value });
    };

    const onChangeBelowNavbar = (value) => {
        setAttributes({ belowNavbar: value });
    };

    const onChangeBgColor = (value) => {
        setAttributes({ bgColor: value });
    };
    const onChangeTextColor = (value) => {
        setAttributes({ textColor: value });
    };
    const onChangeState = (value) => {
        setAttributes({ state: value });
    };
    const onChangeTextSize = (value) => {
        setAttributes({ textSize: value });
    };
    const onChangeTextShadow = (value) => {
        setAttributes({ textShadow: value });
    };
    const onChangeFontWeight = (value) => {
        setAttributes({ fontWeight: value });
    };
    const onChangeInverseTextColor = (value) => {
        setAttributes({ inverseTextColor: value });
    };

    const onChangeHeadingInheritTextColor = (value) => {
        setAttributes({ headingInheritTextColor: value });
    };
    const onChangeHeadingInheritFontWeight = (value) => {
        setAttributes({ headingInheritFontWeight: value });
    };

    const onChangeWidth = (value) => {
        setAttributes({ width: value });
    };
    const onChangeHeight = (value) => {
        setAttributes({ height: value });
    };

    const onChangeRounded = (value) => {
        setAttributes({ rounded: value });
    };
    const onChangeBorder = (value) => {
        setAttributes({ border: value });
    };
    const onChangeBorderState = (value) => {
        setAttributes({ borderState: value });
    };

    const onChangeIsAlert = (value) => {
        setAttributes({ isAlert: value });
    };

    const onChangeTouchFooter = (value) => {
        setAttributes({ touchFooter: value });
    };
    const onChangeVerticalAlign = (value) => {
        setAttributes({ verticalAlign: value });
    };
    const onChangeSpeechBubble = (value) => {
        setAttributes({ speechBubble: value });
    };
    const onChangeDataFn = (value) => {
        setAttributes({ dataFn: value });
    };
    const onChangeDataFnOptions = (value) => {
        setAttributes({ dataFnOptions: value });
    };
    const onChangeDataFnTarget = (value) => {
        setAttributes({ dataFnTarget: value });
    };
    const onChangeDataTg = (value) => {
        setAttributes({ dataTg: value });
    };
    const onChangeIsGalleryParent = (value) => {
        setAttributes({ isGalleryParent: value });
    };
    const onChangeMultilayer = (value) => {
        setAttributes({ multilayer: value });
    };
    const onChangeZIndex = (value) => {
        setAttributes({ zIndex: value });
    };

    const onChangeIsBannerInner = (value) => {
        setAttributes({ isBannerInner: value });
    };

    const onChangePosition = (value) => {
        setAttributes({ position: value });
    };
    const onChangeIsTop0 = (value) => {
        setAttributes({ isTop0: value });
    };
    const onChangeIsBottom0 = (value) => {
        setAttributes({ isBottom0: value });
    };
    const onChangeIsLeft0 = (value) => {
        setAttributes({ isLeft0: value });
    };
    const onChangeIsRight0 = (value) => {
        setAttributes({ isRight0: value });
    };

    const onChangeRole = (value) => {
        setAttributes({ role: value });
    };
    const onChangeTabindex = (value) => {
        setAttributes({ tabindex: value });
    };
    const onChangeHidden = (value) => {
        setAttributes({ hidden: value });
    };

    const onChangeOverflow = (value) => {
        setAttributes({ overflow: value });
    };

    const onChangeTextColumns = (value) => {
        setAttributes({ textColumns: value });
    };

	// Responsive handlers
	const onChangeMargin = makeOnChange(setAttributes, 'margin');
	const onChangePadding = makeOnChange(setAttributes, 'padding');
	const onChangeDisplay = makeOnChange(setAttributes, 'display');
	const onChangeTextAlign = makeOnChange(setAttributes, 'textAlign');

    const wrapperClassName = addClassNames({ 
        belowNavbar,
        bgColor, 
        textColor, 
        textSize,
        rounded, 
        border,
        borderState,
        textAlign,
        textShadow,
        fontWeight,
        inverseTextColor,
        headingInheritTextColor,
        headingInheritFontWeight,
        width,
        height,
        touchFooter,
        display,
        verticalAlign,
        speechBubble,
        isAlert,
        state,
        multilayer,
        zIndex,
        isBannerInner,
        position,
        isTop0,
        isBottom0,
        isLeft0,
        isRight0,
        overflow,
        textColumns,
        margin,
        padding,
    });

    const TagName = !! nodeName ? nodeName : 'div';

    const controls = (
    	<>
            {/* <BlockControls>
                {
                    textAlignToolbar(textAlign, onChangeTextAlign)
                }
            </BlockControls> */}
            <InspectorControls>
                <PanelBody title={ __('Texte', 'bsx-blocks') }>
                    {
                        textColorSelect(textColor, onChangeTextColor)
                    }
                    {
                        textSizeSelect(textSize, onChangeTextSize)
                    }
                    {
                        textShadowSelect(textShadow, onChangeTextShadow)
                    }
                    {
                        fontWeightSelect(fontWeight, onChangeFontWeight)
                    }
                    {
                        inverseTextColorToggle(inverseTextColor, onChangeInverseTextColor)
                    }
                    {
                        headingInheritTextColorToggle(headingInheritTextColor, onChangeHeadingInheritTextColor)
                    }
                    {
                        headingInheritFontWeightToggle(headingInheritFontWeight, onChangeHeadingInheritFontWeight)
                    }
                </PanelBody>
                <PanelBody title={ __('Appearance', 'bsx-blocks') }>
                    {
                        bgColorSelect(bgColor, onChangeBgColor)
                    }
                    {
                        roundedToggle(rounded, onChangeRounded)
                    }
                    {
                        borderSelect(border, onChangeBorder)
                    }
                    {
                        borderStateSelect(borderState, onChangeBorderState)
                    }
                    {
                        alertToggle(isAlert, onChangeIsAlert)
                    }
                    {
                        stateSelect(state, onChangeState)
                    }
                    {
                        textColumnSelect(textColumns, onChangeTextColumns)
                    }
                </PanelBody>
                {
                    respPropertyControl(
                        textAlign,
                        onChangeTextAlign,
                        __('Text Align', 'bsx-blocks'),
                    )
                }
				{ respSpacingControl(margin, onChangeMargin, __('Margin', 'bsx-blocks')) }
				{ respSpacingControl(padding, onChangePadding, __('Padding', 'bsx-blocks')) }
                {
                    respPropertyControl(
                        display,
                        onChangeDisplay,
                        __('Display', 'bsx-blocks'),
                    )
                }
            </InspectorControls>
            <InspectorAdvancedControls>
                {
                    idInput(id, onChangeId)
                }
                {
                    nodeNameSelect(nodeName, onChangeNodeName, [ 'div', 'section', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ])
                }
                {
                    verticalAlignSelect(verticalAlign, onChangeVerticalAlign)
                }
                {
                    widthSelect(width, onChangeWidth)
                }
                {
                    heightSelect(height, onChangeHeight)
                }
                {
                    positionSelect(position, onChangePosition)
                }
                {
                    top0Toggle(isTop0, onChangeIsTop0)
                }
                {
                    bottom0Toggle(isBottom0, onChangeIsBottom0)
                }
                {
                    left0Toggle(isLeft0, onChangeIsLeft0)
                }
                {
                    right0Toggle(isRight0, onChangeIsRight0)
                }
                <SelectControl 
                    label={ __('Speech bubble', 'bsx-blocks') }
                    value={ speechBubble }
                    onChange={ onChangeSpeechBubble }
                    options={ [
                        { value: '', label: __('– unset –', 'bsx-blocks') },
                        { value: 'sm', label: __('Small', 'bsx-blocks') },
                        { value: 'md', label: __('Medium', 'bsx-blocks') },
                        { value: 'lg', label: __('Large', 'bsx-blocks') },
                    ] }
                />
                {
                    belowNavbarToggle(belowNavbar, onChangeBelowNavbar)
                }
                {
                    touchFooterToggle(touchFooter, onChangeTouchFooter)
                }
                {
                    isGalleryParentToggle(isGalleryParent, onChangeIsGalleryParent)
                }
                {
                    ! isGalleryParent ? 
                    (
                        <>
                            {
                                dataFnInput(dataFn, onChangeDataFn)
                            }
                        </>
                   )
                    :
                    (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                {
                                    __('dataFn is deactivated since element is image gallery parent.', 'bsx-blocks') 
                                }
                            </div>
                        </div>
                   )
                }
                {
                    multilayerSelect(multilayer, onChangeMultilayer)
                }
                {
                    zIndexSelect(zIndex, onChangeZIndex)
                }
                {
                    bannerInnerToggle(isBannerInner, onChangeIsBannerInner)
                }
                {
                    dataFnOptionsInput(dataFnOptions, onChangeDataFnOptions)
                }
                {
                    dataFnTargetInput(dataFnTarget, onChangeDataFnTarget)
                }
                {
                    dataTgInput(dataTg, onChangeDataTg)
                }

                {
                    roleInput(role, onChangeRole)
                }
                {
                    tabindexInput(tabindex, onChangeTabindex)
                }
                {
                    hiddenToggle(hidden, onChangeHidden)
                }
                {
                    overflowSelect(overflow, onChangeOverflow)
                }
            </InspectorAdvancedControls>
    	</>
	);

    // add class names to blockProps
    const blockProps = useBlockProps({ className: wrapperClassName, id: id });

    // use if appending inner blocks directly into outer elem
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
    });

	return (
		<>
            <TagName { ...innerBlocksProps }/>
			{ controls }
		</>
	);
}
