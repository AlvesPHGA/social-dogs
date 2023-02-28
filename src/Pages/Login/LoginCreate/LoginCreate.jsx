import React from 'react';
import { USER_POST } from '../../../api';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import { Title } from '../../../Components/Global/Title';
import useForm from '../../../Hooks/useForm';
import { AnimaLeft } from '../../../Styles/Styles.style';
import { UserContext } from '../../../UserContext';

const LoginCreate = () => {
   const username = useForm();
   const email = useForm('email');
   const password = useForm();

   const { userLogin } = React.useContext(UserContext);

   async function handleCreatedAccout(ev) {
      ev.preventDefault();

      const { url, options } = USER_POST({
         username: username.value,
         email: email.value,
         password: password.value,
      });

      const res = await fetch(url, options);

      if (res.ok) userLogin(username.value, password.value);
   }

   return (
      <AnimaLeft>
         <Title>Cadastre-se</Title>

         <form onSubmit={handleCreatedAccout}>
            <Input
               legend="Nome de usuario"
               type="text"
               name="userName"
               {...username}
            />
            <Input legend="Email" type="email" name="userEmail" {...email} />
            <Input
               legend="Senha"
               type="password"
               name="userPass"
               {...password}
            />
            <Button>Cadastrar</Button>
         </form>
      </AnimaLeft>
   );
};

export default LoginCreate;
