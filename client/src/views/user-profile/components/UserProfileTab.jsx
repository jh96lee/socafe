import * as React from "react";
import styled from "styled-components";

const UserProfileTabStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.3rem;
	padding: 1rem;
	width: 100%;
	justify-content: center;
	border-radius: 1rem;

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: ${(props) => (props.activeTab ? "var(--icon-2)" : "var(--icon-1)")};
	}

	& > span {
		font-size: 1.43rem;
		font-weight: 400;
		color: ${(props) => props.activeTab && "var(--txt-1)"};
	}

	&:hover {
		cursor: pointer;
	}

	&:hover span {
		color: var(--txt-1);
	}

	&:hover svg {
		color: var(--icon-2);
		fill: var(--icon-2);
	}
`;

const UserProfileTab = ({
	tab,
	idx,
	currentProfileIndex,
	handleTabsOnClick,
}) => {
	return (
		<UserProfileTabStyle
			activeTab={idx === currentProfileIndex}
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
