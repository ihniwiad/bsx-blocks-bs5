import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
	const { ordered, values } = attributes;
	const TagName = ordered ? 'ol' : 'ul';

	return (
		<div { ...useBlockProps.save() }>
			<RichText.Content tagName={ TagName } value={ values } className="custom-list" />
		</div>
	);
}
