import styled from "styled-components";

export const MainPostCommentCenterStyle = styled.div`
	display: flex;
	flex-direction: column;

	& > :nth-child(2) {
		margin: 0.9rem 0 1.3rem 0;
	}

	& span {
		font-size: 1.35rem;
	}
`;

export const MainPostCommentCenterHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

export const DotStyle = styled.div`
	height: 3px;
	width: 3px;
	background-color: grey;
	border-radius: 50%;
`;
