import React from 'react';
import Load from '../../Components/Helper/Load/Load';
import { Container } from '../../Styles/Styles.style';
import Feeds from '../Feeds/Feeds';
import { HomeStyle } from './Home.style';

const Home = () => {
   return (
      <HomeStyle>
         <Container>
            <Feeds />
         </Container>
      </HomeStyle>
   );
};

export default Home;
