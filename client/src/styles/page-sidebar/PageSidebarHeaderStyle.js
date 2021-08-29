import styled from "styled-components";

const PageSidebarHeaderStyle = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	height: fit-content;
	padding: 1.8rem;
	box-shadow: 0 1.4px 0 0 var(--separator-1);

	& h2 {
		color: var(--text-1);
	}
`;

export default PageSidebarHeaderStyle;
