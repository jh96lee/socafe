import * as React from "react";
import axios from "axios";

import { Loader } from "../../shared";
import HomeFeedSuggestedUser from "./HomeFeedSuggestedUser";

import { fetchToken } from "../../../utils/cookie/fetchToken";

import {
	HomeFeedUserSuggestionsStyle,
	HomeFeedUserSuggestionsWrapperStyle,
} from "../styles/HomeFeedUserSuggestionsStyle";

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
		<HomeFeedUserSuggestionsStyle>
			<h5>Suggestions</h5>

			{isUserSuggestionsLoaded ? (
				<HomeFeedUserSuggestionsWrapperStyle>
					{userSuggestions.map((user) => {
						return <HomeFeedSuggestedUser suggestedUser={user} />;
					})}
				</HomeFeedUserSuggestionsWrapperStyle>
			) : (
				<Loader />
			)}
		</HomeFeedUserSuggestionsStyle>
	);
};

export default HomeFeedUserSuggestions;
