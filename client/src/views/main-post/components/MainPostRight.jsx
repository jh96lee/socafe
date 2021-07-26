import * as React from "react";
import { useSelector } from "react-redux";

import { UserMetadata, PostTopics, TextArea } from "../../shared";
import { MainPostComments } from "../../main-post-comments";
import { MainPostCommentsInput } from "../../main-post-comments-input";
import MainPostActions from "./MainPostActions";

import {
	MainPostRightStyle,
	MainPostRightHeaderStyle,
	MainPostRightBodyStyle,
} from "../styles/MainPostRightStyle";

const MainPostRight = () => {
	const { user } = useSelector((state) => state.userReducer);
	const { mainPost } = useSelector((state) => state.mainPostReducer);

	const { post_captions, post_topics, total_post_likes, total_post_comments } =
		mainPost;

	return (
		<MainPostRightStyle>
			<MainPostRightHeaderStyle>
				{/* FIX */}
				<UserMetadata
					userID={user.id}
					avatarURL={user.avatar_url}
					username={user.username}
					fullName={user.full_name}
					avatarSize="4.5rem"
					usernameFontSize="1.4rem"
					fullNameFontSize="1.3rem"
					avatarOnClick={null}
				/>

				<MainPostActions
					postTotalLikes={total_post_likes}
					postTotalComments={total_post_comments}
					postIsLiked={false}
				/>
			</MainPostRightHeaderStyle>

			<MainPostRightBodyStyle>
				<TextArea textAreaNodesArray={post_captions} />

				<PostTopics postTopicsArray={post_topics} />

				<MainPostComments />
			</MainPostRightBodyStyle>

			<MainPostCommentsInput />
		</MainPostRightStyle>
	);
};

export default MainPostRight;
