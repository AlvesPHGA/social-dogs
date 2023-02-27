import React from 'react';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import { Title } from '../../../Components/Global/Title';
import useForm from '../../../Hooks/useForm';
import { AnimaLeft } from '../../../Styles/Styles.style';
import { UserContext } from '../../../UserContext';

const LoginForm = () => {
   const username = useForm();
   const password = useForm();

   const { userLogin, error, load } = React.useContext(UserContext);

   async function handleSubmit(ev) {
      ev.preventDefault();
      if (username.validate() && password.validate()) {
         userLogin(username.value, password.value);
      }
   }

   return (
      <AnimaLeft>
         <Title>Login</Title>

         <form onSubmit={handleSubmit}>
            <Input legend="Usuario" type="text" name="userName" {...username} />
            <Input
               legend="Senha"
               type="password"
               name="userPass"
               {...password}
            />

            {load ? (
               <Button disabled>Carregando...</Button>
            ) : (
               <Button>Entrar</Button>
            )}

            {error && <p>{error}</p>}
         </form>
      </AnimaLeft>
   );
};

export default LoginForm;
