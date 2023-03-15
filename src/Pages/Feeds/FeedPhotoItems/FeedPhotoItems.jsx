import React from 'react';
import ImageSkeleton from '../../../Components/Global/ImageSkeleton/ImageSkeleton';
import { PhotoItem } from './FeedPhotoItems.style';

const FeedPhotoItems = ({ photo, setModalPhoto }) => {
   function handleClickModal() {
      setModalPhoto(photo);
   }

   return (
      <PhotoItem onClick={handleClickModal}>
         <ImageSkeleton src={photo.src} alt={photo.title} />
         <span className="views">{photo.acessos}</span>
      </PhotoItem>
   );
};

export default FeedPhotoItems;
