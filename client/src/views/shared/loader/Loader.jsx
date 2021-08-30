import * as React from "react";

import { LoaderWrapperStyle, LoaderStyle } from "./LoaderStyle";

const Loader = ({
	isLoaderAbsolute,
	loaderSize,
	loaderBorderSize,
	loaderStyleObject,
}) => {
	return (
		<LoaderWrapperStyle
			isLoaderAbsolute={isLoaderAbsolute}
			{...loaderStyleObject}
		>
			<LoaderStyle
				loaderSize={loaderSize}
				loaderBorderSize={loaderBorderSize}
			/>
		</LoaderWrapperStyle>
	);
};

export default Loader;
