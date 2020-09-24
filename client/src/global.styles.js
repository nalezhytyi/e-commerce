import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    width: 100vw;
    overflow-x: hidden;
}

body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px 50px;
    
    @media screen and (max-width: 800px) {
      padding: 10px;
    }
}

a {
    text-decoration: none;
    color: black;
}

* {
    box-sizing: border-box;
}
`;
