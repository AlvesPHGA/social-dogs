import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import LoginCreate from './LoginCreate/LoginCreate';
import LoginForm from './LoginForm/LoginForm';
import LoginLost from './LoginLost/LoginLost';
import LoginReset from './LoginReset/LoginReset';

const Login = () => {
   return (
      <>
         <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="create" element={<LoginCreate />} />
            <Route path="passwordlost" element={<LoginLost />} />
            <Route past="reset" element={<LoginReset />} />
         </Routes>
      </>
   );
};

export default Login;
