import * as React from "react";
import { useSelector } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import {
	addPostTopics,
	removePostTopic,
	setPostTopicsErrorMessage,
} from "../../../redux/add-post/post-topics/postTopicsAction";

import { useSearchAndSelect, useSaveDraft } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostTopics = () => {
	const { postTopicsArray, postTopicsErrorMessage } = useSelector(
		(state) => state.postTopicsReducer
	);

	const { dropdownElementOnClickLogic, selectedContentRemoveIconOnClickLogic } =
		useSearchAndSelect(
			3,
			"topic",
			true,
			postTopicsArray,
			addPostTopics,
			removePostTopic,
			setPostTopicsErrorMessage
		);

	useSaveDraft("postTopics", postTopicsArray);

	return (
		<AddContentStyle>
			<h3>Select Topics</h3>

			<Message
				errorMessage={postTopicsErrorMessage && postTopicsErrorMessage.topic}
			/>

			<SearchAndSelect
				searchAndSelectType="add-post-topic"
				searchAndSelectedContentsArray={postTopicsArray}
				searchAndSelectInputPlaceholder="Search for topics"
				searchAndSelectInputAPIEndpoint="/search/topics"
				dropdownElementOnClickLogic={dropdownElementOnClickLogic}
				selectedContentRemoveIconOnClickLogic={
					selectedContentRemoveIconOnClickLogic
				}
			/>
		</AddContentStyle>
	);
};

export default AddPostTopics;
