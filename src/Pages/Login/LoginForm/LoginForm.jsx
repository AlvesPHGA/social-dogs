import React from 'react';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import useForm from '../../../Hooks/useForm';
import { UserContext } from '../../../UserContext';

const LoginForm = () => {
   const username = useForm();
   const password = useForm();

   const { userLogin } = React.useContext(UserContext);

   async function handleSubmit(ev) {
      ev.preventDefault();
      if (username.validate() && password.validate()) {
         userLogin(username.value, password.value);
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
