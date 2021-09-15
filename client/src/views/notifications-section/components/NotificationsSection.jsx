import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { Loader, Button } from "../../shared";
import { Notifications } from "../../notifications";

import {
	setCurrentAllNotificationsPage,
	fetchAllNotifications,
	fetchExtraAllNotifications,
} from "../../../redux/notifications/all-notifications/allNotificationsAction";

const NotificationsFormStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 60rem;
	margin: 2rem auto;
	background-color: var(--bg-1);
	border-radius: 0.8rem;
	box-shadow: var(--divider-default) 0px 0px 3px 0px;
	overflow: hidden;

	& > h2 {
		color: var(--char-default);
		background-color: var(--bg-2);
		width: 100%;
		padding: 1.6rem 2rem;
	}
`;

const NotificationsSectionStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > * {
		padding: 1.6rem 2rem;
		border-bottom: 1px solid var(--divider-1);
	}
`;

const NotificationsSection = () => {
	const dispatch = useDispatch();

	const {
		currentAllNotificationsPage,
		isAllNotificationsLoaded,
		isExtraAllNotificationsLoading,
		allNotifications,
		allNotificationsNextAPIEndpoint,
	} = useSelector((state) => state.allNotificationsReducer);

	React.useEffect(() => {
		dispatch(fetchAllNotifications(2));
	}, []);

	React.useEffect(() => {
		if (currentAllNotificationsPage > 1) {
			dispatch(fetchExtraAllNotifications(allNotificationsNextAPIEndpoint));
		}
	}, [currentAllNotificationsPage]);

	const handleLoadMoreButtonOnClick = () => {
		dispatch(setCurrentAllNotificationsPage());
	};

	return (
		<NotificationsFormStyle>
			{isAllNotificationsLoaded ? (
				<React.Fragment>
					<h2>Notifications</h2>

					<NotificationsSectionStyle>
						<Notifications notifications={allNotifications} />
					</NotificationsSectionStyle>

					{allNotificationsNextAPIEndpoint === null ||
					allNotifications.length === 0 ? null : (
						<Button
							buttonType="contrast"
							buttonStyleObject={{
								buttonMargin: "1.7rem auto",
								buttonPadding: "1.3rem 2rem",
							}}
							onClick={handleLoadMoreButtonOnClick}
						>
							{isExtraAllNotificationsLoading ? (
								<Loader
									isLoaderAbsolute={false}
									loaderSize="2.4rem"
									loaderBorderSize="0.4rem"
								/>
							) : (
								"Load More"
							)}
						</Button>
					)}
				</React.Fragment>
			) : (
				<Loader />
			)}
		</NotificationsFormStyle>
	);
};

export default NotificationsSection;
