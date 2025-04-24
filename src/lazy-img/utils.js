import { 
    // getUrlTruncAndExtension,
    // fullImgIsScaled,
    // getOriginalImgUrl,
    // getSizesAndWithoutSizesTruncFromUrlTrunc,
    // makeSizedImgs,
    // getImgWithHeight,
    // imgExists,
    // getImgSizesData,
    makeBase64PreloadImgSrc,
    // makeImgSizesFromImgData,
    makeImgData,
    // getSizeSlugFromUrl,
    getImgAllDataFromMediaSizes,
} from './../_functions/img.js';



/**
 * Loads an image fully to get its natural dimensions.
 *
 * @param {string} url
 * @returns {Promise<{ width: number, height: number } | null>}
 */
async function loadImageDimensions(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
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
        const res = await fetch(url, { method: 'HEAD' });
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
            height: Math.round((originalHeight / originalWidth) * max),
        };
    } else {
        return {
            height: max,
            width: Math.round((originalWidth / originalHeight) * max),
        };
    }
}
  
/**
 * Returns all known and calculated image sizes from a WP image object.
 *
 * @param {Object} image
 * @returns {Promise<Array<{ key: string, url: string, width: number, height: number }>>}
 */
export async function getAllImageSizes(image) {
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
                height: size.height,
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
                height: originalSize.height,
            });
        }
    }

    // Include medium_large if available or reconstruct if missing
    if (sizes.medium_large?.url) {
        results.push({
            key: 'medium_large',
            url: sizes.medium_large.url,
            width: sizes.medium_large.width,
            height: sizes.medium_large.height,
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
                height: mediumLargeHeight,
            });
        }
    }
  
    // Reconstructed 2048 and 1536 versions
    if (originalSize && image.originalImageURL) {
        const extMatch = image.originalImageURL.match(/\.(jpe?g|png|webp|gif|avif|svg)$/i);
        const extension = extMatch ? extMatch[0] : '';
        const base = image.originalImageURL.replace(/\-[0-9]+x[0-9]+(?=\.\w+$)/, '').replace(/\.(jpe?g|png|webp|gif|avif|svg)$/i, '');
    
        for (const max of [2048, 1536]) {
            const { width, height } = getScaledDimensions(originalSize.width, originalSize.height, max);
            const constructedUrl = `${base}-${width}x${height}${extension}`;
            if (await doesImageExist(constructedUrl)) {
                results.push({
                    key: `${max}`,
                    url: constructedUrl,
                    width,
                    height,
                });
            }
        }
    }
  
    // Sort by size (area) ascending
    results.sort((a, b) => a.width * a.height - b.width * b.height);
  
    return results;
}
  

//   /**
//    * Returns all known and calculated image sizes from a WP image object.
//    *
//    * @param {Object} image
//    * @returns {Promise<Array<{ key: string, url: string, width: number, height: number }>>}
//    */
//   export async function getAllImageSizes(image) {
//     const sizes = image.sizes || {};
//     const results = [];
  
//     // Default known sizes
//     for (const key of ['thumbnail', 'medium', 'large', 'full']) {
//       const size = sizes[key];
//       if (size?.url && size?.width && size?.height) {
//         results.push({
//           key,
//           url: size.url,
//           width: size.width,
//           height: size.height,
//         });
//       }
//     }
  
//     let originalSize = null;
  
//     // Load real original size
//     if (image.originalImageURL) {
//       originalSize = await loadImageDimensions(image.originalImageURL);
//       if (originalSize) {
//         results.push({
//           key: 'original',
//           url: image.originalImageURL,
//           width: originalSize.width,
//           height: originalSize.height,
//         });
//       }
//     }
  
//     // Construct and check 2048 and 1536 variants
//     if (originalSize && image.originalImageURL) {
//       const extMatch = image.originalImageURL.match(/\.(jpe?g|png|webp|gif|avif|svg)$/i);
//       const extension = extMatch ? extMatch[0] : '';
//       const base = image.originalImageURL.replace(/\-[0-9]+x[0-9]+(?=\.\w+$)/, '').replace(/\.(jpe?g|png|webp|gif|avif|svg)$/i, '');
  
//       for (const max of [2048, 1536]) {
//         const { width, height } = getScaledDimensions(originalSize.width, originalSize.height, max);
//         const constructedUrl = `${base}-${width}x${height}${extension}`;
//         if (await doesImageExist(constructedUrl)) {
//           results.push({
//             key: `${max}`,
//             url: constructedUrl,
//             width,
//             height,
//           });
//         }
//       }
//     }
  
