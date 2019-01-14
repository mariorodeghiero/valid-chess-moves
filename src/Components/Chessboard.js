import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../img/logo.svg';
/**
 * TODO:
 *  [x] -  Create board
 *  [x] -  Get position
 *  [] -  Change background color of each cell
 * FIXME:
 *  [] - Remove comments
 *  [] - Remove console.log()
 */

const Board = styled.div`
  border: 30px solid #462921;
  margin-top: 5%;
  margin-left: 35%;
  width: 50%;
  /* margin: 0 auto; */
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: row;
`;

const Cell = styled.div`
  padding: 30%;
  background-color: #b5915f;
  color: #000;
  font-size: 0.6rem;
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

const Aside = styled.aside`
  position: absolute;
  padding: 20px;
  /* height: 200px; */
  top: 30%;
  left: 7%;
  background-color: #333333;
  border-radius: 4px;
  border: none;
`;
const Button = styled.button`
  display: inline-block;
  font-size: 0.7rem;
  padding: 0.4rem 0.9rem;
  background-color: #ff0081;
  color: #fff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: 0;
`;
const Description = styled.p`
  color: #ffffff;
  font-size: 0.7rem;
  padding-bottom: 10px;
`;

export default class Chessboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: '',
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

  handleCell = (event) => {
    console.log('Position', event.target.value);
  }

  render() {
    const { board, position } = this.state;
    return (
      <div>
        <Board>
          {board.map(cell => (
            <Cell key={cell} className={cell}>
              <button type="submit" value={cell} onClick={(e) => { this.handleCell(e); }}>{cell}</button>
            </Cell>
          ))}
          {console.table(board)}
        </Board>
        <Aside>
          <img src={Logo} alt="Valid Chess Moves Logo" />
          <h1>Valid Chess Moves</h1>
          <Description>Select your position and press start.</Description>
          <input type="text" value={position} />
          <Button type="submit">Start</Button>
        </Aside>
      </div>
    );
  }
}
