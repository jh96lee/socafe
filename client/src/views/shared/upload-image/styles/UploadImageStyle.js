import styled from "styled-components";

export const UploadImageStyle = styled.div`
	position: relative;
	min-width: 100%;
	max-width: 100%;
	background-color: var(--bg-input-default);
	box-shadow: 0 0 0 1.2px var(--divider-default);
	border-radius: 0.5rem;
	padding: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	grid-auto-rows: 15rem;
	gap: 1rem;
`;
