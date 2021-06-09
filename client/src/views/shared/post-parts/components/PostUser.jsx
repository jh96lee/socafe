import * as React from "react";

import { Skeleton } from "../../index";

import { PostUserStyle, PostUserMetadataStyle } from "../styles/PostUserStyle";

const PostUser = ({ postUser, conditionalRenderVariable }) => {
	return (
		<PostUserStyle>
			{conditionalRenderVariable ? (
				<img src={postUser.avatar_url} />
			) : (
				<Skeleton
					skeletonWidth="4rem"
					skeletonHeight="4rem"
					skeletonBorderRadius="50%"
				/>
			)}

			<PostUserMetadataStyle>
				{conditionalRenderVariable ? (
					<p>@{postUser.username}</p>
				) : (
					<Skeleton
						skeletonWidth="6.5rem"
						skeletonHeight="1.7rem"
						skeletonBorderRadius="1rem"
					/>
				)}

				{conditionalRenderVariable ? (
					<span>{postUser.full_name}</span>
				) : (
					<Skeleton
						skeletonWidth="8rem"
						skeletonHeight="1.7rem"
						skeletonBorderRadius="1rem"
					/>
				)}
			</PostUserMetadataStyle>
		</PostUserStyle>
	);
};

export default PostUser;
