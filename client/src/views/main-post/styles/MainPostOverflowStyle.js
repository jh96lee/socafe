import styled from "styled-components";

import { PostOverflowStyle } from "../../../styles";

export const MainPostOverflowStyle = styled(PostOverflowStyle)`
	padding: 2.7rem 4rem;

	& > *:last-child {
		margin-top: 3rem;
	}

	& > *:empty {
		display: none;
	}
`;
