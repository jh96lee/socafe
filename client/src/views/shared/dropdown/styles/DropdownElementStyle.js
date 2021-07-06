import styled from "styled-components";

export const DropdownElementStyle = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;

	& img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		margin-right: 1rem;
		border-radius: 0.5rem;
	}

	&:hover {
		background-color: var(--secondary-element-hover-bg-color);
		cursor: pointer;
	}
`;
