import * as React from "react";

import { PageStyle } from "../../styles";

import styled from "styled-components";
import { NotificationsSection } from "../../views/notifications-section";

const NotificationsPageStyle = styled(PageStyle)`
	min-height: calc(100vh - 8rem);
`;

const NotificationsPage = () => {
	return (
		<NotificationsPageStyle>
			<NotificationsSection />
		</NotificationsPageStyle>
	);
};

export default NotificationsPage;
