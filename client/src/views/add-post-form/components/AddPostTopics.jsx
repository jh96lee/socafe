import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Message, SearchAndSelect } from "../../shared";

import {
	addPostTopics,
	removePostTopic,
	setPostTopicsErrorMessage,
} from "../../../redux/add-post/post-topics/postTopicsAction";

import { useSaveDraft, usePaginationReact } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostTopics = () => {
	const [searchInput, setSearchInput] = React.useState("");

	const dispatch = useDispatch();

	const { postTopicsArray, postTopicsErrorMessage } = useSelector(
		(state) => state.postTopicsReducer
	);

	const {
		currentPage,
		contents,
		fetchContents,
		nextAPIEndpoint,
		handleLoadMoreButtonOnClick,
	} = usePaginationReact("/search/topics", 2, false);

	useSaveDraft("postTopics", postTopicsArray);

	const handleFormInputOnChange = (e) => {
		setSearchInput(e.target.value);

		fetchContents(true, "POST", { searchInput: e.target.value });
	};

	const dropdownElementsArray = contents.map((content) => {
		return {
			image: content.topic_url,
			text: content.title,
			onClickEventHandler: () => {
				if (postTopicsArray.length === 3) {
					dispatch(
						setPostTopicsErrorMessage({
							topic: "You can select up to 3 topics",
						})
					);
				} else if (postTopicsArray.find((topic) => topic.id === content.id)) {
					dispatch(
						setPostTopicsErrorMessage({
							topic: "Duplicate selections are not allowed",
						})
					);
				} else {
					dispatch(addPostTopics(content));
				}
			},
		};
	});

	React.useEffect(() => {
		if (currentPage > 1) {
			fetchContents(false, "POST", { searchInput });
		}
	}, [currentPage]);

	return (
		<AddContentStyle>
			<h3>Select Topics</h3>

			<Message
				errorMessage={postTopicsErrorMessage && postTopicsErrorMessage.topic}
			/>

			<SearchAndSelect
				contentType="topic"
				handleFormInputOnChange={handleFormInputOnChange}
				handleLoadMoreButtonOnClick={handleLoadMoreButtonOnClick}
				nextAPIEndpoint={nextAPIEndpoint}
				searchAndSelectDropdownElementsArray={dropdownElementsArray}
				searchInput={searchInput}
				selectedContentsArray={postTopicsArray}
				selectedContentKey="title"
				removeContent={(id) => dispatch(removePostTopic(id))}
			/>
		</AddContentStyle>
	);
};

export default AddPostTopics;
