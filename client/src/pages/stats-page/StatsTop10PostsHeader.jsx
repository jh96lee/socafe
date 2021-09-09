import * as React from "react";
import styled from "styled-components";
import { useDropdown } from "../../hooks";

import { Down } from "../../assets";

const StatsTop10PostsHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StatsGraphHeaderDropdownStyle = styled.div`
	position: absolute;
	top: calc(100% + 6px);
	right: 0;
	z-index: 15;
	display: flex;
	flex-direction: column;
	gap: 0.3rem;
	background-color: var(--bg-1);
	padding: 0.5rem;
	width: 105%;
	min-width: fit-content;
	border-radius: 1rem;
	box-shadow: 0 0 0 1.6px var(--separator-1);

	& > p {
		font-size: 1.5rem;
		padding: 1rem;
		border-radius: 1rem;
	}

	& > p:hover {
		cursor: pointer;
		background-color: aliceblue;
	}
`;

const StatsGraphContentTypeStyle = styled.div`
	position: relative;
	padding: 1rem 1.3rem;
	border-radius: 1.5rem;
	box-shadow: 0 0 0 1.8px #b9c5d0;
	width: fit-content;

	& > p {
		display: flex;
		align-items: center;
		gap: 1rem;
		font-size: 1.5rem;

		& > svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}
`;

const StatsTop10PostsHeader = ({ mostBy, setMostBy }) => {
	const { isDropdownMenuOpen } = useDropdown(
		"stats-top-10-posts-dropdown-trigger",
		"stats-top-10-posts-dropdown-menu",
		true
	);

	const mostByArray = ["views", "likes", "comments"];

	return (
		<StatsTop10PostsHeaderStyle>
			<h2>Top 10 most {attachEDToString(mostBy)} posts</h2>

			<StatsGraphContentTypeStyle id="stats-top-10-posts-dropdown-trigger">
				<p>
					{capitalizeFirstLetter(mostBy)} <Down />
				</p>

				{isDropdownMenuOpen && (
					<StatsGraphHeaderDropdownStyle id="stats-top-10-posts-dropdown-menu">
						{mostByArray.map((value, idx) => {
							return (
								<p
									key={`${value}__${idx}`}
									onClick={() => {
										setMostBy(value);
									}}
								>
									{capitalizeFirstLetter(value)}
								</p>
							);
						})}
					</StatsGraphHeaderDropdownStyle>
				)}
			</StatsGraphContentTypeStyle>
		</StatsTop10PostsHeaderStyle>
	);
};

const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

const attachEDToString = (string) => {
	const sliceEnd = string.length - 1;

	const slicedString = string.slice(0, sliceEnd);

	return slicedString + "ed";
};

export default StatsTop10PostsHeader;
