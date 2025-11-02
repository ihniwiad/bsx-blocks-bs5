/**
 * Creates an onChange handler for a specific attribute.
 * 
 * @param {*} setAttributes - The function to update block attributes.
 * @param {*} key - The attribute key to update.
 * @returns A function that updates the specified attribute with the new value.
 */
export const makeOnChange = (setAttributes, key) => value => setAttributes({ [key]: value });
