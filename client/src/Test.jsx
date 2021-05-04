import React from "react";
import "./test.css";

import { ReactComponent as Search } from "./assets/search.svg";

const Test = () => {
	return (
		<div className="page">
			<div className="test">
				<div className="filter">Filter</div>

				<div className="border" />

				<input type="text" placeholder="Search" />

				<div className="border" />

				<button>
					<Search />
				</button>
			</div>
		</div>
	);
};

export default Test;
