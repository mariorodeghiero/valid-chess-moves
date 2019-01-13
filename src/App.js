import React, { Component } from 'react';
import './App.css';

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
      <div>
        <h1>Challenge: Valid Chess Moves</h1>
        <Chessboard />
      </div>
    );
  }
}
