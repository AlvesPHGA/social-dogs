import React from 'react';

const useForm = () => {
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState(null);

   function onChange({ target }) {
      console.log(target.value);
   }
   return {
      value,
      setValue,

      error,

      onChange,
   };
};

export default useForm;
