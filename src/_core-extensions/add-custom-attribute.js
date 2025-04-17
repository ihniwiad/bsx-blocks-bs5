import { addFilter } from '@wordpress/hooks';

// Register extra props th the Block.
addFilter(
	'blocks.registerBlockType',
	'bsx-blocks/add-attribute-to-core-list',
	(settings, name) => {
		if (name !== 'core/list') return settings;

		return {
			...settings,
			attributes: {
				...settings.attributes,
				customListStyle: {
					type: 'string',
					default: '',
				},
			},
		};
	}
);
