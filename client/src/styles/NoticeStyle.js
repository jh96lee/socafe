import styled from "styled-components";

const NoticeStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 70rem;
	padding: 2rem;

	h1 {
		font-size: 2.5rem;
		color: white;
		letter-spacing: -0.8px;
	}

	svg {
		color: ${(props) => props.svgColor};
		fill: ${(props) => props.svgColor};
		width: 20rem;
		height: 20rem;
		margin-bottom: 1rem;
	}
`;

export default NoticeStyle;
