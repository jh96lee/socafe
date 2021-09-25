import * as React from "react";

import { Button, Icon } from "../index";

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
			{/* FIX: ui */}
			<Icon
				iconRole="presentation"
				iconElementStyleObject={{
					elementPadding: "1.5rem",
					elementBackgroundColor: "var(--icon-presentation-bg-color)",
					elementBorderRadius: "1rem",
					iconColor: "var(--char-presentation-color)",
					iconSize: "5rem",
				}}
			>
				{noticeIcon}
			</Icon>

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
