import { registerBlockVariation } from '@wordpress/blocks';
// import domReady from '@wordpress/dom-ready';
// import { getBlockType } from '@wordpress/blocks';
import { addFilter } from '@wordpress/hooks';
import { checkList as icon } from '../_functions/icon.js';

console.log('[variation] core/list');

// domReady(() => {
//     console.log('[variation] domReady');

// 	const block = getBlockType('core/paragraph');
// 	console.log('[check] core/paragraph block:', block);

// 	const listBlock = getBlockType('core/list');
// 	console.log('[check] core/list block:', listBlock);


// 	if (!getBlockType('core/list')) {
// 		console.warn('[variation] core/list not yet available');
// 		return;
// 	}

//     registerBlockVariation('core/list', {
//         name: 'check-list',
//         title: 'Check List',
//         description: 'A custom list with check marks',
//         icon,
//         attributes: {
//             className: 'check-list',
//         },
//     });

//     console.log('[variation] Custom List registered');
// });


// Add block variations when the block type is registered
addFilter(
	'blocks.registerBlockType',
	'my-plugin/custom-list-variation',
	(settings, name) => {
		if (name !== 'core/list') {
			return settings;
		}

		// Register your variation here
		wp.blocks.registerBlockVariation('core/list', {
            name: 'bsx-check-list',
            title: 'BSX Check List',
            description: 'A custom list with check marks',
            icon,
            attributes: {
                className: 'is-style-fancy-list',
            },
			isDefault: false,
            scope: [ 'block' ],
		});

		// console.log('[variation] custom-list registered for core/list');

		return settings;
	}
);

