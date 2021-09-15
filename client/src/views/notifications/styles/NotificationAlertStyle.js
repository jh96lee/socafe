import styled from "styled-components";

export const NotificationAlertStyle = styled.div`
	width: 0.75rem;
	height: 0.75rem;
	border-radius: 50%;
	background-color: ${(props) =>
		props.theme.isDarkMode ? "#ff4567" : "#ff385c"};
	align-self: center;
`;
