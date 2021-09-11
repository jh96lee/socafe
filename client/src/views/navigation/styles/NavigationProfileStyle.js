import styled from "styled-components";

export const NavigationProfileStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.3rem;

	& > img {
		width: 3.5rem;
		height: 3.5rem;
		object-fit: cover;
		border: 1px solid var(--border-1);
		border-radius: 50%;
	}

	& > a {
		color: var(--char-default);
		font-size: 1.45rem;
		font-weight: 500;
	}

	&:hover > a {
		text-decoration: underline;
	}
`;
