import React from 'react';

const ImageSkeleton = ({ src, ...props }) => {
   return (
      <ImageSkeleton>
         <div className="skeleton"></div>
         <img src={src} alt="" {...props} />
      </ImageSkeleton>
   );
};

export default ImageSkeleton;
