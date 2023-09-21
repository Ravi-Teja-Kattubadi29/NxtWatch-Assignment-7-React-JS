import styled from 'styled-components'

// Home Failure styledComponents
export const HomeFailureContainer = styled.div`
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
export const HomeFailureImage = styled.img`
  margin-bottom: 13px;
  //   border: 2px solid black;

  @media screen and (max-width: 768px) {
    min-width: 200px;
    width: 55%;
    max-width: 240px;
    margin-bottom: 23px;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    min-width: 270px;
    max-width: 330px;
  }
`
export const HomeFailureHeading = styled.h1`
  font-family: 'Roboto';

  text-align: center;
  //   border: 2px solid black;
  //   color: #0f0f0f;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
  width: 90%;
  @media screen and (max-width: 767px) {
    font-size: 22px;
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 1.6em;
    font-weight: 500;
  }
`

export const HomeFailureInfo = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  //   border: 2px solid black;
  width: 90%;
  text-align: center;
  margin: ${props => props.margin};
  font-weight: 400;

  @media screen and (max-width: 767px) {
    font-size: 19px;
    line-height: 1.7em;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.7em;
  }
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 4px;
  font-family: 'Roboto';
  border: 0;
  margin-top: ${props => props.marginTop};
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    padding: 14px 38px 14px 38px;
    font-size: 14px;
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    padding: 12px 33px 12px 33px;
    font-size: 13px;
    font-weight: 500;
  }
`
