import styled from 'styled-components'

export const VideoCard = styled.li`
  //   border: 2px solid blue;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  @media screen and (max-width: 575px) {
    flex-direction: column;
    width: 100%;
    margin: 26px 0px 0px 0px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 93%;
    margin: 26px 0px 50px 0px;
  }
  @media screen and (min-width: 768px) {
    width: 92%;
    margin: 45px 0px 35px 0px;
  }
`

// export const linkStyle = styled.a`
//   @media screen and (max-width: 575px) {
//     width: 100vw;
//   }
//   @media screen and (max-width: 575px) {
//     width: 100%;
//   }
//   @media screen and (min-width: 768px) {
//     width: 100vw;
//     border: 2px solid black;
//   }
// `

export const Thumbnail = styled.img`
  //   border: 2px solid black;
  @media screen and (max-width: 575px) {
    // min-width: 30%;
    width: 100%;
    // min-height: 100px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    margin-right: 16px;
    width: 58%;
    max-width: 940px;
    min-height: 190px;
    max-height: 220px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 16px;
    width: 50%;
    min-height: 30vh;
    max-height: 230px;
    max-width: 400px;
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
    // width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  margin-bottom: 9px;
  line-height: 1.5em;
  margin-top: 0;
  color: ${props => props.color};
  //   font-weight: ${props => props.fontWeight};
  font-weight: 500;
  @media screen and (max-width: 575px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
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
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    font-size: 13px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`

export const ExtraSmallChannelName = styled(ChannelName)`
  @media screen and (max-width: 575px) {
    display: inline;
    font-size: 13px;
  }
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TextTag = styled.span`
  color: #475569;
  font-size: 9px;
  text-align: center;
  //   border: 2px solid black;
  @media screen and (max-width: 575px) {
    margin-right: 5px;
    margin-left: 8px;
  }
  @media screen and (min-width: 768px) {
    margin-right: 5px;
    margin-left: 5px;
  }
`
export const ChannelLogo = styled.img`
  @media screen and (max-width: 575px) {
    height: 40px;
    width: 40px;
    margin-right: 12px;
  }
  @media screen and (min-width: 576px) {
    display: none;
  }
  //   border: 2px solid black;
`
export const ExtraSmallContainer = styled.div`
  //   border: 2px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 10px 10px 0px 10px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`
