import * as React from "react";
import styled from "styled-components";

import { Loader } from "./views/shared";

import { usePagination } from "./hooks";

const PaginationStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: fit-content;
	min-height: 50rem;
	margin: 4rem auto;

	& > button {
		position: relative;
		background-color: var(--button-default-bg-color);
		color: #fff;
		border-radius: 1rem;
		border: none;
		padding: 1.2rem 1.6rem;
		cursor: pointer;
	}
`;

const TopicStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem 1.2rem;
	border-radius: 4rem;
	border: 2px solid var(--separator-1);
	background-color: var(--bg-2);

	& > img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 50%;
	}

	& > p {
		color: var(--text-1);
	}
`;

const Pagination = () => {
	// const {
	// 	contents,
	// 	currentPage,
	// 	nextAPIEndpoint,
	// 	isInitialContentsLoaded,
	// 	isExtraContentsLoading,
	// 	fetchData,
	// 	handleLoadMoreButtonOnClick,
	// } = usePagination("/topic");

	// React.useEffect(() => {
	// 	fetchData();
	// }, [currentPage]);

	return (
		<PaginationStyle>
			{/* {isInitialContentsLoaded ? (
				<React.Fragment>
					{contents.map((content) => {
						return (
							<TopicStyle key={content.id}>
								<img src={content.topic_url} alt="topic thumbnail" />

								<p>{content.title}</p>
							</TopicStyle>
						);
					})}
				</React.Fragment>
			) : (
				<Loader isLoaderAbsolute={true} />
			)} */}

			{/* TODO: logic here */}
			{/* {currentPage > 1 && !nextAPIEndpoint ? null : (
				<button onClick={handleLoadMoreButtonOnClick}>
					{isExtraContentsLoading ? (
						<Loader loaderSize="2rem" loaderBorderSize="0.4rem" />
					) : (
						"Load More"
					)}
				</button>
			)} */}
		</PaginationStyle>
	);
};

export default Pagination;
