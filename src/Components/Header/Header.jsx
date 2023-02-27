import React from 'react';
import { HeaderStyle } from './Header.style';
import { Link } from 'react-router-dom';
import { Container } from '../../Styles/Styles.style';

import { ReactComponent as Dogs } from '../../assets/dogs.svg';
import { UserContext } from '../../UserContext';
import Button from '../Form/Button/Button';

const Header = () => {
   const { data, userLogout } = React.useContext(UserContext);
   return (
      <HeaderStyle>
         <Container>
            <nav>
               <Link to="/">
                  <Dogs />
               </Link>
               {data ? (
                  <Link to="/accout">
                     {data.nome}

                     <button onClick={userLogout}>Sair</button>
                  </Link>
               ) : (
                  <Link to="/login">Login / Criar</Link>
               )}
            </nav>
         </Container>
      </HeaderStyle>
   );
};

export default Header;
