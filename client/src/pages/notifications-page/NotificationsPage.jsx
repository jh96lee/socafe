import * as React from "react";

import { PageStyle } from "../../styles";

import styled from "styled-components";
import NotificationsForm from "../../views/notifications-form/components/NotificationsForm";

const NotificationsPageStyle = styled(PageStyle)`
	min-height: calc(100vh - 8rem);
`;

const NotificationsPage = () => {
	return (
		<NotificationsPageStyle>
			<NotificationsForm />
		</NotificationsPageStyle>
	);
};

export default NotificationsPage;
