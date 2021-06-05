import styled from "styled-components";

export const AvatarStyle = styled.div`
	position: relative;
`;

export const AvatarimageStyle = styled.img`
	display: block;
	width: 3.3rem;
	height: 3.3rem;
	border-radius: 50%;
	cursor: pointer;

	@media (max-width: 350px) {
		width: 3rem;
		height: 3rem;
	}
`;

export default AvatarStyle;
