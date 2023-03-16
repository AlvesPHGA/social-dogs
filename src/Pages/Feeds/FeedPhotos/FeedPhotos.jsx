import React from 'react';
import { PHOTOS_GET } from '../../../api';
import Error from '../../../Components/Helper/Error/Error';
import Load from '../../../Components/Helper/Load/Load';
import useFetch from '../../../Hooks/useFetch';
import { AnimaLeft } from '../../../Styles/Styles.style';
import FeedPhotoItems from '../FeedPhotoItems/FeedPhotoItems';
import { FeedPhotosStyle } from './FeedPhotos.style';

const FeedPhotos = ({ user, page, setModalPhoto, setInfinite }) => {
   const { data, load, error, request } = useFetch();

   React.useEffect(() => {
      async function fetchPhotos() {
         const total = 3;
         const { url, options } = PHOTOS_GET({ page, total, user });
         const { res, json } = await request(url, options);

         if (res && res.ok && json.length < total) setInfinite(false);
      }

      fetchPhotos();
   }, [request, user, page, setInfinite]);

   if (error) return <Error error={error} />;
   if (load) return <Load />;

   if (data)
      return (
         <AnimaLeft>
            <FeedPhotosStyle>
               {data.map((photo) => (
                  <FeedPhotoItems
                     key={photo.id}
                     photo={photo}
                     setModalPhoto={setModalPhoto}
                  />
               ))}
            </FeedPhotosStyle>
         </AnimaLeft>
      );
   else return null;
};

export default FeedPhotos;
