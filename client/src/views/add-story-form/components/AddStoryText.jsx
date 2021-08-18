import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { IconElement } from "../../shared";

import { setIsStoryTextAdded } from "../../../redux/add-story/story-text/storyTextAction";

import { TextFilled, CheckmarkCircleFilled } from "../../../assets";

const AddStoryContentStyle = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.2rem;
	padding: 1rem;
	border-radius: 1rem;

	& > svg {
		fill: var(--icon-success-color);
		width: 2.2rem;
		height: 2.2rem;
		cursor: pointer;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}
`;

const AddStoryContentCTAStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;

	& > h5 {
		color: var(--text-1);
	}
`;

const AddStoryText = () => {
	const dispatch = useDispatch();

	const { isStoryTextAdded } = useSelector((state) => state.storyTextReducer);

	const handleAddStoryTextButtonOnClick = () => {
		dispatch(setIsStoryTextAdded());
	};

	return (
		<AddStoryContentStyle onClick={handleAddStoryTextButtonOnClick}>
			<AddStoryContentCTAStyle>
				<IconElement iconElementStyleObject={{ elementWidth: "fit-content" }}>
					<TextFilled />
				</IconElement>

				<h5>Add Text</h5>
			</AddStoryContentCTAStyle>

			{isStoryTextAdded && <CheckmarkCircleFilled />}
		</AddStoryContentStyle>
	);
};

export default AddStoryText;
