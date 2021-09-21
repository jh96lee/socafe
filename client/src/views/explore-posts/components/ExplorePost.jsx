import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { PostLike, UserMetadata } from "../../shared";

import { convertDate } from "../../../utils";

import {
	ExplorePostStyle,
	ExplorePostFooterStyle,
} from "../styles/ExplorePostStyle";

const ExplorePost = ({ post }) => {
	const {
		created_at,
		post_id,
		post_owner,
		post_images,
		post_is_liked,
		post_total_likes,
	} = post;

	const location = useLocation();
	const history = useHistory();

	const handlePostOnClick = () => {
		history.push({
			pathname: `/post/${post_id}`,
			state: { overlaidComponentLocation: location },
		});
	};

	return (
		<ExplorePostStyle
			isImageTall={post_images[0].image_height > post_images[0].image_width}
		>
			<img
				src={post_images[0].image_url}
				alt="explore post"
				onClick={handlePostOnClick}
			/>

			<ExplorePostFooterStyle>
				<UserMetadata
					userID={post_owner.id}
					avatarSize="4.3rem"
					avatarURL={post_owner.avatar_url}
					username={post_owner.username}
					text={post_owner.full_name}
					subText={convertDate(created_at)}
					userMetadataStyleObject={{
						textFontSize: "1.45rem",
						subTextFontSize: "1.3rem",
					}}
				/>

				<PostLike
					postIDProp={post_id}
					isLikedProp={post_is_liked}
					totalLikesProp={post_total_likes}
					postLikeIconSize="2.1rem"
					postLikeFontSize="1.43rem"
					postLikeGap="1rem"
				/>
			</ExplorePostFooterStyle>
		</ExplorePostStyle>
	);
};

export default ExplorePost;
