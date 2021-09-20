import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader, Button } from "../../shared";
import { Notifications } from "../../notifications";

import {
	setCurrentAllNotificationsPage,
	fetchAllNotifications,
	fetchExtraAllNotifications,
	resetAllNotifications,
} from "../../../redux/notifications/all-notifications/allNotificationsAction";

import { NotificationsSectionStyle } from "../styles/NotificationsSectionStyle";
import { NotificationsWrapperStyle } from "../styles/NotificationsWrapperStyle";

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

		return () => {
			dispatch(resetAllNotifications());
		};
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
		<NotificationsSectionStyle>
			{isAllNotificationsLoaded ? (
				<React.Fragment>
					<h2>Notifications</h2>

					<NotificationsWrapperStyle>
						<Notifications notifications={allNotifications} />
					</NotificationsWrapperStyle>

					{allNotificationsNextAPIEndpoint === null ||
					allNotifications.length === 0 ? null : (
						<Button
							buttonType="contrast"
							buttonStyleObject={{
								buttonMargin: "1.7rem auto",
								buttonPadding: "1rem 2rem",
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
		</NotificationsSectionStyle>
	);
};

export default NotificationsSection;
