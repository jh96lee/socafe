import * as React from "react";
import styled from "styled-components";

const UserProfileTabStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	padding-bottom: 1.5rem;
	box-shadow: 0 1.6px 0 0
		${(props) => (props.isActive ? "var(--txt-1)" : "#71717154")};
	/* border-bottom: ${(props) => props.isActive && " 4px solid #000"}; */
	/* box-shadow: ${(props) => props.isActive && "0 2px 0 0 var(--blue-3)"}; */

	& > svg {
		fill: ${(props) => (props.isActive ? "var(--txt-1)" : "var(--icon-1)")};
		width: 2.5rem;
		height: 2.5rem;
	}

	& > span {
		color: ${(props) => props.isActive && "var(--txt-1)"};
		font-size: 1.43rem;
		font-weight: 400;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > span {
		text-decoration: underline;
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
