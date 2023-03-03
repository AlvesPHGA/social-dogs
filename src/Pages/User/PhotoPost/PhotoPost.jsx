import React from 'react';
import { PHOTO_POST } from '../../../api';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import { AnimaLeft } from '../../../Styles/Styles.style';
import { PhotoPostStyle, PreviewPhoto } from './PhotoPost.style';

const PhotoPost = () => {
   const name = useForm();
   const age = useForm('number');
   const weight = useForm('number');

   const [img, setImg] = React.useState({});

   const { data, error, load, request } = useFetch();

   function handleChangePhoto({ target }) {
      setImg({
         preview: URL.createObjectURL(target.files[0]),
         file: target.files[0],
      });
   }

   async function handlePostPhoto(ev) {
      ev.preventDefault();

      const formData = new FormData();
      formData.append('img', img.file);
      formData.append('nome', name.value);
      formData.append('idade', age.value);
      formData.append('peso', weight.value);

      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_POST(formData, token);

      await request(url, options);

      console.log(name.value, age.value, weight.value);
   }

   return (
      <AnimaLeft>
         <PhotoPostStyle>
            <form onSubmit={handlePostPhoto}>
               <Input legend="Nome" type="text" {...name} />
               <Input legend="Idade" type="text" {...age} />
               <Input legend="Peso" type="text" {...weight} />
               <input
                  type="file"
                  name="img"
                  id="img"
                  onChange={handleChangePhoto}
               />
               <Button>Enviar</Button>
            </form>
            <PreviewPhoto>
               {img.preview && (
                  <div
                     className="preview"
                     style={{ backgroundImage: `url('${img.preview}')` }}
                  ></div>
               )}
            </PreviewPhoto>
         </PhotoPostStyle>
      </AnimaLeft>
   );
};

export default PhotoPost;
