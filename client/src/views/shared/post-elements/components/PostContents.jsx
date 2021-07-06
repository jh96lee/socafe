import * as React from "react";

import { Skeleton } from "../../index";

import { PostContentsStyle } from "../styles/PostContentsStyle";

const PostContents = ({ postContentsArray, conditionalRenderingVariable }) => {
	return (
		<PostContentsStyle>
			{conditionalRenderingVariable ? (
				postContentsArray.map(({ type, content }, idx) => {
					if (content === "<br>") {
						return (
							<p key={`${type}__${idx}`}>
								<br />
							</p>
						);
					} else {
						return <p key={`${type}__${idx}`}>{content}</p>;
					}
				})
			) : (
				<Skeleton skeletonHeight="20rem" skeletonWidth="100%" />
			)}
		</PostContentsStyle>
	);
};

export default PostContents;
