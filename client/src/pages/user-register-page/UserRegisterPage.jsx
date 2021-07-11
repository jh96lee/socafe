import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";

import { Notice } from "../../views/shared";
import { UserRegisterForm } from "../../views/user-register-form";
import { UserFollowTopicsForm } from "../../views/user-follow-topics-form";

import { setUser } from "../../redux/user/userAction";
import { resetUserRegisterForm } from "../../redux/user-register/user-register-form/userRegisterFormAction";
import { resetUserRegisterStepIndex } from "../../redux/user-register/user-register-step/userRegisterStepAction";

import { Congratulation } from "../../assets";

const UserRegisterPageStyle = styled.div`
	position: relative;
	grid-row: 2 / 3;
	grid-column: 2 / 3;
`;

const UserRegisterPage = () => {
	const dispatch = useDispatch();

	const { userRegisterStepIndex } = useSelector(
		(state) => state.userRegisterStepReducer
	);

	const history = useHistory();

	const noticeEvent = () => {
		dispatch(setUser());

		history.push("/");
	};

	React.useEffect(() => {
		return () => {
			dispatch(resetUserRegisterForm());

			dispatch(resetUserRegisterStepIndex());
		};
	}, []);

	const userRegisterForms = {
		0: <UserRegisterForm />,
		1: <UserFollowTopicsForm />,
		2: (
			<Notice
				noticeEvent={noticeEvent}
				noticeIcon={<Congratulation />}
				noticeMainMessage={"Success!"}
				noticeSubMessage="Congratulations, your account has been successfully created. You can now log in and explore various posts and products."
			/>
		),
	};

	return (
		<UserRegisterPageStyle>
			{userRegisterForms[userRegisterStepIndex]}
		</UserRegisterPageStyle>
	);
};

export default UserRegisterPage;
