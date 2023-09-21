import styled from 'styled-components'

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid yellow;
  //   @media screen and (max-width: 767px) {
  //     display: none;
  //   }
`

export const PopUpStyle = styled.div`
  @media screen and (max-width: 767px) {
    height: 21vh;
    width: 100vw;
  }
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  border: 2px solid red;
  border-radius: 9px;
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    height: 180px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 160px;
  }
`
export const LogoutInfo = styled.p`
  font-family: 'Roboto';
  //   color: #00306e;
  //   border: 2px solid blue;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin: 15px;
  }
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 7px;
    font-weight: 400;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   border: 2px solid black;
  width: 100%;
  //   margin:0;
`
export const CancelButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  padding: 10px 17px 10px 17px;
  border-radius: 3px;
  background-color: ${props => props.bgColor};
  margin-right: 16px;
  margin-left: 16px;
  border: ${props => props.border};
  //   height: 40px;
  //   width: 80px;
`
export const lightPopUpStyle = styled.div`
  @media screen and (min-width: 768px) {
    height: 25vh;
    width: 25vw;
    border-radius: 9px;
    //   border: '2px solid blue',
    //   'background-color': 'transparent',
    border: 0;
  }
`
