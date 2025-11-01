// import { registerBlockType } from '@wordpress/blocks';
// import { getBlockType } from '@wordpress/blocks';
// // import edit from './edit';
// // import save from './save';
// import './editor.scss';

// import { checkList as icon } from './../_functions/icon.js';
// import Edit from './edit.js';
// import Save from './save.js';
// import metadata from './block.json';

// // Inherit original core/list block
// const originalBlock = getBlockType('core/list');

// console.log(`Hello from BSX Custom List`, originalBlock);

// if (originalBlock) {
// 	registerBlockType(metadata.name, {
// 		...originalBlock,
//         icon,
//         edit: Edit,
// 		save: Save,
//         // ...metadata,
// 	});
// }

import { registerBlockType, getBlockType } from '@wordpress/blocks';
// import domReady from '@wordpress/dom-ready';
import { addFilter } from '@wordpress/hooks';
import metadata from './block.json';
import { checkList as icon } from './../_functions/icon.js';

// domReady(() => {
// 	const original = getBlockType('core/list');
//     console.log(`Hello from BSX Custom List`, original);

// 	if (!original) {
// 		console.warn('core/list is not available yet.');
// 		return;
// 	}

// 	registerBlockType(metadata.name, {
// 		// Original config (toolbar, transforms, etc.).
// 		...original,

// 		// Override specific values.
// 		...metadata,
// 		icon,

// 		// Inject custom class.
// 		getEditWrapperProps(attributes) {
// 			return {
// 				...original.getEditWrapperProps?.(attributes),
// 				className: 'my-custom-list-block',
// 			};
// 		},
// 	});
// });



addFilter(
	'blocks.registerBlockType',
	'bsx-blocks/custom-list',
	(settings, name) => {
		if (name !== 'core/list') {
			return settings;
		}

		// Clone the original core/list settings
		const newBlockSettings = {
			...settings,
			...metadata,
			name: metadata.name,
			icon,
			getEditWrapperProps(attributes) {
				return {
					...settings.getEditWrapperProps?.(attributes),
					className: 'check-list',
				};
			},
		};

		// Register as new block
		registerBlockType(metadata.name, newBlockSettings);

        // console.log(`Hello from BSX Custom List`);

		// Return unmodified original
		return settings;
	}
);
