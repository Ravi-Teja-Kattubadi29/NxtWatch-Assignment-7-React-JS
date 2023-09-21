import styled from 'styled-components'

export const GamingContainer = styled.div`
  //   border: 2px solid black;
  //   height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Roboto';
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   border: 2px solid yellow;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 575px) {
    width: 100vw;
    min-width: 150px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100vw;
    min-width: 150px;
  }
  @media screen and (min-width: 768px) {
    width: 83vw;
    min-width: 500px;
  }
`

export const AllVideos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   border: 2px solid black;
  width: 100%;
`

export const Videos = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid blue;
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
  @media screen and (max-width: 575px) {
    // width: 89%;
    width: 100%;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 98%;
    justify-content: space-evenly;
  }
  @media screen and (min-width: 768px) {
    width: 97%;
    justify-content: flex-start;
  }
`

export const GamingNavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  //   border: 2px solid blue;
  background-color: ${props => props.bgColor};
  //   background-color: #f1f1f1;
  @media screen and (max-width: 575px) {
    width: 100%;
    height: 13vh;
    padding-left: 20px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    height: 13vh;
    padding-left: 20px;
  }
  @media screen and (min-width: 768px) {
    height: 18vh;
    width: 100%;
    padding-left: 55px;
  }
`
export const LogoContainer = styled.div`
  //   border: 2px solid black;

  border-radius: 50px;
  background-color: ${props => props.bgColor};
  margin-right: 16px;
  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    padding: 24px 26px 24px 26px;
  }
`

export const LogoContainerExtraSmall = styled(LogoContainer)`
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  margin-right: 16px;
  @media screen and (max-width: 575px) {
    display: inline;
    padding: 10px 12px 10px 12px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: inline;
    padding: 10px 12px 10px 12px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const GamingHeading = styled.h1`
  color: ${props => props.color};
  //   color: #231f20;
  @media screen and (max-width: 575px) {
    font-size: 22px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 21px;
  }
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`

// *///////////////////////////////////////////////////////////////////////////////////////////////////////////
// background-color: #181818;
