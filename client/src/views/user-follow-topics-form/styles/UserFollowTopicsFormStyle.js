import styled from "styled-components";

import { FormStyle } from "../../../styles";

export const UserFollowTopicsFormStyle = styled(FormStyle)`
	width: ${(props) => (props.isEditingFollowTopicsForm ? "80rem" : "90rem")};

	@media (max-width: 1000px) {
		width: 90%;
	}
`;
