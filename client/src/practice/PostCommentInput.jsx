import * as React from "react";
import styled from "styled-components";

import { IconElement } from "../views/shared";

import { useSearch } from "../hooks";

import { CloseAlt } from "../assets";

const PostCommentInputStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	color: var(--text-1);
	margin: 4rem auto;
`;

const PostCommentSelectInputStyle = styled.input`
	font-size: 1.4rem;
	width: 100%;
	padding: 1.3rem;
	border: none;
	border-radius: 1rem;
	outline: none;
`;

const PostCommentContentEditableStyle = styled.div`
	color: var(--text-1);
	background-color: var(--input-default-bg-color);
	width: 40rem;
	height: 20rem;
	padding: 1.5rem;
	border: var(--input-default-separator-color);
	border-radius: 1rem;
	font-size: 1.4rem;
	outline: none;

	& a {
		font-size: 1.4rem;
		font-weight: 500;
		color: #63cfff;
	}
`;

const PostCommentTextArea = styled.div`
	color: var(--text-1);
	background-color: var(--input-default-bg-color);
	width: 40rem;
	height: 20rem;
	padding: 1.5rem;
	border: var(--input-default-separator-color);
	border-radius: 1rem;
	font-size: 1.4rem;
	outline: none;

	& a {
		font-size: 1.4rem;
		font-weight: 500;
		color: #63cfff;
	}
`;

const PostCommentResultsStyle = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	display: flex;
	flex-direction: column;
	gap: 0.2rem;
	transform: translate(-50%, -50%);
	padding: 2rem;
	background-color: var(--bg-1);
	width: 35rem;
	height: 25rem;
	border-radius: 1rem;
	overflow: scroll;
	box-shadow: 0 0 10px 2px var(--input-default-separator-color);
`;

const PostCommentResultStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	padding: 0.6rem;
	border-radius: 1rem;

	& > img {
		width: 4.5rem;
		height: 4.5rem;
		object-fit: cover;
		border-radius: 1rem;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--secondary-element-hover-bg-color);
	}
`;

const PostCommentSubmitButtonStyle = styled.button`
	font-size: 1.4rem;
	font-weight: 500;
	color: #fff;
	background-color: var(--button-default-bg-color);
	padding: 1.4rem 0;
	border: none;
	border-radius: 1rem;
`;

const PostCommentInput = () => {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
	const [selectedTopicsArray, setSelectedTopicsArray] = React.useState([]);
	const [commentNodesArray, setCommentNodesArray] = React.useState([]);

	const { searchResultsArray, handleSearchResultsOnChange } = useSearch(
		"/search/topics",
		setIsDropdownOpen
	);

	const postCommentContentEditableRef = React.useRef();
	const postCommentTextAreaRef = React.useRef();

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			e.preventDefault();
		}
	};

	const handlePostCommentResultOnClick = (e) => {
		if (selectedTopicsArray.length >= 5) {
			console.log("Cannot select more than 5");
		} else {
			const selectedTopicIndex = e.currentTarget.dataset.index;

			const selectedTopic = searchResultsArray[selectedTopicIndex];

			const anchorTag = document.createElement("a");

			anchorTag.innerHTML = `#${selectedTopic.title}`;

			anchorTag.href = `topic/${selectedTopic.id}`;

			postCommentContentEditableRef.current.append(anchorTag);

			setSelectedTopicsArray((prevState) => [...prevState, selectedTopic]);
		}
	};

	const handlePostCommentButtonOnClick = () => {
		const commentChildNodesArray = Array.from(
			postCommentContentEditableRef.current.childNodes
		);

		const commentNodesArray = commentChildNodesArray.map((node) => {
			if (node.nodeName === "A") {
				return {
					nodeType: "a",
					nodeValue: node.innerText,
				};
			} else if (node.nodeName === "#text") {
				return {
					nodeType: "text",
					nodeValue: node.nodeValue,
				};
			}
		});

		setCommentNodesArray(commentNodesArray);
	};

	React.useEffect(() => {
		commentNodesArray.forEach((node) => {
			if (node.nodeType === "a") {
				const anchorTag = document.createElement("a");

				anchorTag.innerHTML = node.nodeValue;

				postCommentTextAreaRef.current.append(anchorTag);
			} else if (node.nodeType === "text") {
				postCommentTextAreaRef.current.append(node.nodeValue);
			}
		});
	}, [commentNodesArray]);

	return (
		<PostCommentInputStyle>
			<PostCommentSelectInputStyle onChange={handleSearchResultsOnChange} />

			<PostCommentContentEditableStyle
				ref={postCommentContentEditableRef}
				onKeyPress={handleKeyPress}
				contentEditable={true}
			/>

			{isDropdownOpen && (
				<PostCommentResultsStyle>
					<IconElement
						onClick={() => {
							setIsDropdownOpen(false);
						}}
						iconRole="button"
						iconElementStyleObject={{
							elementPosition: "absolute",
							elementTop: "5px",
							elementRight: "5px",
							iconSize: "1.5rem",
						}}
					>
						<CloseAlt />
					</IconElement>

					{searchResultsArray.map((result, idx) => {
						return (
							<PostCommentResultStyle
								key={`post-comments-result__${idx}`}
								onClick={handlePostCommentResultOnClick}
								data-index={idx}
							>
								<img
									src={result.topic_url}
									alt="post comment result thumbnail"
								/>

								<h6>{result.title}</h6>
							</PostCommentResultStyle>
						);
					})}
				</PostCommentResultsStyle>
			)}

			<PostCommentSubmitButtonStyle onClick={handlePostCommentButtonOnClick}>
				Submit
			</PostCommentSubmitButtonStyle>

			<PostCommentTextArea ref={postCommentTextAreaRef} />
		</PostCommentInputStyle>
	);
};

export default PostCommentInput;
