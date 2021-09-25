import styled from "styled-components";

import { PostActionsStyle } from "../../../styles";

export const PostPreviewActionsStyle = styled(PostActionsStyle)`
	gap: 1.8rem;

	@media (max-width: 1350px) {
		justify-content: flex-start;
	}
`;
