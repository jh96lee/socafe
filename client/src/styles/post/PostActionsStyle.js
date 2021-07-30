import styled from "styled-components";

const PostActionsStyle = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media (max-width: 500px) {
		& svg {
			width: 1.8rem;
			height: 1.8rem;
		}
	}
`;

export default PostActionsStyle;
