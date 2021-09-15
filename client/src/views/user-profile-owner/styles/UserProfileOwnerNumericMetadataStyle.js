import styled from "styled-components";

export const UserProfileOwnerNumericMetadataStyle = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 800px) {
		justify-content: center;
		gap: 15%;
	}
`;

export const UserProfileOwnerTotalsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > h3 {
		color: var(--char-default);
	}

	& > span {
		font-size: 1.4rem;
		font-weight: 400;
	}
`;
