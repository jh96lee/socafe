import * as React from "react";

import {
	UserProfileTabsStyle,
	UserProfileTabStyle,
} from "../styles/UserProfileTabsStyle";

const UserProfileTabs = ({
	currentProfileTabIndex,
	setCurrentProfileTabIndex,
	userProfileTabsArray,
}) => {
	const handleProfileTabOnClick = (e, idx) => {
		setCurrentProfileTabIndex(idx);
	};

	return (
		<UserProfileTabsStyle>
			{userProfileTabsArray.map(({ tabIcon, tabLabel }, idx) => {
				return (
					<UserProfileTabStyle
						isTabActive={currentProfileTabIndex === idx}
						onClick={(e) => handleProfileTabOnClick(e, idx)}
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
