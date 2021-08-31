import styled from "styled-components";

export const UserStoryStyle = styled.div`
	position: relative;
`;

export const UserStoryWrapperStyle = styled.div`
	width: fit-content;
	height: fit-content;

	&:hover {
		cursor: pointer;
		box-shadow: 0 0 0 1.8px var(--separator-2);
		border-radius: 1rem;
	}
`;
