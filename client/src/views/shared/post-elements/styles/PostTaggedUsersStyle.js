import styled from "styled-components";

export const PostTaggedUsersStyle = styled.div`
	position: absolute;
	z-index: 10;
	left: 1rem;
	bottom: 1rem;
`;

export const PostTaggedUsersIconElementStyle = styled.div`
	padding: 0.9rem;
	border-radius: 50%;
	background-color: #000000db;
	cursor: pointer;

	& > svg {
		width: 2.5rem;
		height: 2.5rem;
		fill: #fff;
	}
`;
