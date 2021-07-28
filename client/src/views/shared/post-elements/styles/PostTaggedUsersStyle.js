import styled from "styled-components";

export const PostTaggedUsersStyle = styled.div`
	position: absolute;
	z-index: 10;
	left: 1.5rem;
	bottom: 1.5rem;
`;

export const PostTaggedUsersIconElementStyle = styled.div`
	background-color: #fff;
	padding: 0.9rem;
	border-radius: 50%;
	box-shadow: 0 0 0 1px #dedede;

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: #000;
	}
`;
