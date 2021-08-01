import styled from "styled-components";

export const UserProfileNumericMetadataStyle = styled.div`
	display: flex;
	justify-content: space-evenly;

	@media (max-width: 800px) {
		justify-content: center;
		gap: 15%;
	}
`;

export const UserProfileTotalsStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > h3 {
		color: var(--text-1);
	}
`;
