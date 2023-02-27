import React from 'react';
import { ErrorStyle } from './Error.style';

const Error = ({ error }) => {
   if (!error) return null;
   return <ErrorStyle>{error}</ErrorStyle>;
};

export default Error;
