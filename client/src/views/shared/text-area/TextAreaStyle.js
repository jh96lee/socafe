import styled from "styled-components";

export const TextAreaStyle = styled.div`
	color: var(--char-default);

	& > * {
		width: fit-content;
	}

	& p {
		display: inline;
		font-size: 1.37rem;
		font-weight: 300;
		letter-spacing: -0.4px;
		line-height: 2.2rem;
	}

	& span {
		margin-left: 0.2rem;
		cursor: pointer;
	}
`;
