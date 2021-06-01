import styled from "styled-components";

const PostImagesDirectionIconElementStyle = styled.div`
	position: absolute;
	z-index: 5;
	top: 50%;
	transform: translateY(-50%);
	padding: 1.3rem;
	border-radius: 50%;
	background-color: #f5f5f5;
	box-shadow: 0 0 0 1px #b9c8cf;

	& svg {
		fill: #000;
		width: 1.8rem;
		height: 1.8rem;
	}

	&:hover {
		cursor: pointer;
	}
`;

export default PostImagesDirectionIconElementStyle;
