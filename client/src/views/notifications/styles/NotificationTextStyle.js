import styled from "styled-components";

export const NotificationTextStyle = styled.div`
	color: var(--char-default);
	font-size: ${(props) => (props.isFontsBigger ? "1.43rem" : "1.35rem")};
	letter-spacing: -0.6px;

	& > a {
		color: var(--char-default);
		font-size: 1.35rem;
		font-weight: 500;
		text-decoration: underline;
	}
`;
