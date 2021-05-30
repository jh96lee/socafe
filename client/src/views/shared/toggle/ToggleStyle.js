import styled from "styled-components";

const ToggleStyle = styled.div`
	position: relative;
	width: ${(props) => props.toggleWidth};
	height: ${(props) => props.toggleHeight};
	border-radius: 2rem;
	cursor: pointer;
	background-color: ${(props) =>
		props.toggleType === "theme"
			? "var(--primary-theme-toggle-background-color)"
			: "var(--primary-toggle-background-color"};

	& span {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 50%;
		left: ${(props) => props.toggleState === false && "0.3rem"};
		right: ${(props) => props.toggleState === true && "0.3rem"};
		transform: translate(0, -50%);
		width: ${(props) => `calc(${props.toggleHeight} - 0.6rem)`};
		height: ${(props) => `calc(${props.toggleHeight} - 0.6rem)`};
		background-color: ${(props) =>
			props.toggleType === "theme"
				? "var(--secondary-theme-toggle-background-color)"
				: "var(--primary-toggle-background-color"};
		border-radius: 50%;
	}

	& span > svg {
		width: ${(props) => `calc(${props.toggleHeight} - 1rem)`};
		height: ${(props) => `calc(${props.toggleHeight} - 1rem)`};
	}
`;

export default ToggleStyle;
