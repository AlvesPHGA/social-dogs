import React from 'react';
import { PHOTO_GET } from '../../../api';
import PhotoContent from '../../../Components/Global/PhotoContent/PhotoContent';
import Error from '../../../Components/Helper/Error/Error';
import Load from '../../../Components/Helper/Load/Load';
import useFetch from '../../../Hooks/useFetch';
import { FeedModalStyle } from './FeedModal.style';

const FeedModal = ({ photo, setModalPhoto }) => {
   const { data, error, load, request } = useFetch();

   React.useEffect(() => {
      const { url, options } = PHOTO_GET(photo.id);
      request(url, options);
   }, [photo, request]);

   function handleCloseModal(ev) {
      if (ev.target === ev.currentTarget) setModalPhoto(null);
   }

   return (
      <FeedModalStyle onClick={handleCloseModal}>
         {error && <Error error={error} />}
         {load && <Load />}
         {data && <PhotoContent data={data} />}
      </FeedModalStyle>
   );
};

export default FeedModal;
