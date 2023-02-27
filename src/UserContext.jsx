import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
   const [data, setData] = React.useState(null);
   const [login, setLogin] = React.useState(null);
   const [load, setLoad] = React.useState(false);
   const [error, setError] = React.useState(null);

   const navigate = useNavigate();

   // Logout
   const userLogout = React.useCallback(
      async function () {
         setData(null);
         setError(null);
         setLoad(false);
         setLogin(false);

         window.localStorage.removeItem('token');
         navigate('/login');
      },
      [navigate],
   );

   // Pegar token ja validado
   React.useEffect(() => {
      async function autoLogin() {
         const token = window.localStorage.getItem('token');

         if (token) {
            try {
               setError(null);
               setLoad(true);

               const { url, options } = TOKEN_VALIDATE_POST(token);

               const res = await fetch(url, options);

               if (!res.ok) throw new Error('Token invalido');
               await getUser(token);
            } catch (error) {
               userLogout();
            } finally {
               setLoad(false);
            }
         }
      }
   }, [userLogout]);

   async function getUser(token) {
      const { url, options } = USER_GET(token);
      const res = await fetch(url, options);
      const json = await res.json();

      setData(json);
      setLogin(true);

      console.log(json);
   }

   async function userLogin(username, password) {
      try {
         setError(null);
         setLoad(true);

         const { url, options } = TOKEN_POST({ username, password });
         const tokenRes = await fetch(url, options);

         if (!tokenRes.ok) throw new Error('Usuario invalido');
         const { token } = await tokenRes.json();
         window.localStorage.setItem('token', token);

         await getUser(token);
         navigate('/accout');
      } catch (er) {
         setError(er.message);
         setLogin(false);
      } finally {
         setLoad(false);
      }
   }

   return (
      <UserContext.Provider
         value={{ userLogin, userLogout, data, load, error, login }}
      >
         {children}
      </UserContext.Provider>
   );
};
