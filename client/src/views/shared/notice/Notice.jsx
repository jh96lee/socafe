import * as React from "react";

import { ButtonStyle } from "../../../styles";
import { NoticeStyle } from "./NoticeStyle";

const Notice = ({ noticeEvent, noticeIcon, noticeCTA }) => {
	// React.useEffect(() => {
	// 	let noticeTimeout = setTimeout(() => {
	// 		noticeEvent();
	// 	}, 3000);

	// 	return () => {
	// 		clearTimeout(noticeTimeout);
	// 	};
	// }, []);

	return (
		<NoticeStyle>
			{noticeIcon}

			<h2>{noticeCTA}</h2>

			<ButtonStyle onClick={noticeEvent} width="24rem">
				Go back home
			</ButtonStyle>
		</NoticeStyle>
	);
};

export default Notice;
