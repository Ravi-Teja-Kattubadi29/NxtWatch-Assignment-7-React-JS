import styled from 'styled-components'

export const MainContainer = styled.div`
  //   border: 2px solid black;
  //   height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Roboto';
`

// Not Found styledComponents
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 100%;
  margin-bottom: 0;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    min-height: 90vh;
  }
  @media screen and (min-width: 768px) {
    min-height: 100vh;
    // max-height: 100vh;
  }
`
export const NotFoundImage = styled.img`
  //   border: 2px solid black;
  @media screen and (max-width: 767px) {
    min-width: 200px;
    width: 92%;
    max-width: 380px;
    margin-bottom: 25px;
  }
  @media screen and (min-width: 768px) {
    min-width: 420px;
    // max-width: 470px;
    width: 35%;
    margin-bottom: 10px;
  }
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  text-align: center;
  //   border: 2px solid black;
  //   color: #0f0f0f;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
  @media screen and (max-width: 767px) {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 0;
    // margin-bottom: 4px;
  }
  @media screen and (min-width: 768px) {
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 4px;
  }
`

export const NotFoundInfo = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  //   border: 2px solid black;
  width: 80%;
  text-align: center;
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 1.3em;
    margin-top: 8px;
    // margin-bottom: 6px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 2.3em;
    // margin-bottom: 6px;
  }
`
