
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

export function mediaAsideDiv() {
  return `
    @media (max-width: 760px) {
      padding-top: 0;
    }
  `;
}

export function mediaAsideDivIpad() {
  return `
    @media (max-width: 768px) {
      margin: 0 auto;
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
  `;
}

export function mediaBoxIpad() {
  return `
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
