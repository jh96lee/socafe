import styled from "styled-components";

export const UploadImageButtonStyle = styled.div`
	position: relative;
	border-radius: 0.5rem;
	background-color: transparent;
	border: 1px solid
		${(props) => (props.theme.isDarkMode ? "#b6e7ff" : "#64748b")};

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
		background-color: ${(props) =>
			props.theme.isDarkMode ? "#607d8b29" : "#85c9ea2b"};
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
	gap: 1rem;
	transform: translate(-50%, -50%);
	z-index: 1;

	& svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: ${(props) => (props.theme.isDarkMode ? "#b6e7ff" : "#64748b")};
	}

	& p {
		font-size: 1.3rem;
		color: ${(props) => (props.theme.isDarkMode ? "#b6e7ff" : "#64748b")};
	}
`;
