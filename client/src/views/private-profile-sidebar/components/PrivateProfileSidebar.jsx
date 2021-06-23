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
	color: var(--txt-2);
	padding: 2rem;
	gap: 1rem;
	background-color: var(--bg-post);
	border-left: 2px solid var(--separator-1);
	border-right: 2px solid var(--separator-1);
	min-height: calc(100vh - 85px);
`;

const PrivateProfileSidebarTabStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	padding: 1rem;
	border-radius: 1rem;

	&:hover {
		background-color: var(--bg-hover-2);
		cursor: pointer;
	}
`;

const PrivateProfileSidebar = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const history = useHistory();

	const privateProfileSidebarTabsArray = [
		{
			label: "Profile",
			icon: <Account />,
			onClick: () => {},
		},
		{
			label: "Edit Profile",
			icon: <Edit />,
			onClick: () => {},
		},
		{
			label: "Password",
			icon: <Password />,
			onClick: () => {},
		},
		{
			label: "Notifications",
			icon: <Notification />,
			onClick: () => {},
		},
		{
			label: "Stats",
			icon: <Stats />,
			onClick: () => {},
		},
		{
			label: "Stories",
			icon: <Story />,
			onClick: () => {},
		},
	];

	return (
		<PrivateProfileSidebarStyle>
			{privateProfileSidebarTabsArray.map((tab, idx) => {
				return (
					<PrivateProfileSidebarTabStyle onClick={tab.onClick}>
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

						<h5>{tab.label}</h5>
					</PrivateProfileSidebarTabStyle>
				);
			})}
		</PrivateProfileSidebarStyle>
	);
};

export default PrivateProfileSidebar;
