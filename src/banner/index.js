/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import './style.scss';

/**
 * Internal dependencies
 */
import { banner as icon } from './../_functions/icon.js';
import Edit from './edit.js';
import save from './save.js';
import metadata from './block.json';

// import deprecated from './deprecated';

/**
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	icon,
    getEditWrapperProps( attributes ) {
        const {
            multilayer,
        } = attributes;

        return {
            'data-multilayer': multilayer,
        };
    },
	edit: Edit,
	save,
} );
