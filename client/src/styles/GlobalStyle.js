import { createGlobalStyle } from "styled-components";

// REVIEW: we created a Global style and within it, it can access props like isDarkMode and depending on that
// REVIEW: value, we can apply different colors
const GlobalStyles = createGlobalStyle`
    :root {
        --primary-text-color: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5" : "#000"};

        --primary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#161616" : "#fff"};
        --secondary-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#fff"};

        --primary-input-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#fff"};

        --primary-border-color: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#dfe1e6"};

        --primary-icon-color: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5" : "#000"};    

        --primary-active-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#edf0ff"};
        --primary-active-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#5874dc"};

        --primary-hover-color: ${(props) => (props.theme.isDarkMode ? "" : "")};

        --primary-box-shadow-color: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#d2d2d2"};

        --primary-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#ff3157c4" : "#ff385c"};
        
        --bg-2: ${(props) => (props.theme.isDarkMode ? "#0c0c0c" : "#fff4e5")};
        --bg-err: ${(props) =>
					props.theme.isDarkMode ? "#6f1e1e75" : "#ff5b5b4d"};
        --bg-success: ${(props) =>
					props.theme.isDarkMode ? "#87fd8c9e" : "#12b31299"};
        
        --txt-err: ${(props) =>
					props.theme.isDarkMode ? "#ff6262" : "#b52525"};
        --txt-success: ${(props) =>
					props.theme.isDarkMode ? "#002d02" : "#004603"};

        --btn-bg-1: ${(props) =>
					props.theme.isDarkMode ? "#d4223aba" : "#d22828"};
        --btn-bg-disabled: ${(props) =>
					props.theme.isDarkMode ? "#ff00222e" : "#dd3e469c"};
    }

    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    html {
        font-size: 62.5%;
        background-color: var(--primary-background-color);
    }

    h1 {
        font-size: 3.2rem;
    }

    h2 {
        font-size: 2.4rem;
        letter-spacing: -1.3px;
    }

    h3 {
        font-size: 1.9rem;
        letter-spacing: -1.3px;
    }

    h4 {
        font-size: 1.6rem;
    }

    h5 {
        font-size: 1.4rem;
    }

    h6 {
        font-size: 1.3rem;
    }

    a {
        letter-spacing: -0.6px;
    }

    svg {
        display: block;
    }

    h6:hover, a:hover, svg:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export default GlobalStyles;
