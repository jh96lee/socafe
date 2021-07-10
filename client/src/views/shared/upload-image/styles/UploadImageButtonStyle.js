import styled from "styled-components";

export const UploadImageButtonStyle = styled.div`
	position: relative;
	border-radius: 0.5rem;
	background-color: var(--button-default-bg-color);

	& input {
		position: relative;
		z-index: 50;
		opacity: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--button-default-hover-bg-color);
	}
`;

export const UploadImageButtonCTAStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	transform: translate(-50%, -50%);
	z-index: 1;

	& svg {
		width: 3.2rem;
		height: 3.2rem;
		fill: #fff;
	}

	& p {
		font-size: 1.35rem;
		font-weight: 400;
		color: #fff;
	}
`;
