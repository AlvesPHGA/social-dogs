import React from 'react';
import { ImageSkeletonStyle } from './ImageSkeleton.style';

const ImageSkeleton = ({ alt, ...props }) => {
   return (
      <ImageSkeletonStyle>
         <div className="skeleton"></div>
         <img className="image" alt={alt} {...props} />
      </ImageSkeletonStyle>
   );
};

export default ImageSkeleton;
