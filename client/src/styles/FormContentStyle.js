import styled from "styled-components";

export const RegisterAndLoginFormContentStyle = styled.div`
	margin: 1.8rem 0 2.9rem 0;

	& div:not(:last-child) {
		margin-bottom: 1rem;
	}
`;

export const CategoriesOfInterestFormContentStyle = styled.div`
	display: grid;
	justify-items: center;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	margin: 1.8rem 0 1.3rem 0;
`;
