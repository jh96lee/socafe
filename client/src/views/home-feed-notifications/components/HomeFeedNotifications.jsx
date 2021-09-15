import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Notifications } from "../../notifications";
import { Loader } from "../../shared";
import HomeFeedSectionHeader from "./HomeFeedSectionHeader";

import { fetchHomeFeedNotifications } from "../../../redux/notifications/home-feed-notifications/homeFeedNotificationsAction";

import {
	HomeFeedSectionStyle,
	HomeFeedSectionContentsStyle,
} from "../../../styles";

const HomeFeedNotifications = () => {
	const dispatch = useDispatch();

	const { homeFeedNotifications, isHomeFeedNotificationsLoaded } = useSelector(
		(state) => state.homeFeedNotificationsReducer
	);

	React.useEffect(() => {
		dispatch(fetchHomeFeedNotifications());
	}, []);

	return (
		<HomeFeedSectionStyle>
			{isHomeFeedNotificationsLoaded ? (
				<React.Fragment>
					<HomeFeedSectionHeader />

					<HomeFeedSectionContentsStyle>
						<Notifications notifications={homeFeedNotifications} />
					</HomeFeedSectionContentsStyle>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HomeFeedSectionStyle>
	);
};

export default HomeFeedNotifications;
