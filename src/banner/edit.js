import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    MediaUpload,
	useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    PanelBody,
    TextControl,
    ToggleControl,
    SelectControl,
    Button,
    SVG, 
    Path,
    RadioControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
    getUrlTruncAndExtension,
    fullImgIsScaled,
    getOriginalImgUrl,
    getSizesAndWithoutSizesTruncFromUrlTrunc,
    makeSizedImgs,
    getImgWithHeight,
    imgExists,
    getImgSizesData,
    makeImgSizesFromImgData,
    makeImgData,
} from './../_functions/img.js';
import { 
    getAllImageSizes,
    maximizeImgData,
    minimizeImgData,
    makeSrcset,
} from './../_functions/img.js';
import { 
    alignItemsSelect,
    marginBeforeSelect,
    marginAfterSelect,
    paddingBeforeSelect,
    paddingAfterSelect,
    // belowNavbarToggle,
    // touchFooterToggle,
    nodeNameSelect,
    bgPositionSelect,
    bgSizeSelect,
    bannerTypeSelect,
    bannerSizeSelect,
    // bgAttachmentSelect,
    // bgAttachmentFixedLimitedToggle,
    inlineTemplateSelect,
    uiTemplateSelect,
    imgUploadClickableImg,
    imgUploadButton,
    bgColorSelect,
    roundedToggle,
    linkUrlInput,
    // ignoreMailtoSpamProtectionToggle,
    targetToggle,
    relInput,
    dataFnInput,
    disableResponsiveDownsizingToggle,
    multilayerSelect,
} from './../_functions/controls.js';


// utils
import {
	makeBannerClassNames,
	// makeBannerInnerClassNames,
	// makeSrcsetJson,
} from './utils.js';


// templates
import templates from './templates.js';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


// insert directly into banner element without `.banner-inner`
const noBannerInnerTemplateNames = [
    'column-row-banner',
];

