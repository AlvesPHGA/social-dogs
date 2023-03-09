import styled from 'styled-components';

export const PhotoContentStyle = styled.div`
   margin: auto;
   height: 36rem;
   border-radius: 0.2rem;
   background: white;
   display: grid;
   grid-template-columns: 36rem 20rem;
   grid-template-rows: auto 1fr auto;
   overflow: hidden;
`;

export const BoxImage = styled.div`
   grid-row: 1/4;
`;

export const BoxDetails = styled.div`
   padding: 2rem 2rem 0 2rem;
`;

export const BoxContentDetails = styled.div``;

export const BoxAttributeDetails = styled.ul``;
