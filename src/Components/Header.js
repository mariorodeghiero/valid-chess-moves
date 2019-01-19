import React from 'react';
import styled from 'styled-components';

import { mediaWelcome } from '../style-utils';
import Logo from '../img/logo.svg';

const Welcome = styled.div`
  padding-top: 80px;
  img{
    width: 140px;
    height: 140px;
  }
  h1{
    padding-top: 30px;
    font-weight: 100;
    color: #000;
  }
  p{
    margin: 0 auto;
    width: 70%;
    color: #000;
    font-size: 1rem;
    padding-top: 50px;
    font-weight: 100;
    line-height: 1.6em;
  }

  ${mediaWelcome}
`;

const Header = () => (
  <Welcome className="animated fadeIn slower">
    <img src={Logo} alt="Valid Chess Moves Logo" />
    <h1>Valid Chess Moves</h1>
    <p>
      Chess is a two-player strategy board game played on a chessboard,
      a checkered game board with 64 squares/cells arranged in an 8x8 grid.
      Algebraic notation in chess is a method to map cells using A to H as
      columns (left to right) and 1 to 8 as rows (bottom to top).
    </p>
  </Welcome>
);

export default Header;
