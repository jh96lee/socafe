import * as React from "react";
import styled from "styled-components";

import { Sad } from "../../../assets";

const UserProfileBioStyle = styled.p`
	color: var(--txt-1);
	font-size: 1.37rem;
	font-weight: 300;
`;

const UserProfileNoBioStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--txt-1);

	& > svg {
		fill: var(--icon-1);
		width: 2.4rem;
		height: 2.4rem;
	}
`;

const UserProfileBio = ({ bio }) => {
	return (
		<React.Fragment>
			{bio ? (
				<UserProfileBioStyle>{bio}</UserProfileBioStyle>
			) : (
				<UserProfileNoBioStyle>
					<Sad /> <p>No bio yet</p>
				</UserProfileNoBioStyle>
			)}
		</React.Fragment>
	);
};

export default UserProfileBio;
