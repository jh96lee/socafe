import styled from "styled-components";

export const WrapperMessageStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--char-default);
	font-size: 1.43rem;
	font-weight: 400;
	width: fit-content;
	letter-spacing: -0.6px;

	& > p {
		font-size: 1.5rem;
	}

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
	}
`;
