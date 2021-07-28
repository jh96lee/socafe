import styled from "styled-components";

export const MainPostActionsStyle = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 1.8rem;
`;

export const MainPostActionStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;

	& > h5 {
		color: var(--text-1);
	}

	@media (max-width: 500px) {
		& svg {
			width: 1.8rem;
			height: 1.8rem;
		}
	}
`;
