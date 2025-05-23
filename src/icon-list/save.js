/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes } ) {

    const {
        globalIconFamily,
        globalIconTextColor,
        textAlign,
        display,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
    } = attributes;

    const ulClassNames = addClassNames( { 
        textAlign, 
        display,
        marginLeft,
        marginRight,
        marginBefore, 
        marginAfter,
    }, 'fa-ul' );

	return (
		<ul { ...useBlockProps.save( { className: ulClassNames } ) }>
            <InnerBlocks.Content />
		</ul>
	);
}
