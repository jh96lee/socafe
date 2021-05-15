import styled from "styled-components";

export const CaptionStyle = styled.div`
	color: var(--primary-text-color) !important;
	font-weight: 300;

	& .ql-container {
		min-height: 15rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0 1.6px var(--secondary-box-shadow-color);
		background-color: var(--primary-input-background-color);
	}

	& .ql-toolbar {
		display: none;
	}

	& .ql-container.ql-snow {
		border: 0 !important;
	}
`;
