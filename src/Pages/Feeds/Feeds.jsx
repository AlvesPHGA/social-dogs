import React from 'react';
import { Container } from '../../Styles/Styles.style';
import FeedModal from './FeedModal/FeedModal';
import FeedPhotos from './FeedPhotos/FeedPhotos';

const Feeds = ({ user }) => {
   const [modalPhoto, setModalPhoto] = React.useState(null);
   return (
      <>
         {modalPhoto && (
            <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
         )}

         <FeedPhotos user={user} setModalPhoto={setModalPhoto} />
      </>
   );
};

export default Feeds;
