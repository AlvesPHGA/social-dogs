import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../../Components/Form/Button/Button';
import Input from '../../../Components/Form/Input/Input';
import { Title } from '../../../Components/Global/Title';
import useForm from '../../../Hooks/useForm';

const LoginReset = () => {
   const [login, setLogin] = React.useState('');
   const [key, setKey] = React.useState('');

   return (
      <section>
         <Title>Resetar senha</Title>
         <form>
            <Input
               legend="Digite uma nova senha"
               type="password"
               userName="passReset"
               {...pass}
            />
            <Button>Resetar</Button>
         </form>
      </section>
   );
};

export default LoginReset;
