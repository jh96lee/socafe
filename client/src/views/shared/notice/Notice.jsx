import * as React from "react";

import { Button } from "../index";

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

			<Button
				onClick={noticeEvent}
				buttonStyleObject={{ buttonWidth: "24rem" }}
			>
				Go back home
			</Button>
		</NoticeStyle>
	);
};

export default Notice;
