import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../UserContext';
import { UserNav } from './Nav.style';

import { ReactComponent as MyPhotos } from '../../../assets/feed.svg';
import { ReactComponent as MyStats } from '../../../assets/estatisticas.svg';
import { ReactComponent as AddPhoto } from '../../../assets/adicionar.svg';
import { ReactComponent as Exit } from '../../../assets/sair.svg';
import useMedia from '../../../Hooks/useMedia';
import { ButtonNavStyle } from './ButtonNav.style';

const Nav = () => {
   const { userLogout } = React.useContext(UserContext);

   const mobile = useMedia('(max-width: 40rem)');
   const [mobileMenu, setMobileMenu] = React.useState(false);

   return (
      <>
         {mobile && (
            <ButtonNavStyle
               aria-label="Menu"
               className={`${mobileMenu && activeMenu}`}
               onClick={() => setMobileMenu(!mobileMenu)}
            ></ButtonNavStyle>
         )}

         <UserNav>
            <NavLink to="/accout" end>
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
      </>
   );
};

export default Nav;
