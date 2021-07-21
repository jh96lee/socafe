import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { Loader } from "../../shared";
import MainPostMetadata from "./MainPostMetadata";
import MainPostComments from "./MainPostComments";
import MainPostSearchUsersPopup from "./MainPostSearchUsersPopup";

import { useDropdown, usePostCommentsDisplay } from "../../../hooks";

import { fetchMainPost } from "../../../redux/main-post/mainPostAction";

const MainPostStyle = styled.div`
	position: fixed;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	z-index: 50;
	display: flex;
	background: var(--bg-1);
	width: 100%;
	height: 95vh;
	overflow: scroll;
	margin: auto;
	border-radius: 2rem;
	border: 1px solid var(--input-default-separator-color);
	box-shadow: 0 2px 12px
		${(props) => (props.theme.isDarkMode ? "#000" : "#00000033")};

	& > *:nth-child(1) {
		/* width: 70%; */
		width: 100%;
	}

	& > *:nth-child(2) {
		width: 30%;
	}
`;

const MainPost = () => {
	const {
		isPostCommentsOpen,
		handleOpenAndClosePostCommentsOnClick,
		handleClosePostCommentsOnClick,
	} = usePostCommentsDisplay();

	const { isDropdownMenuOpen, setIsDropdownMenuOpen } = useDropdown(
		"",
		"",
		false,
		false
	);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const { postID } = useParams();

	const { isMainPostLoaded, mainPost } = useSelector(
		(state) => state.mainPostReducer
	);

	React.useEffect(() => {
		dispatch(fetchMainPost(postID, userID));
	}, [postID]);

	return (
		<MainPostStyle>
			{isMainPostLoaded ? (
				<React.Fragment>
					{/* <MainPostMetadata
						mainPost={mainPost}
						isPostCommentsOpen={isPostCommentsOpen}
						handleOpenAndClosePostCommentsOnClick={
							handleOpenAndClosePostCommentsOnClick
						}
					/> */}

					<MainPostComments
						isPostCommentsOpen={isPostCommentsOpen}
						setIsPostSearchUsersPopupOpen={setIsDropdownMenuOpen}
						handleClosePostCommentsOnClick={handleClosePostCommentsOnClick}
					/>

					{/* <MainPostSearchUsersPopup /> */}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</MainPostStyle>
	);
};

export default MainPost;
