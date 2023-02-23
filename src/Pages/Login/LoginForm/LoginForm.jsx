import React from 'react';
import { TOKEN_POST, USER_GET } from '../../../api';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import useForm from '../../../Hooks/useForm';

const LoginForm = () => {
   const username = useForm();
   const password = useForm();

   React.useEffect(() => {
      const token = window.localStorage.getItem('token');
      if (token) getUser(token);
   }, []);

   async function getUser(token) {
      const { url, options } = USER_GET(token);
      const res = await fetch(url, options);
      const json = await res.json();

      console.log(json);
   }

   async function handleSubmit(ev) {
      ev.preventDefault();
      if (username.validate() && password.validate()) {
         const { url, options } = TOKEN_POST({
            username: username.value,
            password: password.value,
         });

         const res = await fetch(url, options);
         const json = await res.json();

         window.localStorage.setItem('token', json.token);

         getUser(json.token);

         console.log(json);
      }
   }
   return (
      <>
         <h1>Login</h1>

         <form onSubmit={handleSubmit}>
            <Input legend="Usuario" type="text" name="userName" {...username} />
            <Input
               legend="Senha"
               type="password"
               name="userPass"
               {...password}
            />

            <Button>Entrar</Button>
         </form>
      </>
   );
};

export default LoginForm;
