import * as React from "react";
import { useHistory } from "react-router-dom";

import { NoticeStyle } from "../../styles";

const Notice = ({ redirectURL, svgColor, message, noticeSVG }) => {
	const history = useHistory();

	React.useEffect(() => {
		const redirectTimer = setTimeout(() => {
			history.push(redirectURL);
		}, 2500);

		return () => clearTimeout(redirectTimer);
	}, []);

	return (
		<NoticeStyle svgColor={svgColor}>
			{noticeSVG}

			<h1>{message}</h1>
		</NoticeStyle>
	);
};

export default Notice;
