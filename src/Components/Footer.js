import React, { } from 'react';
import styled from 'styled-components';

const FooterLicense = styled.footer`
    div {
      border-top: 1px solid #A0A2A7;
      border-top-width: 90%;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 20px;
      padding-bottom: 20px;
      width: 90%;
      margin: 0 auto;
      color: #000;
      ul {
        text-align: left;
        padding-left: 0px;
        padding-top: 25px;
        padding-bottom: 0;
        li {
          padding-top: 20px;
          list-style: none;
          a {
              text-decoration: none;
              font-size: 0.7rem;
              transition: color 1s ease-out;
              color: inherit;
              cursor: pointer;
              color: #A0A2A7;
          &:hover {
            color: #000000;
          }
          i{
            font-size: 1rem;
          }
          span{
            padding-left: 10px;
          }
        }
        }
      }
      @media (max-width: 700px) {
        grid-template-columns: 1fr 1fr;
        ul{
          li{
            a {
                font-size: 0.2rem;
            }
          }
        }
      }
    }
`;

const CopyRight = styled.a`
  font-size: 0.8rem !important;
  color: #000 !important;
`;

const Footer = () => (
  <FooterLicense>
    <div>
      <section>
        <ul>
          <span>Social media</span>
          <li>
            <a href="https://github.com/mariorodeghiero">
              <i className="fab fa-github" />
              <span>
              github.com/mariorodeghiero
              </span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mariorodeghiero/?locale=en_US">
              <i className="fab fa-linkedin" />
              <span />
              linkedin/in/mariorodeghiero
            </a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <span>Contact</span>
          <li>
            <a href="mailto:mario.rodeghiero@gmail.com?Subject=Hello%20Mario%20Rodeghiero">
              <i className="fas fa-envelope" />
              <span />
              mario.rodeghiero@gmail.com
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=5548996912866">
              <i className="fas fa-phone-square" />
              <span />
               +55 48 99691-2866
            </a>
          </li>
        </ul>
      </section>
      <section>
        <ul>
          <li />
          <li>
            <CopyRight href="https://www.mrodeghiero.com/about.html">
            &lt;/&gt; by Mário Rodeghiero
            </CopyRight>
          </li>
          <li>
            <span role="img" aria-label="MIT License">⚖️ </span>
            MIT License
          </li>
        </ul>
      </section>
    </div>
  </FooterLicense>
);

export default Footer;
