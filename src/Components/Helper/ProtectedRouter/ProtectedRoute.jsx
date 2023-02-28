import React from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

const ProtectedRoute = () => {
   const { login } = React.useContext(UserContext);

   return login ? <div>Ok</div> : <Navigate to="/login" />;
};

export default ProtectedRoute;
