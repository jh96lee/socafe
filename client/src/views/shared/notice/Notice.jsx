import * as React from "react";

import { NoticeStyle, NoticeButtonStyle } from "./NoticeStyle";

const Notice = ({ noticeEvent, noticeIcon, noticeCTA }) => {
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
			{noticeIcon}

			<h1>{noticeCTA}</h1>

			<NoticeButtonStyle onClick={noticeEvent}>Go back home</NoticeButtonStyle>
		</NoticeStyle>
	);
};

export default Notice;
