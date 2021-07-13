import * as React from "react";

import { Button, IconElement } from "../index";

import { NoticeStyle } from "./NoticeStyle";

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
			<IconElement
				iconRole="presentation"
				iconElementStyleObject={{
					elementPadding: "1.5rem",
					elementBackgroundColor: "var(--icon-presentation-bg-color)",
					elementBorderRadius: "1rem",
					iconColor: "var(--icon-presentation-color)",
					iconSize: "5rem",
				}}
			>
				{noticeIcon}
			</IconElement>

			<h2>{noticeMainMessage}</h2>

			<p>{noticeSubMessage}</p>

			<Button
				onClick={noticeEvent}
				buttonStyleObject={{ buttonWidth: "24rem" }}
			>
				Go to home
			</Button>
		</NoticeStyle>
	);
};

export default Notice;
