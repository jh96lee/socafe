import styled from "styled-components";

export const UploadImagesStyle = styled.div`
	position: relative;
	min-width: 100%;
	max-width: 100%;
	box-shadow: 0 0 0 1.6px var(--primary-separator-color);
	background-color: var(--secondary-background-color);
	border-radius: 0.5rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: 10.5rem;
	gap: 1rem;
`;
