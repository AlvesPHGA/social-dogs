import React from 'react';
import { HeaderStyle } from './Header.style';
import { Link } from 'react-router-dom';
import { Container } from '../../Styles/Styles.style';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';

const Header = () => {
   return (
      <HeaderStyle>
         <Container>
            <nav>
               <Link to="/">
                  <Dogs />
               </Link>
               <Link to="/login">Login / Criar</Link>
            </nav>
         </Container>
      </HeaderStyle>
   );
};

export default Header;
