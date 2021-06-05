import styled from "styled-components";

export const AddPostIconStyle = styled.div`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	z-index: 50;
	background-color: #fff;
	box-shadow: 0 0 2px 1.6px var(--separator-1);
	padding: 1rem;
	border-radius: 50%;
	background: #ff416c;
	background: linear-gradient(to right, #ff4b2b, #ff416c);

	& > svg {
		fill: #fff;
		width: 2rem;
		height: 2rem;
	}

	&:hover {
		cursor: pointer;
	}
`;
