import * as React from "react";
import styled from "styled-components";
import axios from "axios";

import { IconElement, DropdownMenu } from "../../shared/index";

import { BorderStyle } from "../../../styles";

import { Submit, Tag } from "../../../assets";

const PostCommentInputStyle = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-rows: 20rem;
	align-content: center;
	gap: 1rem;
	background-color: #000;
	padding: 1rem;
	border-radius: 2.5rem;
`;

const PostCommentContentEditableStyle = styled.div`
	color: var(--text-1);
	background-color: var(--input-default-bg-color);
	width: 100%;
	max-width: 100%;
	height: 100%;
	padding: 1.5rem;
	border: var(--input-default-separator-color);
	border-radius: 2.5rem;
	font-size: 1.4rem;
	outline: none;
	font-size: 1.35rem;

	& p {
		display: inline-block;
		font-size: 1.35rem;
		font-weight: 600;
	}

	span {
		white-space: pre;
	}

	& a {
		color: aquamarine;
		font-size: 1.35rem;
		font-weight: 600;
	}
`;

const PostCommentTextRenderStyle = styled.div`
	width: 100%;
	height: 20rem;
	background-color: #fff;
	border-radius: 2rem;
	color: #000;
`;

// background-color: #f02849;

const MainPostCommentInput = () => {
	const [isDropdownMenuOpen, setIsDropdownMenuOpen] = React.useState(false);
	// const [commentTaggedUsersArray, setCommentTaggedUsersArray] = React.useState(
	// 	[]
	// );
	const [postCommentNodesArray, setPostCommentNodesArray] = React.useState([]);
	const [searchResultsArray, setSearchResultsArray] = React.useState([]);

	const mainPostCommentContentEditableRef = React.useRef();
	const searchUsersRef = React.useRef();

	const addSpaceToString = (string, offset) => {
		const firstString = string.slice(0, offset);

		const secondString = string.slice(offset, string.length);

		return `${firstString} ${secondString}`;
	};

	const handleContentEditableOnKeyPress = async (e) => {
		const contentEditableChildNodesArray = Array.from(e.target.childNodes);

		if (e.key === "@") {
			e.preventDefault();

			const paragraphTag = document.createElement("p");

			paragraphTag.innerHTML = "@";

			mainPostCommentContentEditableRef.current.append(paragraphTag);

			const range = document.createRange();

			const selection = document.getSelection();

			range.setStart(paragraphTag, 1);

			selection.removeAllRanges();

			selection.addRange(range);
		} else if (contentEditableChildNodesArray.length === 0) {
			e.preventDefault();

			const spanTag = document.createElement("span");

			spanTag.innerHTML = e.key;

			mainPostCommentContentEditableRef.current.append(spanTag);

			const range = document.createRange();

			const selection = document.getSelection();

			range.setStart(spanTag, 1);

			selection.removeAllRanges();

			selection.addRange(range);
		}

		if (e.key === "Enter") {
			e.preventDefault();
		}

		if (e.key === " ") {
			const selection = document.getSelection();

			if (selection.anchorNode.parentNode.nodeName === "P") {
				// REVIEW: means space has been clicked at the end of the paragraph tag
				if (selection.anchorNode.length === selection.anchorOffset) {
					e.preventDefault();

					const spanTag = document.createElement("span");

					spanTag.innerHTML = " ";

					mainPostCommentContentEditableRef.current.append(spanTag);

					const range = document.createRange();

					const selection = document.getSelection();

					range.setStart(spanTag, 1);

					selection.removeAllRanges();

					selection.addRange(range);
				} else {
					e.preventDefault();

					const range = document.createRange();

					const selection = getSelection();

					const anchorOffset = selection.anchorOffset;

					const updatedTextContent = addSpaceToString(
						searchUsersRef.current.textContent,
						anchorOffset
					);

					const spanTag = document.createElement("span");

					spanTag.innerHTML = updatedTextContent;

					mainPostCommentContentEditableRef.current.replaceChild(
						spanTag,
						searchUsersRef.current
					);

					range.setStart(spanTag, 1);

					selection.removeAllRanges();

					selection.addRange(range);

					const userIDAttribute = parseInt(
						searchUsersRef.current.dataset.userId
					);

					// const filteredCommentTaggedUsersArray =
					// 	commentTaggedUsersArray.filter(
					// 		(taggedUser) => taggedUser.id !== userIDAttribute
					// 	);

					// setCommentTaggedUsersArray(filteredCommentTaggedUsersArray);
				}
			}
		}
	};

	const handleContentEditableOnInput = async (e) => {
		const selection = document.getSelection();

		const contentEditableChildNodesArray = Array.from(e.target.childNodes);

		if (contentEditableChildNodesArray.length > 0) {
			if (contentEditableChildNodesArray[0].nodeName === "BR") {
				mainPostCommentContentEditableRef.current.removeChild(
					contentEditableChildNodesArray[0]
				);
			}
		}

		if (selection.anchorNode.parentNode.nodeName === "P") {
			setIsDropdownMenuOpen(true);

			const searchUsersInput = selection.anchorNode.textContent.substring(1);

			const { data } = await axios({
				method: "POST",
				url: "http://localhost:8080/search/users",
				data: {
					searchInput: searchUsersInput ? searchUsersInput : null,
				},
			});

			setSearchResultsArray(data);

			searchUsersRef.current = selection.anchorNode.parentNode;
		} else {
			setIsDropdownMenuOpen(false);
		}
	};

	// TODO: add onClick event handler
	const dropdownElementsArray = searchResultsArray.map((result) => {
		return {
			content: result,
			onClickEventHandler: () => {
				// setCommentTaggedUsersArray((prevState) => [...prevState, result]);

				// TODO: when submitting, check if the paragraph tags have an attribute, if not, ignore them
				searchUsersRef.current.setAttribute("data-user-id", result.id);

				searchUsersRef.current.innerHTML = `@${result.username}`;

				setIsDropdownMenuOpen(false);
			},
		};
	});

	const handlePostCommentSubmitOnClick = () => {
		const childNodesArray = Array.from(
			mainPostCommentContentEditableRef.current.childNodes
		);

		const postCommentChildNodesArray = childNodesArray.map((node) => {
			if (!node.dataset.userId) {
				return {
					nodeType: "SPAN",
					nodeValue: node.textContent,
				};
			} else {
				return {
					nodeType: node.nodeName,
					nodeValue: node.textContent,
					nodeUserID: parseInt(node.dataset.userId),
				};
			}
		});

		console.log(postCommentChildNodesArray);

		setPostCommentNodesArray(postCommentChildNodesArray);
	};

	return (
		<PostCommentInputStyle>
			<PostCommentContentEditableStyle
				id="contenteditable"
				ref={mainPostCommentContentEditableRef}
				contentEditable={true}
				onInput={handleContentEditableOnInput}
				onKeyPress={handleContentEditableOnKeyPress}
			/>

			<IconElement onClick={handlePostCommentSubmitOnClick}>
				<Submit />
			</IconElement>

			<PostCommentTextRenderStyle>
				{postCommentNodesArray.map((node, idx) => {
					if (node.nodeType === "SPAN") {
						return <span>{node.nodeValue}</span>;
					} else if (node.nodeType === "P") {
						return <a href={`/user/${node.nodeUserID}`}>{node.nodeValue}</a>;
					}
				})}
			</PostCommentTextRenderStyle>

			{isDropdownMenuOpen && (
				<DropdownMenu
					dropdownMenuID="contenteditable-dropdown-menu"
					dropdownElementsArray={dropdownElementsArray}
					dropdownMenuStyleObject={{
						// menuTop: "0",
						// menuLeft: "0",
						menuBottom: "0%",
						menuWidth: "100%",
						// menuTransform: "translateY(calc(-100% - 6px))",
					}}
				/>
			)}
		</PostCommentInputStyle>
	);
};

export default MainPostCommentInput;
