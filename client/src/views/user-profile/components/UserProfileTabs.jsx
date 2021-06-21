import React from "react";
import styled from "styled-components";

import { UserProfileTab } from "../index";

const UserProfileTabsStyle = styled.div`
	display: flex;
	justify-content: space-between;
	width: 95%;
	margin: auto;
`;

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
