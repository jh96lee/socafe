import styled from "styled-components";

export const UserMetadataStyle = styled.div`
	position: ${(props) => props.userMetadataPosition};
	top: ${(props) => props.userMetadataTop};
	right: ${(props) => props.userMetadataRight};
	bottom: ${(props) => props.userMetadataBottom};
	left: ${(props) => props.userMetadataLeft};
	z-index: ${(props) => props.userMetadataZIndex};
	display: flex;
	align-items: center;
	gap: ${(props) => props.userMetadataGap || "0.7rem"};

	& > *:first-child {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	& > *:last-child > p {
		font-size: ${(props) => props.textFontSize || "1.43rem"};
		font-weight: ${(props) => props.textFontWeight || "500"};
		color: ${(props) => props.userMetadataTextColor || "var(--char-default)"};
		letter-spacing: -0.6px;
	}

	& > *:last-child > span {
		font-size: ${(props) => props.subTextFontSize || "1.3rem"};
		font-weight: 400;
		color: ${(props) => props.userMetadataSubTextColor || "var(--char-1)"};
		letter-spacing: -0.6px;
	}

	& > *:last-child > p:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
