import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import {
	setStoryTextContent,
	setIsBold,
	setIsItalic,
	setIsUnderline,
	setSelectedTextColorIndex,
	setSelectedTextSizeIndex,
} from "../../../redux/add-story/story-text/storyTextAction";

import { useDropdown } from "../../../hooks";

import { Bold, Underline, Italics } from "../../../assets";

const StoryTextStyle = styled.div`
	position: absolute;
	z-index: 10;
	max-width: 90%;
	border-radius: 1rem;

	& #story-text__child {
		color: var(--text-1);
		letter-spacing: -0.4px;
		width: fit-content;
		height: fit-content;
		padding: 1rem;
		border-radius: 1rem;
		box-shadow: none;
		outline: none;
	}

	& #story-text__child:empty {
		box-shadow: 0 0 0 1.6px var(--separator-2);
		padding: 1rem;
	}

	& #story-text__child:hover {
		cursor: move;
	}

	[contenteditable="true"]:empty:before {
		content: attr(placeholder);
		pointer-events: none;
		display: block;
		color: grey !important;
		font-weight: 600 !important;
		font-style: italic !important;
		text-decoration: none !important;
	}
`;

const StoryTextEditingStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h6 {
		color: grey;
	}
`;

const StoryColorsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
`;

const StoryColorStyle = styled.div`
	background-color: ${(props) => props.storyTextColor};
	width: 2.7rem;
	height: 2.7rem;
	border: 1px solid var(--separator-1);
	border-radius: 50%;
	cursor: pointer;
`;

const StoryTextDropdownMenu = styled.div`
	position: absolute;
	top: calc(100% + 10px);
	left: 0;
	width: 24rem;
	background-color: var(--bg-2);
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: 0 0 0 1.6px var(--separator-1);

	& > *:not(:last-child) {
		border-bottom: 1px solid var(--separator-1);
	}

	& > *:first-child {
		padding-bottom: 1.2rem;
	}

	& > *:nth-child(2) {
		padding: 1.2rem 0;
	}

	& > *:last-child {
		padding-top: 1.2rem;
	}
`;

const StoryTextStylingStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	& > svg {
		fill: grey;
		width: 1.7rem;
		height: 1.7rem;
	}

	& .active {
		fill: var(--icon-default-color);
	}

	& > svg:hover {
		cursor: pointer;
	}
`;

const StoryTextFontSizesStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;

	& > p {
		font-size: 1.45rem;
		font-weight: 500;
		color: grey;
	}

	& .active {
		color: var(--text-1);
	}

	& > p:hover {
		cursor: pointer;
	}
`;

const StoryText = ({ draggableElementRef, handleDraggableOnMouseDown }) => {
	const dispatch = useDispatch();

	const {
		textSizesArray,
		textColorsArray,
		isBold,
		isItalic,
		isUnderline,
		selectedTextSizeIndex,
	} = useSelector((state) => state.storyTextReducer);

	const { isDropdownMenuOpen } = useDropdown(
		"story-text",
		"story-text-dropdown-menu",
		false
	);

	const handleContentEditableOnKeydown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
		}

		const totalCharacters = e.target.textContent.length;

		if (totalCharacters > 100) {
			if (e.key === "Backspace") {
				return;
			} else {
				e.preventDefault();
			}
		}
	};

	const handleContentEditableOnInput = (e) => {
		const totalCharacters = e.target.textContent.length;

		if (totalCharacters < 100) {
			dispatch(setStoryTextContent(e.target.textContent));
		}
	};

	const storyTextContentEditable = React.useRef();

	const fontSize = (fontSizeString) => {
		const integersArray = [];

		for (let i = 0; i < fontSizeString.length; i++) {
			const char = fontSizeString[i];

			const parsedChar = parseInt(char);

			if (Number.isInteger(parsedChar)) {
				integersArray.push(parsedChar);
			}
		}

		const joinedIntegers = integersArray.join("");

		return parseInt(joinedIntegers);
	};

	React.useEffect(() => {
		if (isBold) {
			storyTextContentEditable.current.style.fontWeight = 600;
		} else {
			storyTextContentEditable.current.style.fontWeight = 400;
		}

		if (isItalic) {
			storyTextContentEditable.current.style.fontStyle = "italic";
		} else {
			storyTextContentEditable.current.style.fontStyle = "normal";
		}

		if (isUnderline) {
			storyTextContentEditable.current.style.textDecoration = "underline";
		} else {
			storyTextContentEditable.current.style.textDecoration = "none";
		}
	}, [isBold, isItalic, isUnderline]);

	React.useEffect(() => {
		draggableElementRef.current.style.top = "50%";

		draggableElementRef.current.style.left = "50%";

		draggableElementRef.current.style.transform = "translate(-50%, -50%)";

		draggableElementRef.current.style.fontSize =
			textSizesArray[selectedTextSizeIndex];
	}, []);

	React.useEffect(() => {}, []);

	return (
		<StoryTextStyle
			id="story-text"
			ref={draggableElementRef}
			onMouseDown={handleDraggableOnMouseDown}
		>
			<div
				id="story-text__child"
				ref={storyTextContentEditable}
				contentEditable={true}
				placeholder="Start typing here"
				onKeyDown={handleContentEditableOnKeydown}
				onInput={handleContentEditableOnInput}
				onMouseDown={handleDraggableOnMouseDown}
			/>

			{isDropdownMenuOpen && (
				<StoryTextDropdownMenu id="story-text-dropdown-menu">
					<StoryTextEditingStyle>
						<h6>Text Color</h6>

						<StoryColorsStyle>
							{textColorsArray.map((color, idx) => (
								<StoryColorStyle
									storyTextColor={color}
									onClick={() => {
										storyTextContentEditable.current.style.color =
											textColorsArray[idx];

										dispatch(setSelectedTextColorIndex(idx));
									}}
								/>
							))}
						</StoryColorsStyle>
					</StoryTextEditingStyle>

					<StoryTextEditingStyle>
						<h6>Styles</h6>

						<StoryTextStylingStyle>
							<Bold
								className={isBold && "active"}
								onClick={() => {
									dispatch(setIsBold());
								}}
							/>

							<Italics
								className={isItalic && "active"}
								onClick={() => {
									dispatch(setIsItalic());
								}}
							/>

							<Underline
								className={isUnderline && "active"}
								onClick={() => {
									dispatch(setIsUnderline());
								}}
							/>
						</StoryTextStylingStyle>
					</StoryTextEditingStyle>

					<StoryTextEditingStyle>
						<h6>Size</h6>

						<StoryTextFontSizesStyle>
							{textSizesArray.map((size, idx) => {
								return (
									<p
										className={selectedTextSizeIndex === idx && "active"}
										onClick={() => {
											storyTextContentEditable.current.style.fontSize = size;

											dispatch(setSelectedTextSizeIndex(idx));
										}}
									>
										{fontSize(size)}
									</p>
								);
							})}
						</StoryTextFontSizesStyle>
					</StoryTextEditingStyle>
				</StoryTextDropdownMenu>
			)}
		</StoryTextStyle>
	);
};

export default StoryText;
