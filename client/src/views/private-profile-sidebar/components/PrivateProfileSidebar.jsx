import * as React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import { IconElement } from "../../shared";

import {
	Account,
	Edit,
	Password,
	Notification,
	Stats,
	Story,
} from "../../../assets";

const PrivateProfileSidebarStyle = styled.div`
	display: flex;
	flex-direction: column;
	color: var(--text-1);
	padding: 2rem;
	gap: 1rem;
	border-left: 2px solid var(--separator-1);
	border-right: 2px solid var(--separator-1);
	min-height: calc(100vh - 80px);
`;

const PrivateProfileSidebarTabStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border-radius: 1rem;
	background-color: ${(props) =>
		props.activePrivateProfileSidebarTab
			? "var(--bg-active-1)"
			: "transparent"};

	& > p {
		font-size: 1.5rem;
	}

	&:hover {
		background-color: var(--bg-hover-2);
		cursor: pointer;
	}
`;

const PrivateProfileSidebar = ({ userID }) => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const history = useHistory();

	const privateProfileSidebarTabsArray = [
		{
			label: "Profile",
			icon: <Account />,
			onClick: (idx) => {
				setActiveIndex(idx);

				history.push(`/profile/${userID}`);
			},
		},
		{
			label: "Edit Profile",
			icon: <Edit />,
			onClick: (idx) => {
				setActiveIndex(idx);

				history.push(`/profile/edit/${userID}`);
			},
		},
		{
			label: "Password",
			icon: <Password />,
			onClick: (idx) => {
				setActiveIndex(idx);

				history.push(`/profile/password/${userID}`);
			},
		},
		{
			label: "Notifications",
			icon: <Notification />,
			onClick: (idx) => {
				setActiveIndex(idx);

				history.push(`/profile/notifications/${userID}`);
			},
		},
		{
			label: "Stats",
			icon: <Stats />,
			onClick: (idx) => {
				setActiveIndex(idx);

				history.push(`/profile/stats/${userID}`);
			},
		},
		{
			label: "Stories",
			icon: <Story />,
			onClick: (idx) => {
				setActiveIndex(idx);

				history.push(`/profile/stories/${userID}`);
			},
		},
	];

	return (
		<PrivateProfileSidebarStyle>
			{privateProfileSidebarTabsArray.map((tab, idx) => {
				return (
					<PrivateProfileSidebarTabStyle
						onClick={() => tab.onClick(idx)}
						activePrivateProfileSidebarTab={idx === activeIndex}
					>
						<IconElement
							iconRole="presentation"
							iconElementStyleObject={{
								elementBackgroundColor: "var(--bg-4)",
								iconColor: "var(--icon-3)",
								iconSize: "",
							}}
						>
							{tab.icon}
						</IconElement>

						<p>{tab.label}</p>
					</PrivateProfileSidebarTabStyle>
				);
			})}
		</PrivateProfileSidebarStyle>
	);
};

export default PrivateProfileSidebar;
