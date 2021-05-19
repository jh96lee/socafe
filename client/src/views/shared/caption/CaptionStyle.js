import styled from "styled-components";

export const CaptionStyle = styled.div`
	color: var(--primary-text-color) !important;
	font-weight: 300;

	& .ql-container {
		min-height: 15rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0 1.6px var(--primary-separator-color);
		background-color: var(--secondary-background-color);
	}

	& .ql-toolbar {
		display: none;
	}

	& .ql-container.ql-snow {
		border: 0 !important;
	}
`;
