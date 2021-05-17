import * as React from "react";
import { useSelector } from "react-redux";

import { PostUploaderStyle } from "../styles/PostUploaderStyle";

const PostUploader = () => {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<PostUploaderStyle>
			<img src={user.avatar_url} />

			<div>
				<p>@{user.username}</p>

				<span>{user.full_name}</span>
			</div>
		</PostUploaderStyle>
	);
};

export default PostUploader;
