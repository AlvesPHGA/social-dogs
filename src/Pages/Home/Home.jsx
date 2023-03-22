import React from 'react';
import Head from '../../Components/Global/Head/Head';
import Load from '../../Components/Helper/Load/Load';
import { Container } from '../../Styles/Styles.style';
import Feeds from '../Feeds/Feeds';
import { HomeStyle } from './Home.style';

const Home = () => {
   return (
      <HomeStyle>
         <Head title="Home" />
         <Container>
            <Feeds />
         </Container>
      </HomeStyle>
   );
};

export default Home;
