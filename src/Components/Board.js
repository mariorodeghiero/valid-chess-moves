import React, { PureComponent } from 'react';

import styled from 'styled-components';
import { mediaBoardContainer, mediaCellButton } from '../style-utils';

const BoardContainer = styled.div`
  border: 30px solid #462921;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-auto-flow: row;

  ${mediaBoardContainer}
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

    ${mediaCellButton}
`;

export default class Board extends PureComponent {
  highligh = (value, position) => {
    const isHighligh = position.indexOf(value) !== -1;
    return isHighligh;
  }

  render() {
    const {
      board,
      selectCell,
      handleCell,
      highlighCell,
    } = this.props;
    return (
      <BoardContainer>
        {board.map(cell => (
          <Cell key={cell}>
            <CellButton
              type="submit"
              value={cell}
              onClick={(e) => { handleCell(e); }}
              selectCell={selectCell === cell}
              highlighCell={this.highligh(cell, highlighCell)}
            />
          </Cell>
        ))}
      </BoardContainer>
    );
  }
}
