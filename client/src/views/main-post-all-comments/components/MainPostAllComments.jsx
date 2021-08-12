import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../shared";
import MainPostMyParentComments from "./MainPostMyParentComments";
import MainPostOtherParentComments from "./MainPostOtherParentComments";

import { fetchOtherParentComments } from "../../../redux/main-post-all-comments/main-post-other-parent-comments/mainPostOtherParentCommentsAction";
import { fetchMyParentComments } from "../../../redux/main-post-all-comments/main-post-my-parent-comments/mainPostMyParentCommentsAction";

import { MainPostAllCommentsStyle } from "../styles/MainPostAllCommentsStyle";

const MainPostAllComments = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const { isMyParentCommentsLoaded } = useSelector(
		(state) => state.mainPostMyParentCommentsReducer
	);

	const { isOtherParentCommentsLoaded } = useSelector(
		(state) => state.mainPostOtherParentCommentsReducer
	);

	const userID = user ? user.id : 0;

	const postID = parseInt(useParams().postID);

	React.useEffect(() => {
		dispatch(fetchMyParentComments(userID, postID));

		dispatch(fetchOtherParentComments(userID, postID));
	}, [dispatch, postID, userID]);

	return (
		<MainPostAllCommentsStyle>
			{!isMyParentCommentsLoaded || !isOtherParentCommentsLoaded ? (
				<Loader isLoaderAbsolute={true} />
			) : (
				<React.Fragment>
					<MainPostMyParentComments />

					<MainPostOtherParentComments />
				</React.Fragment>
			)}
		</MainPostAllCommentsStyle>
	);
};

export default MainPostAllComments;
