import styled from "styled-components";

export const PostTopicsStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

export const PostTopicStyle = styled.p`
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--char-default);

	&:hover {
		cursor: pointer;
		text-decoration: underline;
	}
`;
