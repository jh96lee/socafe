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
	gap: 0.7rem;

	& > *:first-child {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	& > *:last-child > h5 {
		font-size: ${(props) => props.usernameFontSize || "1.35rem"};
		font-weight: 500;
		color: ${(props) => props.userMetadataUsernameColor || "var(--text-1)"};
		letter-spacing: -0.6px;
		cursor: pointer;
	}

	& > *:last-child > p {
		font-size: ${(props) => props.fullNameFontSize || "1.27rem"};
		font-weight: 300;
		color: ${(props) => props.userMetadataFullNameColor || "var(--text-2)"};
		letter-spacing: -0.6px;
	}
`;
