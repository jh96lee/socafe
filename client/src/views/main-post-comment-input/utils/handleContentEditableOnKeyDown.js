import { addSpaceToString, setCaret } from "../../../utils";

export const handleContentEditableOnKeyDown = async (e) => {
	const mainPostCommentsContentEditable = document.querySelector(
		"#main-post-comment-contenteditable"
	);

	const contentEditableChildNodesArray = Array.from(e.target.childNodes);

	const disallowedKeysArray = [
		"Tab",
		"CapsLock",
		"Shift",
		"Backspace",
		"Meta",
		"Alt",
		"Control",
		"ArrowLeft",
		"ArrowDown",
		"ArrowUp",
		"ArrowRight",
	];

	if (e.key === "Enter") {
		e.preventDefault();
	}

	if (e.key === "@") {
		e.preventDefault();

		const paragraphTag = document.createElement("p");

		paragraphTag.setAttribute("data-comment-mention-type", "TAG");

		paragraphTag.textContent = "@";

		mainPostCommentsContentEditable.append(paragraphTag);

		const range = document.createRange();
		const selection = document.getSelection();

		range.setStart(paragraphTag, 1);

		selection.removeAllRanges();
		selection.addRange(range);
	} else if (
		contentEditableChildNodesArray.length === 0 &&
		!disallowedKeysArray.includes(e.key)
	) {
		e.preventDefault();

		const spanTag = document.createElement("span");

		spanTag.textContent = e.key;

		mainPostCommentsContentEditable.append(spanTag);

		setCaret(spanTag, 1);
	}

	if (e.key === " ") {
		const selection = document.getSelection();

		if (selection.anchorNode.parentNode.nodeName === "P") {
			// REVIEW: means space has been clicked at the end of the paragraph tag and we want to break out of the p tag
			if (selection.anchorNode.length === selection.anchorOffset) {
				e.preventDefault();

				const spanTag = document.createElement("span");

				spanTag.textContent = " ";

				mainPostCommentsContentEditable.append(spanTag);

				setCaret(spanTag, 1);
			} else {
				// TODO: looked up user and SELECTED users will remain a p tag
				// REVIEW: if the caret is in between p tags, that means the user messed up the p tag, therefore we want to convert it back to being a span tag
				e.preventDefault();

				const spanTag = document.createElement("span");

				const range = document.createRange();
				const selection = getSelection();

				const anchorNode = selection.anchorNode;
				const anchorOffset = selection.anchorOffset;

				const updatedTextContent = addSpaceToString(
					anchorNode.textContent,
					anchorOffset
				);

				spanTag.textContent = updatedTextContent;

				// REVIEW: replace the broken p tag with the new span tag
				// TODO: anchorNode is the text and parentNode is the p tag
				mainPostCommentsContentEditable.replaceChild(
					spanTag,
					anchorNode.parentNode
				);

				range.setStart(spanTag, 1);

				selection.removeAllRanges();
				selection.addRange(range);
			}
		}
	}
};
