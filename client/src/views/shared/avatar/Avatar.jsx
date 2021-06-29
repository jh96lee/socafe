import * as React from "react";

import { AvatarStyle, AvatarBubbleStyle } from "./AvatarStyle";

const Avatar = ({
	avatarURL,
	avatarSize,
	avatarBorderRadius = "50%",
	avatarOnClick,
	isAvatarBubblePresent = false,
}) => {
	// TODO: need logic for this
	const isAvatarRingFilled = false;

	return (
		<AvatarStyle
			avatarSize={avatarSize}
			avatarBorderRadius={avatarBorderRadius}
			isAvatarRingFilled={isAvatarRingFilled}
			onClick={avatarOnClick}
		>
			<img src={avatarURL} alt="user avatar" />

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
