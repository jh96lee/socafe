import { createGlobalStyle } from "styled-components";

// REVIEW: we created a Global style and within it, it can access props like isDarkMode and depending on that
// REVIEW: value, we can apply different colors
const GlobalStyles = createGlobalStyle`
    :root {
        /* TODO: text */
        --char-default: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5" : "#000"};
        --char-1: ${(props) =>
					props.theme.isDarkMode ? "#c6c9ca" : "#58667e"};
        --char-2: ${(props) =>
					props.theme.isDarkMode ? "#83888a" : "#687283"};
        --char-presentation: ${(props) =>
					props.theme.isDarkMode ? "#b4dcff" : "#64748b"};
        --char-graph: ${(props) =>
					props.theme.isDarkMode ? "#777E90" : "#63727a"};
        --char-success: ${(props) =>
					props.theme.isDarkMode ? "#8cff90" : "#0e6d12"};
        --char-error: ${(props) =>
					props.theme.isDarkMode ? "#ff9292" : "#be0303"};
        --char-button-disabled: ${(props) =>
					props.theme.isDarkMode ? "#9d9d9d" : "#e3e3e3"};
        --char-contrast: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#fff"};
        --char-cta: ${(props) =>
					props.theme.isDarkMode ? "#91ccff" : "#3273d6"};
        --char-like: ${(props) =>
					props.theme.isDarkMode ? "#ff3256" : "#ff3425"};

        /* TODO: darker than primary bg color */
        --bg-default: ${(props) =>
					props.theme.isDarkMode ? "#161719" : "#fbfcfd"};
        /* REVIEW: 1 is for elements like posts, charts, or things that feel primary */
        --bg-1: ${(props) => (props.theme.isDarkMode ? "#18191d" : "#fff")};
        /* REVIEW: 2 is for secondary elements */
        --bg-2: ${(props) => (props.theme.isDarkMode ? "#222531" : "#f3f6f9")};
        --bg-icon: ${(props) =>
					props.theme.isDarkMode ? "#ffffff1a" : "#9a9a9a3b"};
        --bg-presentation: ${(props) =>
					props.theme.isDarkMode ? "#a0d5ff1f" : "#607d8b33"};
        --bg-button-default: ${(props) =>
					props.theme.isDarkMode ? "#ce0036" : "#ea284b"};
        --bg-success: ${(props) =>
					props.theme.isDarkMode ? "#4caf503b" : "#0ed60e47"};
        --bg-error: ${(props) =>
					props.theme.isDarkMode ? "#ff000033" : "#ff5b5b4d"};
        --bg-button-disabled: ${(props) =>
					props.theme.isDarkMode ? "#ef0d5047" : "#d4003f75"};
        --bg-contrast: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};
        --bg-input-default: ${(props) =>
					props.theme.isDarkMode ? "#222831" : "#edf2f5"};

        /* TODO: bg and bg hover are paired up */
        --bg-1-hover: ${(props) =>
					props.theme.isDarkMode ? "#5c64812e" : "#94b4c31f"};
        --bg-2-hover: ${(props) =>
					props.theme.isDarkMode ? "#2C2F39" : "#e5eaee"};
        --bg-icon-hover: ${(props) =>
					props.theme.isDarkMode ? "#6f6f6f6b" : "#afafaf57"};
        --bg-button-default-hover: ${(props) =>
					props.theme.isDarkMode ? "#c10033" : "#ff0042"};
        --bg-contrast-hover: ${(props) =>
					props.theme.isDarkMode ? "#c7c7c7" : "#232323"};

        /* TODO: divider */
        --divider-default: ${(props) =>
					props.theme.isDarkMode ? "#000" : "#d2dee4"};
        --divider-1: ${(props) =>
					props.theme.isDarkMode ? "#222531" : "#eff2f5"};
        --divider-2: ${(props) => (props.theme.isDarkMode ? "#fff" : "#000")};
        --divider-focus: ${(props) =>
					props.theme.isDarkMode ? "#79d5ff" : "#00bfff"};
        --divider-graph: ${(props) =>
					props.theme.isDarkMode ? "#353945" : "#b9c5d0"};

        /* REVIEW: story */
        --story-filled-color:  linear-gradient(to right, #0d69ff, #16b3ff); 
        --story-empty-color: ${(props) =>
					props.theme.isDarkMode ? "#3a3e42" : "#dcdcdc"};

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
        font-size: 1.54rem;
        letter-spacing: -0.6px;
        font-weight: 600;
    }

    h6 {
        font-size: 1.47rem;
        letter-spacing: -0.9px;
        font-weight: 600;
    }

    a {
        font-size: 1.37rem;
        font-weight: 400;
		text-decoration: none;
        letter-spacing: -0.6px;
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
        color: var(--char-1);
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

    @media (max-width: 300px) {
        html {
            font-size: 54%;
        }
    }
`;

export default GlobalStyles;
