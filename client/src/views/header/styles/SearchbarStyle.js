import styled from "styled-components";

import { DropdownStyle } from "../../../styles";
import { FormInputStyle } from "../../shared/form-input/FormInputStyle";

export const SearchbarDropdownStyle = styled(DropdownStyle)`
	position: unset;

	/* REVIEW: hiding icon element */
	& > *:first-child {
		display: none;
	}

	@media (max-width: 600px) {
		& > *:first-child {
			display: block;
		}
	}
`;

export const SearchbarStyle = styled.div`
	position: relative;
	background-color: var(--primary-background-color);
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 32rem;
	padding: 0.3rem 0;
	border-radius: 2rem;
	box-shadow: 0px 0px 1.5px 1.5px var(--primary-separator-color);
	z-index: 10;

	& > *:last-child {
		margin: 0 1rem;
	}

	@media (max-width: 600px) {
		position: absolute;
		z-index: 50;
		display: ${(props) => (props.isResponsiveSearchbarOpen ? "grid" : "none")};
		grid-template-columns: auto 1px 1fr 1px auto;
		top: 103%;
		left: 50%;
		transform: translateX(-50%);
		width: 98%;
		border-radius: 0.5rem;
	}
`;

export const SearchTypeStyle = styled.div`
	display: flex;
	align-items: center;
	color: var(--primary-text-color);
	font-size: 1.43rem;
	letter-spacing: -0.5px;
	margin: auto 0;

	/* REVIEW: this is for the down arrow icon */
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
	background-color: transparent;
	border: none;
	width: 100%;
	padding: 0 0.5rem;
`;
