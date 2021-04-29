import styled from "styled-components";

import { FormInputStyle, DropdownStyle } from "../../../styles";

export const SearchbarDropdownStyle = styled(DropdownStyle)`
	position: unset;

	/* REVIEW: hiding icon element */
	& > :first-child {
		display: none;
	}

	@media (max-width: 615px) {
		& > :first-child {
			display: block;
		}
	}
`;

export const SearchbarStyle = styled.div`
	position: relative;
	background-color: var(--primary-background-color);
	display: flex;
	align-items: center;
	padding: 0.8rem 0;
	border: 1px solid var(--primary-border-color);
	border-radius: 1rem;
	box-shadow: var(--primary-box-shadow-color) 0px 1px 4px -1px;
	z-index: 10;

	& > :not(:last-child) {
		border-right: 1px solid var(--primary-border-color);
		padding: 0 1.2rem;
	}

	& > :last-child {
		padding: 0.6rem;
		margin: 0 1.2rem;
	}

	/* REVIEW: all direct children will have a minimum height of 3rem */
	& > * {
		min-height: 3rem;
	}

	@media (max-width: 615px) {
		position: absolute;
		z-index: 50;
		display: ${(props) => (props.isResponsiveSearchbarOpen ? "grid" : "none")};
		grid-template-columns: auto 1fr auto;
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		width: 99%;
		border-radius: 0.5rem;
	}
`;

export const SearchTypeStyle = styled.div`
	display: flex;
	align-items: center;
	color: var(--primary-text-color);
	font-size: 1.37rem;
	margin: auto 0;

	& svg {
		fill: var(--secondary-icon-color);
		width: 0.8rem;
		height: 0.8rem;
		margin-left: 1rem;
	}

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;

export const SearchbarInputStyle = styled(FormInputStyle)`
	border: none;
	width: 100%;
	padding: 0 0.5rem;
`;
