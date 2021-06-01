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
					props.theme.isDarkMode ? "#bcbebf" : "#546a75"};
        --error-text-color: ${(props) =>
					props.theme.isDarkMode ? "#fd8097" : "#a70202"};
        --success-text-color: ${(props) =>
					props.theme.isDarkMode ? "#8cff90" : "#0e6d12"};
        --disabled-text-color: ${(props) =>
					props.theme.isDarkMode ? "#ffffff66" : "#ffffffb3"};

        /* TODO: background */
        --primary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#18191d" : "#fff"};
        --secondary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#202229" : "#f9fafb"};
        --tertiary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#21232b" : "#6096b12b"};
        --quaternary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#4f606961" : "#6096b12b"};
        --error-background-color: ${(props) =>
					props.theme.isDarkMode ? "#ff000033" : "#ff5b5b4d"};
        --success-background-color: ${(props) =>
					props.theme.isDarkMode ? "#4caf503b" : "#0ed60e47"};
        --primary-toggle-background-color: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#fff"};
        --primary-theme-toggle-background-color: ${(props) =>
					props.theme.isDarkMode ? "#253842" : "#96ddfc"};
        --secondary-theme-toggle-background-color: ${(props) =>
					props.theme.isDarkMode ? "#7fa2b2" : "#04b1ff"};

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
					props.theme.isDarkMode ? "#0a0a0a" : "#d3dfe4"};
        --focus-separator-color: ${(props) =>
					props.theme.isDarkMode ? "#6c8a98" : "#90b8cb"};
        
        /* TODO: clickable */
        --primary-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#ec2348c4" : "#ed143ded"};
        --disabled-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#ec23482b" : "#ec234866"};

        /* TODO: hover */
        --primary-hover-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#c30042" : "#d4054a"};
        --secondary-hover-clickable-background-color: ${(props) =>
					props.theme.isDarkMode ? "#5a5a5a6b" : "#cacaca69"};
        --primary-hover-icon-color: ${(props) =>
					props.theme.isDarkMode ? "#fff" : "#000"};

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
        font-size: 2.7rem;
        font-weight: 600;
        letter-spacing: -1.3px;
    }

    h2 {
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: -1.3px;
    }

    h3 {
        font-size: 1.82rem;
        font-weight: 600;
        letter-spacing: -0.9px;
    }

    h4 {
        font-size: 1.64rem;
        font-weight: 500;
        letter-spacing: -1.2px;
    }

    h5 {
        font-size: 1.5rem;
        letter-spacing: -0.9px;
        font-weight: 500;
    }

    h6 {
        font-size: 1.37rem;
        letter-spacing: -0.9px;
        font-weight: 500;
    }

    a {
        font-size: 1.37rem;
        font-weight: 400;
		text-decoration: none;
        letter-spacing: -0.6px;
    }

    a:hover {
        text-decoration: underline;
    }

    p {
        font-size: 1.4rem;
        font-weight: 400;
        letter-spacing: -0.7px;
    }

    span {
        font-size: 1.3rem;
        font-weight: 300;
        letter-spacing: -0.6px;
        color: ${(props) => (props.theme.isDarkMode ? "#868585" : "#6f6f6f")};
    }

    svg {
        display: block;
    }

    
`;

export default GlobalStyles;
