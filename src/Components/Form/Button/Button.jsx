import React from 'react';
import { ButtonStyle } from './Button.style';

const Button = ({ children, ...props }) => {
   return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default Button;
