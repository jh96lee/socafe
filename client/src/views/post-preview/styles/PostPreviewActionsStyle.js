import styled from "styled-components";

export const PostActionsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.4rem;

	& svg {
		fill: var(--icon-default-color);
		width: 2.2rem;
		height: 2.2rem;
		cursor: pointer;
	}
`;

export const PostPreviewLikeStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.7rem;
	color: var(--text-1);
	background-color: #ff6aa230;
	padding: 1rem 1.2rem;
	border-radius: 1rem;

	& > svg {
		width: 2rem;
		height: 2rem;
		fill: #ff6398;
	}

	& > h6 {
		color: #ff6398;
	}

	&:hover {
		cursor: pointer;
	}
`;
