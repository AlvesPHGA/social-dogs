import React from 'react';
import { Container } from '../../Styles/Styles.style';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

const Feeds = () => {
   const [modalPhoto, setModalPhoto] = React.useState(null);
   return (
      <>
         {modalPhoto && <FeedModal photo={modalPhoto} />}

         <FeedPhotos setModalPhoto={setModalPhoto} />
      </>
   );
};

export default Feeds;
