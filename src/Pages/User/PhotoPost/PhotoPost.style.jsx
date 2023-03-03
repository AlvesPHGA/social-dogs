import styled from 'styled-components';

export const PhotoPostStyle = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 2rem;
   margin-bottom: 2rem;

   & form input[type='file'] {
      margin-bottom: 1rem;
   }
`;

export const PreviewPhoto = styled.div`
   width: 100%;
   height: 100%;

   & .preview {
      border-radius: 1rem;
      background-size: 100%;
      background-position: center center;
      width: 100%;
      height: 100%;

      &::after {
         content: '';
         display: block;
         height: 0px;
         padding-bottom: 100%;
      }
   }
`;
