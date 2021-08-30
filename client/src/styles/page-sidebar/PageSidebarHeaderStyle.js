import styled from "styled-components";

const PageSidebarHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	height: fit-content;
	padding: 1.8rem;
	box-shadow: 0 1.4px 0 0 var(--separator-1);

	& > *:last-child {
		display: none;
		margin-left: auto;
	}

	& > h2 {
		color: var(--text-1);
	}

	@media (max-width: ${(props) => `${props.absoluteSidebarBreakingPoint}px`}) {
		& > *:last-child {
			display: inline-block;
		}
	}
`;

export default PageSidebarHeaderStyle;
