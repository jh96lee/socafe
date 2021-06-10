import * as React from "react";

import { Skeleton } from "../../index";

import { PostContentsStyle } from "../styles/PostContentsStyle";

const PostContents = ({
	postContentsArray,
	conditionalPostContentsRenderingVariable,
}) => {
	return (
		<PostContentsStyle>
			{!conditionalPostContentsRenderingVariable ||
			postContentsArray.length === 0 ||
			postContentsArray[0].content === "<br>" ? (
				<Skeleton skeletonHeight="20rem" skeletonWidth="100%" />
			) : (
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
			)}
		</PostContentsStyle>
	);
};

export default PostContents;
