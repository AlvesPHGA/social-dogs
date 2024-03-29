import styled from 'styled-components';

export const PhotoCommentsStyle = styled.div`
   & .commentsList {
      overflow-y: auto;
      word-break: break-word;
      padding: 0 2rem;

      &.singlePage {
         padding: 0;
      }

      & li {
         margin-bottom: 0.5rem;
         line-height: 1.2;

         & span {
            font-weight: bold;
         }
      }
   }
`;
