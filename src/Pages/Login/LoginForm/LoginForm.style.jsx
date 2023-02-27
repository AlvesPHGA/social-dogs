import styled from 'styled-components';

export const LoginFormStyle = styled.form`
   margin-bottom: 4rem;
`;

export const RegisterStyle = styled.div`
   margin-top: 4rem;

   & p {
      margin-top: 2rem;
      margin-bottom: 2rem;
   }

   & a {
      font-size: 1rem;
      font-family: var(--type-first);
      cursor: pointer;
      border: none;
      border-radius: 0.4rem;
      background: #fb1;
      color: #764701;
      padding: 0.8rem 1.2rem;
      box-sizing: border-box;
      min-width: 8rem;
      transition: 0.1s;

      &:hover,
      &:focus {
         outline: none;
         box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
      }
   }
`;

export const LinkPasswordLost = styled.div`
   & a {
      display: inline-block;
      color: #666;
      padding: 0.5rem 0;
      line-height: 1;

      &::after {
         content: '';
         height: 2px;
         width: 100%;
         background: currentColor;
         display: block;
      }
   }
`;
