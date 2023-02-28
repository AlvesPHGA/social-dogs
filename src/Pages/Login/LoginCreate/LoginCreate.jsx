import React from 'react';
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

   const { url, options } = React.useContext(UserContext);

   async function handleCreatedAccout(ev) {
      ev.preventDefault();
      const res = await fetch(url, options);
      const json = await res.json();
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
