import * as React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { DropdownMenu } from "../../views/shared";

import {
	setNDaysAgo,
	setContentType,
} from "../../redux/stats/stats-graph/statsGraphAction";

import { useDropdown } from "../../hooks";

import { Down } from "../../assets";

const StatsGraphHeaderStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr max-content max-content;
	gap: 1rem;

	& > h3 {
		color: var(--text-1);
	}
`;

const StatsGraphLastNDaysStyle = styled.div`
	position: relative;
	padding: 1rem 1.3rem;
	border-radius: 1.5rem;
	box-shadow: 0 0 0 1.8px #b9c5d0;

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

const StatsGraphHeader = () => {
	const dispatch = useDispatch();

	const { contentType, nDaysAgo } = useSelector(
		(state) => state.statsGraphReducer
	);

	const { isDropdownMenuOpen: isLastNDaysDropdownOpen } = useDropdown(
		"stats-graph-last-n-days-dropdown-trigger",
		"stats-graph-last-n-days-dropdown-menu",
		true
	);

	const { isDropdownMenuOpen: isContentTypeDropdownOpen } = useDropdown(
		"stats-graph-content-type-dropdown-trigger",
		"stats-graph-content-type-dropdown-menu",
		true
	);

	const daysArray = [7, 14, 21, 30];
	const contentTypeArray = ["post", "story"];

	return (
		<StatsGraphHeaderStyle>
			<h2>
				Your {contentType === "post" ? "posts" : "stories"} performance over
				time
			</h2>

			<StatsGraphLastNDaysStyle id="stats-graph-last-n-days-dropdown-trigger">
				<p>
					Last {nDaysAgo} Days <Down />
				</p>

				{isLastNDaysDropdownOpen && (
					<StatsGraphHeaderDropdownStyle
						dropdownMenuID="stats-graph-last-n-days-dropdown-menu"
						dropdownMenuStyleObject={{
							menuTop: "calc(100% + 6px)",
							menuLeft: "0",
							menuWidth: "100%",
						}}
					>
						{daysArray.map((day) => {
							return (
								<p
									onClick={() => {
										dispatch(setNDaysAgo(day));
									}}
								>
									Last {day} Days
								</p>
							);
						})}
					</StatsGraphHeaderDropdownStyle>
				)}
			</StatsGraphLastNDaysStyle>

			<StatsGraphContentTypeStyle id="stats-graph-content-type-dropdown-trigger">
				<p>
					{/* FIX */}
					{contentType === "post" ? "Post" : "Story"} <Down />
				</p>

				{isContentTypeDropdownOpen && (
					<StatsGraphHeaderDropdownStyle
						dropdownMenuID="stats-graph-content-type-dropdown-menu"
						dropdownMenuStyleObject={{
							menuTop: "calc(100% + 6px)",
							menuLeft: "0",
							menuWidth: "100%",
						}}
					>
						{contentTypeArray.map((contentType) => {
							return (
								<p
									onClick={() => {
										dispatch(setContentType(contentType));
									}}
								>
									{contentType}
								</p>
							);
						})}
					</StatsGraphHeaderDropdownStyle>
				)}
			</StatsGraphContentTypeStyle>
		</StatsGraphHeaderStyle>
	);
};

export default StatsGraphHeader;
