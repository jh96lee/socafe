import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Loader } from "../../shared";
import MainPostLeft from "./MainPostLeft";
import MainPostRight from "./MainPostRight";

import { fetchMainPost } from "../../../redux/main-post/mainPostAction";

import { MainPostStyle } from "../styles/MainPostStyle";

const MainPost = () => {
	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.userReducer);

	const userID = user ? user.id : 0;

	const { postID } = useParams();

	const { isMainPostLoaded } = useSelector((state) => state.mainPostReducer);

	React.useEffect(() => {
		dispatch(fetchMainPost(postID, userID));
	}, [postID]);

	return (
		<MainPostStyle>
			{isMainPostLoaded ? (
				<React.Fragment>
					<MainPostLeft />

					<MainPostRight />
				</React.Fragment>
			) : (
				<Loader />
			)}
		</MainPostStyle>
	);
};

export default MainPost;
