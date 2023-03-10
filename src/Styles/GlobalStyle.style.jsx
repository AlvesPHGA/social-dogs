import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=Spectral:wght@700&display=swap');

   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   body{
      --type-first: Helvetica, Arial, sans-serif;
      --type-second: 'Spectral', Georgia;

      color: #333;
      font-family: var(--type-first);
      padding-top: 4rem;
   }

   h1, h2, h3, h4, p{
      margin: 0;
   }

   ul, li{
      list-style: none;
      padding: 0;
      margin: 0;
   }

   a{
      text-decoration: none;
      color: #333;
   }

   img{
      max-width: 100%;
      display: block;
   }

   button, input{
      display: block;
      font-size: 1rem;
      font-family: var(--type-first);
      color: #333;
   }
`;
