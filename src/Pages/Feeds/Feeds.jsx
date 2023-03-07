import React from 'react';
import { Container } from '../../Styles/Styles.style';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

const Feeds = () => {
   return (
      <Container>
         <FeedModal />
         <FeedPhotos />
      </Container>
   );
};

export default Feeds;
