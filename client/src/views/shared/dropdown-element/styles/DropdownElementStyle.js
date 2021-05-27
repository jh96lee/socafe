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
		margin-right: 1.5rem;
		border-radius: 0.5rem;
	}

	&:hover {
		background-color: ${(props) =>
			props.theme.isDarkMode ? "#48484847" : "#85c9ea2b"};
		cursor: pointer;
	}
`;

export const DropdownElementMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > p {
		color: var(--primary-text-color);
		margin-bottom: 0.2rem;
	}
`;
