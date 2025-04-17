import { addFilter } from '@wordpress/hooks';

// Transform extra props to class names in frontend.
addFilter(
	'blocks.getSaveContent.extraProps',
	'bax-blocks/add-custom-list-class',
	(extraProps, blockType, attributes) => {
		if (blockType.name !== 'core/list') return extraProps;

		const { customListStyle } = attributes;

		if (customListStyle) {
			extraProps.className = [
				extraProps.className || '',
				customListStyle,
			].join(' ').trim();
		}

		return extraProps;
	}
);
