import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        //colors
        --c-cyan: #67eae2;
        --c-gray: #e5e7eb;
        /* --c-gray: #6b7280; */
        --c-gray--light: #fafafa;
        //radius
        --b-radius: 4px;
    }

    * {
      box-sizing: border-box ;
    }

    html {
        font-size: 16px;
    }
        
`;