import * as React from "react";
import { useSelector } from "react-redux";

import { SearchAndSelect, Message } from "../../shared";

import {
	addPostTopics,
	removePostTopic,
	setPostTopicsErrorMessage,
} from "../../../redux/add-post/post-topics/postTopicsAction";

import { useSearchAndSelectRedux, useSaveDraft } from "../../../hooks";

import { AddContentStyle } from "../../../styles";

const AddPostTopics = () => {
	const { postTopicsArray, postTopicsErrorMessage } = useSelector(
		(state) => state.postTopicsReducer
	);

	const {
		searchAndSelectDropdownElementOnClickEventHandler,
		selectedElementOnClickEventHandler,
	} = useSearchAndSelectRedux(
		3,
		"topics",
		postTopicsArray,
		addPostTopics,
		removePostTopic,
		setPostTopicsErrorMessage
	);

	useSaveDraft("postTopics", postTopicsArray);

	return (
		<AddContentStyle>
			<h3>Select Topics</h3>

			<Message errorMessage={postTopicsErrorMessage} />

			<SearchAndSelect
				searchAndSelectType="add-post-topic"
				searchAndSelectedElementsArray={postTopicsArray}
				searchAndSelectInputPlaceholder="Search for topics"
				searchAndSelectInputAPIEndpoint="/search/topics"
				selectedElementOnClickEventHandler={selectedElementOnClickEventHandler}
				searchAndSelectDropdownElementOnClickEventHandler={
					searchAndSelectDropdownElementOnClickEventHandler
				}
			/>
		</AddContentStyle>
	);
};

export default AddPostTopics;
