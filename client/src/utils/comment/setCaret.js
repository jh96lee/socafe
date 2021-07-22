export const setCaret = (node, offset) => {
	const range = document.createRange();
	const selection = document.getSelection();

	range.setStart(node, offset);

	selection.removeAllRanges();
	selection.addRange(range);
};
