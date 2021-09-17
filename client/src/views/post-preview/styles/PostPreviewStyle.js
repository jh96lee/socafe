import styled from "styled-components";

import { PostStyle } from "../../../styles";

export const PostPreviewStyle = styled(PostStyle)`
	grid-template-columns: 1fr 18.5rem 18.5rem;
	width: 100rem;
	height: 65rem;
	max-height: 65rem;
	overflow: hidden;
	margin: auto;
	border-radius: 2rem;
	border: 1px solid var(--divider-default);
	box-shadow: 0 2px 12px
		${(props) => (props.theme.isDarkMode ? "#000" : "#00000033")};

	@media (max-width: 1500px) {
		width: 90%;
	}
`;
