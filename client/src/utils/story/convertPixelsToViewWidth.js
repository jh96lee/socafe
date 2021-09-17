import { numericizeFontSize } from "../index";

const convertPixelsToViewWidth = (fontSize, widthViewPortUses) => {
	const numericPixelsFontSize = numericizeFontSize(fontSize);

	const maxViewport = widthViewPortUses
		? widthViewPortUses
		: window.screen.availWidth;

	const fontSizeViewWidth = numericPixelsFontSize / (maxViewport / 100);

	return `${fontSizeViewWidth}vw`;
};

export default convertPixelsToViewWidth;
