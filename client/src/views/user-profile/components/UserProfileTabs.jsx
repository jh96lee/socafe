import React from "react";

import { UserProfileTab } from "../index";

import { UserProfileTabsStyle } from "../styles/UserProfileTabsStyle";

const UserProfileTabs = ({
	userProfileTabs,
	currentProfileIndex,
	handleTabsOnClick,
}) => {
	return (
		<UserProfileTabsStyle>
			{userProfileTabs.map((tab, idx) => {
				return (
					<UserProfileTab
						key={`user-profile-page__tab-${idx}`}
						tab={tab}
						idx={idx}
						currentProfileIndex={currentProfileIndex}
						handleTabsOnClick={handleTabsOnClick}
					/>
				);
			})}
		</UserProfileTabsStyle>
	);
};

export default UserProfileTabs;
