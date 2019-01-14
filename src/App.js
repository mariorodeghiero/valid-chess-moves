import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';

import Chessboard from './Components/Chessboard';
import Footer from './Components/Footer';
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
    width: 80px;
    height: 80px;
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
        <Chessboard />
        <Footer />
      </React.Fragment>
    );
  }
}
