import * as React from "react";
import { NavLink } from "react-router-dom";

import { Icon } from "../../shared";

const NavigationLink = ({ iconSize, url, icon, label }) => {
	return (
		<NavLink exact to={url}>
			<Icon
				iconRole="presentation"
				iconType="presentation"
				iconSize={iconSize}
				iconFill="#000"
			>
				{icon}
			</Icon>

			<p>{label}</p>
		</NavLink>
	);
};

export default NavigationLink;
