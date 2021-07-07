import styled from "styled-components";

export const UserProfileMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0.7rem 0;

	& h2 {
		color: var(--text-1);
	}

	& h2 > span {
		font-size: 1.4rem;
		font-weight: 500;
		color: ${(props) => (props.theme.isDarkMode ? "#9e9e9e" : "#757575")};
	}

	& > *:nth-child(1) {
		margin-bottom: 1rem;
	}

	& > *:nth-child(3) {
		margin: auto 0;
	}
`;

export const UserProfileTotalsDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2.4rem;

	& > h3 {
		color: var(--text-1);
		font-weight: 500;
	}

	& h3 > span {
		font-size: 1.4rem;
		font-weight: 400;
		color: ${(props) => (props.theme.isDarkMode ? "#c3c3c3" : "#717171")};
		margin-left: 0.2rem;
	}
`;
