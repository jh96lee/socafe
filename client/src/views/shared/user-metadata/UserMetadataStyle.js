import styled from "styled-components";

export const UserMetadataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
`;

export const UserNameDataStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => !props.conditionalRenderingVariable && "0.3rem"};
	justify-content: space-between;
	height: 100%;

	& > h5 {
		font-size: ${(props) => props.usernameFontSize || "1.35rem"};
		font-weight: 500;
		color: var(--txt-1);
		letter-spacing: -0.9px;
		cursor: pointer;
	}

	& > p {
		font-size: ${(props) => props.fullNameFontSize || "1.27rem"};
		font-weight: 300;
		color: ${(props) => (props.theme.isDarkMode ? "#949494" : "#717070")};
		letter-spacing: -0.9px;
	}
`;
