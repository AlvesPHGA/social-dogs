import React from 'react';
import { Route } from 'react-router';
import { Routes, Navigate } from 'react-router-dom';
import NotFound from '../../Components/Helper/NotFound/NotFound';
import { UserContext } from '../../UserContext';
import { BoxFormsStyle, LoginStyle } from './Login.style';
import LoginCreate from './LoginCreate/LoginCreate';
import LoginForm from './LoginForm/LoginForm';
// import { LoginFormStyle, BoxFormsStyle } from './LoginForm/LoginForm.style';
import LoginLost from './LoginLost/LoginLost';
import LoginReset from './LoginReset/LoginReset';

const Login = () => {
   const { login } = React.useContext(UserContext);

   if (login === true) return <Navigate to="/accout" />;
   return (
      <LoginStyle>
         <BoxFormsStyle>
            <Routes>
               <Route path="/" element={<LoginForm />} />
               <Route path="create" element={<LoginCreate />} />
               <Route path="passwordlost" element={<LoginLost />} />
               <Route path="reset" element={<LoginReset />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BoxFormsStyle>
      </LoginStyle>
   );
};

export default Login;
