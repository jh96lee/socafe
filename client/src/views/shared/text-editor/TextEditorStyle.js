import styled from "styled-components";

export const TextEditorStyle = styled.div`
	& p {
		color: var(--text-1) !important;
		font-size: 1.33rem;
		font-weight: 300;
		letter-spacing: -0.4px;
		line-height: 2.2rem;
	}

	& .ql-container {
		min-height: 14rem;
		border-radius: 0.5rem;
		background-color: var(--input-default-bg-color);
		box-shadow: 0 0 0 1.2px var(--separator-1);
	}

	& .ql-toolbar {
		display: none;
	}

	& .ql-container.ql-snow {
		border: 0 !important;
	}
`;
