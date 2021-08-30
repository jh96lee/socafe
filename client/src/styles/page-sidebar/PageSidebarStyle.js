import styled from "styled-components";

const PageSidebarStyle = styled.div`
	display: grid;
	grid-auto-rows: min-content 1fr min-content;
	box-shadow: 0 0 0 1.4px var(--separator-1);
	max-height: 100vh;

	@media (max-width: ${(props) => `${props.absoluteSidebarBreakingPoint}px`}) {
		display: ${(props) => (props.isResponsiveSidebarOpen ? "grid" : "none")};
	}
`;

export default PageSidebarStyle;
