import styled from "styled-components";

export const PostPreviewStyle = styled.div`
	position: relative;
	display: flex;
	background: var(--bg-1);
	width: 108rem;
	height: 70rem;
	overflow: scroll;
	margin: auto;
	border-radius: 2rem;
	border: 1px solid var(--input-default-separator-color);
	box-shadow: 0 2px 12px
		${(props) => (props.theme.isDarkMode ? "#000" : "#00000033")};

	& > *:nth-child(1) {
		width: 68%;
	}

	& > *:nth-child(2) {
		width: 32%;
	}

	@media (max-width: 1600px) {
		width: 90%;

		& > *:nth-child(1) {
			width: 85%;
		}

		& > *:nth-child(2) {
			width: 40rem;
		}
	}

	@media (max-width: 1300px) {
		width: 90%;

		& > *:nth-child(1) {
			width: 95%;
		}

		& > *:nth-child(2) {
			width: 40rem;
		}
	}

	@media (max-width: 1000px) {
		display: none;
	}
`;
