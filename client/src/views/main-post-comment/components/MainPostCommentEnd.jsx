import * as React from "react";
import { useSelector } from "react-redux";

import MainPostCommentMore from "../components/MainPostCommentMore";
import MainPostCommentLike from "./MainPostCommentLike";

import { MainPostCommentEndStyle } from "../styles/MainPostCommentEndStyle";

const MainPostCommentEnd = ({
	commentID,
	commentUserID,
	isCommentLikedProp,
	commentTotalLikesProp,
	parentCommentID,
	setDeletedCommentID,
}) => {
	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	return (
		<MainPostCommentEndStyle>
			{userID === commentUserID && (
				<MainPostCommentMore
					commentID={commentID}
					parentCommentID={parentCommentID}
					setDeletedCommentID={setDeletedCommentID}
				/>
			)}

			<MainPostCommentLike
				commentID={commentID}
				isCommentLikedProp={isCommentLikedProp}
				commentTotalLikesProp={commentTotalLikesProp}
			/>
		</MainPostCommentEndStyle>
	);
};

export default MainPostCommentEnd;
