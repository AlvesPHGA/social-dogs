import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RESET_PWD } from '../../../api';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import { Title } from '../../../Components/Global/Title';
import Error from '../../../Components/Helper/Error/Error';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';

const LoginReset = () => {
   const [login, setLogin] = React.useState('');
   const [key, setKey] = React.useState('');

   const { data, error, load, request } = useFetch();

   const pass = useForm();

   const navigate = useNavigate();

   React.useEffect(() => {
      const params = new URLSearchParams(window.location.search);
      const [key, login] = [params.get('key'), params.get('login')];

      if (key) setKey(key);
      if (login) setLogin(login);
   }, []);

   async function handleResetPwd(event) {
      event.preventDefault();

      if (pass.validate()) {
         const { url, options } = RESET_PWD({
            password: pass.value,
            key,
            login,
         });
         const { res } = await request(url, options);
         if (res.ok) navigate('/login');
      }
   }

   return (
      <section>
         <Title>Resetar senha</Title>
         <form onSubmit={handleResetPwd}>
            <Input
               legend="Digite uma nova senha"
               type="password"
               userName="passReset"
               {...pass}
            />
            {load ? (
               <Button disabled>Resetando</Button>
            ) : (
               <Button>Resetar</Button>
            )}
         </form>
         <Error error={error} />
      </section>
   );
};

export default LoginReset;
