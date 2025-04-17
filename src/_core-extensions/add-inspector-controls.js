import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';

// Add UI controls to backend, set extra props.
const withCustomListControls = createHigherOrderComponent((BlockEdit) => (props) => {
	if (props.name !== 'core/list') return <BlockEdit {...props} />;

	const { attributes, setAttributes } = props;
	const { customListStyle = '' } = attributes;

	return (
		<Fragment>
			<BlockEdit {...props} />
			<InspectorControls>
				<PanelBody title="List Style">
					<SelectControl
						label="Custom Style"
						value={customListStyle}
						options={[
							{ label: 'Default', value: '' },
							{ label: 'Check List', value: 'check-list' },
							{ label: 'Fancy Border', value: 'fancy-border' },
						]}
						onChange={(value) => setAttributes({ customListStyle: value })}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}, 'withCustomListControls');

addFilter(
	'editor.BlockEdit',
	'bax-blocks/add-custom-list-inspector',
	withCustomListControls
);
