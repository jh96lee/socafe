import React from "react";
import styled from "styled-components";

import { DropdownMenu, IconElement } from "../../shared";

import { useDropdown } from "../../../hooks";

import { Bold, Underline, Italics } from "../../../assets";

const StoryTextStyle = styled.div`
	position: absolute;
	border-radius: 1rem;
	cursor: move;

	& #contenteditable {
		color: var(--text-1);
		font-size: 1.5rem;
		width: fit-content;
		height: fit-content;
		padding: 0.5rem;
		border-radius: 1rem;
		outline: none;
	}

	& #contenteditable:empty {
		border: 2px solid yellow;
		padding: 0.5rem 0.5rem;
	}

	&:focus #contenteditable {
		background-color: pink !important;
	}
`;

const StoryColorsStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
`;

const StoryColorStyle = styled.div`
	background-color: ${(props) => props.storyTextColor};
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
`;

const StoryText = ({
	number,
	draggableElementRef,
	handleDraggableOnMouseDown,
}) => {
	const textColorsArray = [
		"white",
		"black",
		"red",
		"yellow",
		"blue",
		"green",
		"purple",
		"pink",
	];
	const textStylesArray = [
		{
			id: 1,
			icon: <Bold />,
			styling: "bold",
		},
		{
			id: 2,
			icon: <Italics />,
			styling: "italicize",
		},
		{
			id: 1,
			icon: <Underline />,
			styling: "underline",
		},
	];

	const { isDropdownMenuOpen } = useDropdown(
		`story-text-dropdown-trigger__${number}`,
		"story-text-dropdown-menu",
		false
	);

	const storyTextContentEditable = React.useRef();

	return (
		<StoryTextStyle
			id={`story-text-dropdown-trigger__${number}`}
			className={`story-text__${number}`}
			ref={draggableElementRef}
			onMouseDown={handleDraggableOnMouseDown}
		>
			<div
				id="contenteditable"
				ref={storyTextContentEditable}
				contentEditable={true}
				onMouseDown={handleDraggableOnMouseDown}
			/>

			{isDropdownMenuOpen && (
				<DropdownMenu
					id="story-text-dropdown-menu"
					dropdownMenuStyleObject={{
						menuTop: "calc(100% + 10px)",
						menuLeft: "0",
						menuWidth: "22rem",
					}}
				>
					<StoryColorsStyle>
						{textColorsArray.map((color, idx) => (
							<StoryColorStyle
								storyTextColor={color}
								onClick={() => {
									storyTextContentEditable.current.style.color =
										textColorsArray[idx];
								}}
							/>
						))}
					</StoryColorsStyle>

					<StoryColorsStyle>
						{textStylesArray.map((style, idx) => (
							<IconElement
								onClick={() => {
									const { styling } = textStylesArray[idx];

									if (styling === "bold") {
										storyTextContentEditable.current.style.fontWeight = "600";
									} else if (styling === "italicize") {
										storyTextContentEditable.current.style.fontStyle = "italic";
									} else if (styling === "underline") {
										storyTextContentEditable.current.style.textDecoration =
											"underline";
									}
								}}
								iconElementStyleObject={{
									elementMargin: "1.5rem 0",
									elementPadding: "0",
									elementBackgroundColor: "none",
									iconSize: "1.3rem",
								}}
							>
								{style.icon}
							</IconElement>
						))}
					</StoryColorsStyle>
				</DropdownMenu>
			)}
		</StoryTextStyle>
	);
};

export default StoryText;
