import styled from "styled-components";

export const NavigationProfileStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.3rem;

	& > img {
		width: 3.5rem;
		height: 3.5rem;
		object-fit: cover;
		border-radius: 50%;
		box-shadow: 0 0 0 1.2px #000;
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
