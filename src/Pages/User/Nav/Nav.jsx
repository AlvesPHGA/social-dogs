import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import { UserNav } from './Nav.style';

import { ReactComponent as MyPhotos } from '../../../assets/feed.svg';
import { ReactComponent as MyStats } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Exit } from '../../../assets/sair.svg';

const Nav = () => {
   const { userLogout } = React.useContext(UserContext);
   return (
      <UserNav>
         <NavLink to="/accout">
            <MyPhotos />
            Minhas fotos
         </NavLink>
         <NavLink to="/accout/stats">
            <MyStats />
            Estatisticas
         </NavLink>
         <NavLink to="/accout/post">
            <AddPhoto />
            Adicionar foto
         </NavLink>
         <button onClick={userLogout}>
            <Exit />
            Sair
         </button>
      </UserNav>
   );
};

export default Nav;
