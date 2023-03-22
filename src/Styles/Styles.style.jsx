import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
   max-width: 50rem;
   padding: 0 1rem;
   margin: 0 auto;

   &.mainContainer {
      margin-top: 2rem;
   }
`;

const animaLeft = keyframes`
   to{
      opacity: 1;
      transform: initial;
   }
`;

export const AnimaLeft = styled.section`
   opacity: 0;
   transform: translateX(-20px);
   animation: ${animaLeft} 0.3s forwards;
`;

export const AppStyle = styled.div`
   display: flex;
   flex-direction: column;
   min-height: calc(100vh + 10rem);

   & .body {
      flex: 1;
   }
`;
