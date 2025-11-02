/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeContainerClassNames from './utils.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        // className,
        isFluid,
        containerBreakpoint,
        belowNavbar,
        marginBefore,
        marginAfter,
        sized,
        margin,
		padding,
    } = attributes;

    let containerClassName = makeContainerClassNames( {
        isFluid, 
        containerBreakpoint, 
        sized, 
    } );
    
    containerClassName = addClassNames( {
        belowNavbar, 
        marginBefore, 
        marginAfter, 
        margin,
		padding,
    }, containerClassName );

	return (
		<div { ...useBlockProps.save( { className: containerClassName } ) }>
            <InnerBlocks.Content />
		</div>
	);
}
