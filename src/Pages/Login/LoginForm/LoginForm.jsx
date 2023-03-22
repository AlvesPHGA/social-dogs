import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import { Subtitle } from '../../../Components/Global/Subtitle';
import { Title } from '../../../Components/Global/Title';
import Error from '../../../Components/Helper/Error/Error';
import useForm from '../../../Hooks/useForm';
import { AnimaLeft } from '../../../Styles/Styles.style';
import { UserContext } from '../../../UserContext';
import {
   LinkPasswordLost,
   LoginFormStyle,
   RegisterStyle,
} from './LoginForm.style';

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

         <LoginFormStyle onSubmit={handleSubmit}>
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

            <Error error={error && 'Dados invalidos'} />
         </LoginFormStyle>

         <LinkPasswordLost>
            <Link to="/login/passwordlost">Perdeu a Senha?</Link>
         </LinkPasswordLost>

         <RegisterStyle>
            <Subtitle>Cadastre-se</Subtitle>
            <p>Ainda não possui conta? Cadastre-se no site.</p>
            <Link to="/login/create">Cadastro</Link>
         </RegisterStyle>
      </AnimaLeft>
   );
};

export default LoginForm;
