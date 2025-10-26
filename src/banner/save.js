/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
    // getUrlTruncAndExtension,
    // fullImgIsScaled,
    // getOriginalImgUrl,
    // getSizesAndWithoutSizesTruncFromUrlTrunc,
    // makeSizedImgs,
    // getImgWithHeight,
    // imgExists,
    // getImgSizesData,
    makeImgSizesFromImgData,
    // makeImgData,
} from './../_functions/img.js';
import { 
    maximizeImgData,
    makeSrcset,
} from './../_functions/img.js';


// utils
import {
    makeBannerClassNames,
    // makeBannerInnerClassNames,
    // makeSrcsetJson,
} from './utils.js';


// templates (required for checking selected template props)
import templates from './templates.js';


/**
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {

    const {
        nodeName,
        templateName,
        // belowNavbar,
        // touchFooter,
        bgColor,
        // imgId,
        imgData,
        sizeIndex,
        alt,
        priority,
        portraitImgData,
        portraitSizeIndex,
        bannerType,
        bannerSize,
        bgAttachment,
        // bgAttachmentFixedLimited,
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
        disableResponsiveDownsizing,
        multilayer,
    } = attributes;

    // Extract full img data arrays.
    const fullImgData = maximizeImgData(imgData);
    const fullPortraitImgData = maximizeImgData(portraitImgData);

    // class names

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

    
    // Image data.
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


    // Portrait image data (if exists).
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
        // With portrait image
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
        // Without portrait image
        image = hasValidImg && (
            <>
                <img className="position-absolute w-100 h-100 top-0 left-0 object-fit-cover" src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } {...(priority ? { loading: "eager", fetchpriority: "high" } : { loading: "lazy" })} decoding="async" />
            </>
        );
    }

    // There might be no images at all, e.g. if background color banner
    const saveAttributes = makeSaveAttributes({
        // style: 'min-height: 50vh;', // TODO: Replace by height classes if implemented
        href: href, 
        target: target, 
        rel: href ? (rel ? rel + ' noopener noreferrer' : 'noopener noreferrer') : '',
    });

    const TagName = href ? 'a' : nodeName;

    const template = getTemplate(templates, templateName).template;

	return (
        <TagName { ...useBlockProps.save({ className: bannerClassName, ...saveAttributes }) }>
            {
                typeof template !== 'undefined' && template[0] !== 'undefined' && typeof template[0][1] !== 'undefined' && typeof template[0][1].isBannerInner !== 'undefined' && template[0][1].isBannerInner ? (
                    <>
                        { image }
                        <InnerBlocks.Content />
                    </>
                )
                :
                (
                    <>
                        { image }
                        <div className={ bannerInnerClassName }>
                            <InnerBlocks.Content />
                        </div>
                    </>
                )
            }
        </TagName>
	);
}
