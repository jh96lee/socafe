import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../shared";
import MainPostCommentsMyParentComments from "./MainPostCommentsMyParentComments";
import MainPostCommentsOtherUsersComments from "./MainPostCommentsOtherUsersComments";

import { fetchMyParentComments } from "../../../redux/main-post-comments/main-post-my-parent-comments/mainPostMyParentCommentsAction";
import { fetchOtherUsersComments } from "../../../redux/main-post-comments/main-post-other-users-comments/mainPostOtherUsersCommentsAction";

import { MainPostCommentsStyle } from "../styles/MainPostCommentsStyle";

const MainPostComments = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const { myParentComments, isMyParentCommentsLoaded } = useSelector(
		(state) => state.mainPostMyParentCommentsReducer
	);

	const { otherUsersComments, isOtherUsersCommentsLoaded } = useSelector(
		(state) => state.mainPostOtherUsersCommentsReducer
	);

	const userID = user ? user.id : 0;

	const postID = parseInt(useParams().postID);

	React.useEffect(() => {
		dispatch(fetchMyParentComments(userID, postID));

		dispatch(fetchOtherUsersComments(userID, postID));
	}, []);

	return (
		<MainPostCommentsStyle>
			{isMyParentCommentsLoaded && isOtherUsersCommentsLoaded ? (
				<React.Fragment>
					<MainPostCommentsMyParentComments
						myParentComments={myParentComments}
					/>

					<MainPostCommentsOtherUsersComments
						otherUsersComments={otherUsersComments}
					/>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</MainPostCommentsStyle>
	);
};

export default MainPostComments;
