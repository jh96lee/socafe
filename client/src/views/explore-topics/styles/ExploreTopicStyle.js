import styled from "styled-components";

export const ExploreTopicStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.7rem;
	width: fit-content;
	padding: 0.8rem 1.5rem;
	border-radius: 2rem;
	box-shadow: ${(props) =>
		props.isSelectedTopic && "0 0 0 1.2px var(--divider-2)"};

	& > p {
		color: ${(props) =>
			props.isSelectedTopic ? "var(--char-default)" : "var(--char-2)"};
		font-size: 1.4rem;
		font-weight: 500;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--bg-1-hover);
	}
`;
