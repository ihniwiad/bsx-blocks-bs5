/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
    useBlockProps,
    RichText,
} from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';
import { 
    maximizeImgData,
    makeSrcset,
} from './../_functions/img.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        className,
        imgSizeIndex,
        imgData,
        url,
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
        zoomImgSizeIndex,
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
        scale,
        displayedWidth,
        displayedHeight,
        noFigureTag,
    } = attributes;

    const fullImgData = maximizeImgData(imgData);

    // prepare img sources attributes
    // class names

    const classNames = addClassNames( {
        textAlign,
        marginBefore,
        marginAfter,
        marginLeft,
        marginRight,
    }, className );

    const aClassName = zoomable ? 'zoomable-img' : ( !! href && !! aAdditionalClassName ? aAdditionalClassName : '' );
    // let aClassName = '';
    // if ( zoomable ) {
    //     aClassName += 'zoomable-img';
    // }
    // if ( !! href && !! aAdditionalClassName ) {
    //     aClassName += ' ' + aAdditionalClassName.trim();
    // }

    const imgClassName = addClassNames( {
        rounded,
        imgThumbnail,
        borderState,
    }, 'img-fluid' + ( imgAdditionalClassName ? ' ' + imgAdditionalClassName : '' ) );

    // attributes

    // allow zoomable img
    const saveAttributes = ( zoomable && ! externalGalleryParent ) ? 
        makeSaveAttributes( {
            'data-bsx': 'lightbox',
        } )
        :
        {}
    ;

    // manage zoomImgSizeIndex & href, target, rel
    // const aSaveAttributes = ( zoomable && typeof fullImgData[ zoomImgSizeIndex ] != 'undefined' ) ? 
    //     makeSaveAttributes({
    //         'href': href,
    //         'target': target,
    //         'data-pswp-width': fullImgData[zoomImgSizeIndex].width,
    //         'data-pswp-height': fullImgData[zoomImgSizeIndex].height,
    //         'data-bsx-t': 'lightbox-item',
    //     })
    //     : 
    //     (
    //         !! href ? 
    //         {
    //             'href': href,
    //             'target': target,
    //             'rel': rel,
    //         } 
    //         : 
    //         {}
    //     )
    // ;

    const aSaveAttributes = makeSaveAttributes({
        'href': href,
        'target': target,
        'rel': rel,
        'data-pswp-width': zoomable && typeof fullImgData[zoomImgSizeIndex] != 'undefined' ? fullImgData[zoomImgSizeIndex].width : null,
        'data-pswp-height': zoomable && typeof fullImgData[zoomImgSizeIndex] != 'undefined' ? fullImgData[zoomImgSizeIndex].height : null,
        'data-bsx-t': zoomable ? 'lightbox-item' : null,
    });

    // check if valid image(s)
    const hasValidImg = ( typeof fullImgData !== 'undefined' && fullImgData.length > 0 && typeof fullImgData[ imgSizeIndex ] !== 'undefined' && imgSizeIndex < fullImgData.length );
    // const hasValidPortraitImg = false;

           // const image = typeof fullImgData !== 'undefined' && typeof fullImgData[ imgSizeIndex ] !== 'undefined' ? (
    //     <>
    //         <script>document.write( '
    //             <picture className={ ! noFigureTag ? pictureAdditionalClassName : classNames }>
    //                 {
    //                     sourcesAttributesList.map( ( sourceAttributes, index ) => (
    //                         <source { ...sourceAttributes } />
    //                     ) )
    //                 }
    //                 <img className={ imgClassName } src={ makeBase64PreloadImgSrc( fullImgData[ imgSizeIndex ].width, fullImgData[ imgSizeIndex ].height ) } alt={ alt } data-src={ fullImgData[ imgSizeIndex ].url } width={ !! displayedWidth ? displayedWidth : fullImgData[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : fullImgData[ imgSizeIndex ].height } data-fn="lazyload" />
    //             </picture>
    //         ' );</script>
    //         <noscript><img className={ imgClassName } src={ fullImgData[ imgSizeIndex ].url } alt={ alt } width={ !! displayedWidth ? displayedWidth : fullImgData[ imgSizeIndex ].width } height={ !! displayedHeight ? displayedHeight : fullImgData[ imgSizeIndex ].height } /></noscript>
    //     </>
    // )
    // :
    // (
    //     <></>
    // );


    // const srcsetList = [];
    // fullImgData.forEach( ( imgSize, index ) => {
    //     if ( 
    //         ( ( imgSizeIndex == 0 && index == 0 ) || ( imgSize.width == imgSize.height ) )
    //         || ( imgSizeIndex > 0 && index > 0 )
    //     ) {
    //         // add square thumb img if selected (imgSizeIndex == 0) or original img is square format too, else skip
    //         srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
    //         if ( imgSizeIndex == 0 ) {
    //             // skip other sizes but square
    //             return; // `break` will cause error “Unsyntactic break.”
    //         }
    //     }
    // } );

    // const srcset = srcsetList.join( ', ' );

    const srcset = makeSrcset( {
        fullImgData,
        imgSizeIndex,
        disableResponsiveDownsizing,
    } );
    const src = hasValidImg ? fullImgData[ imgSizeIndex ].url : '';
    const width = ( hasValidImg && displayedWidth ) ? displayedWidth : hasValidImg ? fullImgData[ imgSizeIndex ].width : '';
    const height = ( hasValidImg && displayedHeight ) ? displayedHeight : hasValidImg ? fullImgData[ imgSizeIndex ].height : '';
    const sizes = ( width && height ) ? '(max-width: ' + width + 'px) 100vw, ' + width + 'px' : '';
    const landscapeImgClassName = false ? imgClassName + ' d-portrait-none' : imgClassName;

    // TODO: manage className (if is outer element)

    const image = hasValidImg ? (
        <>
            <img className={ landscapeImgClassName } src={ src } srcset={ srcset } sizes={ sizes } alt={ alt } width={ width } height={ height } loading="lazy" decoding="async" />
        </>
    )
    :
    (
        <></>
    );

    const aOrImage = (
        <>
            { 
                zoomable || href ? (
                    <a className={ aClassName } { ...aSaveAttributes } { ...useBlockProps.save( { className: aClassName, ...saveAttributes } ) }>
                        { image }
                    </a>
                )
                :
                (
                    <>
                        { image }
                    </>
                ) 
            }
        </>
    );

	return (
        <>
            {
                ! noFigureTag ?
                (
                    <figure { ...useBlockProps.save( { className: classNames, ...saveAttributes } ) }>
                        {
                            typeof fullImgData !== 'undefined' && typeof fullImgData[ imgSizeIndex ] !== 'undefined' && typeof fullImgData[ imgSizeIndex ].url !== 'undefined' && fullImgData[ imgSizeIndex ].url && (
                                <>
                                    { 
                                        aOrImage
                                    }
                                    {
                                        figcaption && ! RichText.isEmpty( figcaption ) && (
                                            <RichText.Content tagName="figcaption" className="font-italic" value={ figcaption } />
                                        )
                                    }
                                </>
                            )
                        }
                    </figure>
                )
                :
                (
                    <>
                        { 
                            typeof fullImgData !== 'undefined' && typeof fullImgData[ imgSizeIndex ] !== 'undefined' && typeof fullImgData[ imgSizeIndex ].url !== 'undefined' && fullImgData[ imgSizeIndex ].url && (
                                <>
                                    {
                                        aOrImage
                                    }
                                </>
                            )
                        }
                    </>
                )
            }
        </>
	);
}
