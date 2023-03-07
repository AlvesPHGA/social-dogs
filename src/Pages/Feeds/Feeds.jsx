import React from 'react';
import { Container } from '../../Styles/Styles.style';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

const Feeds = () => {
   return (
      <>
         <FeedModal />
         <FeedPhotos />
      </>
   );
};

export default Feeds;
