import * as React from "react";
import styled from "styled-components";

import { Loader } from "../../shared";
import { Notifications } from "../../notifications";

import { usePagination } from "../../../hooks";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const NotificationsFormStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.7rem;
	width: 60rem;
	margin: 2rem auto;
	border-radius: 1rem;
	padding: 2rem;

	& > h2 {
		color: var(--text-1);
	}

	& button {
		position: relative;
		font-size: 1.45rem;
		font-weight: 500;
		letter-spacing: -0.4px;
		outline: none;
		border: none;
		border-radius: 0.5rem;
		padding: 1.4rem 0;
		color: var(--text-1);
		background-color: transparent;
		border: 2px solid var(--separator-2);
		width: 25rem;
		margin: 1rem auto 0 auto;
	}

	& button:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}
`;

const NotificationsForm = () => {
	const {
		contents,
		fetchContents,
		currentPage,
		setCurrentPage,
		isInitialContentsLoaded,
		isExtraContentsLoading,
		nextAPIEndpoint,
	} = usePagination("/notification/user", 2, true, false);

	const afterInitialMount = React.useRef(false);

	React.useEffect(() => {
		const token = fetchToken();

		fetchContents(true, "GET", null, {
			Authorization: `Bearer ${token}`,
		});
	}, []);

	React.useEffect(() => {
		if (afterInitialMount.current) {
			if (contents.length > 0) {
				const token = fetchToken();

				fetchContents(false, "GET", null, {
					Authorization: `Bearer ${token}`,
				});
			}
		}

		afterInitialMount.current = true;
	}, [currentPage]);

	const handleLoadMoreButtonOnClick = () => {
		setCurrentPage((prevState) => prevState + 1);
	};

	return (
		<NotificationsFormStyle>
			{isInitialContentsLoaded ? (
				<React.Fragment>
					<h2>Notifications</h2>

					<Notifications notifications={contents} />

					{nextAPIEndpoint === null || contents.length === 0 ? null : (
						<button onClick={handleLoadMoreButtonOnClick}>
							{isExtraContentsLoading ? (
								<Loader
									isLoaderAbsolute={false}
									loaderSize="2.4rem"
									loaderBorderSize="0.4rem"
								/>
							) : (
								"Load More"
							)}
						</button>
					)}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</NotificationsFormStyle>
	);
};

export default NotificationsForm;
