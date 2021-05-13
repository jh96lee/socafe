import styled from "styled-components";

export const UploadImagesStyle = styled.div`
	position: relative;
	min-width: 100%;
	max-width: 100%;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#1d1f25" : "#f3f9ff"};
	border-radius: 0.5rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 10.5rem;
	gap: 1rem;
`;
