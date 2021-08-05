import styled from "styled-components";

export const UserProfilePostsStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(4, minmax(auto, 1fr));
	grid-auto-rows: 11.5vw;
	justify-content: center;
	gap: 2.5rem 1.5rem;

	@media (max-width: 1150px) {
		grid-template-columns: repeat(2, minmax(auto, 1fr));
		grid-auto-rows: 15vw;
	}

	@media (max-width: 950px) {
		grid-template-columns: repeat(1, auto);
		grid-auto-rows: 18vw;
	}

	@media (max-width: 800px) {
		grid-auto-rows: 20rem;
	}
`;
