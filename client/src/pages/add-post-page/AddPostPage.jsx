import * as React from "react";
import { useSelector } from "react-redux";

import { SelectCategories, Caption } from "../../views/add-post-form";
import { UploadImage } from "../../views/shared";

import styled from "styled-components";

const AddContentPageStyle = styled.div`
	display: grid;
	grid-template-columns: 36rem auto;
`;

const AddContentFormStyle = styled.div`
	width: 100%;
	padding: 1.5rem 1.2rem;
	border-right: 1px solid #000;

	& > * {
		margin-bottom: 3rem;
	}
`;

const AddContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h3 {
		font-size: 2rem;
		color: var(--primary-text-color);
	}
`;

const MessageStyle = styled.p`
	font-size: 1.3rem;
	color: ${(props) =>
		props.success
			? props.theme.isDarkMode
				? "#8cff90"
				: "#0e6d12"
			: props.theme.isDarkMode
			? "#fd8097"
			: "#a70202"};
	padding: 1rem 1.2rem;
	background-color: ${(props) =>
		props.success
			? props.theme.isDarkMode
				? "#4caf503b"
				: "#0ed60e47"
			: props.theme.isDarkMode
			? "#ff000033"
			: "#ff5b5b4d"};
	grid-column: 1 / 3;
	border-radius: 0.5rem;
	width: fit-content;
`;

const AddPostPage = () => {
	const { uploadImageMessage } = useSelector(
		(state) => state.uploadImageReducer
	);

	return (
		<AddContentPageStyle>
			<AddContentFormStyle>
				<AddContentStyle>
					<h3>Upload Photos</h3>

					{uploadImageMessage ? (
						<MessageStyle
							error={uploadImageMessage.error}
							success={uploadImageMessage.success}
						>
							{uploadImageMessage.error || uploadImageMessage.success}
						</MessageStyle>
					) : null}

					<UploadImage />
				</AddContentStyle>

				<SelectCategories />

				<Caption />
			</AddContentFormStyle>
		</AddContentPageStyle>
	);
};

export default AddPostPage;
