import styled from "styled-components";

const DropdownElementTextsStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	height: 100%;

	& > p {
		color: var(--char-default);
		font-size: 1.37rem;
	}

	& > span {
		font-size: 1.27rem;
		font-weight: 400;
	}

	&:empty {
		display: none;
	}
`;

export default DropdownElementTextsStyle;
