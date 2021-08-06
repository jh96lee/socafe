// FIX
import styled from "styled-components";

export const EditProfileMessageStyle = styled.div`
	position: fixed;
	bottom: 2rem;
	right: 2rem;
	z-index: 25;
	display: flex;
	align-items: center;
	gap: 1rem;
	background-color: var(--bg-success-color);
	padding: 1.5rem 2rem;
	border-radius: 1rem;

	& > svg {
		fill: var(--icon-success-color);
		width: 2.5rem;
		height: 2.5rem;
	}

	& > p {
		color: var(--text-1);
	}
`;
