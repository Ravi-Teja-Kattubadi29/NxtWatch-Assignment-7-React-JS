import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
// import styled from 'styled-components'
import {formatDistance} from 'date-fns'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  VideoCardContainer,
  ThumbNail,
  VideoDetailsContainer,
  ChannelLogo,
  VideoDetails,
  VideoTitle,
  ChannelName,
  ViewCount,
  TextTag,
  DarkVideoCardContainer,
  DarkVideoTitle,
  DarkChannelName,
  SmallDeviceChannelName,
} from './styledComponents'

class HomeVideoCard extends Component {
  lightHomeTheme = () => {
    const {eachVideo} = this.props
    // console.log(eachVideo)
    const {
      channelDetails,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      id,
    } = eachVideo
    const {name, profileImageUrl} = channelDetails
    // console.log(`home ${publishedAt}`)
    const date = new Date(publishedAt)

    const formattedDate = formatDistance(date, new Date(), {
      addSuffix: true,
    })
    // console.log(`home ${formattedDate}`)
    const indexValue = formattedDate.indexOf(' ')
    const publishedDate = formattedDate.slice(indexValue + 1)

    return (
      <Link to={`videos/${id}`} style={{textDecoration: 'none'}}>
        <VideoCardContainer>
          <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
          <VideoDetailsContainer>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
            <VideoDetails>
              <VideoTitle as="p">{title}</VideoTitle>
              <ChannelName as="p">{name}</ChannelName>

              <ViewCount color="#475569" as="p">
                {viewCount} views <TextTag>{'\u25CF'}</TextTag> {publishedDate}
              </ViewCount>

              <ViewCount color="#475569" as="p">
                <SmallDeviceChannelName as="p">
                  {name}
                  <TextTag> {'\u25CF'} </TextTag>
                  {viewCount} views <TextTag> {'\u25CF'} </TextTag>
                  {publishedDate}
                </SmallDeviceChannelName>
              </ViewCount>
            </VideoDetails>
          </VideoDetailsContainer>
        </VideoCardContainer>
      </Link>
    )
  }

  darkHomeTheme = () => {
    const {eachVideo} = this.props
    // console.log(eachVideo)
    const {
      channelDetails,
      publishedAt,
      thumbnailUrl,
      title,
      viewCount,
      id,
    } = eachVideo

    const {name, profileImageUrl} = channelDetails

    const date = new Date(publishedAt)

    const formattedDate = formatDistance(date, new Date(), {
      addSuffix: true,
    })

    const indexValue = formattedDate.indexOf(' ')
    const publishedDate = formattedDate.slice(indexValue + 1)
    // console.log(publishedDate)

    return (
      <Link to={`videos/${id}`} style={{textDecoration: 'none'}}>
        <DarkVideoCardContainer>
          <ThumbNail src={thumbnailUrl} alt="video thumbnail" />
          <VideoDetailsContainer>
            <ChannelLogo src={profileImageUrl} alt="channel logo" />
            <VideoDetails>
              <DarkVideoTitle as="p">{title}</DarkVideoTitle>
              <DarkChannelName as="p" color=" #64748b">
                {name}
              </DarkChannelName>

              {/* <DarkViewCount>
                <DarkSmallDevicesChannelName>
                  {name}
                  <TextTag> {'\u25CF'} </TextTag>
                  {viewCount} views <TextTag> {'\u25CF'} </TextTag>
                  {publishedDate}
                </DarkSmallDevicesChannelName>
              </DarkViewCount> */}

              <ViewCount as="p" color=" #64748b">
                {viewCount} views <TextTag>{'\u25CF'}</TextTag> {publishedDate}
              </ViewCount>

              <ViewCount as="p" color=" #64748b">
                <SmallDeviceChannelName as="p">
                  {name}
                  <TextTag> {'\u25CF'} </TextTag>
                  {viewCount} views <TextTag> {'\u25CF'} </TextTag>
                  {publishedDate}
                </SmallDeviceChannelName>
              </ViewCount>
            </VideoDetails>
          </VideoDetailsContainer>
        </DarkVideoCardContainer>
      </Link>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme ? this.darkHomeTheme() : this.lightHomeTheme()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(HomeVideoCard)
