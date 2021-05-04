import * as React from "react";
import { useHistory } from "react-router-dom";

import { NoticeStyle, NoticeButtonStyle } from "./NoticeStyle";

const Notice = ({ noticeCTA, noticeIcon }) => {
	const history = useHistory();

	const handleOnClick = () => {
		history.push("/");
	};

	React.useEffect(() => {
		let redirectToHome = setTimeout(() => {
			history.push("/");
		}, 3000);

		return () => {
			clearTimeout(redirectToHome);
		};
	}, []);

	return (
		<NoticeStyle>
			{noticeIcon}

			<h3>{noticeCTA}</h3>

			<NoticeButtonStyle onClick={handleOnClick}>Go Home</NoticeButtonStyle>
		</NoticeStyle>
	);
};

export default Notice;
