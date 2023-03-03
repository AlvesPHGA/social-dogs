import styled from 'styled-components';

export const ButtonNavStyle = styled.button`
   background: #eee;
   border-radius: 0.2rem;
   height: 40px;
   width: 40px;
   padding: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid transparent;
   transition: 0.1s;
   cursor: pointer;

   &::after {
      content: '';
      display: block;
      width: 1.2rem;
      height: 2px;
      border-radius: 2px;
      background: currentColor;
      box-shadow: 0 6px currentColor, 0 -6px currentColor;
      transition: 0.2s;
   }

   &:focus,
   &:hover,
   &.activeMenu {
      outline: none;
      background: white;
      box-shadow: 0 0 0 3px #fea;
      border-color: #fb1;
      color: #fb1;
   }

   &.activeMenu {
      transform: rotate(90deg);
      width: 4px;
      height: 4px;
      box-shadow: 0 8px currentColor, 0 -8px currentColor;
   }
`;
