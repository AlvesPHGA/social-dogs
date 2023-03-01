import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '../../Styles/Styles.style';
import Feeds from '../Feeds/Feeds';
import Header from './Header/Header';
import PhotoPost from './PhotoPost/PhotoPost';
import Stats from './Stats/Stats';

const User = () => {
   return (
      <Container>
         <Header />
         <Routes>
            <Route path="/" element={<Feeds />} />
            <Route path="post" element={<PhotoPost />} />
            <Route path="stats" element={<Stats />} />
         </Routes>
      </Container>
   );
};

export default User;