//     return results;
// }
  


// /**
//  * Try to get dimensions of an image via HTTP HEAD request.
//  *
//  * @param {string} url - The image URL to check.
//  * @returns {Promise<{ width: number, height: number }|null>}
//  */
// async function getImageSizeFromURL(url) {
//     console.log(`getImageSizeFromURL()`, url);
//     try {
//       const response = await fetch(url, { method: 'HEAD' });
//       console.log(`response`, response);
//       const width = parseInt(response.headers.get('x-image-width'), 10);
//       const height = parseInt(response.headers.get('x-image-height'), 10);
//       if (width && height) {
//         return { width, height };
//       }
//     } catch (err) {
//         console.error(err);
//       // Image doesn't exist or CORS issue
//     }
//     console.log(`return null`);
//     return null;
//   }
  
//   /**
//    * Calculate scaled dimensions keeping aspect ratio.
//    *
//    * @param {number} originalWidth
//    * @param {number} originalHeight
//    * @param {number} max
//    * @returns {{ width: number, height: number }}
//    */
//   function getScaledDimensions(originalWidth, originalHeight, max) {
//     if (originalWidth >= originalHeight) {
//       const width = max;
//       const height = Math.round((originalHeight / originalWidth) * max);
//       return { width, height };
//     } else {
//       const height = max;
//       const width = Math.round((originalWidth / originalHeight) * max);
//       return { width, height };
//     }
//   }
  
//   /**
//    * Extracts all known and constructed image sizes from a WordPress image object.
//    *
//    * @param {Object} image - The image object from MediaUpload.
//    * @returns {Promise<Array>} Array of image size objects with { key, url, width, height }.
//    */
//   export async function getAllImageSizes(image) {

//     console.log(`getAllImageSizes()`, image);

//     const sizes = image.sizes || {};
//     const results = [];
  
//     const addIfValid = (key, url, width, height) => {
//       if (url && width && height) {
//         results.push({ key, url, width, height });
//       }
//     };
  
//     // 1. Sizes from the object
//     for (const key of ['thumbnail', 'medium', 'large', 'full']) {
//       const size = sizes[key];
//       if (size?.url && size?.width && size?.height) {
//         results.push({
//           key,
//           url: size.url,
//           width: size.width,
//           height: size.height,
//         });
//       }
//     }
  
//     let originalSize = null;
  
//     // 2. Handle "original" (non-scaled version)
//     if (image.originalImageURL) {
//         console.log(`originalImageURL`, image.originalImageURL);
//       originalSize = await getImageSizeFromURL(image.originalImageURL);
//       console.log(`return originalSize`, originalSize);
//       if (originalSize) {
//         results.push({
//           key: 'original',
//           url: image.originalImageURL,
//           width: originalSize.width,
//           height: originalSize.height,
//         });
//       }
//     }
  
//     // 3. Construct and verify 2048/1536 variants
//     if (originalSize && image.originalImageURL) {
//       const originalBase = image.originalImageURL.replace(/\.(jpe?g|png|webp|gif|avif|svg)$/i, '');
//       const extension = image.originalImageURL.match(/\.(jpe?g|png|webp|gif|avif|svg)$/i)?.[0] || '';
  
//       const candidates = [
//         { key: '2048', max: 2048 },
//         { key: '1536', max: 1536 },
//       ];
  
//       for (const { key, max } of candidates) {
//         const { width, height } = getScaledDimensions(originalSize.width, originalSize.height, max);
//         const constructedUrl = `${originalBase}-${width}x${height}${extension}`;
//         const check = await getImageSizeFromURL(constructedUrl);
//         console.log(`check (${max})`, check);
//         if (check) {
//           results.push({
//             key,
//             url: constructedUrl,
//             width: check.width,
//             height: check.height,
//           });
//         }
//       }
//     }
  
//     return results;
// }
  








