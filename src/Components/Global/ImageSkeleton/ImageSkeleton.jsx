import React from 'react';
import { ImageSkeletonStyle } from './ImageSkeleton.style';

const ImageSkeleton = ({ alt, ...props }) => {
   const [skeleton, setSkeleton] = React.useState(true);
   function handleLoadImage({ target }) {
      setSkeleton(false);
      target.style.opacity = 1;
   }
   return (
      <ImageSkeletonStyle>
         {skeleton && <div className="skeleton"></div>}
         <img onLoad={handleLoadImage} className="image" alt={alt} {...props} />
      </ImageSkeletonStyle>
   );
};

export default ImageSkeleton;
