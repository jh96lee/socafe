import * as React from "react";
import { useHistory } from "react-router";

import { DropdownMenu, Icon } from "../../shared";

import { useDropdown } from "../../../hooks";

import { PlusAlt, Posts, StoryFilled } from "../../../assets";

import styled from "styled-components";

const HeaderAddContentStyle = styled.div`
	position: relative;
`;

const HeaderAddContent = () => {
	const history = useHistory();

	const { isDropdownMenuOpen } = useDropdown(
		"header-add-content-dropdown-trigger",
		"header-add-content-dropdown-menu",
		false
	);

	const dropdownElementsArray = [
		{
			icon: <Posts />,
			text: "Post",
			onClickEventHandler: () => {
				history.push("/add/post");
			},
		},
		{
			icon: <StoryFilled />,
			text: "Story",
			onClickEventHandler: () => {
				history.push("/add/story");
			},
		},
	];

	return (
		<HeaderAddContentStyle id="header-add-content-dropdown-trigger">
			<Icon iconSize="1.8rem" iconDimension="3.7rem" iconPadding="0rem">
				<PlusAlt />

				{isDropdownMenuOpen && (
					<DropdownMenu
						dropdownMenuID="header-add-content-dropdown-menu"
						dropdownElementsArray={dropdownElementsArray}
						dropdownMenuStyleObject={{
							menuTop: "calc(100% + 10px)",
							menuRight: "0",
							menuWidth: "15rem",
						}}
					/>
				)}
			</Icon>
		</HeaderAddContentStyle>
	);
};

export default HeaderAddContent;
