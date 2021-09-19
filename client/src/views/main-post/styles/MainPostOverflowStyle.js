import styled from "styled-components";

import { PostOverflowStyle } from "../../../styles";

export const MainPostOverflowStyle = styled(PostOverflowStyle)`
	padding: 2.7rem 2rem;

	& > *:not(:last-child) {
		padding: 0 2rem;
	}

	& > *:last-child {
		margin-top: 2rem;
	}

	& > *:empty {
		display: none;
	}
`;
