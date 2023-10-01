import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    // variables
    :root {
        //colors
        --c-cyan: #67eae2;
        --c-cyan--light: #bdf3f0;
        --c-gray: #e5e7eb;
        --c-black: #1f2937;
        --c-gray--dark: #6b7280;
        --c-gray--light: #fafafa;
        //radius
        --b-radius: 4px;
        //break points
        --bp-medium: 640px;
        --bp-large: 1024px;
    }

    // reset
    *, *::after, *::before {
      box-sizing: border-box ;
    }

    img {
        vertical-align: bottom;
    }

    html {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: var(--c-black);
        margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
    }

    // layout
    .container {
        width: 100%;
        padding: 0 16px;
        max-width: 1024px;
        margin: 0 auto;
    }
    // typography
    h1 {
        font-size: 36px;
        font-weight: 700;
        margin: 0;
        margin-bottom: 36px;
        line-height: 1.1;
    }

    p {
        color: var(--c-gray--dark);
        margin-bottom: 40px;
    }

    // mixins


`;
