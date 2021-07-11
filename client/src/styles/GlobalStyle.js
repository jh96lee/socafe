import { createGlobalStyle } from "styled-components";

// REVIEW: we created a Global style and within it, it can access props like isDarkMode and depending on that
// REVIEW: value, we can apply different colors
const GlobalStyles = createGlobalStyle`
    :root {
        /* REVIEW: button default */
        --button-default-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#ce0036" : "#ea284b"};
        --button-default-hover-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#c10033" : "#ff0042"};
        --button-disabled-color: ${(props) =>
					props.theme.isDarkMode ? "#ffffff66" : "#ffffffb3"};
        --button-disabled-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#ec23482b" : "#ec234866"};

        /* REVIEW: icon default */
        --icon-default-color: ${(props) =>
					props.theme.isDarkMode ? "#fff" : "#000"};
        --icon-default-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#ffffff1a" : "#9a9a9a3b"};
        --icon-default-hover-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#6f6f6f6b" : "#afafaf57"};

        /* REVIEW: icon presentation */
        --icon-presentation-color: ${(props) =>
					props.theme.isDarkMode ? "#92ccff" : "#64748b"};
        --icon-presentation-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#a0d5ff1f" : "#607d8b33"};

        /* REVIEW: icon link */ 
        --icon-active-link-color: ${(props) =>
					props.theme.isDarkMode ? "#b0e5ff" : "#44a0e4"};
        --icon-active-link-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#bad6ff3d" : "#87cefa73"};

        /* REVIEW: icon success */
        --icon-success-color: ${(props) =>
					props.theme.isDarkMode ? "#00b700" : "#009800"};
        
        /* REVIEW: input default */
        --input-default-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#202229" : "#f9fafb"};
        --input-default-separator-color: ${(props) =>
					props.theme.isDarkMode ? "#0a0a0a" : "#d3dfe4"};
        --input-placeholder-default-color: ${(props) =>
					props.theme.isDarkMode ? "#bcbebf" : "#546a75"};
        --input-default-focus-color: ${(props) =>
					props.theme.isDarkMode ? "#9ee0ff" : "#00b0ff"};

        /* REVIEW: secondary element */
        --secondary-element-default-color: ${(props) =>
					props.theme.isDarkMode ? "#9fceff" : "#0b76cb"};
        --secondary-element-default-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#7ed3ff24" : "#e5f6ff"};
        --secondary-element-hover-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#3a4b544d" : "#85c9ea2b"};

         /* REVIEW: texts*/
        --text-1: ${(props) => (props.theme.isDarkMode ? "#f5f5f5" : "#000")};
        --text-2: ${(props) =>
					props.theme.isDarkMode ? "#949494" : "#717070"};

        /* REVIEW: backgrounds */
        --bg-3: ${(props) =>
					props.theme.isDarkMode ? "#2a2d38" : "#91b3c33b"};

        /* REVIEW: separators */
        --separator-1: ${(props) =>
					props.theme.isDarkMode ? "#101112" : "#d2dee4"};

        /* REVIEW: story */
        --story-empty-color: ${(props) =>
					props.theme.isDarkMode ? "#3a3e42" : "#dcdcdc"};

        /* REVIEW: general link */
        --link-cta-color: ${(props) =>
					props.theme.isDarkMode ? "#87ceeb" : "#119bc9"};

        /* TODO: text */
        --txt-error: ${(props) =>
					props.theme.isDarkMode ? "#fd8097" : "#a70202"};
        --txt-success: ${(props) =>
					props.theme.isDarkMode ? "#8cff90" : "#0e6d12"};
        --txt-disabled: ${(props) =>
					props.theme.isDarkMode ? "#ffffff66" : "#ffffffb3"};

        /* TODO: background */
        --bg-1: ${(props) => (props.theme.isDarkMode ? "#18191d" : "#fff")};
        --bg-2: ${(props) => (props.theme.isDarkMode ? "#202229" : "#f9fafb")};
        --bg-post: ${(props) => (props.theme.isDarkMode ? "#161719" : "#fff")};
        --bg-filled-story:  linear-gradient(to right, #0d69ff, #16b3ff); 
        --bg-error: ${(props) =>
					props.theme.isDarkMode ? "#ff000033" : "#ff5b5b4d"};
        --bg-success: ${(props) =>
					props.theme.isDarkMode ? "#4caf503b" : "#0ed60e47"};

        /* TODO: icon */
        --icon-1: ${(props) =>
					props.theme.isDarkMode ? "#a4a4a4" : "#64748b"};    
        --icon-3: ${(props) =>
					props.theme.isDarkMode ? "#b6e7ff" : "#64748b"};
        --icon-hover-1: ${(props) =>
					props.theme.isDarkMode ? "#fff" : "#000"};

        /* TODO: toggle */
        --bg-toggle-1: ${(props) => (props.theme.isDarkMode ? "#000" : "#fff")};
        --bg-toggle-theme-1: ${(props) =>
					props.theme.isDarkMode ? "#253842" : "#96ddfc"};
        --bg-toggle-theme-2: ${(props) =>
					props.theme.isDarkMode ? "#7fa2b2" : "#04b1ff"};
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
        background-color: var(--bg-1);
    }

    h1 {
        font-size: 2.7rem;
        font-weight: 600;
        letter-spacing: -1.8px;
    }

    h2 {
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: -1.3px;
    }

    h3 {
        font-size: 1.82rem;
        font-weight: 600;
        letter-spacing: -1.2px;
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
        color: ${(props) => (props.theme.isDarkMode ? "#888888" : "#6f6f6f")};
    }

    svg {
        display: block;
    }

    
`;

export default GlobalStyles;
