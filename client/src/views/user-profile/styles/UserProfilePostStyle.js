import styled from "styled-components";

export const UserProfilePostStyle = styled.div`
	position: relative;
	border-radius: 1rem;
	overflow: hidden;

	& > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	& > #user-profile-post__metadata {
		display: none;
	}

	&:hover > #user-profile-post__metadata {
		display: flex;
		cursor: pointer;
	}
`;

export const UserProfilePostMetadataStyle = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	justify-content: center;
	align-items: center;
	gap: 2rem;
	background-color: #000000b8;
	width: 103%;
	height: 103%;
`;

export const UserProfilePostTotalStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	color: #fff;
	fill: #fff;

	& > svg {
		width: 2.8rem;
		height: 2.8rem;
	}

	& > #user-profile-post-total__heart {
		fill: red;
	}
`;
