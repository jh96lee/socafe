import styled from "styled-components";

export const LinkDropdownElementStyle = styled.div`
	display: flex;
	align-items: center;
	color: var(--txt-1);
	padding: 0.7rem;
	min-width: 18rem;

	&:hover {
		cursor: pointer;
		background-color: var(--bg-hover-2);
		border-radius: 0.5rem;
	}
`;

export const LinkDropdownElementIconStyle = styled.div`
	padding: 0.8rem;
	background-color: var(--bg-4);
	border-radius: 50%;
	margin-right: 1.5rem;

	& > svg {
		width: 2.3rem;
		height: 2.3rem;
		fill: var(--icon-3);
	}
`;
