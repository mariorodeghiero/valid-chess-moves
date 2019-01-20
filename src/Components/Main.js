import React, { Component } from 'react';
import styled from 'styled-components';

import Aside from './Aside';
import Header from './Header';
import Board from './Board';
import { mediaContainer } from '../style-utils';

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
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 500px;
    grid-auto-flow: row;
    width: 100%;
    height: 100%;
    margin-bottom: 50px;

    ${mediaContainer}
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
      .then(data => this.setState({ highlighCell: data }));
  }

  render() {
    const {
      board,
      position,
      selectCell,
      highlighCell,
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
            <Board
              board={board}
              handleCell={this.handleCell}
              selectCell={selectCell}
              highlighCell={highlighCell}
            />
          </div>
        </Container>
      </Wrapper>
    );
  }
}
