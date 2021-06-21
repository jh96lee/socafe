import * as React from "react";

import { AvatarStyle } from "./AvatarStyle";

const Avatar = ({
	avatarURL,
	avatarSize,
	avatarBorderRadius,
	avatarOnClick,
}) => {
	// TODO: need logic for this
	const isAvatarRing = true;

	return (
		<AvatarStyle
			avatarSize={avatarSize}
			avatarBorderRadius={avatarBorderRadius}
			isAvatarRing={isAvatarRing}
			onClick={avatarOnClick}
		>
			<img src={avatarURL} alt="user avatar" />
		</AvatarStyle>
	);
};

export default Avatar;
