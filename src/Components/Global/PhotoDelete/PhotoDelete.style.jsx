import styled from 'styled-components';

export const ButtonDelete = styled.button`
   background: #ddd;
   border-radius: 0.4rem;
   border: 1px solid transparent;
   cursor: pointer;
   font-family: var(--type-first);
   font-size: 0.875rem;
   line-height: 1;
   padding: 0.3rem 0.6rem;
   transition: 0.1s;

   &:focus,
   &:hover {
      outline: none;
      background: white;
      box-shadow: 0 0 0 3px #eee;
      border-color: #333;
   }
`;
