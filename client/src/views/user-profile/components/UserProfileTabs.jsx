import * as React from "react";
import styled from "styled-components";

import {
	Posts,
	HeartFill,
	HeartEmpty,
	BookmarkFill,
	BookmarkEmpty,
	Tag,
} from "../../../assets";

const UserProfileTabsStyle = styled.div`
	display: flex;
	align-items: center;
`;

const UserProfileTabStyle = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 1rem 3rem;
	box-shadow: 0 1px 0 0
		${(props) => (props.isTabActive ? "var(--text-1)" : "var(--text-2)")};

	& > h5 {
		font-size: 1.37rem;
		font-weight: ${(props) => (props.isTabActive ? "500" : "400")};
		letter-spacing: -0.7px;
		color: ${(props) =>
			props.isTabActive ? "var(--text-1)" : "var(--text-2)"};
	}

	& > svg {
		fill: ${(props) => (props.isTabActive ? "var(--text-1)" : "var(--text-2)")};
		width: 1.45rem;
		height: 1.45rem;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > h5 {
		text-decoration: underline;
	}
`;

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
