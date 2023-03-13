import React from 'react';
import { DELETE_PHOTO } from '../../../api';
import useFetch from '../../../Hooks/useFetch';
import { ButtonDelete } from './PhotoDelete.style';

const PhotoDelete = ({ id }) => {
   const { load, request } = useFetch();

   async function handleDeletePhoto() {
      const alert = window.confirm('Tem certeza que deseja deletar?');

      if (alert) {
         const { url, options } = DELETE_PHOTO(id);
         const { res } = await request(url, options);
         if (res.ok) window.location.reload();
      }
   }
   return (
      <>
         {load ? (
            <ButtonDelete disabled>Deletar</ButtonDelete>
         ) : (
            <ButtonDelete onClick={handleDeletePhoto}>Deletar</ButtonDelete>
         )}
      </>
   );
};

export default PhotoDelete;
