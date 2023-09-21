import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  border: 2px solid black;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const VideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  //   border: 2px solid yellow;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    width: 100vw;
    min-width: 150px;
    padding: 20px 0px 30px 0px;
  }
  @media screen and (min-width: 768px) {
    width: 83vw;
    min-width: 500px;
    padding: 30px 20px 30px 20px;
  }
`

export const ExtraSmallVideoPlayer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    display: inline;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MediumVideoPlayer = styled(ExtraSmallVideoPlayer)`
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: inline;
    border: 2px solid yellow;
  }
`

export const VideoTitle = styled.h1`
  //   border: 2px solid black;
  font-family: 'Roboto';
  //
  line-height: 1em;
  margin-top: 0;
  color: ${props => props.color};
  //   font-weight: ${props => props.fontWeight};
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.7em;
    margin-bottom: 30px;
    font-weight: 500;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 2.9em;
    margin-top: 13px;
    font-weight: 500;
    margin-bottom: 9px;
  }
`
export const ViewsContainer = styled.div`
  display: flex;
  //   border: 2px solid black;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const ViewsCount = styled.p`
  color: #475569;
  margin: 0;
  //   border: 2px solid black;
  margin-bottom: 9px;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};

  @media screen and (max-width: 767px) {
    font-size: 15px;
    line-height: 1em;
    // margin-bottom: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin: 0;
    line-height: 0.5em;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //   border: 2px solid orange;

  @media screen and (max-width: 767px) {
    min-width: 40%;
    width: 265px;
    margin-top: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 20%;
    margin-right: 15px;
  }
`
export const Button = styled.button`
  background-color: transparent;
  border: 0;
  //   border: 2px solid black;
  text-align: center;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // height: 30px;
    padding: 0;
    margin-right: 10px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`
export const Like = styled(ViewsCount)`
  font-weight: 500;
  margin-left: 5px;
  font-family: 'Roboto';
  text-align: center;
  //   border: 2px solid blue;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-top: 6px;
    margin-left: 5px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const HorizontalRule = styled.hr`
  width: 100%;
  color: ${props => props.color};
  border: 1.5px solid ${props => props.color};
  margin-top: 23px;
  margin-bottom: 29px;
  @media screen and (max-width: 767px) {
    margin-bottom: 37px;
  }
`

export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: 2px solid black;
  font-family: 'Roboto';
  @media screen and (max-width: 767px) {
    margin-bottom: 28px;
  }
`
export const ChannelLogo = styled.img`
  height: 47px;
  width: 47px;
  margin-right: 15px;
  @media screen and (max-width: 767px) {
    height: 55px;
    width: 55px;
    margin-right: 19px;
  }
`
export const ChannelNameAndSubscribers = styled.div`
  display: flex;
  flex-direction: column;
  //   border: 2px solid black;
`
export const ChannelName = styled.h1`
  font-size: 16px;
  margin: 0;
  line-height: 1.8em;
  font-weight: 500;
  color: ${props => props.color};
`
export const Subscribers = styled.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.8em;
  color: ${props => props.color};
`
export const VideoBriefInformation = styled.p`
  color: #475569;
  font-size: 15px;
  line-height: 1.5em;
  margin-top: 32px;
  color: ${props => props.color};
  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: inline;
  }
`

export const ExtraSmallVideoBriefInformation = styled(VideoBriefInformation)`
  @media screen and (max-width: 767px) {
    display: inline;
    margin-top: 20px;
    // border: 2px solid black;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ExtraSmallVideoDetails = styled.div`
  padding: 30px 15px 30px 15px;
  @media screen and (min-width: 768px) {
    padding: 0px;
  }
`
export const TextTag = styled.text`
  color: #475569;
  font-size: 9px;
  text-align: center;
  //   border: 2px solid black;
  padding-bottom: 0px;
  //   margin-bottom: 100px;
  margin-top: 0;
  @media screen and (max-width: 576px) {
    margin-right: 5px;
    margin-left: 5px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 6px;
    margin-left: 6px;
  }
`
