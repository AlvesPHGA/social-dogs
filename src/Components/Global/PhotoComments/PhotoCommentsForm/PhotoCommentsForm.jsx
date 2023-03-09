import React from 'react';
import { PhotoCommentsFormStyle } from './PhotoCommentsForm.style';

const PhotoCommentsForm = () => {
   return (
      <PhotoCommentsFormStyle>
         <textarea name="photoComment" id="photoComment"></textarea>
      </PhotoCommentsFormStyle>
   );
};

export default PhotoCommentsForm;
