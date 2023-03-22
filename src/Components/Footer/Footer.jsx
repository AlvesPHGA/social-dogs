import React from 'react';
import { FooterStyle } from './Footer.style';

import { ReactComponent as DogsFooter } from '../../assets/dogs-footer.svg';

const Footer = () => {
   return (
      <FooterStyle>
         <DogsFooter />
         <p>Dogs. Alguns direitos reservados.</p>
      </FooterStyle>
   );
};

export default Footer;
