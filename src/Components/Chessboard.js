import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../img/logo.svg';
import calculateMovements from '../knight';

const Board = styled.div`
  border: 30px solid #462921;
  margin: 0 auto;
  right: 0;
  width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: row;

  @media (max-width: 700px) {
    margin: 0 auto;
    margin-bottom: 10%;
    width: 80%;
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

const AsideDiv = styled.div`
  width: 100%;
  padding-top: 35%;

  @media (max-width: 700px) {
      padding-top: 0;
  }
`;
const Aside = styled.aside`
  padding: 20px;
  width: 60%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  border: none;
  p{
    margin: 0;
    padding-bottom: 20px;
    font-weight: 1.2em;
    font-size: 0.8rem;
    color: #000;
  }
  img{
    width: 80px;
    width: 80px;
  }

  @media (max-width: 700px) {
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: row;
    margin-bottom: 30px;
    p{
      margin-top: -20px;
      font-size: 0.7rem;
    }
    img{
      margin-top: -20px;
      width: 60px;
      width: 60px;
    }
  }
`;

const Button = styled.button`
  margin-top: 20px;
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

const CellButton = styled.button`
    padding: 40% 50%;
    background-color: ${props => (props.highlighCell ? '#a40a3c' : 'transparent')};
    color: #c2c2c2;
    background-image:${props => (props.selectCell ? 'url(\'https://static.thenounproject.com/png/839143-200.png\')' : 'none')};
    background-size:cover;
    background-repeat:no-repeat;
    border: none;
    outline: 0;

    @media (max-width: 700px) {
      padding: 40% 50%;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 100px;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: row;
`;

const ContainerBoard = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 0;
    grid-template-columns: 1fr 2fr 1fr;
    grid-auto-flow: row;

    @media (max-width: 700px) {
      width: 80%;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-auto-flow: row;
  }
`;

const Header = styled.header`
  margin-top: 100px;
  h1{
    padding-top: 30px;
    font-weight: 100;
    color: #000;
  }
  p{
  margin: 0 auto;
  width: 60%;
  color: #000;
  font-size: 1rem;
  padding-top: 50px;
  font-weight: 100;
  line-height: 1.6em;
  }

  @media (max-width: 700px) {
    margin-top: 50px;
    h1{
      font-size: 1.8rem;
      font-weight: 200;
      color: #000;
    }
    img{
      width: 100px;
      height: 100px;
    }
  }
`;

const CurrentPosition = styled.div`
  color: #000;
  font-size: 0.8rem;
  background-color: #e2e5ec;
  width: 60%;
  height: 10px;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  border-radius: 4px;

  @media (max-width: 700px) {
      width: 40%;
      padding: 5px;
  }
`;

export default class Chessboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      positionText: '',
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
    this.setState({ positionText: event.target.value, selectCell: event.target.value });
  }

  clearHighlight = () => {
    this.setState({ highlighCell: [] });
  }

  getPositions = (value) => {
    const positons = calculateMovements(value);
    console.log('get', positons);
    this.setState({ highlighCell: positons });
  }

  highligh = (value) => {
    const { highlighCell } = this.state;
    const isHighligh = highlighCell.indexOf(value) !== -1;
    return isHighligh;
  }

  render() {
    const {
      board,
      positionText,
      selectCell,
    } = this.state;
    return (
      <Wrapper>
        <Header>
          <img src={Logo} alt="Valid Chess Moves Logo" />
          <h1>Valid Chess Moves</h1>
          <p>
            Chess is a two-player strategy board game played on a chessboard,
            a checkered game board with 64 squares/cells arranged in an 8x8 grid.
            Algebraic notation in chess is a method to map cells using A to H as
            columns (left to right) and 1 to 8 as rows (bottom to top).
          </p>
        </Header>
        <ContainerBoard>
          <AsideDiv>
            <Aside>
              <img src={Logo} alt="Valid Chess Moves Logo" />
              <p>
                Select the initial position and click on the button for the app highlight all
                cells where the Knight can move in exactly 2 turns.
              </p>
              <CurrentPosition>{positionText.toUpperCase()}</CurrentPosition>
              <Button type="submit" onClick={() => this.getPositions(positionText)}>Start</Button>
            </Aside>
          </AsideDiv>
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
        </ContainerBoard>
      </Wrapper>
    );
  }
}
