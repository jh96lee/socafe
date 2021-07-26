import React from "react";
import { useSelector } from "react-redux";

import { PostImages, PostTaggedUsers } from "../../shared";

import { MainPostLeftStyle } from "../styles/MainPostLeftStyle";

const MainPostLeft = () => {
	const { mainPost } = useSelector((state) => state.mainPostReducer);

	const { post_images, post_tagged_users } = mainPost;

	return (
		<MainPostLeftStyle>
			<PostImages postImagesArray={post_images} />

			<PostTaggedUsers postTaggedUsersArray={post_tagged_users} />
		</MainPostLeftStyle>
	);
};

export default MainPostLeft;
