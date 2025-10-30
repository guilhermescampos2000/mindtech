import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Paleta de Cores do design */
  :root {
    --color-light-blue: #CADDFF;
    --color-medium-blue: #165CDE;
    --color-dark-blue: #092456;
    --color-white: #FFFFFF;
    --color-black: #000000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* ... estilos de corpo ... */
    font-family: 'Poppins', sans-serif;
    /* ... */
    min-height: 100vh;
  }
`;

export default GlobalStyles;