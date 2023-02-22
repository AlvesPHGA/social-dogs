import styled from 'styled-components';

export const FieldInputStyle = styled.label`
   display: block;
   margin-bottom: 1rem;

   & legend {
      display: block;
      font-size: 1rem;
      line-height: 1;
      padding-bottom: 0.5rem;
   }

   & input {
      background: #eee;
      border-radius: 0.4rem;
      border: 1px solid #eee;
      display: block;
      font-size: 1rem;
      padding: 0.8rem;
      transition: 0.2s;
      width: 100%;

      &:focus,
      &:hover {
         background: white;
         border-color: #fb1;
         box-shadow: 0 0 0 3px #fea;
         outline: none;
      }
   }

   & .error {
      color: #f31;
      font-size: 0.875rem;
      margin-top: 0.25rem;
   }
`;
