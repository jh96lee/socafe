import * as React from "react";

import {
	PostCategoryStyle,
	PostCategoryWrapperStyle,
} from "../styles/PostCategoryStyle";

import { ReactComponent as Plus } from "../../../assets/plus.svg";
import { ReactComponent as Check } from "../../../assets/check-mark.svg";

const PostCategory = ({
	selectedCategoriesArray,
	setSelectedCategoriesArray,
	category,
}) => {
	const [isSelected, setIsSelected] = React.useState(false);

	const handleOnClick = () => {
		setIsSelected((prevState) => !prevState);
	};

	React.useEffect(() => {
		if (selectedCategoriesArray.length < 5 && isSelected) {
			const updatedSelectedCategoriesArray = [...selectedCategoriesArray];

			updatedSelectedCategoriesArray.push(category);

			setSelectedCategoriesArray(updatedSelectedCategoriesArray);
		} else if (selectedCategoriesArray.length >= 5 && isSelected) {
			const updatedSelectedCategoriesArray = [];

			selectedCategoriesArray.forEach((element, idx) => {
				if (idx === 0) {
					return;
				} else {
					updatedSelectedCategoriesArray.push(element);
				}
			});

			updatedSelectedCategoriesArray.push(category);

			setSelectedCategoriesArray(updatedSelectedCategoriesArray);
		} else if (!isSelected) {
			const updatedSelectedCategoriesArray = selectedCategoriesArray.filter(
				(element) => {
					return element.id !== category.id;
				}
			);

			setSelectedCategoriesArray(updatedSelectedCategoriesArray);
		}
	}, [isSelected]);

	React.useEffect(() => {
		if (selectedCategoriesArray.length >= 5) {
			const selectedCategoriesIDArray = selectedCategoriesArray.map(
				(element) => element.id
			);

			const isIncluded = selectedCategoriesIDArray.includes(category.id);

			if (!isIncluded && isSelected) {
				setIsSelected(false);
			} else {
				return;
			}
		}
	}, [selectedCategoriesArray]);

	return (
		<PostCategoryStyle onClick={handleOnClick}>
			<img src={category.category_url} />

			<PostCategoryWrapperStyle isSelected={isSelected}>
				<h5>{category.title}</h5>

				{isSelected ? <Check id="check" /> : <Plus id="plus" />}
			</PostCategoryWrapperStyle>
		</PostCategoryStyle>
	);
};

export default PostCategory;
