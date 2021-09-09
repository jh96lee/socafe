import * as React from "react";
import axios from "axios";

import { Loader } from "../../shared";

import { useDropdown } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";
import { convertDate } from "../../../utils/date/convertDate";
import { capitalizeFirstLetter } from "../../../utils/common/capitalizeFirstLetter";

import { DropdownMenuStyle } from "../../../styles";

import {
	ViewOutline,
	HeartEmpty,
	CommentOutline,
	Up,
	Down,
} from "../../../assets";

import styled from "styled-components";

const StatsTopPostsSectionStyle = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin: 0 auto;
	background-color: var(--bg-1);
	border-radius: 0.8rem;
	box-shadow: var(--box-shadow-default) 0px 0px 3px 0px;
`;

const StatsTopPostsHeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1.6rem 3rem;

	& > h2 {
		color: var(--char-default);
	}
`;

const StatsTopPostsFilterStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 1.2rem;
	background-color: var(--bg-2);
	padding: 1rem 1.15rem;
	border-radius: 0.5rem;

	& > p {
		font-weight: 500;
		color: var(--char-1);
	}

	& > svg {
		fill: var(--char-1);
		width: 1.2rem;
		height: 1.2rem;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--bg-2-hover);
	}
`;

const StatsTopPostsTableStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 2.2fr 2.2fr;
	grid-auto-rows: min-content;
	border-radius: 0.7rem;
	overflow: hidden;

	& > *:not(span) {
		border-top: 1px solid var(--graph-border-default);
	}

	& > span {
		color: var(--graph-char-default);
		font-size: 1.15rem;
		font-weight: 600;
		background-color: var(--bg-2);
		letter-spacing: -0.3px;
		padding: 1.4rem 2rem;
	}

	& > p {
		display: flex;
		align-items: center;
		color: var(--graph-char-default);
		font-weight: 500;
		padding: 0 2rem;
	}
`;

const StatsTopPostImageStyle = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	padding: 0.7rem;

	& > img {
		width: 8rem;
		height: 8rem;
		object-fit: cover;
		border-radius: 0.7rem;
	}
`;

const StatsTopPostTopicsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	padding: 0 2rem;

	& > p {
		font-size: 1.35rem;
		font-weight: 500;
		padding: 0.7rem 1.4rem;
		/* FIX: fix root */
		color: var(--secondary-element-default-color);
		background-color: var(--secondary-element-default-bg-color);
		border-radius: 1rem;
	}
`;

const StatsTopPostEngagmentsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	padding: 0 2rem;

	& > p {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		color: var(--char-default);
		font-size: 1.5rem;
		font-weight: 500;

		& > svg {
			fill: var(--char-default);
			width: 2rem;
			height: 2rem;
		}
	}
`;

const StatsTopPostsSection = () => {
	const [topPostsArray, seTopPostsArray] = React.useState([]);
	const [isTopPostsArrayLoaded, setIsTopPostsArrayLoaded] =
		React.useState(false);
	const [topBy, setTopBy] = React.useState("views");

	const { isDropdownMenuOpen } = useDropdown(
		"stats-top-posts-dropdown-trigger",
		"stats-top-posts-dropdown-menu",
		true
	);

	const topByArray = ["views", "likes", "comments"];

	const fetchTopPosts = async () => {
		setIsTopPostsArrayLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/stats/top/${topBy}`,
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			seTopPostsArray(data);
		}

		setIsTopPostsArrayLoaded(true);
	};

	React.useEffect(() => {
		fetchTopPosts();
	}, [topBy]);

	return (
		<StatsTopPostsSectionStyle>
			<StatsTopPostsHeaderStyle>
				<h2>Most {attachEDToString(topBy)} posts</h2>

				<StatsTopPostsFilterStyle id="stats-top-posts-dropdown-trigger">
					<p>{capitalizeFirstLetter(topBy)}</p>

					{isDropdownMenuOpen ? <Up /> : <Down />}

					{isDropdownMenuOpen && (
						<DropdownMenuStyle
							id="stats-top-posts-dropdown-menu"
							menuTop="calc(100% + 6px)"
							menuRight="0"
						>
							{topByArray.map((filter, idx) => {
								return (
									<p
										key={`${filter}__${idx}`}
										onClick={() => {
											setTopBy(filter);
										}}
									>
										{filter}
									</p>
								);
							})}
						</DropdownMenuStyle>
					)}
				</StatsTopPostsFilterStyle>
			</StatsTopPostsHeaderStyle>

			{isTopPostsArrayLoaded ? (
				<StatsTopPostsTableStyle>
					<span>RANK</span>

					<span>IMAGE</span>

					<span>UPLOAD DATE</span>

					<span>TOPICS</span>

					<span>ENGAGEMENT</span>

					{topPostsArray.map(
						(
							{
								created_at,
								post_images,
								post_topics,
								post_total_views,
								post_total_likes,
								post_total_comments,
							},
							idx
						) => {
							return (
								<React.Fragment>
									<p>#{idx + 1}</p>

									<StatsTopPostImageStyle>
										<img src={post_images[0].image_url} alt="post" />
									</StatsTopPostImageStyle>

									<p>{convertDate(created_at)}</p>

									<StatsTopPostTopicsStyle>
										{post_topics.map((topic) => (
											<p key={`post-topic__${topic.id}`}>{topic.title}</p>
										))}
									</StatsTopPostTopicsStyle>

									<StatsTopPostEngagmentsStyle>
										<p>
											<ViewOutline />

											{post_total_views}
										</p>

										<p>
											<HeartEmpty />

											{post_total_likes}
										</p>

										<p>
											<CommentOutline />

											{post_total_comments}
										</p>
									</StatsTopPostEngagmentsStyle>
								</React.Fragment>
							);
						}
					)}
				</StatsTopPostsTableStyle>
			) : (
				<Loader />
			)}
		</StatsTopPostsSectionStyle>
	);
};

const attachEDToString = (string) => {
	const sliceEnd = string.length - 1;

	const slicedString = string.slice(0, sliceEnd);

	return slicedString + "ed";
};

export default StatsTopPostsSection;
