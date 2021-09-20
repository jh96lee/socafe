import * as React from "react";
import axios from "axios";

import { Loader } from "../../shared";
import HomeFeedSuggestedUser from "./HomeFeedSuggestedUser";

import { fetchToken } from "../../../utils";

import {
	HomeFeedSectionStyle,
	HomeFeedSectionHeaderStyle,
	HomeFeedSectionContentsStyle,
} from "../../../styles";

const HomeFeedUserSuggestions = () => {
	const [userSuggestions, setUserSuggestions] = React.useState([]);
	const [isUserSuggestionsLoaded, setIsUserSuggestionsLoaded] =
		React.useState(false);

	const fetchUserSuggestions = async () => {
		setIsUserSuggestionsLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/user/suggestions",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setUserSuggestions(data);
		}

		setIsUserSuggestionsLoaded(true);
	};

	React.useEffect(() => {
		fetchUserSuggestions();
	}, []);

	return (
		<HomeFeedSectionStyle>
			<HomeFeedSectionHeaderStyle>
				<h4>Suggestions</h4>
			</HomeFeedSectionHeaderStyle>

			<HomeFeedSectionContentsStyle>
				{isUserSuggestionsLoaded ? (
					<React.Fragment>
						{userSuggestions.map((user) => {
							return <HomeFeedSuggestedUser suggestedUser={user} />;
						})}
					</React.Fragment>
				) : (
					<Loader />
				)}
			</HomeFeedSectionContentsStyle>
		</HomeFeedSectionStyle>
	);
};

export default HomeFeedUserSuggestions;
