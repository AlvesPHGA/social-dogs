import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST } from '../../../api';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import Head from '../../../Components/Global/Head/Head';
import Error from '../../../Components/Helper/Error/Error';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import { AnimaLeft } from '../../../Styles/Styles.style';
import { PhotoPostStyle, PreviewPhoto } from './PhotoPost.style';

const PhotoPost = () => {
   const nome = useForm();
   const idade = useForm('number');
   const peso = useForm('number');

   const [img, setImg] = React.useState({});

   const { data, error, load, request } = useFetch();

   const navigate = useNavigate();

   React.useEffect(() => {
      if (data) navigate('/accout');
   }, [data, navigate]);

   function handlePostPhoto(ev) {
      ev.preventDefault();

      const formData = new FormData();
      formData.append('img', img.file);
      formData.append('nome', nome.value);
      formData.append('peso', peso.value);
      formData.append('idade', idade.value);

      const token = window.localStorage.getItem('token');
      const { url, options } = PHOTO_POST(formData, token);

      request(url, options);

      console.log(nome.value, idade.value, peso.value);
   }

   function handleChangePhoto({ target }) {
      setImg({
         preview: URL.createObjectURL(target.files[0]),
         file: target.files[0],
      });
   }

   return (
      <AnimaLeft>
         <Head title="Adicionar foto" />
         <PhotoPostStyle>
            <form onSubmit={handlePostPhoto}>
               <Input legend="Nome" type="text" {...nome} />
               <Input legend="Idade" type="text" {...idade} />
               <Input legend="Peso" type="text" {...peso} />
               <input
                  type="file"
                  name="img"
                  id="img"
                  onChange={handleChangePhoto}
               />
               {load ? (
                  <Button disabled>Enviando...</Button>
               ) : (
                  <Button>Enviar</Button>
               )}
               <Error error={error} />
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
