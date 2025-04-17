// import { __ } from '@wordpress/i18n';
// import { useBlockProps, RichText } from '@wordpress/block-editor';

// export default function Edit({ attributes, setAttributes }) {
// 	const { ordered, values } = attributes;
// 	const TagName = ordered ? 'ol' : 'ul';

// 	return (
// 		<div { ...useBlockProps() }>
// 			<RichText
// 				tagName={ TagName }
// 				multiline="li"
// 				placeholder={ __( 'List item', 'bsx-blocks' ) }
// 				value={ values }
// 				onChange={ ( val ) => setAttributes({ values: val }) }
// 				className="custom-list"
// 			/>
// 		</div>
// 	);
// }


import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    console.log(`Hello from BSX Custom List Edit()`);
    const blockProps = useBlockProps();
    return <ul {...blockProps}><li>{__('Example item', 'bsx-blocks')}</li></ul>;
}

