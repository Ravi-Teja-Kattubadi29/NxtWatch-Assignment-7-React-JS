import styled from 'styled-components'

export const VideoCard = styled.li`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 575px) {
    min-width: 80px;
    max-width: 232px;
    width: 42%;
    margin: 27px 7px 20px 7px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 30%;
    margin: 26px 5px 20px 5px;
  }
  @media screen and (min-width: 768px) {
    min-width: 171px;
    max-width: 225px;
    // width: 30%;
    width: 100%;
    margin: 45px 7px 10px 7px;
    // height: 300px;
    // height: 370px;
  }
`
export const Thumbnail = styled.img`
  //   border: 2px solid black;
  @media screen and (max-width: 575px) {
    width: 100%;
    max-height: 250px;
    // height: 200px;
    min-height: 120px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    max-height: 350px;
    min-height: 200px;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    // margin-right: 14px;
    width: 100%;
    min-height: 200px;
    max-height: 305px;
  }
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: 2px solid black;
  width: 100%;
  @media screen and (max-width: 575px) {
    margin-top: 17px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    margin-top: 17px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    margin-top: 17px;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  margin-bottom: 9px;
  line-height: 1em;
  margin-top: 0;
  color: ${props => props.color};
  //   font-weight: ${props => props.fontWeight};
  font-weight: 500;
  @media screen and (max-width: 575px) {
    font-size: 17px;
    margin-bottom: 3px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 15px;
    // margin-bottom: 3px;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`

export const ChannelName = styled.p`
  color: #475569;
  margin: 0;
  //   border: 2px solid black;
  margin-bottom: 9px;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
  @media screen and (max-width: 575px) {
    font-size: 16px;
    line-height: 1.7em;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
