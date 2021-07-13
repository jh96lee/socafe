import axios from "axios";

export const uploadImageRequest = async (file) => {
	const formData = new FormData();

	formData.append("image", file);

	// REVIEW: data contains the public_id and url of the image
	const { data } = await axios.post(
		"http://localhost:8080/upload/image",
		formData,
		{
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}
	);

	return data;
};
