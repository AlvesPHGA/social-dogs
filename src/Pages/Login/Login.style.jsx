import styled from 'styled-components';

import backLoginDog from '../../assets/login.jpg';

export const LoginStyle = styled.section`
   display: grid;
   grid-template-columns: 1fr 1fr;
   min-height: 100vh;
   gap: 2rem;

   @media (max-width: 40rem) {
      grid-template-columns: 1fr;
   }

   &::before {
      display: block;
      content: '';
      background: url(${backLoginDog}) no-repeat center center;
      background-size: cover;

      @media (max-width: 40rem) {
         background: none;
      }
   }
`;

export const BoxFormsStyle = styled.div`
   max-width: 30rem;
   padding: 1rem;

   @media (max-width: 40rem) {
      max-width: 100%;
   }
`;
