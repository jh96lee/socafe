import * as React from "react";

import { LoaderWrapperStyle, LoaderStyle } from "./LoaderStyle";

const Loader = ({ loaderSize, loaderBorderSize }) => {
	return (
		<LoaderWrapperStyle>
			<LoaderStyle
				loaderSize={loaderSize}
				loaderBorderSize={loaderBorderSize}
			/>
		</LoaderWrapperStyle>
	);
};

export default Loader;
