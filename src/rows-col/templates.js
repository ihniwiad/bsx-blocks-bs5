// wp import
import { __ } from '@wordpress/i18n';

// functions
import { 
    rowsFlexStatic,
    rowsStaticFlex,
    rowsSpaceBetween,
} from './../_functions/icon.js';


const templates = [
    {
        name: 'default-auto',
        title: __( 'Flex, static', 'bsx-blocks' ),
        icon: rowsFlexStatic,
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {},
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'auto',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'auto-default',
        title: __( 'Static, flex', 'bsx-blocks' ),
        icon: rowsStaticFlex,
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'auto',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {},
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
    {
        name: 'space-between-columns',
        title: __( 'Space between rows', 'bsx-blocks' ),
        icon: rowsSpaceBetween,
        template: [ 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'unset',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
            [ 
                'bsx-blocks/column-row', 
                {
                    columnRowType: 'unset',
                },
                [
                    [
                        'core/paragraph',
                        { 
                            placeholder: 'Edit or insert other content and delete paragraph...',
                        }
                    ]
                ],
            ], 
        ],
        templateLock: false,
    },
];

export default templates;

