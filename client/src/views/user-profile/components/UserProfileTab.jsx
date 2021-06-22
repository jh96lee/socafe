import * as React from "react";

import { UserProfileTabStyle } from "../styles/UserProfileTabStyle";

const UserProfileTab = ({
	tab,
	idx,
	currentProfileIndex,
	handleTabsOnClick,
}) => {
	return (
		<UserProfileTabStyle
			isActive={idx === currentProfileIndex}
			activeTabIndex={currentProfileIndex}
			onClick={() => {
				handleTabsOnClick(idx);
			}}
		>
			{tab.icon}

			<span>{tab.label}</span>
		</UserProfileTabStyle>
	);
};

export default UserProfileTab;
