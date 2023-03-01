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

   const [mobile, setMobile] = React.useState(null);
   return (
      <UserNav>
         <NavLink to="/accout">
            <MyPhotos />
            {mobile && 'Minhas fotos'}
         </NavLink>
         <NavLink to="/accout/stats">
            <MyStats />
            {mobile && 'Estatisticas'}
         </NavLink>
         <NavLink to="/accout/post">
            <AddPhoto />
            {mobile && 'Adicionar foto'}
         </NavLink>
         <button onClick={userLogout}>
            <Exit />
            {mobile && 'Sair'}
         </button>
      </UserNav>
   );
};

export default Nav;
