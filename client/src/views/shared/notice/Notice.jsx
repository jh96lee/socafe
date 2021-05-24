import * as React from "react";

import { ButtonStyle } from "../../../styles";
import { NoticeStyle, NoticeIconStyle } from "./NoticeStyle";

const Notice = ({
	noticeEvent,
	noticeIcon,
	noticeMainMessage,
	noticeSubMessage,
}) => {
	React.useEffect(() => {
		let noticeTimeout = setTimeout(() => {
			noticeEvent();
		}, 3000);

		return () => {
			clearTimeout(noticeTimeout);
		};
	}, []);

	return (
		<NoticeStyle>
			<NoticeIconStyle>{noticeIcon}</NoticeIconStyle>

			<h2>{noticeMainMessage}</h2>

			{noticeSubMessage}

			<ButtonStyle onClick={noticeEvent} width="24rem">
				Go back home
			</ButtonStyle>
		</NoticeStyle>
	);
};

export default Notice;
