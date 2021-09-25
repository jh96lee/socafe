import * as React from "react";
import { useSelector } from "react-redux";

import HomeFeedSuggestedUser from "./HomeFeedSuggestedUser";
import { WrapperMessage } from "../../shared";

import {
	HomeFeedSectionStyle,
	HomeFeedSectionHeaderStyle,
	HomeFeedSectionContentsStyle,
} from "../../../styles";

import { ThinkingColored } from "../../../assets";

const HomeFeedUserSuggestions = () => {
	const { homeFeedUserSuggestions } = useSelector(
		(state) => state.homeFeedUserSuggestionsReducer
	);

	return (
		<HomeFeedSectionStyle>
			<HomeFeedSectionHeaderStyle>
				<h4>Suggestions</h4>
			</HomeFeedSectionHeaderStyle>

			<HomeFeedSectionContentsStyle>
				{homeFeedUserSuggestions.length > 0 ? (
					<React.Fragment>
						{homeFeedUserSuggestions.map((user) => {
							return <HomeFeedSuggestedUser suggestedUser={user} />;
						})}
					</React.Fragment>
				) : (
					<WrapperMessage>
						<ThinkingColored /> Hmmm...
					</WrapperMessage>
				)}
			</HomeFeedSectionContentsStyle>
		</HomeFeedSectionStyle>
	);
};

export default HomeFeedUserSuggestions;
