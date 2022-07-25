import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-size: 20px;
    scroll-behavior: smooth;
    font-family: 'Libre Franklin', sans-serif !important; 
  }


  html, body, #root {

    height: 100%;
    margin: 0;
}
  `;

export default GlobalStyle;
