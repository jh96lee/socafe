import { createGlobalStyle } from "styled-components";

// #27282d

// REVIEW: we created a Global style and within it, it can access props like isDarkMode and depending on that
// REVIEW: value, we can apply different colors
const GlobalStyles = createGlobalStyle`
    :root {
        /* TODO: text */
        --primary-text-color: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5" : "#000"};
        --error-text-color: ${(props) =>
					props.theme.isDarkMode ? "#ff6262" : "#b52525"};
        --success-text-color: ${(props) =>
					props.theme.isDarkMode ? "#002d02" : "#005404"};

        /* TODO: background */
        --primary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#18191d" : "#fff"};
        --secondary-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#fff"};
        --error-background-color: ${(props) =>
					props.theme.isDarkMode ? "#6f1e1e75" : "#ff5b5b4d"};
        --success-background-color: ${(props) =>
					props.theme.isDarkMode ? "#87fd8c9e" : "#0ed60ea8"};

         /* TODO: input */
        --primary-input-background-color: ${(props) =>
					props.theme.isDarkMode ? "#1d1f25" : "#f9fafb"};
        --primary-placeholder-color: ${(props) =>
					props.theme.isDarkMode ? "#bcbebf" : "#87a2af"};
        --secondary-placeholder-color: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5" : "#0e0e0e"};

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

        /* TODO: box-shadow */
        --primary-box-shadow-color: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#d3d9e0"};
        --secondary-box-shadow-color: ${(props) =>
					props.theme.isDarkMode ? "#0e0e0e" : "#deeaef"};
        --focus-box-shadow-color: ${(props) =>
					props.theme.isDarkMode ? "#6c8a98" : "#90b8cb"};
        
        /* TODO: clickable */
        --primary-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#ec2348c4" : "#f20d37"};

        /* TODO: hover */
        --primary-hover-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#c30042" : "#ee0151"};
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
