import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {formatDistance} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoCard,
  Thumbnail,
  VideoTitle,
  ChannelName,
  VideoDetails,
  TextTag,
  ChannelLogo,
  ExtraSmallContainer,
  ExtraSmallChannelName,
} from './styledComponents'

class TrendingVideoCard extends Component {
  lightTrendingVideoCard = () => {
    const {eachTrendingVideo} = this.props
    // console.log(eachTrendingVideo)
    const {
      channelDetails,
      thumbnailUrl,
      title,
      viewCount,
      publishedAt,
      id,
    } = eachTrendingVideo
    // console.log(`trending ${eachTrendingVideo}`)
    const {channelName, profileImageUrl} = channelDetails

    const date = new Date(publishedAt)

    const formattedDate = formatDistance(date, new Date(), {
      addSuffix: true,
    })

    const indexValue = formattedDate.indexOf(' ')
    const publishedDate = formattedDate.slice(indexValue + 1)
    // console.log(publishedDate)

    return (
      <Link
        to={`videos/${id}`}
        style={{
          width: '100%',
          textDecoration: 'none',
          padding: 0,
          margin: 0,

          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <VideoCard>
          <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
          <ExtraSmallContainer>
            <ChannelLogo src={profileImageUrl} />
            <VideoDetails>
              <VideoTitle as="p" color="#181818">
                {title}
              </VideoTitle>
              <ChannelName as="p" color="#475569">
                {channelName}{' '}
              </ChannelName>

              <ChannelName as="p" color="#475569">
                {viewCount} views <TextTag>{'\u25CF'}</TextTag> {publishedDate}
              </ChannelName>

              <ExtraSmallChannelName as="p" color="#475569">
                {channelName}
                <TextTag>{'\u25CF'}</TextTag> {viewCount} views
                <TextTag>{'\u25CF'}</TextTag> {publishedDate}
              </ExtraSmallChannelName>
            </VideoDetails>
          </ExtraSmallContainer>
        </VideoCard>
      </Link>
    )
  }

  darkTrendingVideoCard = () => {
    const {eachTrendingVideo} = this.props
    // console.log(eachTrendingVideo)
    const {
      channelDetails,
      thumbnailUrl,
      title,
      viewCount,
      publishedAt,
      id,
    } = eachTrendingVideo
    const {channelName, profileImageUrl} = channelDetails

    const date = new Date(publishedAt)

    const formattedDate = formatDistance(date, new Date(), {
      addSuffix: true,
    })

    const indexValue = formattedDate.indexOf(' ')
    const publishedDate = formattedDate.slice(indexValue + 1)
    // console.log(publishedDate)

    return (
      <Link
        to={`videos/${id}`}
        style={{
          width: '100%',
          textDecoration: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          'flex-direction': 'row',
          'justify-content': 'center',
          'align-items': 'center',
        }}
      >
        <VideoCard>
          <Thumbnail src={thumbnailUrl} />

          <ExtraSmallContainer>
            <ChannelLogo src={profileImageUrl} />

            <VideoDetails>
              <VideoTitle as="p" color="#ebebeb" fontWeight="500">
                {title}
              </VideoTitle>
              <ChannelName as="p" color=" #94a3b8" fontWeight="400">
                {channelName}
              </ChannelName>

              <ChannelName as="p" color=" #94a3b8" fontWeight="400">
                {viewCount} views <TextTag>{'\u25CF'}</TextTag> {publishedDate}
              </ChannelName>

              <ExtraSmallChannelName as="p" color=" #94a3b8" fontWeight="400">
                {channelName}
                <TextTag>{'\u25CF'}</TextTag> {viewCount} views
                <TextTag>{'\u25CF'}</TextTag> {publishedDate}
              </ExtraSmallChannelName>
            </VideoDetails>
          </ExtraSmallContainer>
        </VideoCard>
      </Link>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme
            ? this.darkTrendingVideoCard()
            : this.lightTrendingVideoCard()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(TrendingVideoCard)

/* <VideoCard>
    <Thumbnail src="https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png" />
    <VideoDetails>
      <VideoTitle>iB Hubs Announcements Event </VideoTitle>
      <ChannelName>iB Hubs </ChannelName>
      <ChannelName>26K views . 5 years ago</ChannelName>
    </VideoDetails>
  </VideoCard> */
