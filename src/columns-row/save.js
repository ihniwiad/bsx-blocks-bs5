/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
import { makeSaveAttributes } from './../_functions/attributes.js';

// utils
import makeRowClassNames from './utils.js';

/**
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {

    const {
        templateName,
        enableInheritanceToCols,
        alignItems,
        justifyContent,
        // noGutters,
        // formRow,
        rowReverse,
        sizeXs,
        sizeSm,
        sizeMd,
        sizeLg,
        sizeXl,
        colsNodeName,
        colsMarginAfter,
        marginBefore,
        marginAfter,
        paddingBefore,
        paddingAfter,
        gutter,
    } = attributes;

    const rowClassName = addClassNames({
		alignItems, 
		justifyContent, 
		rowReverse,
        marginBefore, 
        marginAfter, 
        paddingBefore, 
        paddingAfter,
		gutter,
    });

	return (
		<div { ...useBlockProps.save({ className: rowClassName }) }>
            <InnerBlocks.Content />
		</div>
	);
}
