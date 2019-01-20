import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from '../img/logo.svg';
import { mediaAsideDiv, mediaBox, mediaCurrentPosition } from '../style-utils';

const AsideDiv = styled.div`
  width: 100%;
  padding-top: 10%;
  margin-left: -15%;

  ${mediaAsideDiv}
`;

const Box = styled.aside`
  padding: 20px;
  width: 70%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 4px;
  border: none;

  p {
    margin: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    font-weight: 1.2em;
    font-size: 0.8rem;
    color: #000;
  }
  img {
    width: 80px;
    height: 80px;
    padding-top: 10px;
  }

  ${mediaBox}
`;

const CurrentPosition = styled.div`
  color: #000;
  font-size: 0.8rem;
  font-weight: 400;
  background-color: #e2e5ec;
  width: 60%;
  height: 10px;
  padding: 10px 10px 10px 10px;
  margin: 0 auto;
  border-radius: 4px;

  ${mediaCurrentPosition}
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

export default class Aside extends PureComponent {
  static defaultProps = {
    position: PropTypes.string,
    getPositions: PropTypes.func,
  };

  render() {
    const { position, getPositions } = this.props;
    return (
      <AsideDiv>
        <Box>
          <img src={Logo} alt="Valid Chess Moves Logo" />
          <p>
            Select the initial position and click on the button for the app highlight all cells
            where the Knight can move in exactly 2 turns.
          </p>
          <CurrentPosition>{position.toUpperCase()}</CurrentPosition>
          <Button type="submit" onClick={() => getPositions(position)}>
            Start
          </Button>
        </Box>
      </AsideDiv>
    );
  }
}
