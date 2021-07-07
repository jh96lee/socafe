import styled from "styled-components";

export const UserProfileBioStyle = styled.p`
	color: var(--text-1);
	font-size: 1.33rem;
	font-weight: 400;
`;

export const UserProfileNoBioStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--text-1);

	& > svg {
		fill: var(--icon-1);
		width: 2.4rem;
		height: 2.4rem;
	}
`;
