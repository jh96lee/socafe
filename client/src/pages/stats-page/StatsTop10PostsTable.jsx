import * as React from "react";
import styled from "styled-components";

import { convertDate } from "../../utils/date/convertDate";

import { ViewOutline, CommentOutline, HeartEmpty } from "../../assets";

const StatsTop10PostsTableStyle = styled.div`
	display: grid;
	grid-template-columns: min-content max-content 1fr 1fr;
	align-items: center;
	border: 1px solid #000;
	border-radius: 1rem;

	& img {
		width: 8rem;
		height: 8rem;
		object-fit: cover;
		border-radius: 1rem;
	}

	& span {
		font-weight: 500;
		padding: 1.2rem;
		border-bottom: 1px solid #000;
	}

	& span:nth-child(1) {
		border-left: none !important;
	}

	& > *:not(#top-10-post-image) {
		height: 100%;
		border-left: 1px solid #000;
	}

	& > *:not(span) {
		padding-left: 1.5rem;
		border-bottom: 1px solid #000;
	}
`;

const StatsTop10PostsTablePostImageStyle = styled.div`
	width: 12rem;
	height: 12rem;
	padding: 0.7rem !important;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 1rem;
	}
`;

const StatsTop10PostsTablePostCreatedAtStyle = styled.div`
	display: flex;
	align-items: center;
`;

const StatsTop10PostsTablePostEngagementsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const StatsTop10PostsTablePostEngagementStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;

	& > svg {
		width: 2rem;
		height: 2rem;
	}

	& > p {
		font-size: 1.45rem;
	}
`;

const StatsTop10PostsTablePostTopicsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.6rem;
`;

const StatsTop10PostsTablePostTopicStyle = styled.p`
	position: relative;
	display: flex;
	gap: 1.2rem;
	align-items: center;
	padding: 0.9rem 1.4rem;
	color: var(--secondary-element-default-color);
	background-color: var(--secondary-element-default-bg-color);
	border-radius: 1rem;
	font-weight: 500;
`;

const StatsTop10PostsTable = ({ posts }) => {
	return (
		<StatsTop10PostsTableStyle>
			<React.Fragment>
				<span>image</span>

				<span>uploaded date</span>

				<span>topics</span>

				<span>engagements</span>
			</React.Fragment>

			<React.Fragment>
				{posts.map((post) => {
					return (
						<React.Fragment>
							{/* TODO */}
							<StatsTop10PostsTablePostImageStyle id="top-10-post-image">
								<img src={post.post_images[0].image_url} alt="post" />
							</StatsTop10PostsTablePostImageStyle>

							{/* TODO */}
							<StatsTop10PostsTablePostCreatedAtStyle>
								<p>{convertDate(post.created_at)}</p>
							</StatsTop10PostsTablePostCreatedAtStyle>

							{/* TODO */}
							<StatsTop10PostsTablePostEngagementsStyle>
								<StatsTop10PostsTablePostEngagementStyle>
									<ViewOutline />

									<p>{post.post_total_views}</p>
								</StatsTop10PostsTablePostEngagementStyle>

								<StatsTop10PostsTablePostEngagementStyle>
									<HeartEmpty />

									<p>{post.post_total_likes}</p>
								</StatsTop10PostsTablePostEngagementStyle>

								<StatsTop10PostsTablePostEngagementStyle>
									<CommentOutline />

									<p>{post.post_total_comments}</p>
								</StatsTop10PostsTablePostEngagementStyle>
							</StatsTop10PostsTablePostEngagementsStyle>

							{/* TODO */}
							<StatsTop10PostsTablePostTopicsStyle>
								{post.post_topics.map((topic) => {
									return (
										<StatsTop10PostsTablePostTopicStyle>
											{topic.title}
										</StatsTop10PostsTablePostTopicStyle>
									);
								})}
							</StatsTop10PostsTablePostTopicsStyle>
						</React.Fragment>
					);
				})}
			</React.Fragment>
		</StatsTop10PostsTableStyle>
	);
};

export default StatsTop10PostsTable;
