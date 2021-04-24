import styled from "styled-components";

import { FormInputStyle } from "../../../styles";

export const SearchbarStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	padding: 0.8rem 0;
	border: 1px solid var(--primary-border-color);
	border-radius: 1rem;
	box-shadow: var(--primary-box-shadow-color) 0px 1px 4px -1px;

	& > :not(:last-child) {
		border-right: 1px solid var(--primary-border-color);
	}

	& > * {
		min-height: 3rem;
		padding: 0 1.3rem;
	}

	@media (max-width: 615px) {
		position: absolute;
		display: ${(props) => (props.isResponsiveSearchbarOpen ? "flex" : "none")};
		top: 105%;
		right: 0;
	}
`;

export const SearchTypeStyle = styled.div`
	display: flex;
	align-items: center;
	color: var(--primary-text-color);
	font-size: 1.37rem;

	& svg {
		margin-left: 1rem;
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

export const SearchbarInputStyle = styled(FormInputStyle)`
	border: none;

	&::placeholder {
		color: #797979;
		font-size: 1.37rem;
		letter-spacing: -0.6px;
	}
`;

export const SearchIconStyle = styled.div`
	display: flex;
	align-items: center;
`;
