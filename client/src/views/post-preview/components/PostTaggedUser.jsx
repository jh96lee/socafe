import * as React from "react";
import { useSelector } from "react-redux";

import { DropdownMenu } from "../../shared";

import { DropdownStyle } from "../../../styles";

import { MultipleUsers } from "../../../assets";

import styled from "styled-components";

const PostTaggedUserDropdownStyle = styled(DropdownStyle)`
	position: absolute;
	left: 7px;
	bottom: 7px;
`;

const PostTaggedUserIconStyle = styled.div`
	padding: 0.9rem;
	border-radius: 50%;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#d0f0ff40" : "#fff"};
	cursor: pointer;

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: ${(props) => (props.theme.isDarkMode ? "#fff" : "#64748b")};
	}
`;

const PostTaggedUserStyle = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;

	& img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 50%;
		margin-right: 1rem;
	}

	& > div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	& > div p {
		font-size: 1.4rem;
		color: var(--primary-text-color);
	}

	& > div span {
		font-size: 1.32rem;
		color: var(--primary-text-color);
		letter-spacing: -0.6px;
	}
`;

const PostTaggedUser = () => {
	const { taggedPostUsersArray } = useSelector((state) => state.addPostReducer);

	return taggedPostUsersArray.length === 0 ? null : (
		<PostTaggedUserDropdownStyle id="post-tagged-user-dropdown-trigger">
			<PostTaggedUserIconStyle>
				<MultipleUsers />
			</PostTaggedUserIconStyle>

			<DropdownMenu
				triggerID={`post-tagged-user-dropdown-trigger`}
				customDropdownId={`post-tagged-user`}
				dataArray={taggedPostUsersArray}
				menuBottom="0"
				menuLeft="0"
				menuWidth="20rem"
			>
				{taggedPostUsersArray.map((user, idx) => {
					return (
						<PostTaggedUserStyle key={`post-tagged-user__${idx}`}>
							<img src={user.avatar_url} />
							<div>
								<p>@{user.username}</p>

								<span>{user.full_name}</span>
							</div>
						</PostTaggedUserStyle>
					);
				})}
			</DropdownMenu>
		</PostTaggedUserDropdownStyle>
	);
};

export default PostTaggedUser;
