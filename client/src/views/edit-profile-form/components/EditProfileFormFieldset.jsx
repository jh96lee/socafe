import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { FormInput, Message, TextEditor } from "../../shared";

import { useTextEditorRedux } from "../../../hooks";

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

	const handleFormInputOnChange = (e) => {
		const editProfileObject = {
			editedFullName,
			editedEmail,
			editedUsername,
		};

		editProfileObject[e.target.name] = e.target.value;

		dispatch(setEditedFormData(editProfileObject));
	};

	const { handleTextEditorOnKeyUp } = useTextEditorRedux(
		20,
		setEditedBioNodesArray,
		setEditProfileErrorMessage
	);

	return (
		<FormFieldsetStyle>
			<FormInputAndMessageWrapperStyle>
				<FormInput
					id="edit-profile-form__full-name"
					label="Full Name"
					name="editedFullName"
					type="text"
					defaultValue={initialProfile.fullName}
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
					textEditorMaxCharacters={20}
					initialNodesArray={initialProfile.bioNodesArray}
					handleTextEditorOnKeyUp={handleTextEditorOnKeyUp}
				/>
			</FormInputAndMessageWrapperStyle>
		</FormFieldsetStyle>
	);
};

export default EditProfileFormFieldset;
