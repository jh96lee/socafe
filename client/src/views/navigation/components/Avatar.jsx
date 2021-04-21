import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { BsPerson } from "react-icons/bs";

import "./avatar.css";

const Avatar = () => {
	const { user } = useSelector((state) => state.userReducer);

	return (
		<div className="avatar">
			<BsPerson />

			<p>Sign In/Up</p>

			{/* <div className="avatar__details">
				<p>Login</p>

				<p>Register</p>
			</div> */}
		</div>
	);
};

export default Avatar;
