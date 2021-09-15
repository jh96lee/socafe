import styled from "styled-components";

export const TextEditorStyle = styled.div`
	& p {
		color: var(--char-default) !important;
		font-size: 1.4rem;
		line-height: 2.2rem;
	}

	& .ql-container {
		min-height: 14rem;
		border-radius: 0.5rem;
		background-color: var(--input-default-bg-color);
		box-shadow: 0 0 0 1.4px var(--divider-default);
	}

	& .ql-toolbar {
		display: none;
	}

	& .ql-container.ql-snow {
		border: 0 !important;
	}
`;
