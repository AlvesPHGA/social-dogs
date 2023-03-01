import React from 'react';
import { Title } from '../../../Components/Global/Title';
import Nav from '../Nav/Nav';
import { UserHeader } from './Header.style';

const Header = () => {
   return (
      <UserHeader>
         <Title>Title</Title>
         <Nav></Nav>
      </UserHeader>
   );
};

export default Header;
