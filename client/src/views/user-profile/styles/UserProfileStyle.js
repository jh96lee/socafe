import styled from "styled-components";

export const UserProfileStyle = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	flex-direction: column;
	width: 100%;
	height: fit-content;
	border-radius: 1rem;
	overflow: hidden;
	background-color: var(--input-default-bg-color);
	background-color: var(--bg-2);
	border: 1px solid var(--input-default-separator-color);

	& > *:nth-child(1) {
		height: 18rem;
	}
`;
