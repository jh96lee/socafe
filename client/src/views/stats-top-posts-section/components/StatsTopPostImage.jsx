import * as React from "react";

import { StatsTopPostImageStyle } from "../styles/StatsTopPostImageStyle";

const StatsTopPostImage = ({ postImages }) => {
	return (
		<StatsTopPostImageStyle>
			<img src={postImages[0].image_url} alt="post" />
		</StatsTopPostImageStyle>
	);
};

export default StatsTopPostImage;
