import React from 'react';
import { FieldInputStyle } from './FieldInputStyle.style';

const Input = ({
   legend,
   type,
   userName,
   value,
   setValue,
   onChange,
   onBlur,
   error,
}) => {
   return (
      <FieldInputStyle>
         <legend>{legend}</legend>
         <input
            type={type}
            name={userName}
            id=""
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {error && <p className="error">{error}</p>}
      </FieldInputStyle>
   );
};

export default Input;
