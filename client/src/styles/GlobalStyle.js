import { createGlobalStyle } from "styled-components";

// #27282d

// REVIEW: we created a Global style and within it, it can access props like isDarkMode and depending on that
// REVIEW: value, we can apply different colors
const GlobalStyles = createGlobalStyle`
    :root {
        /* TODO: text */
        --primary-text-color: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5" : "#000"};
        --secondary-text-color: ${(props) =>
					props.theme.isDarkMode ? "#bcbebf" : "#6f8b98"};
        --error-text-color: ${(props) =>
					props.theme.isDarkMode ? "#fd8097" : "#a70202"};
        --success-text-color: ${(props) =>
					props.theme.isDarkMode ? "#8cff90" : "#0e6d12"};

        /* TODO: background */
        --primary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#18191d" : "#fff"};
        --secondary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#1d1f25" : "#f9fafb"};
        --error-background-color: ${(props) =>
					props.theme.isDarkMode ? "#ff000033" : "#ff5b5b4d"};
        --success-background-color: ${(props) =>
					props.theme.isDarkMode ? "#4caf503b" : "#0ed60e47"};

         /* TODO: input */
        --disabled-button-background-color: ${(props) =>
					props.theme.isDarkMode ? "#48484854" : "#48484821"};

         /* TODO: border */
        --primary-border-color: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#dfe1e6"};

        /* TODO: icon */
        --primary-icon-color: ${(props) =>
					props.theme.isDarkMode ? "#a4a4a4" : "#64748b"};    
        --secondary-icon-color: ${(props) =>
					props.theme.isDarkMode ? "#fff" : "#000"};    

        /* TODO: active */
        --primary-active-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#edf0ff"};
        --primary-active-color: ${(props) =>
					props.theme.isDarkMode ? "#fff" : "#000"};

        /* TODO: border and box shadow colors */
        --primary-separator-color: ${(props) =>
					props.theme.isDarkMode ? "#0e0e0e" : "#deeaef"};
        --focus-separator-color: ${(props) =>
					props.theme.isDarkMode ? "#6c8a98" : "#90b8cb"};
        
        /* TODO: clickable */
        --primary-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#ec2348c4" : "#ed143ded"};

        /* TODO: hover */
        --primary-hover-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#c30042" : "#d4054a"};
        --secondary-hover-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#5a5a5a6b" : "#cacaca69"};
        --primary-hover-icon-color: ${(props) =>
					props.theme.isDarkMode ? "#fff" : "#000"};

        --primary-toggle-background-color: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#fff"};
        --primary-theme-toggle-background-color: ${(props) =>
					props.theme.isDarkMode ? "#253842" : "#96ddfc"};
        --secondary-theme-toggle-background-color: ${(props) =>
					props.theme.isDarkMode ? "#7fa2b2" : "#04b1ff"};

        /* TODO: colors */
        --green: ${(props) => (props.theme.isDarkMode ? "#00d509" : "#00a400")};
        
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
        font-weight: 600;
        letter-spacing: -1.3px;
    }

    h2 {
        font-size: 2.4rem;
        font-weight: 600;
        letter-spacing: -1.3px;
    }

    h3 {
        font-size: 1.9rem;
        font-weight: 600;
        letter-spacing: -0.9px;
    }

    h4 {
        font-size: 1.64rem;
        font-weight: 500;
        letter-spacing: -1.2px;
    }

    h5 {
        font-size: 1.47rem;
        letter-spacing: -0.9px;
        font-weight: 500;
    }

    h6 {
        font-size: 1.3rem;
    }

    a {
        letter-spacing: -0.6px;
    }

    a:hover {
        text-decoration: underline;
    }

    p {
        font-size: 1.4rem;
        letter-spacing: -0.7px;
    }

    svg {
        display: block;
    }

    
`;

export default GlobalStyles;
