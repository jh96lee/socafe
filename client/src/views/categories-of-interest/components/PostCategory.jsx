import * as React from "react";

import { PostCategoryStyle } from "../styles/PostCategoryStyle";

import { Checkmark, Plus } from "../../../assets";

const PostCategory = ({
	selectedPostCategoriesArray,
	setSelectedPostCategoriesArray,
	postCategory,
}) => {
	const [isSelected, setIsSelected] = React.useState(false);

	// TODO: depending on the url, we want isSelected its value evaluated differently
	// const selectedPostCategoriesIDArray = selectedPostCategoriesArray.map(
	// 	(category) => category.id
	// );

	// const [isSelected, setIsSelected] = React.useState(
	// 	postCategoriesIDArray.includes(postCategory.id)
	// );

	const handleOnClick = () => {
		setIsSelected((prevState) => !prevState);
	};

	// REVIEW: this useEffect triggers every time user changes the isSelected value
	React.useEffect(() => {
		if (isSelected) {
			const setStateArray = [...selectedPostCategoriesArray];

			setStateArray.push(postCategory);

			setSelectedPostCategoriesArray(setStateArray);
		} else if (!isSelected) {
			const setStateArray = [...selectedPostCategoriesArray].filter(
				(category) => {
					return category.id !== postCategory.id;
				}
			);

			setSelectedPostCategoriesArray(setStateArray);
		}
	}, [isSelected]);

	// REVIEW: triggers when selectedPostCategoriesArray changes
	// REVIEW: when the array length exceeds 5 temporarily, it will look for the id of the first element of the array
	// REVIEW: then change its isSelected value to false, which then triggers the above useEffect and filters it off the selectedPostCategoriesArray
	React.useEffect(() => {
		if (selectedPostCategoriesArray.length > 5 && isSelected) {
			const setStateArray = [...selectedPostCategoriesArray];

			const firstPostCategoryID = setStateArray[0].id;

			if (postCategory.id === firstPostCategoryID) {
				setIsSelected(false);
			}
		}
	}, [selectedPostCategoriesArray]);

	return (
		<PostCategoryStyle onClick={handleOnClick} isSelected={isSelected}>
			<img src={postCategory.category_url} />

			<h5>{postCategory.title}</h5>

			{isSelected ? <Checkmark id="check" /> : <Plus id="plus" />}
		</PostCategoryStyle>
	);
};

export default PostCategory;
