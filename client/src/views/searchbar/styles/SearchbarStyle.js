import styled from "styled-components";

export const SearchbarStyle = styled.div`
	position: unset;

	& > *:first-child {
		display: none;
	}

	@media (max-width: 700px) {
		& > *:first-child {
			display: block;
		}
	}
`;

export const SearchbarWrapperStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background-color: var(--bg-1);
	padding: 0.35rem 1.4rem;
	border: 1px solid var(--input-default-separator-color);
	border-radius: 2.5rem;
	box-shadow: 0px 0px 2px 0.5px var(--input-default-separator-color);

	/* REVIEW: parent component's CSS controlling children components' styles */
	& > *:nth-child(3) {
		width: 18rem;
	}

	& > *:nth-child(2) {
		margin: 0 0.3rem 0 1.2rem;
	}

	& > *:nth-child(4) {
		margin: 0 1.2rem 0 0.3rem;
	}

	@media (max-width: 700px) {
		position: absolute;
		top: calc(100% + 4px);
		right: 2px;
		display: ${(props) => (props.isDropdownMenuOpen ? "flex" : "none")};
	}

	@media (max-width: 350px) {
		display: ${(props) => (props.isDropdownMenuOpen ? "flex" : "none")};
		width: 98%;
		border-radius: 1rem;
		padding: 0.5rem 1rem;
		left: 50%;
		transform: translateX(-50%);

		& > *:nth-child(3) {
			width: 100%;
		}
	}
`;
