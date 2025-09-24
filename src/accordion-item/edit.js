import { __ } from '@wordpress/i18n';
import {
    RichText,
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    // InspectorAdvancedControls,
    // BlockControls,
    // AlignmentToolbar,
    // useInnerBlocksProps,
} from '@wordpress/block-editor';
import { 
    PanelBody,
    // SelectControl,
    ToggleControl,
    // TextControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    idInput,
    paddingBeforeSelect,
    paddingAfterSelect,
    paddingLeftSelect,
    paddingRightSelect,
} from './../_functions/controls.js';


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
export default function Edit( { attributes, clientId, setAttributes } ) {

	const { getBlock, getBlockRootClientId } = useSelect( blockEditorStore );

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

    // Generate a unique ID if it doesn't exist.
    // Using clientID, store to use in save() function.
    useEffect(() => {
        if (!uniqueId) {
            setAttributes({ uniqueId: `acc-${clientId}` });
        }
    }, [clientId, uniqueId, setAttributes]);

	// Get parent block attributes.
	const parentBlock = getBlock(
		getBlockRootClientId( clientId )
	);
	const parentAttributes = parentBlock.attributes;


    // Note: We need both, inherit the parent’s attributes when the child is created (done here),
    // and update the children blocks when the parent changes (done in accordion/edit.js).

    // If configuration "openSingle" is enabled in parent block, we need to set the parentUniqueId attribute, if not we need to remove it.
    useEffect(() => {
        if (parentAttributes.uniqueId && parentAttributes.openSingle !== undefined) {
            setAttributes({ parentUniqueId: parentAttributes.openSingle ? parentAttributes.uniqueId : undefined });
        }
    }, [clientId, parentUniqueId, setAttributes]);

    // Synchronize headingLevel with parent block's headingLevel
    useEffect(() => {
        if (parentAttributes.headingLevel && parentAttributes.headingLevel !== headingLevel) {
            setAttributes({ headingLevel: parentAttributes.headingLevel });
        }
    }, [parentAttributes.headingLevel, headingLevel, setAttributes]);


	// let template = getTemplate( templates, templateName ).template;

    const onChangePaddingBefore = ( value ) => {
        setAttributes( { paddingBefore: value } );
    };
    const onChangePaddingAfter = ( value ) => {
        setAttributes( { paddingAfter: value } );
    };
    const onChangePaddingLeft = ( value ) => {
        setAttributes( { paddingLeft: value } );
    };
    const onChangePaddingRight = ( value ) => {
        setAttributes( { paddingRight: value } );
    };

    const onChangeOpen = ( value ) => {
        setAttributes( { open: value } );
    };
    const onChangeHeadingId = ( value ) => {
        setAttributes( { headingId: value } );
    };
    
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

    const controls = (
        <InspectorControls>
            <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                <ToggleControl
                    label={ __( 'Item is opened', 'bsx-blocks' ) }
                    checked={ !! open }
                    onChange={ onChangeOpen }
                    help={ __( 'If enabled, the accordion item is opened by default.', 'bsx-blocks' ) }
                />
                {
                    idInput( headingId, onChangeHeadingId )
                }
            </PanelBody>
            <PanelBody title={ __( 'Padding', 'bsx-blocks' ) }>
                {
                    paddingLeftSelect( paddingLeft, onChangePaddingLeft )
                }
                {
                    paddingRightSelect( paddingRight, onChangePaddingRight )
                }
                {
                    paddingBeforeSelect( paddingBefore, onChangePaddingBefore )
                }
                {
                    paddingAfterSelect( paddingAfter, onChangePaddingAfter )
                }
            </PanelBody>
        </InspectorControls>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: liClassName } );

	return (
		<TagName { ...blockProps }>
            <>
                <HeadingTagName class="accordion-header my-0" id={ headingId }>
                    <button class={ 'accordion-button flex-row-reverse ps-3' } id={ triggerId } data-bsx="acc" aria-controls={ contentId } aria-expanded="true">
                        <RichText
                            identifier="title"
                            tagName="span"
                            className="mb-0 d-flex flex-grow-1 ps-2 h4"
                            onChange={ ( nextTitle ) =>
                                setAttributes( { title: nextTitle } )
                            }
                            value={ title }
                            aria-label={ __( 'Accordion item title' ) }
                            placeholder={ __( 'Accordion Title' ) }
                        /><span class="acc-header-icon"></span>
                    </button>
                </HeadingTagName>
                <div class="accordion-collapse collapse show" id={ contentId } role="region" aria-labeledby={ triggerId } data-bs-parent={ parentUniqueId ? `#${parentUniqueId}` : '' }>
                    <div class="accordion-body ps-5 pb-0">
                        <InnerBlocks/>
                    </div>
                </div>
            </>
			{ controls }
		</TagName>
	);
}
