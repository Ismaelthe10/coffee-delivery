import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
  }


  body{

    max-width: 90rem;
    margin: auto;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
     
  }
  



`
