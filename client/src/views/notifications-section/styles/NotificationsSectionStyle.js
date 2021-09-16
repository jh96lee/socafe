import styled from "styled-components";

export const NotificationsSectionStyle = styled.div`
	display: flex;
	flex-direction: column;
	width: 60rem;
	margin: 3rem auto;
	background-color: var(--bg-1);
	border-radius: 0.8rem;
	box-shadow: var(--divider-default) 0px 0px 3px 0px;
	overflow: hidden;

	& > h2 {
		color: var(--char-default);
		background-color: var(--bg-2);
		width: 100%;
		padding: 1.6rem 2rem;
	}
`;
