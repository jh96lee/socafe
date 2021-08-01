import * as React from "react";

import {
	UserProfileTabsStyle,
	UserProfileTabStyle,
} from "../styles/UserProfileTabsStyle";

const UserProfileTabs = ({
	activeTabIndex,
	userProfileTabsArray,
	handleTabOnClick,
}) => {
	return (
		<UserProfileTabsStyle>
			{userProfileTabsArray.map(({ postsEndpoint, tabIcon, tabLabel }, idx) => {
				return (
					<UserProfileTabStyle
						isTabActive={activeTabIndex === idx}
						onClick={(e) => handleTabOnClick(e, idx, postsEndpoint)}
					>
						{tabIcon}

						<h5>{tabLabel}</h5>
					</UserProfileTabStyle>
				);
			})}
		</UserProfileTabsStyle>
	);
};

export default UserProfileTabs;
