import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {
  VideoCard,
  Thumbnail,
  VideoTitle,
  VideoDetails,
  ChannelName,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

class GamingVideoCard extends Component {
  //   state = {gamingVideoDetails: {}}

  //   componentDidMount() {
  //     this.getGameVideoDetails()
  //   }

  //   onSuccessGamingVideoDetails = gamingVideo => {
  //     // console.log(gamingVideo)
  //     const updatedGamingVideoDetails = {
  //       id: gamingVideo.id,
  //       description: gamingVideo.description,
  //       publishedAt: gamingVideo.published_at,
  //       thumbnailUrl: gamingVideo.thumbnail_url,
  //       title: gamingVideo.title,
  //       video_url: gamingVideo.video_url,
  //       viewCount: gamingVideo.view_count,
  //       channelName: gamingVideo.channel.name,
  //       channelProfileImageUrl: gamingVideo.channel.profile_image_url,
  //       channelSubscriberCount: gamingVideo.channel.subscriber_count,
  //     }
  //     this.setState({gamingVideoDetails: updatedGamingVideoDetails})
  //   }

  //   getGameVideoDetails = async () => {
  //     const jwtToken = Cookies.get('jwt_token')
  //     const {eachGamingVideo} = this.props
  //     const {id} = eachGamingVideo
  //     const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         Authorization: `Bearer ${jwtToken}`,
  //       },
  //     }
  //     const apiResponse = await fetch(videoItemDetailsApiUrl, options)
  //     if (apiResponse.status === 200) {
  //       const videoData = await apiResponse.json()

  //       const updatedVideoData = videoData.video_details
  //       this.onSuccessGamingVideoDetails(updatedVideoData)
  //     }
  //   }

  lightGamingVideoCard = () => {
    // const {gamingVideoDetails} = this.state

    const {eachGamingVideo} = this.props
    // console.log(eachTrendingVideo)

    const {thumbnailUrl, title, viewCount, id} = eachGamingVideo

    return (
      <Link to={`videos/${id}`} style={{padding: 0, textDecoration: 'none'}}>
        <VideoCard>
          <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
          <VideoDetails>
            <VideoTitle color="#181818">{title}</VideoTitle>
            <ChannelName color="#475569">
              {viewCount} Watching Worldwide
            </ChannelName>
          </VideoDetails>
        </VideoCard>
      </Link>
    )
  }

  darkGamingVideoCard = () => {
    const {eachGamingVideo} = this.props
    // console.log(eachTrendingVideo)
    const {thumbnailUrl, title, viewCount, id} = eachGamingVideo

    return (
      <Link to={`videos/${id}`} style={{padding: 0, textDecoration: 'none'}}>
        <VideoCard>
          <Thumbnail src={thumbnailUrl} />
          <VideoDetails>
            <VideoTitle color="#ebebeb">{title}</VideoTitle>
            <ChannelName color=" #94a3b8">
              {viewCount} Watching Worldwide
            </ChannelName>
          </VideoDetails>
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
            ? this.darkGamingVideoCard()
            : this.lightGamingVideoCard()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(GamingVideoCard)

/* <VideoCard>
    <Thumbnail src="https://assets.ccbp.in/frontend/react-js/nxt-watch/ibhubs-img.png" />
    <VideoDetails>
      <VideoTitle>iB Hubs Announcements Event </VideoTitle>
      <ChannelName>iB Hubs </ChannelName>
      <ChannelName>26K views . 5 years ago</ChannelName>
    </VideoDetails>
  </VideoCard> */
