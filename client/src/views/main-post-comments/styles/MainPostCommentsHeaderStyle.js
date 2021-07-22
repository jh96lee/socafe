import styled from "styled-components";

export const MainPostCommentsHeaderStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.6rem;
	box-shadow: 0 1.6px 0 0 var(--input-default-separator-color);

	& > h5 {
		font-weight: 600;
		color: var(--text-1);
	}
`;
