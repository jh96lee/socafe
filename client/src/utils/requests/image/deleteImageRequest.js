import axios from "axios";

const deleteImageRequest = async (uploadedImageID) => {
	const { data } = await axios({
		method: "POST",
		url: "http://localhost:8080/delete/image",
		data: {
			id: uploadedImageID,
		},
	});

	return data;
};

export default deleteImageRequest;
