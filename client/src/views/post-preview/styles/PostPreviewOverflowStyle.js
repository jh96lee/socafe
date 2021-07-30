import styled from "styled-components";

import { PostOverflowStyle } from "../../../styles";

export const PostPreviewOverflowStyle = styled(PostOverflowStyle)`
	padding: 2rem;

	& > *:last-child {
		margin-top: 1rem;
	}
`;
