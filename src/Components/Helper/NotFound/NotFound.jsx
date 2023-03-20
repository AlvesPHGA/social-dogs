import React from 'react';
import { Container } from '../../../Styles/Styles.style';
import { Title } from '../../Global/Title';

const NotFound = () => {
   return (
      <Container className="mainContainer">
         <Title>NotFound</Title>
         <p>Pagina não encontrada.</p>
      </Container>
   );
};

export default NotFound;
