import styled from "styled-components";

export const UserProfileTabStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	padding-bottom: 1.5rem;
	box-shadow: 0 1.6px 0 0
		${(props) => (props.isActive ? "var(--text-1)" : "#71717154")};

	& > svg {
		fill: ${(props) => (props.isActive ? "var(--text-1)" : "var(--icon-1)")};
		width: 2.5rem;
		height: 2.5rem;
	}

	& > span {
		color: ${(props) => props.isActive && "var(--text-1)"};
		font-size: 1.43rem;
		font-weight: 400;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > span {
		text-decoration: underline;
	}
`;
