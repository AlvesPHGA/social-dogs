import styled from 'styled-components';

import IconView from '../../../assets/visualizacao.svg';

export const PhotoItem = styled.li`
   display: grid;
   border-radius: 0.2rem;
   overflow: hidden;
   cursor: pointer;

   &:hover {
      & .views {
         display: flex;
      }
   }

   &:nth-child(2) {
      grid-column: 2/4;
      grid-row: span 2;

      @media (max-width: 40rem) {
         grid-column: initial;
         grid-row: initial;
      }
   }

   & img {
      grid-area: 1/1;
   }

   & .views {
      grid-area: 1/1;
      background: rgba(0, 0, 0, 0.3);
      color: white;
      font-size: 1rem;
      text-align: center;
      align-items: center;
      justify-content: center;
      display: none;

      &::before {
         content: '';
         width: 16px;
         height: 10px;
         display: inline-block;
         margin-right: 0.25rem;
         background: url(${IconView}) no-repeat;
      }
   }
`;
