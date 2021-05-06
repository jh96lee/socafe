import styled from "styled-components";

const UserFormPageElementsWrapperStyle = styled.div`
	width: 40rem;
	margin: 3.5rem 0;

	& h2 {
		font-size: 2.6rem;
		color: var(--primary-text-color);
		margin-bottom: 2.2rem;
	}

	@media (max-width: 600px) {
		width: 90%;
	}
`;

export default UserFormPageElementsWrapperStyle;
