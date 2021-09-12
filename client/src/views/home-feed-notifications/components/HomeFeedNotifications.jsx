import * as React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { Notifications } from "../../notifications";
import { Loader } from "../../shared";

import { fetchToken } from "../../../utils/cookie/fetchToken";

const HomeFeedNotificationsStyle = styled.div`
	padding: 0 1.8rem;

	& > h5 {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--text-1);
		margin-bottom: 1rem;

		& > span {
			padding: 0.4rem 0.7rem;
			border-radius: 1rem;

			&:hover {
				cursor: pointer;
				background-color: grey;
			}
		}
	}
`;

const HomeFeedNotifications = () => {
	const [homeFeedNotifications, setHomeFeedNotifications] = React.useState([]);
	const [isHomeFeedNotificationsLoaded, setIsHomeFeedNotificationsLoaded] =
		React.useState(false);

	const history = useHistory();

	const fetchHomeFeedNotifications = async () => {
		setIsHomeFeedNotificationsLoaded(false);

		const token = fetchToken();

		const { data } = await axios({
			method: "GET",
			url: "http://localhost:8080/notification/feed",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		const { error } = data;

		if (!error) {
			setHomeFeedNotifications(data);
		}

		setIsHomeFeedNotificationsLoaded(true);
	};

	React.useEffect(() => {
		fetchHomeFeedNotifications();
	}, []);

	const handleMoreSpanOnClick = () => {
		history.push("/notifications");
	};

	return (
		<HomeFeedNotificationsStyle>
			{isHomeFeedNotificationsLoaded ? (
				<React.Fragment>
					<h5>
						Notifications <span onClick={handleMoreSpanOnClick}>More</span>
					</h5>

					<Notifications notifications={homeFeedNotifications} />
				</React.Fragment>
			) : (
				<Loader />
			)}
		</HomeFeedNotificationsStyle>
	);
};

export default HomeFeedNotifications;
