import * as React from "react";

const AvatarRing = ({ isAvatarRingFilled }) => {
	return (
		<svg viewBox="0 0 100 100">
			<defs>
				<linearGradient id="ring" gradientTransform="rotate(90)">
					<stop offset="5%" stop-color="#0d69ff" />

					<stop offset="95%" stop-color="#16b3ff" />
				</linearGradient>
			</defs>

			<defs>
				<linearGradient id="empty" gradientTransform="rotate(90)">
					<stop offset="5%" stop-color="#3a3e42" />

					<stop offset="95%" stop-color="#dcdcdc" />
				</linearGradient>
			</defs>

			<circle
				cx="50"
				cy="50"
				r="45.5"
				stroke={isAvatarRingFilled ? "url('#ring')" : "var(--bg-empty-story)"}
				fill="none"
			/>
		</svg>
	);
};

export default AvatarRing;
