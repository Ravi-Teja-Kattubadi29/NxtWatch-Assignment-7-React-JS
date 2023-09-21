import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 576px) {
    min-width: 50%;
    width: 100vw;
    margin: 0;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    min-width: 238px;
    max-width: 45%;
    margin-right: 7px;
    margin-left: 7px;
    margin-bottom: 30px;
    margin-top: 60px;
  }
  @media screen and (min-width: 768px) {
    // width: 235px;
    min-width: 177px;

    // width: 30%;
    width: 100%;
    max-width: 288px;
    margin-bottom: 35px;
    margin-top: 35px;
    margin-right: 7px;
    margin-left: 7px;
  }
`

export const DarkVideoCardContainer = styled(VideoCardContainer)`
  @media screen and (max-width: 576px) {
    width: 100%;
    // border: 2px solid black;
    margin: 0;
    margin-bottom: 8px;
  }
  background-color: #181818;
`

export const ThumbNail = styled.img`
  @media screen and (max-width: 576px) {
    height: 225px;
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    height: 190px;
  }
  @media screen and (min-width: 768px) {
    height: 160px;
    width: 100%;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  //   border: 2px solid black;

  @media screen and (max-width: 575px) {
    padding: 14px 20px 20px 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    padding: 10px 10px 10px 0px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px 10px 10px 0px;
  }
`

export const ChannelLogo = styled.img`
  @media screen and (max-width: 576px) {
    height: 43px;
    width: 43px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    height: 50px;
    width: 50px;
  }
  @media screen and (min-width: 768px) {
    height: 38px;
    width: 38px;
  }

  //   border: 2px solid black;
`

export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  //   border: 2px solid black;
  padding: 0;

  @media screen and (max-width: 576px) {
    width: 85%;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 80%;
  }
  @media screen and (min-width: 768px) {
    width: 82%;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  padding: 0;
  line-height: 1.5em;
  //   border: 2px solid black;
  margin: 0;
  color: #181818;
  font-weight: 400;
  @media screen and (max-width: 575px) {
    font-size: 16px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const DarkVideoTitle = styled(VideoTitle)`
  color: #ebebeb;
`

export const ChannelName = styled(VideoTitle)`
  color: #475569;
  line-height: 2em;
  //   border: 2px solid black;
  margin: 0;
  font-weight: 400;

  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const SmallDeviceChannelName = styled(ChannelName)`
  @media screen and (max-width: 575px) {
    font-size: 15px;
    font-weight: 400;
    display: inline;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const DarkSmallDevicesChannelName = styled(SmallDeviceChannelName)`
  @media screen and (max-width: 575px) {
    font-size: 15px;
    font-weight: 500;
    display: inline;
  }
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const DarkChannelName = styled(ChannelName)`
  color: #64748b;
  color: ${props => props.color};
  font-weight: 400;
`

export const ViewCount = styled.p`
  color: #475569;
  //   line-height: 2em;
  //   border: 2px solid black;
  margin: 0;
  font-weight: 400;
  color: ${props => props.color};

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const DarkViewCount = styled(ViewCount)`
  color: #64748b;
`

export const TextTag = styled.span`
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
`
