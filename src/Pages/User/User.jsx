import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../Components/Helper/NotFound/NotFound';
import { Container } from '../../Styles/Styles.style';
import { UserContext } from '../../UserContext';
import Feeds from '../Feeds/Feeds';
import Header from './Header/Header';
import PhotoPost from './PhotoPost/PhotoPost';
import Stats from './Stats/Stats';

const User = () => {
   const { data } = React.useContext(UserContext);
   return (
      <Container>
         <Header />
         <Routes>
            <Route path="/" element={<Feeds user={data.id} />} />
            <Route path="post" element={<PhotoPost />} />
            <Route path="stats" element={<Stats />} />

            <Route path="*" element={<NotFound />} />
         </Routes>
      </Container>
   );
};

export default User;
