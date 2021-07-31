import styled from "styled-components";

const LogoStyle = styled.div`
	#logo__socafe-full {
		display: block;
		width: 10rem;
		height: auto;
	}

	#logo__socafe-concise {
		display: none;
	}

	&:hover {
		cursor: pointer;
	}

	@media (max-width: 400px) {
		#logo__socafe-full {
			display: none;
		}

		#logo__socafe-concise {
			display: block;
			width: 4rem;
			height: auto;
		}
	}
`;

export default LogoStyle;
