import * as React from "react";

import { Skeleton } from "../../shared";

import { Heart, Comment } from "../../../assets";

import styled from "styled-components";

const PostNumbersMetaDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& > div {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	& > div > svg {
		width: 2.7rem;
		height: 2.7rem;
		fill: var(--primary-icon-color);
	}

	& > div > #post-preview-heart {
		fill: #f73a3a;
	}
`;

const PostNumbersMetaData = () => {
	return (
		<PostNumbersMetaDataStyle>
			<div>
				<Heart id="post-preview-heart" />

				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			</div>

			<div>
				<Comment id="post-preview-comment" />

				<Skeleton skeletonHeight="2.6rem" skeletonWidth="7rem" />
			</div>
		</PostNumbersMetaDataStyle>
	);
};

export default PostNumbersMetaData;
