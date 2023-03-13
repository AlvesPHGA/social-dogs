import styled from 'styled-components';

export const PhotoCommentsFormStyle = styled.form`
   display: grid;
   grid-template-columns: 1fr auto;
   align-items: stretch;
   margin: 1rem;

   & textarea {
      display: block;
      width: 100%;
      border: 1px solid #eee;
      font-size: 1rem;
      font-family: var(--type-first);
      resize: none;
      padding: 0.5rem;
      border-radius: 0.2rem;
      background: #eee;
      transition: 0.2s;

      &:focus,
      &:hover {
         outline: none;
         border-color: #fb1;
         background: white;
         box-shadow: 0 0 0 3px #fea;
      }
   }

   & button {
      border: none;
      cursor: pointer;
      color: #333;
      background: transparent;
      font-size: 1rem;
      padding: 0 1rem;
      overflow: hidden;
   }
`;
