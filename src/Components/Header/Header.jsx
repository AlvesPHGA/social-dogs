import React from 'react';
import { HeaderStyle } from './Header.style';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <HeaderStyle>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login / Criar</Link>
         </nav>
      </HeaderStyle>
   );
};

export default Header;
