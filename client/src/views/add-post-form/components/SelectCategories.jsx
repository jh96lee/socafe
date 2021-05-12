import * as React from "react";
import styled from "styled-components";
import axios from "axios";

import { DropdownMenu } from "../../shared";

import { DropdownStyle } from "../../../styles";

const SelectCategoriesStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;

	& > h2 {
		color: #fff;
	}
`;

const SearchCategoriesStyle = styled.div`
	display: flex;
	flex-direction: column;
`;

const EditableDivStyle = styled.div`
	display: flex;
	gap: 1rem;
	padding: 1.5rem;
	position: relative;
	border: none;
	border-radius: 0.5rem;
	outline: none;
	background-color: #212629;
	color: #f5f5f5;
	font-size: 1.4rem;

	&:empty::before {
		content: attr(placeholder);
		color: #666666;
	}

	&:empty {
		display: none;
	}
`;

const SelectCategoriesInputStyle = styled.input.attrs((props) => ({
	type: "text",
	placeholder: "Select up to 3 categories",
}))`
	padding: 1.5rem;
	outline: none;
	border-radius: 0.5rem;
	width: 100%;
`;

const CategoriesResultStyle = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem;
	border-radius: 0.5rem;

	& img {
		width: 4rem;
		height: 4rem;
		object-fit: cover;
		margin-right: 1.5rem;
		border-radius: 0.5rem;
	}

	& p {
		font-size: 1.47rem;
		color: var(--primary-text-color);
	}

	&:hover {
		background-color: #48484847;
		cursor: pointer;
	}
`;

const MessageStyle = styled.p`
	color: ${(props) => (props.success ? "#8cff90" : "#fd8097")};
	padding: 1.2rem 1.5rem;
	background-color: ${(props) => (props.success ? "#4caf503b" : "#ff000033")};
	grid-column: 1 / 3;
	border-radius: 0.5rem;
	width: fit-content;
`;

const SelectCategories = () => {
	const [
		selectedPostCategoriesArray,
		setSelectedPostCategoriesArray,
	] = React.useState([]);
	const [
		resultPostCategoriesArray,
		setResultPostCategoriesArray,
	] = React.useState([]);
	const [message, setMessage] = React.useState(null);

	const handleInputOnChange = async (e) => {
		const { data } = await axios({
			method: "POST",
			url: "http://localhost:8080/search/post-categories",
			data: {
				searchInput: e.target.value ? e.target.value : null,
			},
		});

		setResultPostCategoriesArray(data);
	};

	const handleCategoryResultsOnClick = (e) => {
		const selectedCategoryID = parseInt(e.target.dataset.categoryId);
		const selectedCategoriesIDsArray = selectedPostCategoriesArray.map(
			(category) => {
				return category.id;
			}
		);

		if (selectedCategoriesIDsArray.includes(selectedCategoryID)) {
			return;
		}
		if (selectedPostCategoriesArray.length >= 3) {
			setMessage({ error: "Each post can have up to 3 categories at max" });
		} else {
			const selectedCategoryObject = resultPostCategoriesArray.find(
				(category) => {
					return category.id === selectedCategoryID;
				}
			);

			setSelectedPostCategoriesArray([
				...selectedPostCategoriesArray,
				selectedCategoryObject,
			]);
		}
	};

	return (
		<SelectCategoriesStyle>
			<h2>Select Categories</h2>

			{message ? (
				<MessageStyle error={message.error} success={message.success}>
					{message.error || message.success}
				</MessageStyle>
			) : null}

			<DropdownStyle id="select-categories-dropdown-trigger">
				<SearchCategoriesStyle>
					<EditableDivStyle
						contentEditable={false}
						suppressContentEditableWarning={true}
						placeholder="Select up to 3 categories"
					>
						{selectedPostCategoriesArray.map((category, idx) => {
							return (
								<h1
									key={`selected-categories__${idx}`}
									style={{ color: "pink" }}
								>
									{category.title}
								</h1>
							);
						})}
					</EditableDivStyle>

					<SelectCategoriesInputStyle
						type="text"
						onChange={handleInputOnChange}
					/>
				</SearchCategoriesStyle>

				<DropdownMenu
					triggerID="select-categories-dropdown-trigger"
					customDropdownId="select-categories"
					dataArray={resultPostCategoriesArray}
					menuTop="110%"
					menuLeft="0"
					menuWidth="100%"
				>
					{resultPostCategoriesArray.map((category, idx) => {
						return (
							// REVIEW: later have a separate component file and create a ref and when onclick it refers to that specific ref in the file
							<CategoriesResultStyle
								key={`category-result__${idx}`}
								onClick={handleCategoryResultsOnClick}
								data-category-id={category.id}
							>
								<img src={category.category_url} />

								<p>{category.title}</p>
							</CategoriesResultStyle>
						);
					})}
				</DropdownMenu>
			</DropdownStyle>
		</SelectCategoriesStyle>
	);
};

export default SelectCategories;
