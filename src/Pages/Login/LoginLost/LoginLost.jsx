import React from 'react';
import { RECOVER_PWD } from '../../../api';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import { Title } from '../../../Components/Global/Title';
import Error from '../../../Components/Helper/Error/Error';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import { Container } from '../../../Styles/Styles.style';
import { LoginLostStyle } from './LoginLost.style';

const LoginLost = () => {
   const login = useForm();
   const { data, load, error, request } = useFetch();

   const pathLocal = window.location;

   async function handleLostPassword(event) {
      event.preventDefault();

      if (login.validate) {
         const { url, options } = RECOVER_PWD({
            login: login.value,
            url: pathLocal.href.replace('passwordlost', 'resetar'),
         });

         const { json } = await request(url, options);
      }
   }

   return (
      <LoginLostStyle>
         <Title>Recuperar senha</Title>

         {data ? (
            <p>{data}</p>
         ) : (
            <form onSubmit={handleLostPassword}>
               <Input
                  legend="Email / Usuario"
                  type="text"
                  userName="email"
                  {...login}
               />
               {load ? (
                  <Button disabled>Enviando...</Button>
               ) : (
                  <Button>Enviar</Button>
               )}
            </form>
         )}

         <Error error={error} />
      </LoginLostStyle>
   );
};

export default LoginLost;
