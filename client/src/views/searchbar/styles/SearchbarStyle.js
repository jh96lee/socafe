import styled from "styled-components";

export const SearchbarStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.3rem;
	padding: 0.35rem 1rem;
	background-color: var(--bg-1);
	border: 1px solid var(--input-default-separator-color);
	border-radius: 2.5rem;
	box-shadow: 0px 0px 2px 0.5px var(--input-default-separator-color);

	& > *:first-child {
		padding: 0 0.6rem;
	}

	& > *:last-child {
		padding: 0 0.6rem;
	}

	& > *:nth-child(3) {
		width: 18rem;
	}

	@media (max-width: 700px) {
		position: absolute;
		top: calc(100% + 5px);
		right: 3px;
		display: ${(props) => (props.isResponsiveSearchbarOpen ? "flex" : "none")};
		padding: 0.35rem 0.5rem;
		border-radius: 1rem;
		border: none;
		box-shadow: 0px 0px 0px 1.6px var(--input-default-separator-color);
	}

	@media (max-width: 400px) {
		left: 50%;
		transform: translateX(-50%);
		width: 98%;

		& > *:nth-child(3) {
			width: 100%;
		}
	}
`;
