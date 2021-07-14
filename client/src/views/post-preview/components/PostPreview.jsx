import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { PostTopics, TextArea, Skeleton, UserMetadata } from "../../shared";
import PostPreviewMain from "./PostPreviewMain";
import PostPreviewActivity from "./PostPreviewActivity";
import PostPreviewSide from "./PostPreviewSide";

import { useDropdown } from "../../../hooks";

import {
	Comment,
	HeartEmpty,
	BookmarkEmpty,
	UserFilled,
} from "../../../assets";

const PostModalStyle = styled.div`
	position: relative;
	display: grid;
	/* REVIEW */
	grid-template-columns: 55rem 38rem;
	grid-auto-rows: 58rem;
	gap: 1.5rem 2rem;
	margin: auto;
	padding: 2.2rem;
	background: var(--bg-1);
	border: 1px solid var(--separator-1);
	box-shadow: 0 2px 12px
		${(props) => (props.theme.isDarkMode ? "#000" : "#00000033")};
	border-radius: 2rem;

	@media (max-width: 1500px) {
		grid-template-columns: 1fr 33rem;
		grid-auto-rows: 55rem;
		width: 94%;
	}

	@media (max-width: 1300px) {
		grid-template-columns: 1fr;
		grid-auto-rows: 55rem;
		width: 85%;
	}
`;

const PostModalRightStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: 1fr 4.5rem;
	gap: 1.5rem;

	& > *:nth-child(1) {
		grid-column: 1 / 3;
		grid-row: 1 / 2;
	}

	& > *:nth-child(2) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
		justify-self: start;
	}

	& > *:nth-child(3) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		justify-self: end;
	}

	@media (max-width: 1500px) {
		grid-auto-rows: min-content 1fr min-content;
		gap: 2rem;

		& > *:nth-child(1) {
			grid-column: 1 / 3;
			grid-row: 2 / 3;
		}

		& > *:nth-child(2) {
			grid-column: 1 / 2;
			grid-row: 1 / 2;
			justify-self: start;
		}

		& > *:nth-child(3) {
			grid-column: 1 / 2;
			grid-row: 3 / 4;
			justify-self: start;
		}
	}
`;

const PostModalLeftStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content 1fr 4.5rem;
	gap: 1.5rem;

	& > * {
		padding: 0 1rem;
	}

	@media (max-width: 1300px) {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 100;
		display: ${(props) => (props.isDropdownMenuOpen ? "flex" : "none")};
		flex-direction: column;
		background-color: #121212;
		transform: translate(-50%, -50%);
	}
`;

const PostModalOverflowContentsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	max-height: 100%;
	overflow: scroll;
`;

const PostModalOverflowContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.8rem;
`;

const PostPreview = () => {
	const { postTopicsArray } = useSelector((state) => state.postTopicsReducer);

	const { postCaptionsNodesArray } = useSelector(
		(state) => state.postCaptionsReducer
	);

	const { user } = useSelector((state) => state.userReducer);

	const { isDropdownMenuOpen } = useDropdown(
		"test-trigger",
		"test-dropdown",
		false
	);

	return (
		<PostModalStyle>
			<PostModalRightStyle>
				{/* REVIEW: 1 */}
				<PostPreviewMain />

				{/* REVIEW: 2 */}
				{/* FIX */}
				<UserMetadata
					userID={user.id}
					avatarURL={user.avatar_url}
					username={user.username}
					fullName={user.full_name}
					avatarSize="4.2rem"
					usernameFontSize="1.4rem"
					fullNameFontSize="1.3rem"
					onClick={null}
					conditionalRenderingVariable={user}
				/>

				{/* REVIEW: 3 */}
				<PostPreviewActivity />
			</PostModalRightStyle>

			<PostModalLeftStyle
				id="test-dropdown"
				isDropdownMenuOpen={isDropdownMenuOpen}
			>
				<PostTopics postTopicsArray={postTopicsArray} />

				<PostModalOverflowContentsStyle>
					<PostModalOverflowContentStyle>
						{postCaptionsNodesArray.length === 1 &&
						postCaptionsNodesArray[0].nodeType === "br" ? (
							<Skeleton skeletonWidth="100%" skeletonHeight="20rem" />
						) : (
							<TextArea textAreaNodesArray={postCaptionsNodesArray} />
						)}
					</PostModalOverflowContentStyle>

					<PostModalOverflowContentStyle>
						<Skeleton skeletonWidth="100%" skeletonHeight="3.2rem" />

						<Skeleton skeletonWidth="100%" skeletonHeight="3.2rem" />

						<Skeleton skeletonWidth="100%" skeletonHeight="3.2rem" />

						<Skeleton skeletonWidth="100%" skeletonHeight="3.2rem" />

						<Skeleton skeletonWidth="100%" skeletonHeight="3.2rem" />
					</PostModalOverflowContentStyle>
				</PostModalOverflowContentsStyle>

				<Skeleton
					skeletonWidth="100%"
					skeletonHeight="4.2rem"
					skeletonBorderRadius="2em"
				/>
			</PostModalLeftStyle>
		</PostModalStyle>
	);
};

export default PostPreview;
