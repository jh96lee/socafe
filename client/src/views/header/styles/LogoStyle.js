import styled from "styled-components";

const LogoStyle = styled.div`
	& svg {
		display: block;
		width: 10rem;
		height: 3rem;
		cursor: pointer;
	}

	@media (max-width: 350px) {
		& svg {
			width: 8rem;
		}
	}
`;

export default LogoStyle;
