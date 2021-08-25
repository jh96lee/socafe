import * as React from "react";
import axios from "axios";

import { Avatar, Loader } from "../../views/shared";
import Notification from "./Notification";

import { usePagination } from "../../hooks";

import { PageStyle } from "../../styles";

import { fetchToken } from "../../utils/cookie/fetchToken";

import styled from "styled-components";

const NotificationsPageStyle = styled(PageStyle)``;

const NotificationsPage = () => {
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
		<NotificationsPageStyle>
			{contents.map((notification) => {
				return (
					<Notification
						key={`notification__${notification.id}`}
						notification={notification}
					/>
				);
			})}

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
		</NotificationsPageStyle>
	);
};

export default NotificationsPage;
