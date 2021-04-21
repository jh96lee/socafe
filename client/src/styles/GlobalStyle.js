import { createGlobalStyle } from "styled-components";

// REVIEW: we created a Global style and within it, it can access props like isDarkMode and depending on that
// REVIEW: value, we can apply different colors
const GlobalStyles = createGlobalStyle`
    :root {
        --primary-background-color: ${(props) =>
					props.theme.isDarkMode ? "#101010" : "#f8f8ff"};
        --secondary-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#fff"};

        --primary-button-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#ff4a5a"};

        --primary-border-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#dfe1e6"};

        --primary-icon-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#000"};    
        --secondary-icon-color: ${(props) =>
					props.theme.isDarkMode ? "#7b7b7b" : "#7b7b7b"};    

        --primary-active-background-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#edf0ff"};
        --primary-active-color: ${(props) =>
					props.theme.isDarkMode ? "" : "#5874dc"};
        
        --bg-2: ${(props) => (props.theme.isDarkMode ? "#0c0c0c" : "#fff4e5")};
        --bg-err: ${(props) =>
					props.theme.isDarkMode ? "#6f1e1e75" : "#ff5b5b4d"};
        --bg-success: ${(props) =>
					props.theme.isDarkMode ? "#87fd8c9e" : "#12b31299"};
        
        --txt-1: ${(props) => (props.theme.isDarkMode ? "#f5f5f5" : "#000000")};
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

    h5 {
        font-size: 1.42rem;
        font-weight: 500;
    }

    h6 {
        font-size: 1.35rem;
        font-weight: 500;
    }

    svg {
        display: block;
        fill: var(--svg-1);
        color: var(--svg-1);
    }

    svg:hover {
        fill: pink;
        color: pink;
    }
`;

export default GlobalStyles;

/* --bg-2: ${(props) => (props.theme.isDarkMode ? "#0a0a0a" : "#ebecf0")};
        --bg-3: ${(props) => (props.theme.isDarkMode ? "#151f28" : "#ffffff")};
        --bg-4: ${(props) => (props.theme.isDarkMode ? "#d60059" : "#7ef4ff")};
        --txt-1: ${(props) => (props.theme.isDarkMode ? "#f5f5f5" : "#0e141b")};
        --txt-2: ${(props) =>
					props.theme.isDarkMode ? "#f5f5f5cc" : "#091e42b5"};
        --cyan-1: ${(props) =>
					props.theme.isDarkMode ? "#00e8dd" : "#11b0a9"};
        --cyan-2: ${(props) =>
					props.theme.isDarkMode ? "#0075704d" : "#00e8dd40"};
        --green-1: ${(props) =>
					props.theme.isDarkMode ? "#00dc4a" : "#009610"};
        --green-2: ${(props) =>
					props.theme.isDarkMode ? "#2f83004d" : "#00d7174d"};
        --yellow-1: ${(props) =>
					props.theme.isDarkMode ? "#ffe200" : "#f7b900"};
        --yellow-2: ${(props) =>
					props.theme.isDarkMode ? "#ffe20033" : "#ffe40047"};
        --orange-1: ${(props) =>
					props.theme.isDarkMode ? "#ff9900" : "#ff980033"};
        --orange-2: ${(props) =>
					props.theme.isDarkMode ? "#ff990033" : "#0e141b"};
        --red-1: ${(props) => (props.theme.isDarkMode ? "#ff3a2c" : "#ff4040")};
        --red-2: ${(props) =>
					props.theme.isDarkMode ? "#b90d0033" : "#f4433633"}; */