// do not use – external function causes react error for unknown reason
export function migrateToLazyimgV2( attributes, mediaSizes, portraitMediaSizes ) {
    
    const {
        imgId,
        imgSizes,
        imgData,
        imgSizeIndex,
        url,
        // width,
        // height,
        origWidth,
        origHeight,
        portraitImgId,
        portraitImgSizes,
        portraitImgData,
        portraitImgSizeIndex,
        portraitImgMaxWidthBreakpoint,
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
        pictureAdditionalClassName,
        imgAdditionalClassName,
        href,
        target,
        rel,
        scale,
        displayedWidth,
        displayedHeight,
        noFigureTag,
        imgHtml,
    } = attributes;


    // console.log( '---- migrateToLazyimgV2()' );
    
    let newAttributes = {};

    if ( mediaSizes && imgData.length === 0 ) {
        const newImgAllData = getImgAllDataFromMediaSizes( mediaSizes );
        const originalWidth = newImgAllData.originalWidth;
        const originalHeight = newImgAllData.originalHeight;
        const returnImgs = newImgAllData.imgs;
        // console.log( '----> newImgAllData useMigrateOnLoad() ( ' + imgId + ' ): ' + JSON.stringify( newImgAllData, null, 2 ) + '\n' );

        // const newImgData = makeImgData( returnImgs, truncWithoutSizeSlug, fileExt );
        const newImgData = makeImgData( newImgAllData.imgs, newImgAllData.truncWithoutSizeSlug, newImgAllData.fileExt );
        // console.log( '----> newImgData ( ' + imgId + ' ): ' + JSON.stringify( newImgData, null, 2 ) + '\n' );

        // TODO: check size indexes, compare imgSizes.length with returnImgs.length, if equal keep, if difference count down from largest size


        // console.log( '------> imgSizes.length: ' + imgSizes.length + ', returnImgs.length: ' + returnImgs.length )


        // TODO: check imgSizeIndex more complex

        const imgIsBetween770And1024 = originalWidth <= 1024 && originalWidth >= 770;
        // console.log( 'imgIsBetween770And1024: ' + imgIsBetween770And1024 )
        let newImgSizeIndex = typeof imgSizeIndex !== 'undefined' ? imgSizeIndex : imgSizes.length - 1;
        let newZoomImgSizeIndex = zoomImgSizeIndex;
        // some existing image size (768px) might be missing due to a bug if original image is between 1024 and 770px
        // now there are all image sizes so we might need to increase imgSizeIndex
        if ( imgIsBetween770And1024 ) {
            // check to change imgSizeIndex
            if ( parseInt( imgSizeIndex ) >= 2 ) {
                newImgSizeIndex = ( parseInt( imgSizeIndex ) + ( returnImgs.length - imgSizes.length ) ).toString();
            }
            if ( parseInt( newZoomImgSizeIndex ) >= 2 ) {
                newZoomImgSizeIndex = ( parseInt( zoomImgSizeIndex ) + ( returnImgs.length - imgSizes.length ) ).toString();
            }
        }
        // console.log( '------> imgSizeIndex: ' + imgSizeIndex + ', newImgSizeIndex: ' + newImgSizeIndex )
        // console.log( '------> zoomImgSizeIndex: ' + zoomImgSizeIndex + ', newZoomImgSizeIndex: ' + newZoomImgSizeIndex )

        // console.log( '--------> make (first) img attr' )

        newAttributes = {
            imgSizes: '', // save empty, replaced by imgData
            imgData: newImgData,
            imgSizeIndex: newImgSizeIndex,
            url: '', // save empty, replaced by imgData
            width: '', // save empty, replaced by imgDat
            height: '', // save empty, replaced by imgDat
            origWidth: originalWidth,
            origHeight: originalHeight,
            zoomImgSizeIndex: newZoomImgSizeIndex,

            // portraitImgData: typeof newPortraitImgData !== 'undefined' ? newPortraitImgData : null,
            // portraitImgSizeIndex: typeof newPortraitImgSizeIndex !== 'undefined' ? newPortraitImgSizeIndex.toString() : null,
        };
        // console.log( '--------> newAttributes (img): ' + JSON.stringify( newAttributes, null, 2 ) + '\n' );
    }

    if ( portraitMediaSizes && portraitImgData.length === 0 ) {
        // console.log( '--------> make portrait img attr' )
        const newPortraitImgAllData = getImgAllDataFromMediaSizes( portraitMediaSizes );
        // const portraitOriginalWidth = newPortraitImgAllData.originalWidth;
        // const portraitOriginalHeight = newPortraitImgAllData.originalHeight;
        const portraitReturnImgs = newPortraitImgAllData.imgs;

        const newPortraitImgData = makeImgData( newPortraitImgAllData.imgs, newPortraitImgAllData.truncWithoutSizeSlug, newPortraitImgAllData.fileExt );
        
        // console.log( '----> newPortraitImgData ( ' + portraitImgId + ' ): ' + JSON.stringify( newPortraitImgData, null, 2 ) + '\n' );


        // console.log( '------> portraitImgSizes.length: ' + portraitImgSizes.length + ', portraitReturnImgs.length: ' + portraitReturnImgs.length )

        let newPortraitImgSizeIndex = typeof portraitImgSizeIndex !== 'undefined' ? portraitImgSizeIndex : portraitImgSizes.length - 1;
        // some existing image sizes due to bug in old sizes calculation on protrait formats
        // now there are all image sizes so we might need to increase imgSizeIndex
        if ( parseInt( portraitImgSizeIndex ) >= 2 ) {
            newPortraitImgSizeIndex = ( parseInt( portraitImgSizeIndex ) + ( portraitReturnImgs.length - portraitImgSizes.length ) ).toString();
        }
        // console.log( '------> portraitImgSizeIndex: ' + portraitImgSizeIndex + ', newPortraitImgSizeIndex: ' + newPortraitImgSizeIndex )
    

        newAttributes = {
            portraitImgSizes: '', // save empty, replaced by portraitImgData
            portraitImgData: newPortraitImgData,
            portraitImgSizeIndex: newPortraitImgSizeIndex.toString(),
            ...newAttributes,
        };
        // console.log( '--------> newAttributes (portrait): ' + JSON.stringify( newAttributes, null, 2 ) + '\n' );

    }

    // console.log( 'otherAttributes: \n' + JSON.stringify( otherAttributes, null, 2 ) );

    return newAttributes;
}


