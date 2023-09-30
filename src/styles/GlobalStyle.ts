import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap');

    :root {
        //colors
        --c-cyan: #67eae2;
        --c-gray: #e5e7eb;
        --c-black: #1f2937;
        /* --c-gray: #6b7280; */
        --c-gray--light: #fafafa;
        //radius
        --b-radius: 4px;
    }

    * {
      box-sizing: border-box ;
    }

    img {
        vertical-align: bottom;
    }
    h1 {
        font-size: 48px;
        font-weight: 700;
        margin: 0;
        margin-bottom: 36px;
        line-height: 1.1;
    }

    p {
        margin-bottom: 40px;
    }

    html {
        font-family: 'Raleway', sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: var(--c-black);
    }
        
`;