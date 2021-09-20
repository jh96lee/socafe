import * as React from "react";

import SelectedContent from "./SelectedContent";

import { SelectedContentsStyle } from "../styles/SelectedContentsStyle";

const SelectedContents = ({
	selectedContentsArray,
	selectedContentKey,
	removeContent,
}) => {
	return (
		<SelectedContentsStyle>
			{selectedContentsArray.map((content) => {
				return (
					<SelectedContent
						content={content}
						selectedContentKey={selectedContentKey}
						removeContent={removeContent}
					/>
				);
			})}
		</SelectedContentsStyle>
	);
};

export default SelectedContents;
