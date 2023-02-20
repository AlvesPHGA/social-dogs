import React from 'react';
import { HeaderStyle } from './Header.style';
import { Link } from 'react-router-dom';
import { Container } from '../../Styles/Styles.style';

const Header = () => {
   return (
      <HeaderStyle>
         <Container>
            <nav>
               <Link to="/">Home</Link>
               <Link to="/login">Login / Criar</Link>
            </nav>
         </Container>
      </HeaderStyle>
   );
};

export default Header;
