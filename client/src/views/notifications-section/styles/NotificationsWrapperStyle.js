import styled from "styled-components";

export const NotificationsWrapperStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > * {
		padding: 1.6rem 2rem;
		border-bottom: 1px solid var(--divider-1);
	}
`;
