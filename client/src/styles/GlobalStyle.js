import { createGlobalStyle } from "styled-components";

// REVIEW: we created a Global style and within it, it can access props like isDarkMode and depending on that
// REVIEW: value, we can apply different colors
const GlobalStyles = createGlobalStyle`
    :root {
        /* TODO: darker than primary bg color */
        --bg-default: ${(props) =>
					props.theme.isDarkMode ? "#161719" : "#fbfcfd"};
        /* REVIEW: 1 is for elements like posts, charts, or things that feel primary */
        --bg-1: ${(props) => (props.theme.isDarkMode ? "#18191d" : "#fff")};
        /* REVIEW: 2 is for secondary elements */
        --bg-2: ${(props) => (props.theme.isDarkMode ? "#222531" : "#f3f6f9")};

        /* TODO: bg and bg hover are paired up */
        --bg-1-hover: ${(props) =>
					props.theme.isDarkMode ? "#5c64812e" : "#94b4c31f"};
        --bg-2-hover: ${(props) =>
					props.theme.isDarkMode ? "#2C2F39" : "#e5eaee"};

        /* TODO: text */
        --char-default: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5" : "#000"};
        --char-1: ${(props) =>
					props.theme.isDarkMode ? "#c6c9ca" : "#58667e"};

        /* TODO: box shadow */
        --box-shadow-default: ${(props) =>
					props.theme.isDarkMode ? "#323546" : "#d2dee4"};

        /* TODO: border */
        --border-default: ${(props) =>
					props.theme.isDarkMode ? "#222531" : "#eff2f5"};
        --border-1: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};

        /* TODO: graph */
        --graph-border-default: ${(props) =>
					props.theme.isDarkMode ? "#353945" : "#b9c5d0"};
        --graph-char-default: ${(props) =>
					props.theme.isDarkMode ? "#777E90" : "#63727a"};

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
					props.theme.isDarkMode ? "#b4dcff" : "#64748b"};
        --icon-presentation-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#a0d5ff1f" : "#607d8b33"};

        /* REVIEW: icon link */ 
        --icon-active-link-color: ${(props) =>
					props.theme.isDarkMode ? "#9ae1e2" : "#2196f3"};
        --icon-active-link-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#bad6ff3d" : "#2196f33b"};

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
        
        --bg-3: ${(props) =>
					props.theme.isDarkMode ? "#2a2d38" : "#91b3c33b"};

        /* REVIEW: separators */
        --separator-1: ${(props) =>
					props.theme.isDarkMode ? "#101112" : "#d2dee4"};
        --separator-2: ${(props) =>
					props.theme.isDarkMode ? "#d2dee4" : "#101112"};

        /* REVIEW: story */
        --story-filled-color:  linear-gradient(to right, #0d69ff, #16b3ff); 
        --story-empty-color: ${(props) =>
					props.theme.isDarkMode ? "#3a3e42" : "#dcdcdc"};

        /* REVIEW: general link */
        --link-cta-color: ${(props) =>
					props.theme.isDarkMode ? "#87ceeb" : "#119bc9"};

        /* REVIEW: text on form */
        --text-error-color: ${(props) =>
					props.theme.isDarkMode ? "#fd8097" : "#a70202"};
        --text-success-color: ${(props) =>
					props.theme.isDarkMode ? "#8cff90" : "#0e6d12"};
        --text-disabled-color: ${(props) =>
					props.theme.isDarkMode ? "#ffffff66" : "#ffffffb3"};
        --bg-error-color: ${(props) =>
					props.theme.isDarkMode ? "#ff000033" : "#ff5b5b4d"};
        --bg-success-color: ${(props) =>
					props.theme.isDarkMode ? "#4caf503b" : "#0ed60e47"};

        /* REVIEW: active and inactive */
        --active-default-color: ${(props) =>
					props.theme.isDarkMode ? "#fff" : "#000"};
        --inactive-default-color: ${(props) =>
					props.theme.isDarkMode ? "#878787" : "#939393"};

        /* REVIEW: likes */
        --likes-icon-color: ${(props) =>
					props.theme.isDarkMode ? "#ff1a56" : "#ff1a56"};
        --likes-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#d2003729" : "#ffc0cb"};
        --likes-hover-bg-color: ${(props) =>
					props.theme.isDarkMode ? "#ff00003d" : "#fbb4c0"};

        /* TODO: background */
        /* --bg-2: ${(props) =>
					props.theme.isDarkMode ? "#202229" : "#f9fafb"}; */
        /* --bg-post: ${(props) =>
					props.theme.isDarkMode ? "#161719" : "#fff"}; */

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

        --beige-1: ${(props) =>
					props.theme.isDarkMode ? "#f6d1ba" : "#f6d1ba"};
        --blue-1: ${(props) =>
					props.theme.isDarkMode ? "#84adff" : "#4f6faf"}; 
        --blue-2: ${(props) =>
					props.theme.isDarkMode ? "#a9f3ff" : "#8ad6e3"};
        --brown-1: ${(props) =>
					props.theme.isDarkMode ? "#a86e5c" : "#a76955"};
        --red-1: ${(props) => (props.theme.isDarkMode ? "#f4506d" : "#ed335f")};

        /* FIX */
        --active-blue: ${(props) =>
					props.theme.isDarkMode ? "#00d0ff17" : "#00d0ff36"};
        --active-yellow: ${(props) =>
					props.theme.isDarkMode ? "#ffc1072e" : "#ffc1072e"};
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
        background-color: var(--bg-default);
    }

    h1 {
        font-size: 2.7rem;
        font-weight: 600;
        letter-spacing: -0.7px;
    }

    h2 {
        font-size: 2.2rem;
        font-weight: 600;
        letter-spacing: -0.7px;
    }

    h3 {
        font-size: 1.94rem;
        font-weight: 600;
        letter-spacing: -0.7px;
    }

    h4 {
        font-size: 1.74rem;
        font-weight: 600;
        letter-spacing: -0.7px;
    }

    h5 {
        font-size: 1.5rem;
        letter-spacing: -0.6px;
        font-weight: 500;
    }

    h6 {
        font-size: 1.37rem;
        letter-spacing: -0.9px;
        font-weight: 600;
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
        font-size: 1.43rem;
        font-weight: 400;
        letter-spacing: -0.5px;
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

    /* REVIEW: decrease font size when size hits 500px or below */
    @media (max-width: 500px) {
        html {
            font-size: 57%;
        }
    }
`;

export default GlobalStyles;
