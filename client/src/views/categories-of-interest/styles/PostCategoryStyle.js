import styled from "styled-components";

export const PostCategoryStyle = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 0.85rem;
	border-radius: 5rem;
	background-color: var(--bg-2);
	box-shadow: 0 0 0 1.6px var(--separator-1);

	& img {
		width: 5.1rem;
		height: 5.1rem;
		object-fit: cover;
		border-radius: 50%;
	}

	& > h5 {
		color: var(--txt-1);
		margin: 0 1.6rem;
	}

	/* TODO: experiment */
	& svg {
		width: 2.7rem;
		height: 2.7rem;
		fill: ${(props) => (props.isSelected ? "var(--green-1)" : "var(--icon-2)")};
		cursor: pointer;
	}
`;
