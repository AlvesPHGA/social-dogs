import React from 'react';
import { PhotoItem } from './FeedPhotoItems.style';

const FeedPhotoItems = ({ photo }) => {
   return (
      <PhotoItem>
         <img src={photo.src} alt={photo.title} />
         <span>{photo.acesso}</span>
      </PhotoItem>
   );
};

export default FeedPhotoItems;
