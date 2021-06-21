import * as React from "react";
import styled from "styled-components";

const HomePostContentStyle = styled.p`
	color: var(--txt-1);
	font-size: 1.36rem;
	font-weight: 300;
	letter-spacing: -0.2px;
	line-height: 2.2rem;

	& > span {
		cursor: pointer;
	}
`;

const HomePostContent = ({ contentObject }) => {
	const [isExpanded, setIsExpanded] = React.useState(false);

	const conciseContentCreator = (content) => {
		const conciseContentCharactersArray = [];

		const contentCharactersArray = content.split(" ");

		for (let i = 0; i < contentCharactersArray.length; i++) {
			if (i === 25) {
				break;
			} else {
				conciseContentCharactersArray.push(contentCharactersArray[i]);
			}
		}

		const conciseContent = conciseContentCharactersArray.join(" ");

		return conciseContent;
	};

	const handleOnClick = () => {
		setIsExpanded((prevState) => !prevState);
	};

	return (
		<React.Fragment>
			{contentObject === undefined ||
			contentObject.content === "<br>" ? null : (
				<HomePostContentStyle>
					{isExpanded
						? contentObject.content
						: conciseContentCreator(contentObject.content)}

					{contentObject.content.split(" ").length < 25 ? null : (
						<span onClick={handleOnClick}>
							{isExpanded ? "...less" : "...more"}
						</span>
					)}
				</HomePostContentStyle>
			)}
		</React.Fragment>
	);
};

export default HomePostContent;
