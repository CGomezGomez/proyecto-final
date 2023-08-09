import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{

    display: block;
    max-width: 100%;
    
  }

  body{

    background-image: url("/articulos.jpg");
    margin: auto;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
   
    padding: 0 4rem;
    position: relative;
    min-height: 100vh;
   
  }

  body::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: grey;
    z-index: -1;
    opacity: .8;
  }

  a{

    text-decoration: none;
    color: inherit;

  }

  ul{

    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;

  }
`;

console.log(document.documentElement.scrollHeight)

export { GlobalStyles };
