import * as React from "react";

import PostTotalLikes from "./PostTotalLikes";
import PostTotalComments from "./PostTotalComments";
import PostBookmark from "./PostBookmark";
import { User } from "../../index";

import {
	PostNumericMetadataStyle,
	PostTotalsDataStyle,
} from "../styles/PostNumericMetadataStyle";

const PostNumericMetadata = ({
	postUser,
	postTotalLikes,
	postTotalComments,
	conditionalPostUserRenderingVariable,
	conditionalPostTotalLikesRenderingVariable,
	conditionalPostTotalCommentsRenderingVariable,
}) => {
	return (
		<PostNumericMetadataStyle>
			<User
				userID={postUser.id || postUser.user_id}
				avatarURL={postUser.avatar_url}
				username={postUser.username}
				fullName={postUser.full_name}
				avatarSize="3.7rem"
				usernameFontSize="1.37rem"
				fullNameFontSize="1.27rem"
				onClick={null}
				conditionalRenderingVariable={conditionalPostUserRenderingVariable}
			/>

			<PostTotalsDataStyle>
				<PostTotalLikes
					postTotalLikes={postTotalLikes}
					conditionalPostTotalLikesRenderingVariable={
						conditionalPostTotalLikesRenderingVariable
					}
				/>

				<PostTotalComments
					postTotalComments={postTotalComments}
					conditionalPostTotalCommentsRenderingVariable={
						conditionalPostTotalCommentsRenderingVariable
					}
				/>

				<PostBookmark />
			</PostTotalsDataStyle>
		</PostNumericMetadataStyle>
	);
};

export default PostNumericMetadata;