/**
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	const { getBlock } = useSelect( blockEditorStore );

	const {
        nodeName,
        templateName,
        belowNavbar,
        touchFooter,
        bgColor,
        imgId,
        // imgSizes, // DEPRECATED
        imgData,
        sizeIndex,
        alt,
        priority,
        portraitImgId,
        // portraitImgSizes, // DEPRECATED
        portraitImgData,
        portraitSizeIndex,
        bannerType,
        bannerSize,
        bgAttachment,
        bgAttachmentFixedLimited,
        bgSize,
        bgPosition,
        alignItems,
        smAlignItems,
        mdAlignItems,
        rounded,
        marginBefore,
        marginAfter,
        paddingBefore,
        paddingAfter,
        href,
        target,
        rel,
        dataFn,
        disableResponsiveDownsizing,
        multilayer,
    } = attributes;

	const hasInnerBlocks = () => {
		const block = getBlock( clientId );
		if ( typeof block.innerBlocks === 'undefined' ) return false;
		return block.innerBlocks.length > 0;
	}

	let template = getTemplate( templates, templateName ).template;

    // Extract full image data (all sizes) from imgData attribute.
    const fullImgData = maximizeImgData(imgData);
    const fullPortraitImgData = maximizeImgData(portraitImgData);

    // console.log('fullImgData (init):', fullImgData);
    // console.log('fullPortraitImgData (init):', fullPortraitImgData);

    // initial set, replaces old attr 'imgSizes'
    // const hasOldAttrImgSizes = typeof imgSizes !== 'undefined' && Array.isArray( imgSizes ) && imgSizes.length > 0;
    // const hasOldAttrPortraitImgSizes = typeof portraitImgSizes !== 'undefined' && Array.isArray( portraitImgSizes ) && portraitImgSizes.length > 0;

    // const calcImgSizes = hasOldAttrImgSizes ? imgSizes : makeImgSizesFromImgData( imgData );
    // const calcPortraitImgSizes = hasOldAttrPortraitImgSizes ? portraitImgSizes : makeImgSizesFromImgData( portraitImgData );

    // TEST
    // console.log( 'props.attributes: ' + JSON.stringify( props.attributes, null, 2 ) );
    // console.log( 'calcImgSizes: ' + JSON.stringify( calcImgSizes, null, 2 ) );
    // console.log( 'calcPortraitImgSizes: ' + JSON.stringify( calcPortraitImgSizes, null, 2 ) + '\n\n' );
	

    const onChangeTemplate = ( value ) => {
        const currentTemplateMap = getTemplate( templates, value );
        if ( currentTemplateMap.template != undefined && currentTemplateMap.attributes != undefined ) {
            template = currentTemplateMap.template;
            setAttributes( { 
                templateName: value,
                ...currentTemplateMap.attributes,
            } );
        }
        else {
            console.log( 'Error: Template change failed.' );
        }

        // console.log( 'changed templateName: ' + value );
        // console.log( 'changed template: ' + template );
    };

    const onChangeNodeName = ( value ) => {
        setAttributes( { nodeName: value } );
    };

    // const onChangeBelowNavbar = ( value ) => {
    //     setAttributes( { belowNavbar: value } );
    // };
    // const onChangeTouchFooter = ( value ) => {
    //     setAttributes( { touchFooter: value } );
    // };

    const onChangeBgColor = ( value ) => {
        setAttributes( { bgColor: value } );
    };

    async function onSelectImage(img, type = 'landscape') {
        // console.log(`onSelectImage: type: ${type}`);
        if (typeof img.url !== 'undefined') {
            // Get all data of new image (detect even the unscaled original size and the non listed scaled sizes 1536px & 2048px).
            const sizes = await getAllImageSizes(img);
            // console.log('All image sizes:', sizes);

            const originalDims = sizes[sizes.length - 1];

            const newImgData = minimizeImgData(sizes);

            // console.log('newImgData:', newImgData);

            // Check if current img size index fits to new img (might be too large).
            let newImgSizeIndex = parseInt(sizeIndex);
            if (parseInt(sizeIndex) >= sizes.length) {
                newImgSizeIndex = sizes.length - 1;
                // console.log('reduce initial sizeIndex to: ' + newImgSizeIndex);
            }

            if (type === 'portrait') {
                // Portrait image.
                setAttributes({
                    portraitImgId: img.id,
                    portraitImgData: newImgData,
                    portraitSizeIndex: newImgSizeIndex.toString(),
                });
            } else {
                // Default (landscape) image.
                setAttributes({
                    imgId: img.id,
                    imgData: newImgData,
                    sizeIndex: newImgSizeIndex.toString(),
                    alt: img.alt,
                });
            }
        }
    };

    async function onSelectPortraitImage(portraitImg) {
        // Use `onSelectImage` with type 'portrait'.
        await onSelectImage(portraitImg, 'portrait');
    }

    const onDeleteImage = () => {
        setAttributes( {
            imgId: '',
            imgData: '',
        } );
    };

    const onDeletePortraitImage = () => {
        // avoid creating deprecated attr 'portraitImgSizes'
        if ( portraitImgSizes && portraitImgSizes.length > 0 ) {
            // delete value of 'portraitImgSizes'
            setAttributes( {
                portraitImgId: '',
                portraitImgSizes: '',
                portraitImgData: '',
            } );
        }
        else {
            // skip 'portraitImgSizes'
            setAttributes( {
                portraitImgId: '',
                portraitImgData: '',
            } );
        }
    };

    const onChangeBannerType = ( value ) => {
        setAttributes( { bannerType: value } );
    };
    const onChangeBannerSize = ( value ) => {
        setAttributes( { bannerSize: value } );
    };

    // const onChangeBgAttachment = ( value ) => {
    //     setAttributes( { bgAttachment: value } );
    // };
    // const onChangeBgAttachmentFixedLimited = ( value ) => {
    //     setAttributes( { bgAttachmentFixedLimited: value } );
    // };
    const onChangeBgSize = ( value ) => {
        setAttributes( { bgSize: value } );
    };
    const onChangeBgPosition = ( value ) => {
        setAttributes( { bgPosition: value } );
    };

    const onChangeAlignItems = ( value ) => {
        setAttributes( { alignItems: value } );
    };
    const onChangeSmAlignItems = ( value ) => {
        setAttributes( { smAlignItems: value } );
    };
    const onChangeMdAlignItems = ( value ) => {
        setAttributes( { mdAlignItems: value } );
    };

    const onChangeRounded = ( value ) => {
        setAttributes( { rounded: value } );
    };

    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };

    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    const onChangePaddingBefore = ( value ) => {
        setAttributes( { paddingBefore: value } );
    };

    const onChangePaddingAfter = ( value ) => {
        setAttributes( { paddingAfter: value } );
    };

    const onChangeHref = ( value ) => {
        setAttributes( { href: value } );
    };
    const onChangeTarget = ( value ) => {
        setAttributes( { target: !! value ? '_blank' : '' } );
    };
    const onChangeRel = ( value ) => {
        setAttributes( { rel: value } );
    };
    const onChangeDataFn = ( value ) => {
        setAttributes( { dataFn: value } );
    };

    const onChangeDisableResponsiveDownsizing = ( value ) => {
        setAttributes( { disableResponsiveDownsizing: value } );
    };

    const onChangeMultilayer = ( value ) => {
        setAttributes( { multilayer: value } );
    };

    const onChangeAlt = (value) => {
        setAttributes({ alt: value });
    };
    const onChangePriority = (value) => {
        setAttributes({ priority: value });
    };

    const onChangeSizeIndex = ( value ) => {
        setAttributes( { 
            sizeIndex: value.toString(),
        } );
    };
    const imgSizeRadioControlOptions = [];
    if (typeof fullImgData !== 'undefined') {
        fullImgData.forEach((imgSize, index) => {
            const isSquareThumb = fullImgData[fullImgData.length - 1].width !== fullImgData[fullImgData.length - 1].height && imgSize.width === imgSize.height;
            imgSizeRadioControlOptions.push(
                { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + (isSquareThumb ? ' ' + __('(Square format)', 'bsx-blocks') : '') + ` (${imgSize.key})` } 
           );
        });
    }

    const onChangePortraitImgSizeIndex = ( value ) => {
        setAttributes( { 
            portraitSizeIndex: value.toString(),
        } );
    };
    const portraitImgSizeRadioControlOptions = [];
    if (typeof fullPortraitImgData !== 'undefined') {
        fullPortraitImgData.forEach((imgSize, index) => {
            const isSquareThumb = fullPortraitImgData[fullPortraitImgData.length - 1].width !== fullPortraitImgData[fullPortraitImgData.length - 1].height && imgSize.width === imgSize.height;
            portraitImgSizeRadioControlOptions.push(
                { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + (isSquareThumb ? ' ' + __('(Square format)', 'bsx-blocks') : '') + ` (${imgSize.key})` } 
           );
        });
    }

    // TODO: Refactore, replace background image styling by object fit styling.
    let bannerClassName = makeBannerClassNames({
        bannerType, 
        bannerSize, 
        bgAttachment, 
        // bgAttachmentFixedLimited,
        bgSize, 
        bgPosition, 
        alignItems, 
        smAlignItems,
        mdAlignItems,
        templateName,
        rounded,
        href,
    }, 'banner position-relative');
    bannerClassName = addClassNames({
        // belowNavbar,
        // touchFooter,
        bgColor,
        rounded,
        marginBefore, 
        marginAfter, 
        paddingBefore, 
        paddingAfter,
        multilayer,
    }, bannerClassName);

    let bannerInnerClassName = addClassNames({
        isBannerInner: true,
        alignItems,
    });

    if (!!templateName && templateName == 'column-row-banner') {
        bannerInnerClassName = addClassNames({
            flexDirection: 'row',
            w: '100',
        }, bannerInnerClassName);
    }

    const TagName = nodeName;

    
    // image
    const hasValidImg = (typeof fullImgData !== 'undefined' && fullImgData.length > 0 && typeof fullImgData[sizeIndex] !== 'undefined' && sizeIndex < fullImgData.length);

    const srcset = makeSrcset({
        fullImgData,
        sizeIndex,
        disableResponsiveDownsizing,
    });
    const src = hasValidImg ? fullImgData[sizeIndex].url : '';
    const width = hasValidImg ? fullImgData[sizeIndex].width : '';
    const height = hasValidImg ? fullImgData[sizeIndex].height : '';
    const sizes = (width && height) ? '(max-width: ' + width + 'px) 100vw, ' + width + 'px' : '';


    // portraitImage (if exists)
    const hasValidPortraitImg = (typeof fullPortraitImgData !== 'undefined' && fullPortraitImgData.length > 0 && typeof fullPortraitImgData[portraitSizeIndex] !== 'undefined' && portraitSizeIndex < fullPortraitImgData.length);

    const portraitSrcset = makeSrcset({
        fullImgData: fullPortraitImgData,
        sizeIndex: portraitSizeIndex,
        disableResponsiveDownsizing,
    });
    const portraitWidth = hasValidPortraitImg ? fullPortraitImgData[portraitSizeIndex].width : '';
    const portraitHeight = hasValidPortraitImg ? fullPortraitImgData[portraitSizeIndex].height : '';
    const portraitSizes = (portraitWidth && portraitHeight) ? '(max-width: ' + portraitWidth + 'px) 100vw, ' + portraitWidth + 'px' : '';

    // If portrait image is given, create `image` as a picture tag with portrait and landscape sources – if not, create as image tag only.
    let image = <></>;

    if (hasValidPortraitImg) {
        // with portrait image
        image = hasValidImg && (
            <>
                <picture className="position-absolute w-100 h-100 top-0 left-0">
                    <source srcset={ portraitSrcset } sizes={ portraitSizes } media="(orientation: portrait)" />
                    <img className="w-100 h-100 object-fit-cover" src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } {...(priority ? { loading: "eager", fetchpriority: "high" } : { loading: "lazy" })} decoding="async" />
                </picture>
            </>
        );
    }
    else {
        // without portrait image
        image = hasValidImg && (
            <>
                <img className="position-absolute w-100 h-100 top-0 left-0 object-fit-cover" src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } {...(priority ? { loading: "eager", fetchpriority: "high" } : { loading: "lazy" })} decoding="async" />
            </>
        );
    }

    // // without portrait image

    // const image = hasValidImg ? (
    //     <>
    //         <img className={ imgClassName } src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } {...(priority ? { loading: "eager", fetchpriority: "high" } : { loading: "lazy" })} decoding="async" />
    //     </>
    // )
    // :
    // (
    //     <></>
    // );
    

    // const bannerStyle = typeof calcImgSizes[ sizeIndex ] !== 'undefined' ? { backgroundImage: `url(${ calcImgSizes[ sizeIndex ].url })` } : {};


    const controls = (
    	<>
            <InspectorControls>
                <PanelBody title={ __( 'Banner template', 'bsx-blocks' ) }>
                    {
                        uiTemplateSelect( templates, templateName, onChangeTemplate )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner image', 'bsx-blocks' ) }>
                    {
                        imgId ? (
                            <>
                                {
                                    imgUploadClickableImg( imgId, fullImgData[ sizeIndex ].url, onSelectImage )
                                }
                            </>
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <>
                            {
                                imgUploadButton( imgId, onSelectImage )
                            }
                        </>
                    </div>
                    {
                        imgId && (
                            <div class="bsxui-config-panel-row">
                                <Button 
                                    onClick={ onDeleteImage }
                                    isDestructive={ true }
                                >
                                    { __( 'Remove image', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        )
                    }
                    <TextControl 
                        label={ __('Alt', 'bsx-blocks') }
                        value={ alt } 
                        onChange={ onChangeAlt }
                    />
                    <ToggleControl
                        label={ __('Enable priority loading', 'bsx-blocks') }
                        checked={ priority }
                        onChange={ onChangePriority }
                    />
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ sizeIndex.toString() }
                        options={ imgSizeRadioControlOptions }
                        onChange={ onChangeSizeIndex }
                    />
                    {
                        fullImgData[ sizeIndex ] != undefined && fullImgData[ sizeIndex ].url != undefined && (
                            <div class="bsxui-config-panel-text">
                                <a class="bsxui-link" href={ fullImgData[ sizeIndex ].url } target="_blank">{ __( 'Preview selected image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner portrait image (optional)', 'bsx-blocks' ) }>
                    {
                        portraitImgId && typeof fullPortraitImgData[ portraitSizeIndex ] != 'undefined' && typeof fullPortraitImgData[ portraitSizeIndex ].url != 'undefined' ? (
                            <>
                                {
                                    imgUploadClickableImg( portraitImgId, fullPortraitImgData[ portraitSizeIndex ].url, onSelectPortraitImage, 'p' )
                                }
                            </>
                        )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __( '– No portrait image selected yet –', 'bsx-blocks' ) }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <>
                            {
                                imgUploadButton( portraitImgId, onSelectPortraitImage, 'p' )
                            }
                        </>
                    </div>
                    {
                        portraitImgId && (
                            <div class="bsxui-config-panel-row">
                                <Button 
                                    onClick={ onDeletePortraitImage }
                                    isDestructive={ true }
                                >
                                    { __( 'Remove portrait image', 'bsx-blocks' ) }
                                </Button>
                            </div>
                        )
                    }
                    <RadioControl
                        label={ __( 'Image size and format', 'bsx-blocks' ) }
                        selected={ portraitSizeIndex.toString() }
                        options={ portraitImgSizeRadioControlOptions }
                        onChange={ onChangePortraitImgSizeIndex }
                    />
                    {
                         typeof fullPortraitImgData[ portraitSizeIndex ] != 'undefined' && typeof fullPortraitImgData[ portraitSizeIndex ].url != 'undefined' && (
                            <div class="bsxui-config-panel-text">
                                <a class="bsxui-link" href={ fullPortraitImgData[ portraitSizeIndex ].url } target="_blank">{ __( 'Preview selected portrait image', 'bsx-blocks' ) }</a>
                            </div>
                        )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Banner dimensions', 'bsx-blocks' ) }>
                    {
                        bannerTypeSelect( bannerType, onChangeBannerType )
                    }
                    {
                        (
                            bannerType !== 'vh' && bannerType !== 'st' && (
                                <>
                                    { bannerSizeSelect( bannerSize, onChangeBannerSize ) }
                                </>
                            )
                        )
                    }
                    {/* {
                        bgAttachmentSelect( bgAttachment, onChangeBgAttachment )
                    } */}
                    {/* { bgAttachment === 'fixed' && (
                        <>
                            {
                                bgAttachmentFixedLimitedToggle( bgAttachmentFixedLimited, onChangeBgAttachmentFixedLimited )
                            }
                        </>
                    ) } */}
                    {
                        alignItemsSelect( alignItems, onChangeAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ) )
                    }
                    {
                        alignItemsSelect( smAlignItems, onChangeSmAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ), 'SM' )
                    }
                    {
                        alignItemsSelect( mdAlignItems, onChangeMdAlignItems, [ '', 'center', 'end' ], ( templateName == 'column-row-banner' ), 'MD' )
                    }
                    {
                        roundedToggle( rounded, onChangeRounded )
                    }
                </PanelBody>


                <PanelBody title={ __( 'Background', 'bsx-blocks' ) }>
                    {
                        bgColorSelect( bgColor, onChangeBgColor )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>

                <PanelBody title={ __( 'Link', 'bsx-blocks' ) }>
                    {
                        linkUrlInput( href, onChangeHref )
                    }
                    {
                        targetToggle( target, onChangeTarget )
                    }
                    {
                        relInput( rel, onChangeRel )
                    }
                    {
                        dataFnInput( dataFn, onChangeDataFn )
                    }
                </PanelBody>
            </InspectorControls>

            <InspectorAdvancedControls>
                {/* {
                    belowNavbarToggle( belowNavbar, onChangeBelowNavbar )
                }
                {
                    touchFooterToggle( touchFooter, onChangeTouchFooter )
                } */}
                {
                    nodeNameSelect( nodeName, onChangeNodeName, [ 'div', 'section' ] )
                }
                {
                    bgPositionSelect( bgPosition, onChangeBgPosition )
                }
                {
                    bgSizeSelect( bgSize, onChangeBgSize )
                }
                {
                    paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                }
                {
                    paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                }
                {
                    disableResponsiveDownsizingToggle( disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing )
                }
                {
                    multilayerSelect( multilayer, onChangeMultilayer )
                }
            </InspectorAdvancedControls>
    	</>
	);


	// console.log( 'template: ' + JSON.stringify( template, null, 2 ) );
	// console.log( 'template[ 0 ][ 1 ].isBannerInner: ' + JSON.stringify( template[ 0 ][ 1 ].isBannerInner, null, 2 ) );

    const tmpBannerStyle = { minHeight: '0' };

    // add class names to blockProps
    // const blockProps = useBlockProps( { className: bannerClassName, style: bannerStyle } );
    const blockProps = useBlockProps( { className: bannerClassName, style: tmpBannerStyle } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		// defaultBlock: { name: 'bsx-blocks/container' },
		directInsert: true,
		template: template,
		templateLock: false,
		templateInsertUpdatesSelection: true,
	} );
	// console.log( 'innerBlocksProps: ' + JSON.stringify( innerBlocksProps, null, 2 ) );

	// prepare props for .banner-inner without additional 
    const bannerInnerBlockProps = { className: bannerInnerClassName };
	// console.log( 'bannerInnerBlockProps: ' + JSON.stringify( bannerInnerBlockProps, null, 2 ) );
	const bannerInnerInnerBlocksProps = useInnerBlocksProps( bannerInnerBlockProps, {
		// defaultBlock: { name: 'bsx-blocks/container' },
		directInsert: true,
		template: template,
		templateLock: false,
		templateInsertUpdatesSelection: true,
	} );
	// console.log( 'bannerInnerInnerBlocksProps: ' + JSON.stringify( bannerInnerInnerBlocksProps, null, 2 ) );

	return (
		<>
            {
                ! templateName ? (
                    <div class="bsxui-initial-inline-control">
                        {
                            inlineTemplateSelect( templates, onChangeTemplate )
                        }
                    </div>
                )
                : 
                (
	                <>
	                	{
	                		false && ! imgId ? (
	                    		<TagName { ...blockProps }>
	                                <div className="bsxui-in-widget-overlay-panel bsxui-top">
	                                    <MediaUpload
	                                        onSelect={ onSelectImage }
	                                        allowedTypes="image"
	                                        value={ imgId }
	                                        render={ ( { open } ) => (
	                                            <Button 
	                                                onClick={ open }
	                                                isSecondary
	                                            >
	                                                { __( 'Select / upload Image', 'bsx-blocks' ) }
	                                            </Button>
	                                        ) }
	                                    />
	                                </div>
	                    		</TagName>
	                		)
	                		:
	                		(
		                		<>
			                        {
			                            typeof template[ 0 ] !== 'undefined' && typeof template[ 0 ][ 1 ] !== 'undefined' && typeof template[ 0 ][ 1 ].isBannerInner !== 'undefined' && template[ 0 ][ 1 ].isBannerInner ? (
			                            	// is column row with class name .banner-inner, needs no additional inner element, inset template directly
		                    				// <TagName { ...innerBlocksProps }/>
                                            <TagName {...innerBlocksProps}>
                                                { image }
                                                { innerBlocksProps.children }
                                            </TagName>
			                            )
			                            :
			                            (
			                            	// is not column row, needs additional inner element .banner-inner to inset template
			                                <TagName { ...blockProps }>
                                                <>
                                                    { image }
                                                    <div { ...bannerInnerInnerBlocksProps }/>
                                                </>
			                                </TagName>
			                            )
			                        }
		                        </>
	                		)
	                	}
                	</>
                )


                // (
                // 	// check if image

                // 	// else 
                // 		// check if column-row -> put innerBlocksProps into root
                // 		// else put bannerInnerInnerBlocksProps into child of root
                //     <TagName { ...blockProps }>
                //         {
                //             false && ! imgId && (
                //                 <div className="bsxui-in-widget-overlay-panel bsxui-top">
                //                     <MediaUpload
                //                         onSelect={ onSelectImage }
                //                         allowedTypes="image"
                //                         value={ imgId }
                //                         render={ ( { open } ) => (
                //                             <Button 
                //                                 onClick={ open }
                //                                 isSecondary
                //                             >
                //                                 { __( 'Select / upload Image', 'bsx-blocks' ) }
                //                             </Button>
                //                         ) }
                //                     />
                //                 </div>
                //             )
                //         }
                //         {
                //             noBannerInnerTemplateNames.indexOf( templateName ) == -1 ? (
                //                 <div { ...innerBlocksProps }/>
                //             )
                //             :
                //             (
                //                 // <InnerBlocks 
                //                 //     template={ template }
                //                 //     renderAppender={
                //                 //         hasInnerBlocks ? undefined
                //                 //         : () => <InnerBlocks.ButtonBlockAppender />
                //                 //     }
                //                 // />
                //                 <div { ...bannerInnerInnerBlocksProps }/>
                //             )
                //         }
                //     </TagName>
                // )
            }
			{ controls }
		</>
	);
}
