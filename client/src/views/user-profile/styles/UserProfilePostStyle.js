import styled from "styled-components";

export const UserProfilePostStyle = styled.div`
	position: relative;
	z-index: 5;
	border-radius: 1rem;
	overflow: hidden;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > #user-profile-post__post-metadata-overlay {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 2.5rem;
	}
`;

export const UserProfilePostMetadataOverlayStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	display: none;
	background-color: #0000007d;
	width: 100%;
	height: 100%;
`;

export const UserProfilePostMetadataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 0.8rem;

	& > svg {
		fill: #fff;
		width: 2.3rem;
		height: 2.3rem;
	}

	& > #user-profile-post__heart {
		fill: var(--likes-icon-color);
	}

	& > h4 {
		color: #fff;
	}
`;
