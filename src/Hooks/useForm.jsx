import React from 'react';

const types = {
   email: {
      regex: /^\w+([/.-_]?\w+)*@\w+(\.\w{2,3})+$/,
      message: 'Email invalido',
   },

   number: {
      regex: /^\d+$/,
      message: 'Apenas numero',
   },
};

const useForm = (type) => {
   const [value, setValue] = React.useState('');
   const [error, setError] = React.useState(null);

   function validate(value) {
      if (type === false) return true;
      if (value.length === 0) {
         setError('Preencher campo');
         return false;
      } else if (types[type] && !types[type].regex.test(value)) {
         setError(types[type].message);
         return false;
      } else {
         setError(null);
         return true;
      }
   }

   function onChange({ target }) {
      if (error) validate(target.value);
      setValue(target.value);
   }
   return {
      value,
      setValue,

      error,

      onChange,

      validate: () => validate(value),
      onBlur: () => validate(value),
   };
};

export default useForm;
