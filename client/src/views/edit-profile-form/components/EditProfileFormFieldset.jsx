import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormInput, Message, TextEditor } from "../../shared";

import { useTextEditor } from "../../../hooks";

import {
	setEditedFormData,
	setEditedBioNodesArray,
	setEditProfileErrorMessage,
} from "../../../redux/edit-profile/editProfileAction";

import {
	FormFieldsetStyle,
	FormInputAndMessageWrapperStyle,
} from "../../../styles";

const EditProfileFormFieldset = () => {
	const dispatch = useDispatch();

	const {
		initialProfile,
		editedFullName,
		editedUsername,
		editedEmail,
		editProfileErrorMessage,
	} = useSelector((state) => state.editProfileReducer);

	const { textEditorOnKeyDownLogic } = useTextEditor(
		150,
		setEditedBioNodesArray,
		setEditProfileErrorMessage,
		"redux"
	);

	const handleFormInputOnChange = (e) => {
		const editProfileObject = {
			editedFullName,
			editedUsername,
			editedEmail,
		};

		editProfileObject[e.target.name] = e.target.value;

		dispatch(setEditedFormData(editProfileObject));
	};

	return (
		<FormFieldsetStyle>
			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="edit-profile-form__full-name"
					label="Full Name"
					name="editedFullName"
					type="text"
					defaultValue={initialProfile.full_name}
					placeholder="Full name"
					onChange={handleFormInputOnChange}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="edit-profile-form__username"
					label="Username"
					name="editedUsername"
					type="text"
					defaultValue={initialProfile.username}
					placeholder="Username"
					onChange={handleFormInputOnChange}
				/>

				<Message
					errorMessage={
						editProfileErrorMessage && editProfileErrorMessage.username
					}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="edit-profile-form__email"
					label="Email"
					name="editedEmail"
					type="email"
					defaultValue={initialProfile.email}
					placeholder="Email"
					onChange={handleFormInputOnChange}
				/>

				<Message
					errorMessage={
						editProfileErrorMessage && editProfileErrorMessage.email
					}
				/>
			</FormInputAndMessageWrapperStyle>

			<FormInputAndMessageWrapperStyle>
				<Message
					errorMessage={
						editProfileErrorMessage && editProfileErrorMessage.textEditor
					}
				/>

				<TextEditor
					textEditorOnKeyDownLogic={textEditorOnKeyDownLogic}
					initialTextEditorNodesArray={initialProfile.bio_nodes_array}
				/>
			</FormInputAndMessageWrapperStyle>
		</FormFieldsetStyle>
	);
};

export default EditProfileFormFieldset;
