import styled from "styled-components";

export const CaptionStyle = styled.div`
	color: var(--txt-1) !important;
	font-weight: 400;

	& .ql-container {
		min-height: 14rem;
		border-radius: 0.5rem;
		box-shadow: 0 0 0 1.6px var(--separator-1);
		background-color: var(--bg-2);
	}

	& .ql-toolbar {
		display: none;
	}

	& .ql-container.ql-snow {
		border: 0 !important;
	}
`;
