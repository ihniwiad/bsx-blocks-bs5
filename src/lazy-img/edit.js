import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    RichText,
    MediaUpload,
    InspectorControls,
    InspectorAdvancedControls,
    BlockControls,
    AlignmentToolbar,
	// useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    Button,
    TextControl,
    PanelBody,
    RadioControl,
    SelectControl,
    ToggleControl,
    SVG, 
    Path,
} from '@wordpress/components';
// import {
//     useDispatch,
//     useRegistry,
//     select,
//     useSelect,
//     withSelect,
// } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';
// import { store as coreStore } from '@wordpress/core-data';
// import { useEffect, useRef } from '@wordpress/element';


import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    linkUrlInput,
    // ignoreMailtoSpamProtectionToggle,
    targetToggle,
    relInput,
    // dataFnInput,
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
    scaleSelect,
    disableResponsiveDownsizingToggle,
    textAlignToolbar,
} from './../_functions/controls.js';
import { 
    getAllImageSizes,
    maximizeImgData,
    minimizeImgData,
    makeSrcset,
} from './../_functions/img.js';


/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
// export default function Edit({ attributes, setAttributes, clientId }) {
function Edit({ attributes, setAttributes, clientId }) {

    // console.log('Edit()')

	const {
        priority,
        imgId,
        // imgSizes,
        imgData,
        sizeIndex,
        // url,
        // width,
        // height,
        origWidth,
        origHeight,
        alt,
        figcaption,
        rounded,
        imgThumbnail,
        borderState,
        zoomable,
        externalGalleryParent,
        zoomSizeIndex,
        disableResponsiveDownsizing,
        textAlign,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
        aAdditionalClassName,
        imgAdditionalClassName,
        href,
        target,
        rel,
        // scale,
        displayedWidth,
        displayedHeight,
        noFigureTag,
        // imgHtml,
    } = attributes;


    // Note: `displayedWidth` and `displayedHeight` must be extracted as `string` since 
    // type `number` doesn’t work. Please parse to int yourself!

    const fullImgData = maximizeImgData(imgData);
    let scale = sizeIndex && fullImgData?.[sizeIndex]?.width && displayedWidth ? (parseInt(displayedWidth) / fullImgData[sizeIndex].width) : null;

    // console.log(`attributes (init)`, attributes);
    // // console.log(`fullImgData (init)`, fullImgData);
    // console.log(`displayed sizes (init)`, [displayedWidth, displayedHeight]);
    // console.log(`scale (init)`, scale);
    

    // migrate deprecated attributes to new once

    // const registry = useRegistry();
    // const { updateBlockAttributes } =
    //     useDispatch(blockEditorStore);


    // class names

    const classNames = addClassNames({
        textAlign,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
    });

    const blockProps = useBlockProps({ className: classNames });

    async function onSelectImage(img) {

        if (typeof img.url !== 'undefined') {

            // Get all data of new image (detect even the unscaled original size and the non listed scaled sizes 1536px & 2048px).
            const sizes = await getAllImageSizes(img);
            // console.log('All image sizes:', sizes);

            const originalDims = sizes[sizes.length - 1];
            const originalWidth = originalDims.width;
            const originalHeight = originalDims.height;

            const newImgData = minimizeImgData(sizes);

            // console.log('newImgData:', newImgData);

            // check if current img size index fits to new img (might be too large)
            let newImgSizeIndex = parseInt(sizeIndex);
            if (parseInt(sizeIndex) >= sizes.length) {
                newImgSizeIndex = sizes.length - 1;
                // console.log('reduce initial sizeIndex to: ' + newImgSizeIndex);
            }

            // do not use thumbnail for srcset if has square format, start with img sizes index 1 then
            const newLowestSrcsetImgSizeIndex = img.sizes.thumbnail.width !== img.sizes.thumbnail.height ? 0 : 1;

            // check if current zoom img size index fits to new img (might be too large) or is unset
            let newZoomImgSizeIndex = zoomSizeIndex;
            if ((zoomable && ! zoomSizeIndex) || parseInt(zoomSizeIndex) < parseInt(newImgSizeIndex) || parseInt(zoomSizeIndex) >= parseInt(sizes.length)) {
                newZoomImgSizeIndex = (sizes.length - 1).toString();
            }

            const imgSelectedWidth = sizes[newImgSizeIndex].width;
            const imgSelectedHeight = sizes[newImgSizeIndex].height;

            setAttributes({
                imgId: img.id,
                imgData: newImgData,
                sizeIndex: newImgSizeIndex.toString(),
                origWidth: originalWidth,
                origHeight: originalHeight,
                alt: img.alt,
                zoomSizeIndex: newZoomImgSizeIndex,
                // // remove deprecated attributes if set
                // ...(imgSizes && imgSizes.length > 0) && {
                //     imgSizes: '', // save empty, replaced by imgData
                //     url: '', // save empty, replaced by imgData
                //     width: '', // save empty, replaced by imgData
                //     height: '', // save empty, replaced by imgData
                // },
                // displayedWidth or originalHeight might be preset before image is uploaded
                // ...(!displayedWidth && !displayedHeight && !scale) && {
                //     scale: 1,
                // },
                ...(scale && !displayedWidth && !displayedHeight) && {
                    displayedWidth: imgSelectedWidth * scale,
                    displayedHeight: imgSelectedHeight * scale,
                },
                ...(displayedWidth) && {
                    // scale: displayedWidth / imgSelectedWidth,
                    displayedHeight: imgSelectedHeight * displayedWidth / imgSelectedWidth,
                },
                ...(displayedHeight) && {
                    // scale: displayedHeight / imgSelectedHeight,
                    displayedWidth: imgSelectedWidth * displayedHeight / imgSelectedHeight,
                },
            });
            
        }
    };

    const onChangeMediaAlt = (value) => {
        setAttributes({ alt: value });
    };
    const onChangeFigcaption = (value) => {
        setAttributes({ figcaption: value });
    };

    const onChangeScale = (value) => {
        scale = value;
        setAttributes({ 
            // scale: parseFloat(value),
            displayedWidth: (!! value && value != fullImgData[sizeIndex].width) ? Math.round(fullImgData[sizeIndex].width * parseFloat(value)) : '',
            displayedHeight: (!! value && value != fullImgData[sizeIndex].height) ? Math.round(fullImgData[sizeIndex].height * parseFloat(value)) : '',
        });
    };
    const onChangeDisplayedWidth = (value) => {
        scale = parseFloat(value / fullImgData[sizeIndex].width);
        setAttributes({ 
            displayedWidth: value != fullImgData[sizeIndex].width ? parseFloat(value) : '',
            displayedHeight: value != fullImgData[sizeIndex].height ? Math.round(value / fullImgData[sizeIndex].width * fullImgData[sizeIndex].height) : '',
            // scale: parseFloat(value / fullImgData[sizeIndex].width),
        });
    };
    const onChangeDisplayedHeight = (value) => {
        scale = parseFloat(value / fullImgData[sizeIndex].height);
        setAttributes({ 
            displayedHeight: value != fullImgData[sizeIndex].width ? parseFloat(value) : fullImgData[sizeIndex].width,
            displayedWidth: value != fullImgData[sizeIndex].height ? Math.round(value / fullImgData[sizeIndex].height * fullImgData[sizeIndex].width) : '',
            // scale: parseFloat(value / fullImgData[sizeIndex].height),
        });
    };

    const onChangeRounded = (value) => {
        setAttributes({ rounded: value });
    };
    const onChangeImgThumbnail = (value) => {
        setAttributes({ imgThumbnail: value });
    };
    const onChangeBorderState = (value) => {
        setAttributes({ borderState: value });
    };

    const onChangeZoomable = (value) => {
        const newZoomImgSizeIndex = zoomSizeIndex == undefined ? (fullImgData.length - 1).toString() : zoomSizeIndex;
        setAttributes({ 
            zoomable: value,
            zoomSizeIndex: newZoomImgSizeIndex,
            href: value ? fullImgData[newZoomImgSizeIndex].url : null,
            target: value ? '_blank' : null,
        });
    };
    const onChangeExternalGalleryParent = (value) => {
        setAttributes({ externalGalleryParent: value });
    };
    const onChangeZoomImgSizeIndex = (value) => {
        setAttributes({ zoomSizeIndex: value.toString() });
    };

    const onChangeDisableResponsiveDownsizing = (value) => {
        setAttributes({ disableResponsiveDownsizing: value });
    };

    const onChangeTextAlign = (value) => {
        setAttributes({ textAlign: value });
    };

    const onChangeMarginBefore = (value) => {
        setAttributes({ marginBefore: value });
    };
    const onChangeMarginAfter = (value) => {
        setAttributes({ marginAfter: value });
    };
    const onChangeMarginLeft = (value) => {
        setAttributes({ marginLeft: value });
    };
    const onChangeMarginRight = (value) => {
        setAttributes({ marginRight: value });
    };

    const onChangeAAdditionalClassName = (value) => {
        setAttributes({ aAdditionalClassName: value });
    };
    const onChangeImgAdditionalClassName = (value) => {
        setAttributes({ imgAdditionalClassName: value });
    };

    const onChangeHref = (value) => {
        if (href == '') {
            // reset aAdditionalClassName
            setAttributes({ 
                href: value,
                aAdditionalClassName: '',
            });
        }
        else {
            setAttributes({ href: value });
        }
    };
    const onChangeTarget = (value) => {
        // Currently a toggle: `true` means new tab so set `string` value '_blank'.
        setAttributes({ target: !! value ? '_blank' : '' });
    };
    const onChangeRel = (value) => {
        setAttributes({ rel: value });
    };

    const onChangeNoFigureTag = (value) => {
        setAttributes({ 
            noFigureTag: value,
            zoomable: false,
            figcaption: [],
        });
    };


    const onChangeImgSizeIndex = (value) => {
        scale = parseFloat(fullImgData[value].width / fullImgData[value].height);
        setAttributes({ 
            sizeIndex: value.toString(),
            // url: fullImgData[value].url,
            displayedWidth: parseInt(fullImgData[value].width),
            displayedHeight: parseInt(fullImgData[value].height),
            // scale: parseFloat(fullImgData[value].width / fullImgData[value].height),
        });
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

    const zoomImgSizeRadioControlOptions = [];
    if (typeof fullImgData !== 'undefined') {
        fullImgData.forEach((imgSize, index) => {
            if (index >= sizeIndex) {
                const isSquareThumb = fullImgData[fullImgData.length - 1].width !== fullImgData[fullImgData.length - 1].height && imgSize.width === imgSize.height;
                zoomImgSizeRadioControlOptions.push(
                    { value: index.toString(), label: imgSize.width + 'x' + imgSize.height + (isSquareThumb ? ' ' + __('(Square format)', 'bsx-blocks') : '') + ` (${imgSize.key})` } 
               );
            }
        });
    }

    const onChangePriority = (value) => {
        setAttributes({ priority: value });
    };

    // class names

    // const classNames = addClassNames({
    //     textAlign,
    //     marginBefore,
    //     marginAfter,
    //     marginLeft,
    //     marginRight,
    // });

    const imgClassName = addClassNames({
        rounded,
        imgThumbnail,
        borderState,
    }, 'img-fluid' + (imgAdditionalClassName ? ' ' + imgAdditionalClassName : '') );

    // image

    const hasValidImg = (imgId && sizeIndex && typeof fullImgData !== 'undefined' && fullImgData.length > 0 && typeof fullImgData[sizeIndex] !== 'undefined' && sizeIndex < fullImgData.length);
    let image;

    if (hasValidImg) {
        const srcset = makeSrcset({
            fullImgData,
            sizeIndex,
        });
    
        const src = hasValidImg ? fullImgData[sizeIndex].url : '';
        const width = (hasValidImg && displayedWidth) ? displayedWidth : hasValidImg ? fullImgData[sizeIndex].width : '';
        const height = (hasValidImg && displayedHeight) ? displayedHeight : hasValidImg ? fullImgData[sizeIndex].height : '';
        const sizes = (width && height) ? '(max-width: ' + width + 'px) 100vw, ' + width + 'px' : '';

        image = (
            <img className={ imgClassName } src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } {...(priority ? { loading: "eager", fetchpriority: "high" } : { loading: "lazy" })} decoding="async" />
        );
    }
    else {
        image = (
            <>Empty image</>
        );
    }
    

    const controls = (
    	<>
    		<BlockControls>
                {
                    textAlignToolbar(textAlign, onChangeTextAlign)
                }
            </BlockControls>
            <InspectorControls>
                <PanelBody title={ __('Image', 'bsx-blocks') }>
                    <TextControl 
                        label={ __('Alt', 'bsx-blocks') }
                        value={ alt } 
                        onChange={ onChangeMediaAlt }
                    />
                    {
                        imgId && sizeIndex ? (
                            <MediaUpload
                                onSelect={ onSelectImage }
                                allowedTypes="image"
                                value={ imgId }
                                render={ ({ open }) => (
                                    <Button
                                        className="bsxui-config-panel-img-button has-margin-bottom"
                                        onClick={ open }
                                    >
                                        <img class="bsxui-config-panel-img" src={ fullImgData[sizeIndex].url } alt={ __('Change / upload image', 'bsx-blocks') } />
                                    </Button>
                               ) }
                            />
                       )
                        : 
                        (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">{ __('– No image selected yet –', 'bsx-blocks') }</div>
                            </div>
                        )
                    }
                    <div class="bsxui-config-panel-row">
                        <MediaUpload
                            onSelect={ onSelectImage }
                            allowedTypes="image"
                            value={ imgId }
                            render={ ({ open }) => (
                                <Button 
                                    onClick={ open }
                                    isSecondary
                                >
                                    { __('Change / upload image', 'bsx-blocks') }
                                </Button>
                           ) }
                        />
                    </div>
                    <ToggleControl
                        label={ __('Enable priority loading', 'bsx-blocks') }
                        checked={ priority }
                        onChange={ onChangePriority }
                    />
                    <RadioControl
                        label={ __('Image size and format', 'bsx-blocks') }
                        selected={ sizeIndex ? sizeIndex.toString() : null }
                        options={ imgSizeRadioControlOptions }
                        onChange={ onChangeImgSizeIndex }
                    />
                    {
                        sizeIndex && fullImgData[sizeIndex] != undefined && fullImgData[sizeIndex].url != undefined && (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-config-panel-text">
                                    <a class="bsxui-link" href={ fullImgData[sizeIndex].url } target="_blank">{ __('Preview selected image', 'bsx-blocks') }</a>
                                </div>
                            </div>
                       )
                    }
                    {
                        imgId && sizeIndex && typeof fullImgData !== 'undefined' && typeof fullImgData[sizeIndex] !== 'undefined' && (
                            <>
                                <TextControl 
                                    label={ __('Displayed width', 'bsx-blocks') }
                                    value={ !! displayedWidth ? displayedWidth : fullImgData[sizeIndex].width  } 
                                    onChange={ onChangeDisplayedWidth }
                                />
                                <TextControl 
                                    label={ __('Displayed height', 'bsx-blocks') }
                                    value={ !! displayedHeight ? displayedHeight : fullImgData[sizeIndex].height } 
                                    onChange={ onChangeDisplayedHeight }
                                />
                                {
                                    scaleSelect(scale, onChangeScale)
                                }
                            </>
                       )
                    }
                    <SelectControl 
                        label={ __('Rounded', 'bsx-blocks') }
                        value={ rounded }
                        onChange={ onChangeRounded }
                        options={ [
                            { value: '', label: __('– unset –', 'bsx-blocks') },
                            { value: 'rounded', label: __('Rounded corners', 'bsx-blocks') },
                            { value: 'circle', label: __('Circle', 'bsx-blocks') },
                       ] }
                    />
                    <ToggleControl
                        label={ __('Border', 'bsx-blocks') }
                        checked={ !! imgThumbnail }
                        onChange={ onChangeImgThumbnail }
                    />
                    <SelectControl 
                        label={ __('Border color', 'bsx-blocks') }
                        value={ borderState }
                        onChange={ onChangeBorderState }
                        options={ [
                            { value: '', label: __('– unset –', 'bsx-blocks') },
                            { value: 'white', label: __('White', 'bsx-blocks') },
                            { value: 'primary', label: __('Primary', 'bsx-blocks') },
                            { value: 'secondary', label: __('Secondary', 'bsx-blocks') },
                            { value: 'success', label: __('Success', 'bsx-blocks') },
                            { value: 'danger', label: __('Danger', 'bsx-blocks') },
                            { value: 'warning', label: __('Warning', 'bsx-blocks') },
                            { value: 'info', label: __('Info', 'bsx-blocks') },
                            { value: 'light', label: __('Light', 'bsx-blocks') },
                            { value: 'dark', label: __('Dark', 'bsx-blocks') },
                       ] }
                    />
                </PanelBody>

                <PanelBody title={ __('Zoomable (optional)', 'bsx-blocks') }>
                    {
                        !! href && ! zoomable ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    { 
                                        __('Zoomable image is deactivated since href is set.', 'bsx-blocks') 
                                    }
                                </div>
                            </div>
                       )
                        :
                        (
                            <>
                                <ToggleControl
                                    className={ !! noFigureTag ? 'bsxui-disabled' : '' }
                                    label={ __('Zoomable image', 'bsx-blocks') }
                                    checked={ !! zoomable }
                                    onChange={ onChangeZoomable }
                                    help={ __('If enabled click on image will open shadowbox gallery with large image.', 'bsx-blocks') }
                                />
                                {
                                    zoomable && (
                                        <>
                                            <RadioControl
                                                label={ __('Zoom image size', 'bsx-blocks') }
                                                selected={ zoomSizeIndex }
                                                options={ zoomImgSizeRadioControlOptions }
                                                onChange={ onChangeZoomImgSizeIndex }
                                            />
                                            {
                                                sizeIndex == zoomSizeIndex && (
                                                    <div class="bsxui-config-panel-row">
                                                        <div class="bsxui-alert">
                                                        { __('Currently your zoom image is not larger than your original image.', 'bsx-blocks') }
                                                        </div>
                                                    </div>
                                               )
                                            }
                                            <ToggleControl
                                                label={ __('External gallery parent', 'bsx-blocks') }
                                                checked={ !! externalGalleryParent }
                                                onChange={ onChangeExternalGalleryParent }
                                                help={ __('Enabled if using custom external shadowbox gallery element (e.g. configured BSX Wrapper) wrapping this image.', 'bsx-blocks') }
                                            />
                                        </>
                                   )
                                }
                            </>
                       )
                    }
                </PanelBody>

                <PanelBody title={ __('Link (optional)', 'bsx-blocks') }>
                    {
                        !! zoomable ? (
                            <div class="bsxui-config-panel-row">
                                <div class="bsxui-alert">
                                    { __('Link is deactivated since Zoomable image is set.', 'bsx-blocks') }
                                </div>
                            </div>
                       )
                        :
                        (
                            <>
                                {
                                    linkUrlInput(href, onChangeHref)
                                }
                                {
                                    targetToggle(target, onChangeTarget)
                                }
                                {
                                    relInput(rel, onChangeRel)
                                }
                                {
                                    // dataFnInput(dataFn, onChangeDataFn)
                                }
                            </>
                       )
                    }
                </PanelBody>
                
                <PanelBody title={ __('Margin', 'bsx-blocks') }>
                    {
                        marginLeftSelect(marginLeft, onChangeMarginLeft)
                    }
                    {
                        marginRightSelect(marginRight, onChangeMarginRight)
                    }
                    {
                        marginBeforeSelect(marginBefore, onChangeMarginBefore)
                    }
                    {
                        marginAfterSelect(marginAfter, onChangeMarginAfter)
                    }
                </PanelBody>

            </InspectorControls>
            <InspectorAdvancedControls>
                {
                    disableResponsiveDownsizingToggle(disableResponsiveDownsizing, onChangeDisableResponsiveDownsizing)
                }
                <ToggleControl
                    className={ !! zoomable ? 'bsxui-disabled' : '' }
                    label={ __('No figure tag', 'bsx-blocks') }
                    checked={ !! noFigureTag }
                    onChange={ onChangeNoFigureTag }
                />
                {
                    !! zoomable && (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                { __('Figure tag must exist since Zoomable image is set.', 'bsx-blocks') }
                            </div>
                        </div>
                   )
                }
                {
                    !! href && (
                        <TextControl 
                            label={ __('A element additional class(es)', 'bsx-blocks') }
                            value={ aAdditionalClassName } 
                            onChange={ onChangeAAdditionalClassName }
                        />
                   )
                }
                {/* {
                    ! noFigureTag ? (
                        <TextControl 
                            label={ __('Picture element additional class(es) – DEPRECATED', 'bsx-blocks') }
                            value={ pictureAdditionalClassName } 
                            onChange={ onChangePictureAdditionalClassName }
                        />
                   )
                    :
                    (
                        <div class="bsxui-config-panel-row">
                            <div class="bsxui-alert">
                                { __('Picture element additional class(es) is deactivated since No figure tag is set. Use Additional class(es) instead.', 'bsx-blocks') }
                                . 
                            </div>
                        </div>
                   )
                } */}
                <TextControl 
                    label={ __('Image element additional class(es)', 'bsx-blocks') }
                    value={ imgAdditionalClassName } 
                    onChange={ onChangeImgAdditionalClassName }
                />
            </InspectorAdvancedControls>
    	</>
	);

    // add class names to blockProps
    // const blockProps = useBlockProps({ className: imgClassName });
	// console.log('blockProps: ' + JSON.stringify(blockProps, null, 2));

	return (
		<>
			<figure { ...blockProps }>
                {
                    imgId && sizeIndex ? (
                        <>
                            { 
                                ! zoomable ? (
                                    <>
                                        { image }
                                    </>
                               )
                                :
                                (
                                    <a className={ 'zoomable-img' }>
                                        { image }
                                    </a>
                               ) 
                            }
                        </>
                    )
                    : 
                    (
                        <div className={ 'bsxui-img-upload-placeholder' }>
                            <MediaUpload
                                onSelect={ onSelectImage }
                                allowedTypes="image"
                                value={ imgId }
                                render={ ({ open }) => (
                                    <Button 
                                        onClick={ open }
                                        isSecondary
                                    >
                                        { __('Select / upload Image', 'bsx-blocks') }
                                    </Button>
                               ) }
                            />
                        </div>
                   )
                }
                <RichText
                    tagName="figcaption"
                    multiline={ false }
                    placeholder={ __('Caption (optional)', 'bsx-blocks') }
                    value={ figcaption }
                    onChange={ onChangeFigcaption }
                    keepPlaceholderOnFocus
                />
            </figure>
			{ controls }
		</>
	);
}

export default Edit;
