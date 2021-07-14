import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { useDropdown } from "../../../hooks";

import { PostTopics, TextArea, Skeleton } from "../../shared";

// REVIEW: assign the row and column value here to its children components
const PostPreviewSideStyle = styled.div`
	/* display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding: 0 1.5rem;
	overflow: scroll; */
	/* display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: min-content 1fr 4.5rem;
	gap: 1.5rem;

	& > *:nth-child(3) {
		align-self: end;
	} */

	@media (max-width: 1500px) {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 100;
		display: ${(props) => (props.isDropdownMenuOpen ? "flex" : "none")};
		transform: translate(-50%, -50%);
	}
`;

const PostModalScrollableContentsStyle = styled.div`
	height: 200px;
	max-height: 100%;
	overflow: scroll;
`;

const PostPreviewSide = () => {
	const { isDropdownMenuOpen } = useDropdown("test", "menu-bruh", false);

	const { postCaptionsNodesArray } = useSelector(
		(state) => state.postCaptionsReducer
	);

	return (
		<PostPreviewSideStyle
			id="menu-bruh"
			isDropdownMenuOpen={isDropdownMenuOpen}
		>
			<PostModalScrollableContentsStyle>
				{postCaptionsNodesArray.length === 1 &&
				postCaptionsNodesArray[0].nodeType === "br" ? (
					<Skeleton skeletonWidth="100%" skeletonHeight="20rem" />
				) : (
					<TextArea textAreaNodesArray={postCaptionsNodesArray} />
				)}

				<Skeleton skeletonWidth="100%" skeletonHeight="3rem" />

				<Skeleton skeletonWidth="100%" skeletonHeight="3rem" />

				<Skeleton skeletonWidth="100%" skeletonHeight="3rem" />

				<Skeleton skeletonWidth="100%" skeletonHeight="3rem" />

				<Skeleton skeletonWidth="100%" skeletonHeight="3rem" />
			</PostModalScrollableContentsStyle>

			<Skeleton
				skeletonWidth="100%"
				skeletonHeight="4.5rem"
				skeletonBorderRadius="2.5rem"
			/>
		</PostPreviewSideStyle>
	);
};

export default PostPreviewSide;
