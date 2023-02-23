import React from 'react';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import useForm from '../../../Hooks/useForm';

const LoginForm = () => {
   const username = useForm();
   const password = useForm();

   function handleSubmit() {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(),
      })
         .then((res) => {
            console.log(res);
            return res.json();
         })
         .then((json) => {
            console.log(json);
         });
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
