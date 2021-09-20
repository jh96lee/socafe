import styled from "styled-components";

const DropdownElementStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.3rem;
	padding: 0.35rem 0.5rem;
	border-radius: 0.5rem;

	& > img {
		width: 4.5rem;
		height: 4.5rem;
		object-fit: cover;
		border-radius: 0.5rem;
	}

	&:hover {
		cursor: pointer;
		background-color: var(--bg-1-hover);
	}
`;

export default DropdownElementStyle;
