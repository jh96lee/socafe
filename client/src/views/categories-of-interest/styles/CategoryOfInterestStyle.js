import styled from "styled-components";

import { ButtonStyle } from "../../../styles";

export const CategoriesOfInterestStyle = styled.div`
	min-width: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CategoriesOfInterestElementsWrapperStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	grid-gap: 3rem 2rem;
	margin-bottom: 4rem;
`;

export const CategoriesOfInterestButtonStyle = styled(ButtonStyle)`
	width: 30rem;
	background-color: var(--primary-clickable-background-color);
	color: ${(props) =>
		props.success
			? "var(--success-text-color)"
			: props.error
			? "var(--error-text-color)"
			: "#fff"};
	background-color: ${(props) =>
		props.success
			? "var(--success-background-color)"
			: props.error
			? "var(--error-background-color)"
			: "var(--primary-clickable-background-color)"};
`;
