import React from 'react';
import { PHOTOS_GET } from '../../../api';
import Error from '../../../Components/Helper/Error/Error';
import Load from '../../../Components/Helper/Load/Load';
import useFetch from '../../../Hooks/useFetch';
import FeedPhotoItems from '../FeedPhotoItems/FeedPhotoItems';

const FeedPhotos = () => {
   const { data, load, error, request } = useFetch();

   React.useEffect(() => {
      async function fetchPhotos() {
         const { url, options } = PHOTOS_GET({ page: 1, total: 6, user: 0 });
         const { res, json } = await request(url, options);
      }

      fetchPhotos();

      console.log(data);
   }, [request]);

   if (error) return <Error error={error} />;
   if (load) return <Load />;

   if (data)
      return (
         <>
            {data.map((photo) => (
               <FeedPhotoItems key={photo.id} photo={photo} />
            ))}
         </>
      );
   else return null;
};

export default FeedPhotos;
