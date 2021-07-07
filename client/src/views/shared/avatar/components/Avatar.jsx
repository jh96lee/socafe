import * as React from "react";

import AvatarRing from "./AvatarRing";

import { AvatarStyle } from "../styles/AvatarStyle";
import { AvatarImageStyle } from "../styles/AvatarImageStyle";
import { AvatarBubbleStyle } from "../styles/AvatarBubbleStyle";

const Avatar = ({
	avatarURL,
	avatarSize,
	avatarOnClick,
	isAvatarBubblePresent = true,
}) => {
	// TODO: need logic for this
	const isAvatarRingFilled = true;

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
