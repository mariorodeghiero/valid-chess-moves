import React, { Component } from 'react';
import styled from 'styled-components';
/**
 * TODO:
 *  [] -  create board
 *  [] -  Change background color of each cell
 * FIXME:
 *  [] -
 */

const Board = styled.div`
  border: 49px solid #462921;
  width: 560px;
  margin: 0 auto;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(8, 70px);
  grid-template-rows: repeat(8, 70px);
  grid-auto-flow: row;
`;
const Cell = styled.div`
  padding: 20px;
  font-size: 150%;
  background-color: #b5915f;
  color: #000;
  text-align: center;

  :nth-child(-2n + 7),
  :nth-child(9) ~ div:nth-child(-2n + 16),
  :nth-child(16) ~ div:nth-child(-2n + 23),
  :nth-child(25) ~ div:nth-child(-2n + 32),
  :nth-child(32) ~ div:nth-child(-2n + 39),
  :nth-child(41) ~ div:nth-child(-2n + 48),
  :nth-child(48) ~ div:nth-child(-2n + 55),
  :nth-child(57) ~ div:nth-child(-2n + 64) {
    background-color: #441a03;
    color: #fff;
  }
`;

export default class Chessboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [
        'a8',
        'b8',
        'c8',
        'd8',
        'e8',
        'f8',
        'g8',
        'h8',
        'a7',
        'b7',
        'c7',
        'd7',
        'e7',
        'f7',
        'g7',
        'h7',
        'a6',
        'b6',
        'c6',
        'd6',
        'e6',
        'f6',
        'g6',
        'h6',
        'a5',
        'b5',
        'c5',
        'd5',
        'e5',
        'f5',
        'g5',
        'h5',
        'a4',
        'b4',
        'c4',
        'd4',
        'e4',
        'f4',
        'g4',
        'h4',
        'a3',
        'b3',
        'c3',
        'd3',
        'e3',
        'f3',
        'g3',
        'h3',
        'a2',
        'b2',
        'c2',
        'd2',
        'e2',
        'f2',
        'g2',
        'h2',
        'a1',
        'b1',
        'c1',
        'd1',
        'e1',
        'f1',
        'g1',
        'h1',
      ],
    };
  }

  render() {
    const { board } = this.state;
    return (
      <div>
        <Board>
          {board.map(cell => (
            <Cell key={cell} className={cell}>
              {cell}
            </Cell>
          ))}
          {console.table(board)}
        </Board>
        <button type="submit">Send</button>
      </div>
    );
  }
}
