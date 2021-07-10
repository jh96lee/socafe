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

			<circle
				cx="50"
				cy="50"
				r="45.5"
				stroke={
					isAvatarRingFilled ? "url('#ring')" : "var(--story-empty-color)"
				}
				fill="none"
			/>
		</svg>
	);
};

export default AvatarRing;