export const getSrcsetUrlsFromImgHtml = ( imgHtml ) => {

    function decodeHTMLEntities( text ) {
        var textArea = document.createElement( 'textarea' );
        textArea.innerHTML = text;
        return textArea.value;
    }

    const parser = new DOMParser();
    const htmlContent = parser.parseFromString( decodeHTMLEntities( imgHtml ), 'text/html' );
    // console.log( 'decodeHTMLEntities( imgHtml ): ' + JSON.stringify( decodeHTMLEntities( imgHtml ), null, 2 ) + '\n' );
    var el = document.createElement( 'html' );
    el.innerHTML = '<html><head></head><body>' + decodeHTMLEntities( imgHtml ) + '</body></html>';

    // 
    if ( el.querySelector( 'img' ) === null || ! el.querySelector( 'img' ).getAttribute( 'srcset' ) ) return [];

    const srcset = el.querySelector( 'img' ).getAttribute( 'srcset' ); // Live NodeList of your anchor elements
    // console.log( 'srcset: \n' + JSON.stringify( srcset, null, 2 ) + '\n' );

    const srcsetArr = srcset.split( ',' );
    const sourcesList = srcsetArr.map( ( sourceText ) => {
        return sourceText.trim().split( ' ' )[ 0 ];
    } );

    return sourcesList;
}


