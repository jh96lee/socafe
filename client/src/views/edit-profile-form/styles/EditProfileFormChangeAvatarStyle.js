import styled from "styled-components";

export const EditProfileFormChangeAvatarStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	margin-bottom: 3rem;
`;

export const EditProfileFormChangeAvatarButtonStyle = styled.div`
	position: relative;
	width: 9rem;
	height: 4.5rem;

	& input {
		position: relative;
		z-index: 2;
		opacity: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	& > button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1;
		color: var(--text-1);
		/* FIX */
		background-color: ${(props) =>
			props.theme.isDarkMode ? "#202229" : "#efefef"};
		font-size: 1.37rem;
		font-weight: 500;
		letter-spacing: -0.8px;
		width: 100%;
		height: 100%;
		padding: 1rem;
		outline: none;
		border: none;
		border-radius: 2rem;
	}
`;
