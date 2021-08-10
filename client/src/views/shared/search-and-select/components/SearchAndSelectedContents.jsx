import * as React from "react";

import SelectedContent from "./SelectedContent";

import { SearchAndSelectedContentsStyle } from "../styles/SearchAndSelectedContentsStyle";

const SearchAndSelectedContents = ({
	searchAndSelectType,
	searchAndSelectedContentsArray,
	selectedContentRemoveIconOnClickLogic,
	searchAndSelectedContentsStyleObject,
}) => {
	return (
		<SearchAndSelectedContentsStyle {...searchAndSelectedContentsStyleObject}>
			{searchAndSelectedContentsArray.map((content, idx) => {
				return (
					<SelectedContent
						key={`${searchAndSelectType}__${idx}`}
						selectedContent={content}
						selectedContentRemoveIconOnClickLogic={
							selectedContentRemoveIconOnClickLogic
						}
					/>
				);
			})}
		</SearchAndSelectedContentsStyle>
	);
};

export default SearchAndSelectedContents;
