import styled from "styled-components";

import { PostActionsStyle } from "../../../styles";

export const MainPostActionsStyle = styled(PostActionsStyle)`
	gap: 1.8rem;

	@media (max-width: 1150px) {
		justify-content: flex-start;
	}
`;
