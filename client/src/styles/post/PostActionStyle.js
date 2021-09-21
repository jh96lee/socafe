import styled from "styled-components";

const PostActionStyle = styled.div`
	display: flex;
	align-items: center;
	gap: ${(props) => props.postActionGap || "1.35rem"};

	& > h5 {
		color: var(--char-default);
		font-size: ${(props) => props.numericalValueFontSize};
		font-weight: ${(props) => props.numericalValueFontWeight || "500"};
	}
`;

export default PostActionStyle;
