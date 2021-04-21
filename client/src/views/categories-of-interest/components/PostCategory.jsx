import * as React from "react";
import styled from "styled-components";

import { IoCheckmark } from "react-icons/io5";
import { BsPlusCircle } from "react-icons/bs";

const PostCategoryStyle = styled.div`
	background-color: #ffffff;
	border-radius: 0.5rem;
	margin-bottom: 1.5rem;
	cursor: pointer;

	& img {
		width: 20rem;
		height: 13rem;
		object-fit: cover;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}

	& div {
		display: flex;
		justify-content: space-between;
		padding: 0.6rem 1rem 1rem 1rem;
	}

	& h6 {
		color: var(--txt-1);
		letter-spacing: -0.7px;
	}

	& svg {
		width: 2rem;
		height: 2rem;
		cursor: pointer;
	}

	& #check-mark {
		color: #0eff00;
	}

	& #plus-circle {
		color: white;
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

			<div>
				<h6>{postCategoryObject.title}</h6>

				{isPostCategorySelected ? (
					<IoCheckmark id="check-mark" />
				) : (
					<BsPlusCircle id="plus-circle" />
				)}
			</div>
		</PostCategoryStyle>
	);
};

export default PostCategory;
