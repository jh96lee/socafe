import * as React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";

import { Heart } from "../../assets";

const CommentStyle = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 37rem;
	height: fit-content;
	background-color: var(--tertiary-background-color);
	margin: 1rem;
	padding: 0 1rem;
	border-radius: 1rem;
`;

const CommentTopStyle = styled.div`
	display: flex;
	align-items: flex-start;
	color: var(--primary-text-color);
	gap: 1.5rem;
	padding: 1.2rem;

	& img {
		width: 4.2rem;
		height: 4.2rem;
		border-radius: 50%;
	}

	& > div > p {
		font-weight: 300;
	}

	& > h5 {
		display: inline;
	}
`;

const CommentBottomStyle = styled.div`
	display: flex;
	align-items: center;
	color: var(--secondary-text-color);
	border-top: 1px solid grey;
	padding: 1.2rem;

	& > div {
		display: flex;
		align-items: center;
		gap: 0.7rem;
	}

	& > div:first-child > svg {
		width: 2rem;
		height: 2rem;
		fill: red;
	}
`;

const HomePage = () => {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<React.Fragment>
			{/* <CommentStyle>
				<CommentTopStyle>
					<img src={user.avatar_url} />

					<div>
						<h5>@{user.username}</h5>

						<p>
							NBA playoffs have started a couple days ago. But looking at the
							way the Clippers are playing, you would have no fucking idea that
							it did indeed actually started. Playing lazy and getting destroyed
							by the Mavericks who they wanted to play via tanking the last 2
							regular season games. SMH
						</p>
					</div>
				</CommentTopStyle>

				<CommentBottomStyle>
					<div>
						<Heart />

						<p>28 likes</p>
					</div>
				</CommentBottomStyle>
			</CommentStyle> */}
		</React.Fragment>
	);
};

export default HomePage;
