import React from 'react';
import useFetch from '../../../../Hooks/useFetch';
import { PhotoCommentsFormStyle } from './PhotoCommentsForm.style';

import { ReactComponent as Submit } from '../../../../assets/enviar.svg';
import { COMMENT_PHOTO_POST } from '../../../../api';
import Error from '../../../Helper/Error/Error';

const PhotoCommentsForm = ({ id, setComments }) => {
   const { error, load, request } = useFetch();

   const [comment, setComment] = React.useState('');

   async function handleComment(ev) {
      ev.preventDefault();
      const { url, options } = COMMENT_PHOTO_POST(id, { comment });
      const { res, json } = await request(url, options);

      if (res.ok) {
         setComment('');
         setComments((comments) => [...comments, json]);
      }
   }

   return (
      <PhotoCommentsFormStyle onSubmit={handleComment}>
         <textarea
            name="photoComment"
            id="photoComment"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
         ></textarea>
         {load ? (
            <button>Enviando</button>
         ) : (
            <button>
               <Submit />
            </button>
         )}
         <Error error={error} />
      </PhotoCommentsFormStyle>
   );
};

export default PhotoCommentsForm;
