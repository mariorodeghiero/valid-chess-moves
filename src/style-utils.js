/**
 * Main.js
 * Media Queries
 */
export function mediaContainer() {
  return `
    @media (max-width: 768px) {
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-template-rows: 300px;
      grid-auto-flow: row;
    }
  `;
}

/**
 * Header.js
 * Media Queries
 */
export function mediaWelcome() {
  return `
    @media (max-width: 760px) {
      h1{
        font-size: 1.4rem;
        font-weight: 200;
        color: #000;
      }
      p {
        font-size: 0.8rem;
      }
      img{
        width: 80px;
        height: 80px;
      }
    }
  `;
}

/**
 * Footer.js
 * Media Queries
 */

export function mediaFooter() {
  return `
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 50%;
    grid-template-columns: 1fr;

    ul{
      li{
        a {
          font-size: 0.2rem;
        }
      }
    }
  }
  `;
}

/**
 * Asside.js
 * Media Queries
 */

export function mediaAsideDiv() {
  return `
    @media (max-width: 760px) {
      padding-top: 0;
    }

    @media (max-width: 768px) {
      margin: 0 auto;
      padding-bottom: 100px;
    }
  `;
}

export function mediaCurrentPosition() {
  return `
    @media (max-width: 700px) {
      width: 40%;
      padding: 5px;
    }
  `;
}

export function mediaBox() {
  return `
    @media (max-width: 700px) {
      padding: 20px;
      width: 70%;
      grid-template-columns: 1fr;
      grid-auto-flow: row;
      margin-bottom: 30px;

      p{
        margin-top: -20px;
        font-size: 0.6rem;
      }
      img{
        margin-top: -20px;
        width: 60px;
        width: 60px;
      }
    }

    @media (max-width: 768px) {
      margin-bottom: 50px;
    }
  `;
}

export function mediaBoxComputer() {
  return `
    @media (max-width: 1024px) {
      margin-bottom: 50px;
    }
  `;
}


/**
 * Board.js
 * Media Queries
 */

export function mediaBoardContainer() {
  return `
    @media (max-width: 760px) {
      margin-bottom: 15%;
      width: 90%;
      height: 90%;
      border: 10px solid #462921;
    }

    @media (min-width: 768px) {
      margin-top: 20%;
      width: 90%;
      height: 90%;
      border: 10px solid #462921;
    }

    @media (min-width: 1020px) {
      margin-top: 0;
    }

    @media (min-width: 1200px) {
      width: 700px;
      height: 500px;
  }
  `;
}

export function mediaCellButton() {
  return `
    @media (max-width: 768px) {
      padding: 40% 50%;
    }
  `;
}