export const makeSourcesAttributesList = ( attributes ) => {

    const {
        fullImgData,
        imgSizeIndex,
        calcPortraitImgSizes,
        portraitImgSizeIndex,
        portraitImgMaxWidthBreakpoint,
        disableResponsiveDownsizing,
    } = attributes;

    const responsivePortraitMediaIndexList = [
        {
            breakpoint: 460,
            imgSizeIndexShift: '-1',
            minImgSizeIndex: '1',
        },
        {
            breakpoint: 576,
            imgSizeIndexShift: '0',
            minImgSizeIndex: '2',
        },
    ];
    const responsiveMediaIndexList = [
        {
            breakpoint: 460,
            imgSizeIndexShift: '-2',
            minImgSizeIndex: '1',
        },
        {
            breakpoint: 768,
            imgSizeIndexShift: '-1',
            minImgSizeIndex: '2',
        },
    ];
    const skipIndex = 0;

    const sourcesAttributesList = [];

    // portrait img

    if ( ! disableResponsiveDownsizing ) {
        // downsize, iterate list

        responsivePortraitMediaIndexList.forEach( ( item, index ) => {

            const currentPortraitImgIndex = parseInt( portraitImgSizeIndex ) + parseInt( item.imgSizeIndexShift );

            const adaptedCurrentPortraitImgIndex = currentPortraitImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentPortraitImgIndex;

            if ( 
                adaptedCurrentPortraitImgIndex <= parseInt( portraitImgSizeIndex ) 
                && adaptedCurrentPortraitImgIndex > skipIndex
                && typeof calcPortraitImgSizes !== 'undefined'
                && typeof calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ] != 'undefined' 
                && typeof calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].url != 'undefined' 
            ) {
                sourcesAttributesList.push( {
                    media: '(orientation: portrait) and (max-width: ' + ( parseInt( ( index == responsivePortraitMediaIndexList.length - 1 && !! portraitImgMaxWidthBreakpoint ) ? portraitImgMaxWidthBreakpoint : item.breakpoint ) - 0.02 ) + 'px)',
                    srcset: makeBase64PreloadImgSrc( calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].width, calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].height ),
                    'data-srcset': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].url,
                    'data-width': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].width,
                    'data-height': calcPortraitImgSizes[ adaptedCurrentPortraitImgIndex ].height,
                } );
            }
        } );
    }
    else {
        // use largest portrait img size
        if ( 
            !! portraitImgSizeIndex
            && typeof calcPortraitImgSizes !== 'undefined'
            && typeof calcPortraitImgSizes[ portraitImgSizeIndex ] != 'undefined' 
            && typeof calcPortraitImgSizes[ portraitImgSizeIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: '(orientation: portrait) and (max-width: ' + ( parseInt( ( !! portraitImgMaxWidthBreakpoint ) ? portraitImgMaxWidthBreakpoint : responsivePortraitMediaIndexList[ responsivePortraitMediaIndexList.length - 1 ].breakpoint ) - 0.02 ) + 'px)',
                srcset: makeBase64PreloadImgSrc( calcPortraitImgSizes[ portraitImgSizeIndex ].width, calcPortraitImgSizes[ portraitImgSizeIndex ].height ),
                'data-srcset': calcPortraitImgSizes[ portraitImgSizeIndex ].url,
                'data-width': calcPortraitImgSizes[ portraitImgSizeIndex ].width,
                'data-height': calcPortraitImgSizes[ portraitImgSizeIndex ].height,
            } );
        }
    }

    // default img
    responsiveMediaIndexList.forEach( ( item, index ) => {

        const currentImgIndex = parseInt( imgSizeIndex ) + parseInt( item.imgSizeIndexShift );

        const adaptedCurrentImgIndex = currentImgIndex < parseInt( item.minImgSizeIndex ) ? parseInt( item.minImgSizeIndex ) : currentImgIndex;

        if ( 
            ! disableResponsiveDownsizing
            && adaptedCurrentImgIndex < parseInt( imgSizeIndex ) 
            && adaptedCurrentImgIndex > skipIndex
            && typeof fullImgData != 'undefined' 
            && typeof fullImgData[ adaptedCurrentImgIndex ] != 'undefined' 
            && typeof fullImgData[ adaptedCurrentImgIndex ].url != 'undefined' 
        ) {
            sourcesAttributesList.push( {
                media: '(max-width: ' + ( parseInt( item.breakpoint ) - 0.02 ) + 'px)',
                srcset: makeBase64PreloadImgSrc( fullImgData[ adaptedCurrentImgIndex ].width, fullImgData[ adaptedCurrentImgIndex ].height ),
                'data-srcset': fullImgData[ adaptedCurrentImgIndex ].url,
                'data-width': fullImgData[ adaptedCurrentImgIndex ].width,
                'data-height': fullImgData[ adaptedCurrentImgIndex ].height,
            } );
        }
    } );

    return sourcesAttributesList;

}


export const makeSrcset = ( attributes ) => {

    const {
        fullImgData,
        imgSizeIndex,
        disableResponsiveDownsizing,
    } = attributes;

    // console.log( 'fullImgData: ' + JSON.stringify( fullImgData, null, 2 ) + '\n' );
    // console.log( 'imgSizeIndex: ' + imgSizeIndex );

    const srcsetList = [];
    if ( disableResponsiveDownsizing ) {
        // exactly one src
        srcsetList.push( fullImgData[ imgSizeIndex ].url + ' ' + fullImgData[ imgSizeIndex ].width + 'w' );
    }
    else {
        // multiple sources
        fullImgData.forEach( ( imgSize, index ) => {
            if ( index === 0 ) {
                // first loop, thumbnail image – add only if selected or if image has square format (use largest size since current loop size will always be square at first loop)
                if ( imgSizeIndex == 0 || fullImgData[ fullImgData.length - 1 ].width == fullImgData[ fullImgData.length - 1 ].height ) {
                    // add thumbnail to srcset
                    srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
                }
            }
            else {
                // other loops, non thumbnail images
                // never add img larger current selected size (or if allowing larger sizes than selected, never allow unscaled img index >6)
                if ( index <= imgSizeIndex ) {
                    // add if current size is smaller than selected size
                    srcsetList.push( imgSize.url + ' ' + imgSize.width + 'w' );
                }
            }
        } );
    }

    // console.log( 'srcsetList: ' + JSON.stringify( srcsetList, null, 2 ) + '\n' );

    return srcsetList.join( ', ' );
}

