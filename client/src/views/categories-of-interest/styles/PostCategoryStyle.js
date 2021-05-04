import styled from "styled-components";

export const PostCategoryStyle = styled.div`
	display: flex;
	flex-direction: column;
	color: var(--primary-text-color);
	border-radius: 0.8rem;
	cursor: pointer;

	& img {
		width: 100%;
		height: 18rem;
		object-fit: cover;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
	}
`;

export const PostCategoryWrapperStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: var(--primary-text-color);

	& svg {
		width: 2.3rem;
		height: 2.3rem;
		margin-right: 0.8rem;
		fill: ${(props) =>
			props.isSelected ? "var(--green)" : "var(--secondary-icon-color)"};
	}
`;
