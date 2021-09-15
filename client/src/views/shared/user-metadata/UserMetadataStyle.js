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

	& > *:last-child > h5 {
		font-size: ${(props) => props.usernameFontSize || "1.35rem"};
		font-weight: 500;
		color: ${(props) =>
			props.userMetadataUsernameColor || "var(--char-default)"};
		letter-spacing: -0.6px;
	}

	& > *:last-child > span {
		font-size: ${(props) => props.fullNameFontSize || "1.3rem"};
		font-weight: 400;
		color: ${(props) => props.userMetadataFullNameColor || "var(--text-2)"};
		letter-spacing: -0.6px;
	}

	& > *:last-child > h5:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
