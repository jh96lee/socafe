import styled from "styled-components";

export const UserStoryPopupStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 20;
	transform: translate(-50%, -50%);
	padding: 2rem;
	background-color: var(--bg-1);
	box-shadow: 0 0 5px 1.5px var(--separator-1);
	border-radius: 1rem;
`;
