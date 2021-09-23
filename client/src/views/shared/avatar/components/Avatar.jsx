import * as React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AvatarRing from "./AvatarRing";

import {
	fetchCurrentUserStories,
	resetHomeFeedStories,
} from "../../../../redux/home-feed/home-feed-stories/homeFeedStoriesAction";

import { AvatarStyle } from "../styles/AvatarStyle";
import { AvatarImageStyle } from "../styles/AvatarImageStyle";
import { AvatarBubbleStyle } from "../styles/AvatarBubbleStyle";

const Avatar = ({
	userID,
	username,
	avatarURL,
	avatarSize,
	avatarOnClick,
	isAvatarBubblePresent = false,
	isAvatarHomeFeedStory = false,
}) => {
	const [storyIDsArray, setStoryIDsArray] = React.useState(null);
	const [isRingFilled, setIsRingFilled] = React.useState(false);

	const dispatch = useDispatch();

	const history = useHistory();

	const { viewedStories } = useSelector((state) => state.viewedStoriesReducer);

	const fetchStoryIDs = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/story/ids/${userID}`,
		});

		const { error } = data;

		if (!error) {
			setStoryIDsArray(data);
		}
	};

	React.useEffect(() => {
		fetchStoryIDs();

		// dispatch(fetchCurrentUserStories(userID))
	}, []);

	React.useEffect(() => {
		// REVIEW: this means this avatar's user does not have a story, therefore ring should be empty
		if (!storyIDsArray || storyIDsArray.length === 0) {
			setIsRingFilled(false);

			return;
		}

		// REVIEW: if username does not exist with the viewedStories object, that means, the logged in user did
		// REVIEW: not view this avatar's user's stories
		if (!viewedStories[username]) {
			setIsRingFilled(true);
		}

		if (viewedStories[username]) {
			const currentAvatarUserViewedStoryIDsArray = viewedStories[username];

			for (let i = 0; i < storyIDsArray.length; i++) {
				const storyID = storyIDsArray[i];

				if (currentAvatarUserViewedStoryIDsArray.indexOf(storyID) === -1) {
					setIsRingFilled(true);

					break;
				} else {
					continue;
				}
			}
		}
	}, [viewedStories, storyIDsArray, username]);

	const handleAvatarOnClick = () => {
		if (!isAvatarHomeFeedStory && storyIDsArray[0]) {
			dispatch(resetHomeFeedStories());

			history.push(`/story/${userID}/${storyIDsArray[0]}`);
		}
	};

	return (
		<AvatarStyle
			avatarSize={avatarSize}
			onClick={avatarOnClick ? avatarOnClick : handleAvatarOnClick}
		>
			<AvatarImageStyle
				src={avatarURL}
				avatarSize={avatarSize}
				avatarURL={avatarURL}
			/>

			<AvatarRing isAvatarRingFilled={isRingFilled} />

			{isAvatarBubblePresent && (
				<React.Fragment>
					<AvatarBubbleStyle
						avatarSize={avatarSize}
						isAvatarRingFilled={isRingFilled}
						bubbleOrder={1}
					/>

					<AvatarBubbleStyle
						avatarSize={avatarSize}
						isAvatarRingFilled={isRingFilled}
						bubbleOrder={2}
					/>
				</React.Fragment>
			)}
		</AvatarStyle>
	);
};

export default Avatar;
