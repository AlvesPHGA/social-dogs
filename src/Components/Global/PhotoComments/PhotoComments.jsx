import React, { useContext } from 'react';
import { UserContext } from '../../../UserContext';
import { PhotoCommentsStyle } from './PhotoComments.style';
import PhotoCommentsForm from './PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = () => {
   const { login } = useContext(UserContext);

   if (login)
      return (
         <PhotoCommentsStyle>
            <PhotoCommentsForm />
         </PhotoCommentsStyle>
      );
   else return null;
};

export default PhotoComments;
