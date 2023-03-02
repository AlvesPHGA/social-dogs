import React from 'react';
import { useLocation } from 'react-router-dom';
import { Title } from '../../../Components/Global/Title';
import Nav from '../Nav/Nav';
import { UserHeader } from './Header.style';

const Header = () => {
   const [title, setTitle] = React.useState('');
   const local = useLocation();

   React.useEffect(() => {
      const { pathname } = local;

      switch (pathname) {
         case '/accout/stats':
            setTitle('Estatisticas');
            break;

         case '/accout/post':
            setTitle('Adicionar novo');
            break;

         default:
            setTitle('Minha conta');
      }
   }, [local]);

   return (
      <UserHeader>
         <Title>{title}</Title>
         <Nav></Nav>
      </UserHeader>
   );
};

export default Header;
