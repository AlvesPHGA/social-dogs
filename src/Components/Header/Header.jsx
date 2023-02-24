import React from 'react';
import { HeaderStyle } from './Header.style';
import { Link } from 'react-router-dom';
import { Container } from '../../Styles/Styles.style';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../../UserContext';

const Header = () => {
   const { data } = React.useContext(UserContext);
   return (
      <HeaderStyle>
         <Container>
            <nav>
               <Link to="/">
                  <Dogs />
               </Link>
               {data ? (
                  <Link to="/accout">{data.nome}</Link>
               ) : (
                  <Link to="/login">Login / Criar</Link>
               )}
            </nav>
         </Container>
      </HeaderStyle>
   );
};

export default Header;
