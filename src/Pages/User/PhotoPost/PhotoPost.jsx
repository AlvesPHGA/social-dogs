import React from 'react';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import { AnimaLeft } from '../../../Styles/Styles.style';

const PhotoPost = () => {
   const name = useForm();
   const age = useForm('number');
   const weight = useForm('number');

   const [img, setImg] = React.useState({});

   const { data, error, load, request } = useFetch();

   function handleChangePhoto({ target }) {
      setImg({
         file: target.files[0],
      });
   }

   async function handlePostPhoto(ev) {
      ev.preventDefault();

      console.log(name.value, age.value, weight.value);
   }

   return (
      <AnimaLeft>
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
      </AnimaLeft>
   );
};

export default PhotoPost;
