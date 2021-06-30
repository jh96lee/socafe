import * as React from "react";

import { LoaderWrapperStyle, LoaderStyle } from "./LoaderStyle";

const Loader = ({ isLoaderAbsolute, loaderSize, loaderBorderSize }) => {
	return (
		<LoaderWrapperStyle>
			<LoaderStyle
				isLoaderAbsolute={isLoaderAbsolute}
				loaderSize={loaderSize}
				loaderBorderSize={loaderBorderSize}
			/>
		</LoaderWrapperStyle>
	);
};

export default Loader;
