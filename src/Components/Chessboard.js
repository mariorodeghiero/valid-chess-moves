import React, { Component } from 'react';
import styled from 'styled-components';

import { error } from 'util';
import Aside from './Aside';
import Header from './Header';

const Board = styled.div`
  border: 30px solid #462921;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: row;

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-bottom: 15%;
    width: 90%;
    height: 90%;
    border: 10px solid #462921;
  }
`;

const Cell = styled.div`
  background-color: #aa7f5d;
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
  }
`;

const CellButton = styled.button`
    /* padding: 40% 50%; */
    /* margin: 3px; */
    width: 100%;
    height: 100%;
    background-color: ${props => (props.highlighCell ? '#a40a3c' : 'transparent')};
    color: #c2c2c2;
    outline: 0;
    background-image:${props => (props.selectCell ? 'url(\'https://static.thenounproject.com/png/839143-200.png\')' : 'none')};
    background-repeat:no-repeat;
    border: none;
    background-size:cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size:cover;
    -webkit-appearance: none;

    @media (max-width: 768px) {
      padding: 40% 50%;
  }
`;

const Wrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
  display: grid;
  grid-gap: 100px;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: row;
`;

const Container = styled.div`
    display: grid;
    /* grid-gap: 0; */
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 500px;
    grid-auto-flow: row;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;

    @media (max-width: 768px) {
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-rows: 300px;
      grid-auto-flow: row;
  }
`;

export default class Chessboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: '',
      selectCell: [],
      highlighCell: [],
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
    this.clearHighlight();
    this.setState({ position: event.target.value, selectCell: event.target.value });
  }

  clearHighlight = () => {
    this.setState({ highlighCell: [] });
  }

  getPositions = (value) => {
    const url = `https://cors-anywhere.herokuapp.com/https://valid-chess-moves.herokuapp.com/calculate/${value}`;

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ highlighCell: data }))
      .catch(error, console.log('err', error));
  }

  highligh = (value) => {
    const { highlighCell } = this.state;
    const isHighligh = highlighCell.indexOf(value) !== -1;
    return isHighligh;
  }

  render() {
    const {
      board,
      position,
      selectCell,
    } = this.state;
    return (
      <Wrapper>
        <Header />
        <Container>
          <Aside
            position={position}
            getPositions={this.getPositions}
          />
          <div>
            <Board>
              {board.map(cell => (
                <Cell key={cell}>
                  <CellButton
                    type="submit"
                    value={cell}
                    onClick={(e) => { this.handleCell(e); }}
                    selectCell={selectCell === cell}
                    highlighCell={this.highligh(cell)}
                  />
                </Cell>
              ))}
            </Board>
          </div>
        </Container>
      </Wrapper>
    );
  }
}
