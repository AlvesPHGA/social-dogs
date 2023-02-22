import React from 'react';

const LoginForm = () => {
   const [userName, setUserName] = React.useState('');
   const [userPass, setUserPass] = React.useState('');

   function handleSubmit() {
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify({ userName, userPass }),
      })
         .then((res) => {
            console.log(res);
            return res.json();
         })
         .then((json) => {
            console.log(json);
         });
   }
   return (
      <>
         <h1>Login</h1>

         <form onSubmit={handleSubmit}>
            <input
               type="text"
               name="loginUser"
               id="loginUser"
               onChange={({ target }) => setUserName(target.value)}
            />
            <input
               type="text"
               name="passUser"
               id="passUser"
               onChange={({ target }) => setUserPass(target.value)}
            />

            <button>Entrar</button>
         </form>
      </>
   );
};

export default LoginForm;
