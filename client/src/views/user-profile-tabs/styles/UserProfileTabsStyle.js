import styled from "styled-components";

export const UserProfileTabsStyle = styled.div`
	display: flex;
	align-items: center;
`;

export const UserProfileTabStyle = styled.div`
	position: relative;
	z-index: 10;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.8rem;
	padding: 1.3rem 3rem;
	box-shadow: 0 1px 0 0
		${(props) =>
			props.isTabActive
				? "var(--active-default-color)"
				: "var(--inactive-default-color)"};

	& > h5 {
		font-size: 1.45rem;
		font-weight: ${(props) => (props.isTabActive ? "500" : "400")};
		letter-spacing: -0.7px;
		color: ${(props) =>
			props.isTabActive
				? "var(--active-default-color)"
				: "var(--inactive-default-color)"};
	}

	& > svg {
		fill: ${(props) =>
			props.isTabActive
				? "var(--active-default-color)"
				: "var(--inactive-default-color)"};
		width: 1.45rem;
		height: 1.45rem;
	}

	&:hover {
		cursor: pointer;
	}

	&:hover > h5 {
		text-decoration: underline;
	}

	@media (max-width: 1150px) {
		width: 100%;
		padding: 1rem 0;

		& > svg {
			width: 2.2rem;
			height: 2.2rem;
		}

		& > h5 {
			display: none;
		}
	}
`;
