import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Logo from './img/logo.svg';
import Chessboard from './Components/Chessboard';
/**
 * TODO:
 *  [] -  sendPosition
 *  [] -  selectedCell
 *  [] -  only one cell can be selected
 *  [] -  highlighted
 *  [] -  knighPosition
 *  [] -  possiblePositions
 *  [] -  algebraicNotation
 * FIXME:
 *  [] -
 */


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  * {
    font-family: "Roboto";
    font-weight: 100;
    line-height: 1.1;
    letter-spacing: 0.025em;
  }
  body{
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 100%;
    background: #232526;
    background: -webkit-linear-gradient(to right, #232526, #414345);
    background: linear-gradient(to right, #232526, #414345);
    color: #c3c3c3;
  }
  img {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 100px;
    left: 120px;
  }
`;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // highlighted: [],
      // selectedCell: [],
      // algebraicNotation: '',
      // knighPosition: [],
      // sendPosition: false,
      // possiblePositions: [],
      // moved: false,
    };
  }

  render() {
    return (

      <React.Fragment>
        <GlobalStyle />
        <img src={Logo} alt="Valid Chess Moves Logo" />
        <h1>Valid Chess Moves</h1>
        <Chessboard />
      </React.Fragment>
    );
  }
}
