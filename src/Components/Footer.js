import React, { } from 'react';
import styled from 'styled-components';

const FooterLicense = styled.footer`
  padding: 5px;
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  p {
    font-size: 0.8rem;
    span{
      font-size: 1rem;
    }
  }

`;

const Footer = () => (
  <FooterLicense>
    <p>
      <span role="img" aria-label="Panda">⚖️  </span>
MIT License
    </p>
  </FooterLicense>
);

export default Footer;
