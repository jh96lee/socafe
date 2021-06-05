import styled from "styled-components";

export const LoginPageElementWrapperStyle = styled.div`
	width: 40rem;
	margin-top: 3.5rem;

	& > h2 {
		color: var(--txt-1);
		margin-bottom: 2rem;
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;
