import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
   max-width: 50rem;
   padding: 0 1rem;
   margin: 0 auto;
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
