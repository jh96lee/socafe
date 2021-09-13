import styled from "styled-components";

export const SearchbarStyle = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 0.3rem;
	padding: 0.35rem 1rem;
	background-color: var(--bg-1);
	border: 1px solid var(--divider-default);
	border-radius: 2.5rem;
	box-shadow: 0px 0px 2px 0.5px var(--divider-default);

	& > *:first-child,
	& > *:last-child {
		padding: 0 0.6rem;
	}

	& > *:nth-child(3) {
		width: 18rem;
	}

	@media (max-width: 750px) {
		position: absolute;
		top: calc(100% + 5px);
		right: 3px;
		display: ${(props) => (props.isResponsiveSearchbarOpen ? "flex" : "none")};
	}

	@media (max-width: 400px) {
		left: 50%;
		transform: translateX(-50%);
		width: 98%;
		padding: 0.5rem;
		border-radius: 1rem;

		& > *:nth-child(3) {
			width: 100%;
		}
	}
`;
