import * as React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import axios from "axios";

import { MainPostParentComment } from "../../main-post-parent-comment";

const MainPostCommentsMyParentCommentsStyle = styled.div`
	height: 100%;
	overflow: scroll;
`;

const MainPostCommentsMyParentComments = () => {
	const [myParentComments, setMyParentComments] = React.useState([]);
	const [isMyCommentsLoaded, setIsMyCommentsLoaded] = React.useState(false);

	const { user } = useSelector((state) => state.userReducer);

	const { submittedMainPostComment } = useSelector(
		(state) => state.mainPostCommentInputReducer
	);

	const fetchMyComments = async () => {
		setIsMyCommentsLoaded(false);

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/comment/my/${user.id}`,
		});

		console.log(data);

		setMyParentComments(data);

		setIsMyCommentsLoaded(true);
	};

	React.useEffect(() => {
		fetchMyComments();
	}, []);

	React.useEffect(() => {
		if (submittedMainPostComment) {
			if (submittedMainPostComment.comment_owner.id === parseInt(user.id)) {
				setMyParentComments((prevState) => [
					...prevState,
					submittedMainPostComment,
				]);
			}
		}
	}, [submittedMainPostComment]);

	return (
		<MainPostCommentsMyParentCommentsStyle>
			{setIsMyCommentsLoaded &&
				myParentComments.map((comment, idx) => {
					return (
						<MainPostParentComment
							key={`main-post-comments__my-parent-comment__${idx}`}
							parentComment={comment}
						/>
					);
				})}
		</MainPostCommentsMyParentCommentsStyle>
	);
};

export default MainPostCommentsMyParentComments;
