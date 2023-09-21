import styled from 'styled-components'

export const BannerContainer = styled.div`
  border: 2px solid black;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 25px;
  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 30px;
    height: 260px;
    max-height: 40vh;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    padding: 30px;
    height: 260px;
    // max-height: 70vh;
  }
  @media screen and (min-width: 768px) {
    height: 250px;
  }
`

export const BannerLogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  //   border: 2px solid gray;
`

export const NxtWatchLogo = styled.img`
  width: 165px;
`
export const BannerText = styled.p`
  font-family: 'Roboto';
  //   border: 2px solid black;
  font-size: 18px;
  color: #231f20;
  width: 370px;
  line-height: 2em;
  font-weight: 500;
  @media screen and (max-width: 575px) {
    width: 240px;
    font-size: 20px;
    line-height: 1.7em;
  }
`
export const GetItNow = styled.button`
  background-color: transparent;
  border: 2px solid #1e293b;
  color: #1e293b;
  padding: 10px 17px 10px 17px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  margin-top: 10px;
  @media screen and (max-width: 575px) {
    padding: 11px 17px 11px 17px;
    font-size: 18px;
    margin: 0px;
  }
`
