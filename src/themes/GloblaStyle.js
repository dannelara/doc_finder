import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 20px;
    scroll-behavior: smooth;
    font-family: 'Libre Franklin', sans-serif; 
  }

  html, body { height: 100vh; width: 100vw; margin: 0; }
  #root {
    height: 100vh;
    width: 100vw;
  }
  `;

export default GlobalStyle;
