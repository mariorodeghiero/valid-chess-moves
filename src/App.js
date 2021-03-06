import React from 'react';
import { createGlobalStyle } from 'styled-components';

import Main from './Components/Main';
import Footer from './Components/Footer';

const GlobalStyle = createGlobalStyle`
  html,
  body{
    @import url('https://fonts.googleapis.com/css?family=Roboto:300,400');

    font-family: 'Roboto', sans-serif;
    font-weight: 100;
    line-height: 1.1;
    letter-spacing: 0.025em;
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 100%;
    background: #e2e5ec;
    color: #c3c3c3;
    vertical-align: baseline;
  }
`;

const App = () => (

  <React.Fragment>
    <GlobalStyle />
    <Main />
    <Footer />
  </React.Fragment>
);

export default App;
