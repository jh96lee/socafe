import styled from "styled-components";

export const LinkDropdownElementStyle = styled.div`
	display: flex;
	align-items: center;
	color: var(--primary-text-color);
	padding: 0.7rem;
	min-width: 18rem;

	&:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.theme.isDarkMode ? "#607d8b29" : "#85c9ea2b"};
		border-radius: 0.5rem;
	}
`;

export const LinkDropdownElementIconStyle = styled.div`
	padding: 0.8rem;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#607d8b2e" : "#2562802b"};
	border-radius: 50%;
	margin-right: 1.5rem;

	& > svg {
		width: 2.3rem;
		height: 2.3rem;
		fill: ${(props) => (props.theme.isDarkMode ? "#b6e7ff" : "#64748b")};
	}
`;
