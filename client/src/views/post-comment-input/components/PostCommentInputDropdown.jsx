import * as React from "react";

import { DropdownMenu, DropdownElement, Button } from "../../shared";

const PostCommentInputDropdown = ({
	contents,
	nextAPIEndpoint,
	contentEditableSearchUserRef,
	setIsDropdownMenuOpen,
	handleLoadMoreButtonOnClick,
}) => {
	const dropdownElementsArray = contents.map((result) => {
		return {
			image: result.avatar_url,
			text: result.username,
			subText: result.full_name,
			onClickEventHandler: () => {
				contentEditableSearchUserRef.current.textContent = `@${result.username}`;

				setIsDropdownMenuOpen(false);
			},
		};
	});

	return (
		<DropdownMenu
			dropdownMenuID="main-post-comments-input-dropdown-menu"
			dropdownMenuStyleObject={{
				menuBottom: "calc(100% + 3px)",
				menuLeft: "50%",
				menuWidth: "99%",
				menuTransform: "translate(-50%, 0)",
			}}
		>
			{contents.length === 0 ? (
				<p>Nothing here</p>
			) : (
				<React.Fragment>
					{dropdownElementsArray.map((element, idx) => {
						return (
							<DropdownElement
								key={`main-post-comments-input-dropdown-element__${idx}`}
								{...element}
							/>
						);
					})}
				</React.Fragment>
			)}

			{nextAPIEndpoint === null || contents.length === 0 ? null : (
				<Button
					buttonType="outline"
					buttonStyleObject={{
						buttonFontWeight: "400",
						buttonWidth: "100%",
						buttonPadding: "1.3rem",
					}}
					onClick={handleLoadMoreButtonOnClick}
				>
					Load More
				</Button>
			)}
		</DropdownMenu>
	);
};

export default PostCommentInputDropdown;
