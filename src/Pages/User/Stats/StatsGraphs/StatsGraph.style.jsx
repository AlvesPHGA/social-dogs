import styled from 'styled-components';

export const StatsGraphStyle = styled.section`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;

   & .total {
      grid-column: 1/3;
      padding: 2rem;
      font-size: 2rem;
   }

   & .graphItem {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      border-radius: 0.2rem;
      display: grid;
      align-items: center;
   }
`;
