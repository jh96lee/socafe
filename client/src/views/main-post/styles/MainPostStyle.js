import styled from "styled-components";

import { PostStyle } from "../../../styles";

export const MainPostStyle = styled(PostStyle)`
	grid-template-columns: 1fr 24rem 24rem;
	width: 100%;
	height: ${(props) =>
		props.isMainPostOverlaid ? "100vh" : "calc(100vh - 8rem)"};
	max-height: ${(props) =>
		props.isMainPostOverlaid ? "100vh" : "calc(100vh - 8rem)"};
	overflow: hidden;

	@media (max-width: 1350px) {
		grid-template-columns: 1fr 20rem 20rem;
	}

	@media (max-width: 700px) {
		grid-column: 1 / 3;
		grid-auto-rows: min-content 1fr min-content 18rem min-content;
	}

	@media (max-width: 500px) {
		grid-auto-rows: min-content 1fr min-content 22rem min-content;

		& > *:nth-child(4) {
			padding: 1.7rem 1rem;
		}
	}
`;
