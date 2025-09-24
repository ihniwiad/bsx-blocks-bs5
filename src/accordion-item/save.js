/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';

/**
 * @return {Element} Element to render.
 */
export default function save( { attributes, clientId } ) {

    const {
        uniqueId,
        parentUniqueId,
        title,
        headingLevel,
        open,
        headingId,
        paddingBefore,
        paddingAfter,
        paddingLeft,
        paddingRight,
    } = attributes;


    const liClassName = addClassNames( { 
        paddingBefore, 
        paddingAfter, 
        paddingLeft, 
        paddingRight,
    }, 'accordion-item' );

    const TagName = 'li';
    const HeadingTagName = `h${headingLevel || 3}`;

    // Generate unique IDs using clientId
    const triggerId = `${uniqueId}-trig`;
    const contentId = `${uniqueId}-cont`;

	return (
		<TagName { ...useBlockProps.save( { className: liClassName } ) } itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
            <HeadingTagName class="accordion-header h4 my-0" id={ headingId }>
                <button class={ 'accordion-button flex-row-reverse ps-3' + (open ? '' : ' collapsed') } id={ triggerId } data-bs-toggle="collapse" data-bs-target={ `#${ contentId }` } aria-controls={ contentId } aria-expanded={ open ? 'true' : 'false' } itemprop="name">
                    <span class="mb-0 d-flex flex-grow-1 ps-2 h4" itemprop="name"><RichText.Content value={ title } /></span><span class="acc-header-icon"></span>
                </button>
            </HeadingTagName>
            <div class={ 'accordion-collapse collapse' + (open ? ' show' : '') } id={ contentId } role="region" aria-labeledby={ triggerId } itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer" data-bs-parent={ parentUniqueId ? `#${parentUniqueId}` : '' }>
                <div class="accordion-body ps-5 pb-0" itemprop="text">
                    <InnerBlocks.Content />
                </div>
            </div>
		</TagName>
	);
}
