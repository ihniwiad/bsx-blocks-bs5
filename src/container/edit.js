import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
    InnerBlocks,
    InspectorControls,
    InspectorAdvancedControls,
    useInnerBlocksProps,
} from '@wordpress/block-editor';
import { 
    PanelBody,
    ToggleControl,
    SelectControl,
    SVG, 
    Path,
} from '@wordpress/components';
// import { useSelect } from '@wordpress/data';
// import { store as blockEditorStore } from '@wordpress/block-editor';


import { addClassNames } from './../_functions/add-class-names.js';
// import { makeSaveAttributes } from './../_functions/attributes.js';
import { getTemplate } from './../_functions/utilities.js';
import { 
	belowNavbarToggle,
	respMarginControl,
	marginLeftSelect,
	marginRightSelect,
	marginBeforeSelect,
	marginAfterSelect,
	paddingBeforeSelect,
	paddingAfterSelect,
	paddingLeftSelect,
	paddingRightSelect,
} from './../_functions/controls.js';


// utils
import makeContainerClassNames from './utils.js';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './editor.scss';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {

	// const { getBlock } = useSelect(blockEditorStore);

	const {
		// className,
		isFluid,
		containerBreakpoint,
		belowNavbar,
		marginBefore,
		marginAfter,
		paddingBefore,
		paddingAfter,
		paddingLeft,
		paddingRight,
		sized,
		margin,
	} = attributes;

	// const hasInnerBlocks = () => {
	// 	const block = getBlock(clientId);
	// 	if (typeof block.innerBlocks === 'undefined') return false;
	// 	return block.innerBlocks.length > 0;
	// }


    const onChangeIsFluid = (value) => {
    	if (value === false) {
    		// reset container breakpoint
    		setAttributes({ containerBreakpoint: '' });
    	}
        setAttributes({ isFluid: value });
    };

    const onChangeContainerBreakpoint = (value) => {
        setAttributes({ containerBreakpoint: value });
    };

    const onChangeBelowNavbar = (value) => {
        setAttributes({ belowNavbar: value });
    };


	// Responsive margin handler
	const onChangeMargin = (value) => {
		setAttributes({ margin: value });
	};

    const onChangePaddingBefore = (value) => {
        setAttributes({ paddingBefore: value });
    };
    const onChangePaddingAfter = (value) => {
        setAttributes({ paddingAfter: value });
    };
    const onChangePaddingLeft = (value) => {
        setAttributes({ paddingLeft: value });
    };
    const onChangePaddingRight = (value) => {
        setAttributes({ paddingRight: value });
    };

    const onChangeSized = (value) => {
        setAttributes({ sized: value });
    };


    let containerClassName = makeContainerClassNames({
        isFluid, 
        containerBreakpoint, 
        sized, 
    });
    
    containerClassName = addClassNames({
        belowNavbar, 
        marginBefore, 
        marginAfter, 
        paddingBefore, 
        paddingAfter,
        paddingLeft,
        paddingRight,
		margin,
    }, containerClassName);

    const controls = (
    	<>
	        <InspectorControls>
	            <PanelBody title={ __('Container Settings', 'bsx-blocks') }>
	                <ToggleControl
	                    label={ __('Fluid container', 'bsx-blocks') }
	                    checked={ !! isFluid }
	                    onChange={ onChangeIsFluid }
	                    disabled={ !! sized }
	                    help={ __('Fluid width from XS up', 'bsx-blocks') }
	                />
	                <SelectControl 
	                    label={ __('Non fluid Breakpoint', 'bsx-blocks') }
	                    value={ containerBreakpoint }
	                    onChange={ onChangeContainerBreakpoint }
	                    options={ [
	                        { value: '', label: __('– unset –', 'bsx-blocks') },
	                        { value: 'sm', label: __('SM', 'bsx-blocks') },
	                        { value: 'md', label: __('MD', 'bsx-blocks') },
	                        { value: 'lg', label: __('LG', 'bsx-blocks') },
	                        { value: 'xl', label: __('XL', 'bsx-blocks') },
	                    ] }
	                    disabled={ ! isFluid }
	                    help={ __('Has (non fluid) Container width from this breakpoint up', 'bsx-blocks') }
	                />
	                <SelectControl 
	                    label={ __('Sized container', 'bsx-blocks') }
	                    value={ sized }
	                    onChange={ onChangeSized }
	                    options={ [
	                        { value: '', label: __('– unset –', 'bsx-blocks') },
	                        { value: 'text-column', label: __('Text Column', 'bsx-blocks') },
	                        { value: 'lg', label: __('LG', 'bsx-blocks') },
	                        { value: 'xl', label: __('XL', 'bsx-blocks') },
	                    ] }
	                    disabled={ isFluid }
	                    help={ __('Has (non fluid) Container width from this breakpoint up', 'bsx-blocks') }
	                />
	            </PanelBody>
				{ respMarginControl(margin, onChangeMargin) }
	        </InspectorControls>
	        <InspectorAdvancedControls>
	            {
	                belowNavbarToggle(belowNavbar, onChangeBelowNavbar)
	            }
	            {
	                paddingBeforeSelect(paddingBefore, onChangePaddingBefore)
	            }
	            {
	                paddingAfterSelect(paddingAfter, onChangePaddingAfter)
	            }
	            {
	                paddingLeftSelect(paddingLeft, onChangePaddingLeft)
	            }
	            {
	                paddingRightSelect(paddingRight, onChangePaddingRight)
	            }
	        </InspectorAdvancedControls>
        </>
	);

	const blockProps = useBlockProps({ className: containerClassName });
	// console.log('blockProps: ' + JSON.stringify(blockProps, null, 2));

    // use if appending inner blocks directly into outer elem
    const innerBlocksProps = useInnerBlocksProps(blockProps, {
    });

	return (
		<>
			<div { ...innerBlocksProps }/>
			{ controls }
		</>
	);
}
