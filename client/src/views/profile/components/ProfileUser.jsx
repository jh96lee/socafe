import * as React from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import axios from "axios";

import { Loader, Button } from "../../shared";

const ProfleUserStyle = styled.div`
	display: flex;
	gap: 2rem;
	width: 60rem;
	margin: 2rem auto;

	& > img {
		width: 18rem;
		height: 18rem;
		object-fit: cover;
		border-radius: 50%;
	}
`;

const ProfileMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem 0;

	& > h2 {
		display: flex;
		flex-direction: column;
		color: var(--txt-1);
		line-height: 2rem;
	}

	& > h2 > span {
		color: ${(props) => (props.theme.isDarkMode ? "#8cb5ff" : "#205ece")};
		font-weight: 400;
	}
`;

const ProfileUserNumericMetadataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const ProfileUserTotalMetadataStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	& > h3 {
		color: var(--txt-1);
	}

	& > span {
		font-size: 1.4rem;
	}
`;

const ProfileUserButtonsStyle = styled.div`
	display: flex;
	gap: 1rem;
`;

const ProfileUser = () => {
	const [userData, setUserData] = React.useState({});
	const [isUserDataLoaded, setIsUserDataLoaded] = React.useState(false);

	const { userID } = useParams();

	const { user, totalFollowers, totalFollowing, totalPosts } = userData;

	const fetchProfileUser = async () => {
		const { data } = await axios({
			method: "GET",
			url: `http://localhost:8080/profile/user/${userID}`,
		});

		console.log(data);

		setUserData(data);

		setIsUserDataLoaded(true);
	};

	React.useEffect(() => {
		fetchProfileUser();
	}, []);

	return (
		<ProfleUserStyle>
			{isUserDataLoaded ? (
				<React.Fragment>
					<img
						src={user.avatar_url}
						alt={`${user.full_name}'s profile thumbnail`}
					/>

					<ProfileMetadataStyle>
						<h2>
							{user.full_name}
							<span>@{user.username}</span>
						</h2>

						{user.bio && <span>{user.bio}</span>}

						<ProfileUserNumericMetadataStyle>
							<ProfileUserTotalMetadataStyle>
								<h3>{totalPosts}</h3>

								<span>Posts</span>
							</ProfileUserTotalMetadataStyle>

							<ProfileUserTotalMetadataStyle>
								<h3>{totalFollowers}</h3>

								<span>Followers</span>
							</ProfileUserTotalMetadataStyle>

							<ProfileUserTotalMetadataStyle>
								<h3>{totalFollowing}</h3>

								<span>Following</span>
							</ProfileUserTotalMetadataStyle>
						</ProfileUserNumericMetadataStyle>

						<ProfileUserButtonsStyle>
							<Button
								buttonStyleObject={{
									buttonBackgroundColor: "transparent",
									buttonColor: "#8cb5ff",
									buttonHoverBackgroundColor: "#4e78c336",
									buttonBoxShadow: "0 0 0 1.6px #8cb5ff",
									buttonWidth: "fit-content",
									buttonPadding: "1.3rem 3.5rem",
								}}
							>
								Follow
							</Button>

							<Button
								buttonStyleObject={{
									buttonFontSize: "",
									buttonFontWeight: "",
									buttonBackgroundColor: "",
									buttonColor: "",
									buttonBoxShadow: "",
									buttonHoverBackgroundColor: "",
									buttonWidth: "",
									buttonPadding: "",
									buttonDisabledColor: "",
									buttonDisabledBackgroundColor: "",
								}}
							>
								Edit profile
							</Button>
						</ProfileUserButtonsStyle>
					</ProfileMetadataStyle>
				</React.Fragment>
			) : (
				<Loader />
			)}
		</ProfleUserStyle>
	);
};

export default ProfileUser;
