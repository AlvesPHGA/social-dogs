import styled from 'styled-components';

export const UserNav = styled.nav`
   display: grid;
   gap: 1rem;
   grid-template-columns: repeat(4, 1fr);

   & a,
   & button {
      align-items: center;
      background: #eee;
      border-radius: 0.2rem;
      border: 1px solid transparent;
      cursor: pointer;
      display: flex;
      height: 40px;
      justify-content: center;
      transition: 0.1s;
      width: 40px;
   }
`;
