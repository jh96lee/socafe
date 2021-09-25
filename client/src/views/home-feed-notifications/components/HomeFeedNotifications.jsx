import * as React from "react";
import { useSelector } from "react-redux";

import { Notifications } from "../../notifications";
import HomeFeedNotificationsSectionHeader from "./HomeFeedNotificationsSectionHeader";

import {
	HomeFeedSectionStyle,
	HomeFeedSectionContentsStyle,
} from "../../../styles";
import { WrapperMessage } from "../../shared";
import { Smile } from "../../../assets";

const HomeFeedNotifications = () => {
	const { homeFeedNotifications } = useSelector(
		(state) => state.homeFeedNotificationsReducer
	);

	return (
		<HomeFeedSectionStyle>
			<HomeFeedNotificationsSectionHeader />

			<HomeFeedSectionContentsStyle>
				{homeFeedNotifications.length > 0 ? (
					<Notifications notifications={homeFeedNotifications} />
				) : (
					<WrapperMessage>
						<Smile /> You're all caught up!
					</WrapperMessage>
				)}
			</HomeFeedSectionContentsStyle>
		</HomeFeedSectionStyle>
	);
};

export default HomeFeedNotifications;
