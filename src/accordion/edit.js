import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    BlockControls,
    AlignmentToolbar,
	useInnerBlocksProps, // use if appending inner blocks directly into outer elem
} from '@wordpress/block-editor';
import { 
    TextControl,
    PanelBody,
    SelectControl,
    ToggleControl,
    Button,
    SVG, 
    Path,
} from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
// import { getTemplate } from './../_functions/utilities.js';
import { 
    marginLeftSelect,
    marginRightSelect,
    marginBeforeSelect,
    marginAfterSelect,
} from './../_functions/controls.js';


// utils
// import fooBar from './utils';


// templates
// import templates from './templates';

const DEFAULT_BLOCK = {
    name: 'bsx-blocks/accordion-item',
};
const TEMPLATE = [ [ 'bsx-blocks/accordion-item' ] ];

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {

	const { getBlock } = useSelect( blockEditorStore );

	const {
        uniqueId,
        openSingle,
        headingLevel,
        marginLeft,
        marginRight,
        marginBefore,
        marginAfter,
	} = attributes;
    
    // Generate a unique ID if it doesn't exist.
    // Using clientID, store to use in save() function.
    useEffect(() => {
        if (!uniqueId) {
            setAttributes({ uniqueId: `acc-${clientId}` });
        }
    }, [clientId, uniqueId, setAttributes]);

	// const hasInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks.length > 0;
	// }

	// const getInnerBlocks = () => {
	// 	const block = getBlock( clientId );
	// 	if ( typeof block.innerBlocks === 'undefined' ) return false;
	// 	return block.innerBlocks;
	// }

	// let template = getTemplate( templates, templateName ).template;


    const { updateBlockAttributes } = useDispatch( blockEditorStore );

    // Access to child blocks of the current block
    // Wait for the block to be fully initialized
    const childBlocks = useSelect(
        ( select ) => {
            const { getBlocks } = select( blockEditorStore );
            return getBlocks( clientId ) || []; // Fallback to an empty array if no blocks found
        },
        [ clientId ]
    );

    
    // Note: We need both, update the children blocks when the parent changes (done below)
    // and inherit the parent’s attributes when the child is created (done in accordion-item/edit.js).

    // // Get current `headingLevel` from child blocks
    // const currentHeadingLevel = useSelect(
    //     () => {
    //         if ( childBlocks.length > 0 ) {
    //             // Check if all child blocks have the same `headingLevel`
    //             // Convert to number to avoid type issues ('4' !== 4)
    //             const uniqueHeadingLevels = [
    //                 ...new Set(
    //                     childBlocks.map((block) => Number(block.attributes.headingLevel))
    //                 ),
    //             ];
    //             return uniqueHeadingLevels.length === 1
    //                 ? uniqueHeadingLevels[0] // All values are the same
    //                 : ''; // Different values found
    //         }
    //         return ''; // No child blocks
    //     },
    //     [ childBlocks ]
    // );

    const onChangeHeadingLevel = (value) => {
        setAttributes( { headingLevel: value } );

        // Update children attributes – convert to number.
        childBlocks.forEach((block) => {
            updateBlockAttributes(block.clientId, { headingLevel: Number(value) });
        });
    };

    const onChangeOpenSingle = ( value ) => {
        setAttributes( { openSingle: value } );

        // Update children attributes – the `parentUniqueId` is only set if `openSingle` is true.
        childBlocks.forEach((block) => {
            updateBlockAttributes(block.clientId, { parentUniqueId: value ? uniqueId : undefined });
        });
    };

    const onChangeMarginLeft = ( value ) => {
        setAttributes( { marginLeft: value } );
    };
    const onChangeMarginRight = ( value ) => {
        setAttributes( { marginRight: value } );
    };
    const onChangeMarginBefore = ( value ) => {
        setAttributes( { marginBefore: value } );
    };
    const onChangeMarginAfter = ( value ) => {
        setAttributes( { marginAfter: value } );
    };

    const ulClassNames = addClassNames( { 
        marginLeft,
        marginRight,
        marginBefore, 
        marginAfter,
    }, 'accordion list-unstyled' );


    const controls = (
    	<>
            <InspectorControls>
                <PanelBody title={ __( 'Settings', 'bsx-blocks' ) }>
                    {/* You MUST use numeric values here! If not, WordPress will fail the child blocks validation. */}
                    <SelectControl
                        label={ __( 'Heading Level', 'bsx-blocks' ) }
                        value={ Number(headingLevel) }
                        help={ __( 'Select the heading level for all accordion items.', 'bsx-blocks' ) }
                        options={ [
                            { value: 2, label: __( 'H2', 'bsx-blocks' ) },
                            { value: 3, label: __( 'H3', 'bsx-blocks' ) },
                            { value: 4, label: __( 'H4', 'bsx-blocks' ) },
                            { value: 5, label: __( 'H5', 'bsx-blocks' ) },
                            { value: 6, label: __( 'H6', 'bsx-blocks' ) },
                        ] }
                        onChange={ onChangeHeadingLevel }
                    />
                    <ToggleControl
                        label={ __( 'Open single item', 'bsx-blocks' ) }
                        checked={ !! openSingle }
                        onChange={ onChangeOpenSingle }
                        help={ __( 'If enabled, only one accordion item can be opened at a time.', 'bsx-blocks' ) }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Margin', 'bsx-blocks' ) }>
                    {
                        marginLeftSelect( marginLeft, onChangeMarginLeft )
                    }
                    {
                        marginRightSelect( marginRight, onChangeMarginRight )
                    }
                    {
                        marginBeforeSelect( marginBefore, onChangeMarginBefore )
                    }
                    {
                        marginAfterSelect( marginAfter, onChangeMarginAfter )
                    }
                </PanelBody>
            </InspectorControls>
    	</>
	);

    // add class names to blockProps
    const blockProps = useBlockProps( { className: ulClassNames } );
	// console.log( 'blockProps: ' + JSON.stringify( blockProps, null, 2 ) );

    const CustomAppender = () => (
        <Button
            variant="primary"
            onClick={ () => wp.data.dispatch( 'core/block-editor' ).insertBlock(
                wp.blocks.createBlock( 'bsx-blocks/accordion-item' ),
                undefined,
                clientId
            ) }
        >
            { __( 'Add Accordion Item', 'bsx-blocks' ) }
        </Button>
    );

	// use if appending inner blocks directly into outer elem
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		defaultBlock: DEFAULT_BLOCK,
		directInsert: true,
		template: TEMPLATE,
		templateLock: false,
		templateInsertUpdatesSelection: true,
        renderAppender: CustomAppender, // Custom appender button
		// ...( Platform.isNative && {
		// 	marginVertical: NATIVE_MARGIN_SPACING,
		// 	marginHorizontal: NATIVE_MARGIN_SPACING,
		// 	renderAppender: false,
		// } ),
		// __experimentalCaptureToolbars: true,
	} );

	return (
		<>
            <ul { ...innerBlocksProps }/>
            { controls }
		</>
	);
}
