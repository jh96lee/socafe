import styled from "styled-components";

import { PageSidebarBodyStyle } from "../../../styles";

export const AddStoryPageSidebarBodyStyle = styled(PageSidebarBodyStyle)`
	& > *:first-child {
		padding: 0 1rem;
		margin-bottom: 1.8rem;
	}

	& > *:last-child {
		margin-top: 0.6rem;
	}
`;
