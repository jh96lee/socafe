import * as React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import AvatarRing from "./AvatarRing";

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
}) => {
	const [avatarOwnerStoryIDsArray, setAvatarOwnerStoryIDsArray] =
		React.useState(null);
	const [isAvatarRingFilled, setIsAvatarRingFilled] = React.useState(false);

	const { viewedStories } = useSelector((state) => state.viewedStoriesReducer);

	const fetchStoryIDs = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/story/ids/${userID}`,
		});

		const { error } = data;

		if (!error) {
			setAvatarOwnerStoryIDsArray(data);
		}
	};

	React.useEffect(() => {
		fetchStoryIDs();
	}, []);

	// REVIEW: make sure that the typing matches (both are numbers)
	React.useEffect(() => {
		if (avatarOwnerStoryIDsArray) {
			if (avatarOwnerStoryIDsArray.length === 0) {
				setIsAvatarRingFilled(false);

				return;
			}

			if (!viewedStories[username]) {
				setIsAvatarRingFilled(true);
			} else if (viewedStories[username]) {
				const viewedAvatarOwnerStoriesArray = viewedStories[username];

				for (let i = 0; i < avatarOwnerStoryIDsArray.length; i++) {
					const avatarOwnerStoryID = avatarOwnerStoryIDsArray[i];

					if (
						viewedAvatarOwnerStoriesArray.indexOf(avatarOwnerStoryID) === -1
					) {
						setIsAvatarRingFilled(true);

						break;
					} else {
						continue;
					}
				}
			}
		}
	}, [avatarOwnerStoryIDsArray, username]);

	return (
		<AvatarStyle avatarSize={avatarSize}>
			<AvatarImageStyle
				src={avatarURL}
				avatarSize={avatarSize}
				avatarURL={avatarURL}
				onClick={avatarOnClick}
			/>

			<AvatarRing isAvatarRingFilled={isAvatarRingFilled} />

			{isAvatarBubblePresent && (
				<React.Fragment>
					<AvatarBubbleStyle
						avatarSize={avatarSize}
						isAvatarRingFilled={isAvatarRingFilled}
						bubbleOrder={1}
					/>

					<AvatarBubbleStyle
						avatarSize={avatarSize}
						isAvatarRingFilled={isAvatarRingFilled}
						bubbleOrder={2}
					/>
				</React.Fragment>
			)}
		</AvatarStyle>
	);
};

export default Avatar;
