import * as React from "react";
import styled from "styled-components";

import { IoCheckmark } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";

const PostCategoryStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #ffffff;
	cursor: pointer;
	border: 1px solid var(--primary-border-color);
	border-radius: 3rem;
	width: fit-content;
	padding: 1rem;

	& img {
		width: 5rem;
		height: 5rem;
		border-radius: 50%;
		object-fit: cover;
	}

	& p {
		color: var(--txt-1);
		font-size: 1.5rem;
		font-weight: 500;
		letter-spacing: -0.7px;
		margin: 0 1.5rem;
	}

	& svg {
		width: 2.5rem;
		height: 2.5rem;
		cursor: pointer;
	}

	& #check-mark {
		color: #0eff00;
	}

	& #plus-circle {
		color: var(--primary-icon-color);
	}
`;

const PostCategory = ({
	postCategoryObject,
	selectedCategoriesArray,
	setSelectedCategoriesArray,
}) => {
	const [isPostCategorySelected, setIsPostCategorySelected] = React.useState(
		false
	);

	const handlePostCategoryOnClick = (e) => {
		if (selectedCategoriesArray.length < 5) {
			setIsPostCategorySelected((prevState) => !prevState);
		}

		if (selectedCategoriesArray.length >= 5 && isPostCategorySelected) {
			setIsPostCategorySelected((prevState) => !prevState);
		}
	};

	React.useEffect(() => {
		if (isPostCategorySelected) {
			const categoriesArray = [...selectedCategoriesArray];

			categoriesArray.push(postCategoryObject);

			setSelectedCategoriesArray(categoriesArray);
		} else {
			const categoriesArray = [...selectedCategoriesArray];

			const idOfCategoryToRemove = postCategoryObject.id;

			const updatedCategoriesArray = categoriesArray.filter(
				(category) => category.id !== idOfCategoryToRemove
			);

			setSelectedCategoriesArray(updatedCategoriesArray);
		}
	}, [isPostCategorySelected]);

	return (
		<PostCategoryStyle onClick={handlePostCategoryOnClick}>
			<img src={postCategoryObject.category_url} />

			<p>{postCategoryObject.title}</p>

			{isPostCategorySelected ? (
				<IoCheckmark id="check-mark" />
			) : (
				<BsPlusCircle id="plus-circle" />
			)}
		</PostCategoryStyle>
	);
};

export default PostCategory;
