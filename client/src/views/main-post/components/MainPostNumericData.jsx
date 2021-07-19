import * as React from "react";
import styled from "styled-components";

import { convertDate } from "../../../utils/date/convertDate";

import { HeartFill, ClockFilled, CommentFilled } from "../../../assets";

const MainPostNumericDataStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
`;

const MainPostNumericDataAndIconStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;

	& > svg {
		width: 2.2rem;
		height: 2.2rem;
		fill: var(--icon-1);
	}

	& > p {
		color: var(--text-1);
	}
`;

const MainPostNumericData = ({
	totalPostLikes,
	totalPostComments,
	postDate,
}) => {
	return (
		<MainPostNumericDataStyle>
			<MainPostNumericDataAndIconStyle>
				<HeartFill />

				<p>{totalPostLikes} Likes</p>
			</MainPostNumericDataAndIconStyle>

			<MainPostNumericDataAndIconStyle>
				<CommentFilled />

				<p>{totalPostComments} Comments</p>
			</MainPostNumericDataAndIconStyle>

			<MainPostNumericDataAndIconStyle>
				<ClockFilled />

				<p>{convertDate(postDate)}</p>
			</MainPostNumericDataAndIconStyle>
		</MainPostNumericDataStyle>
	);
};

export default MainPostNumericData;
