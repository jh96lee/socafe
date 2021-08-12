import * as React from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { Loader } from "../../shared";
import { MainPostComment } from "../../main-post-comment";

import { MainPostCommentRepliesStyle } from "../styles/MainPostCommentRepliesStyle";

const MainPostCommentReplies = ({ commentID }) => {
	const [replies, setReplies] = React.useState([]);
	const [isRepliesLoaded, setIsRepliesLoaded] = React.useState(false);

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const fetchCommentReplies = async () => {
		setIsRepliesLoaded(false);

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/comment/reply/${userID}/${commentID}`,
		});

		const { error } = data;

		if (!error) {
			setReplies(data);
		}

		setIsRepliesLoaded(true);
	};

	React.useEffect(() => {
		fetchCommentReplies();
	}, []);

	return (
		<MainPostCommentRepliesStyle>
			{isRepliesLoaded ? (
				<React.Fragment>
					{replies.map((reply) => {
						return (
							<MainPostComment
								key={`main-post-comment__reply-${reply.id}`}
								comment={reply}
							/>
						);
					})}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</MainPostCommentRepliesStyle>
	);
};

export default MainPostCommentReplies;
