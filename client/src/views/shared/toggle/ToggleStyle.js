import styled from "styled-components";

const ToggleStyle = styled.div`
	position: relative;
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	border-radius: 2rem;
	cursor: pointer;
	background-color: ${(props) =>
		props.type === "theme" ? "var(--bg-toggle-theme-1)" : "var(--bg-toggle-1)"};

	& span {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50%;
		left: ${(props) => props.state === false && "0.3rem"};
		right: ${(props) => props.state === true && "0.3rem"};
		transform: translate(0, -50%);
		width: ${(props) => `calc(${props.height} - 0.6rem)`};
		height: ${(props) => `calc(${props.height} - 0.6rem)`};
		background-color: ${(props) =>
			props.type === "theme"
				? "var(--bg-toggle-theme-2)"
				: "var(--bg-toggle-1"};
		border-radius: 50%;
	}

	& span > svg {
		width: ${(props) => `calc(${props.height} - 1rem)`};
		height: ${(props) => `calc(${props.height} - 1rem)`};
	}
`;

export default ToggleStyle;
