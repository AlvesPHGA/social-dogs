import React from 'react';
import { PhotoItem } from './FeedPhotoItems.style';

const FeedPhotoItems = ({ photo }) => {
   return (
      <PhotoItem>
         <img src={photo.src} alt={photo.title} />
         <span className="views">{photo.acessos}</span>
      </PhotoItem>
   );
};

export default FeedPhotoItems;
