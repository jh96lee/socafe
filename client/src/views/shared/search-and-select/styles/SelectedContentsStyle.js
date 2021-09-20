import styled from "styled-components";

export const SelectedContentsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
	padding: 0.8rem;

	&:empty {
		display: none;
	}
`;
