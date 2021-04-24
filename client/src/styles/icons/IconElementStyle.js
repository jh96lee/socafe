import styled from "styled-components";

const IconElementStyle = styled.div`
	background-color: var(--primary-clickable-background-color);
	border-radius: 50%;
	padding: 0.6rem;
	cursor: pointer;

	& svg {
		width: 1.8rem;
		height: 1.8rem;
		fill: #fff;
		color: #fff;
	}
`;

export default IconElementStyle;
