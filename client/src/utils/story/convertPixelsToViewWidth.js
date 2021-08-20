import { numericizeFontSize } from "./numericizeFontSize";

export const convertPixelsToViewWidth = (fontSize, widthViewPortUses) => {
	const numericPixelsFontSize = numericizeFontSize(fontSize);

	const maxViewport = widthViewPortUses
		? widthViewPortUses
		: window.screen.availWidth;

	const fontSizeViewWidth = numericPixelsFontSize / (maxViewport / 100);

	return `${fontSizeViewWidth}vw`;
};
