import styled from "styled-components";

export const DropdownElementStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 0.6rem;
	border-radius: 0.5rem;
	min-width: 16rem;

	& img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	&:hover {
		background-color: var(--secondary-element-hover-bg-color);
		cursor: pointer;
	}
`;
