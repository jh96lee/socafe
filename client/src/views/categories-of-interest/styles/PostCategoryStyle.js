import styled from "styled-components";

export const PostCategoryStyle = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 0.85rem;
	border-radius: 5rem;
	background-color: var(--secondary-background-color);
	box-shadow: 0 0 0 1.6px var(--primary-separator-color);

	& img {
		width: 5.5rem;
		height: 5.5rem;
		object-fit: cover;
		border-radius: 50%;
	}

	& > h5 {
		color: var(--primary-text-color);
		margin: 0 1.6rem;
	}

	/* TODO: experiment */
	& svg {
		width: 2.7rem;
		height: 2.7rem;
		fill: ${(props) =>
			props.isSelected ? "var(--green)" : "var(--secondary-icon-color)"};
		cursor: pointer;
	}
`;
