import React from 'react';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';

const LoginForm = () => {
   const [userName, setUserName] = React.useState('');
   const [userPass, setUserPass] = React.useState('');

   function handleSubmit() {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify({ userName, userPass }),
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
            <Input legend="Usuario" type="text" name="userName" />
            <Input legend="Senha" type="password" name="userPass" />

            <Button>Entrar</Button>
         </form>
      </>
   );
};

export default LoginForm;
