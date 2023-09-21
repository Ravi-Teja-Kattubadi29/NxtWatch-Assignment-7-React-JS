import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {BiLike, BiDislike} from 'react-icons/bi'
// import {BiSolidLike} from 'react-icons/bi'
import {Redirect} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
// import {formatDistance, format, formatDistanceToNow} from 'date-fns'
import {formatDistance} from 'date-fns'
import {
  VideoDetailsContainer,
  VideosContainer,
  ExtraSmallVideoPlayer,
  MediumVideoPlayer,
  VideoTitle,
  ViewsContainer,
  ViewsCount,
  ButtonsContainer,
  Button,
  Like,
  HorizontalRule,
  ChannelDetailsContainer,
  ChannelLogo,
  ChannelNameAndSubscribers,
  ChannelName,
  Subscribers,
  VideoBriefInformation,
  ExtraSmallVideoBriefInformation,
  ExtraSmallVideoDetails,
  TextTag,
} from './styledComponents'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import APIFailure from '../APIFailure'
import LoaderComponent from '../LoaderComponent'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    like: false,
    disLike: false,

    apiStatus: APIStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemDetails()
    console.log('com')
  }

  onFailureVideoDetails = () => {
    this.setState({apiStatus: APIStatusConstants.failure})
  }

  normalVideoDetails = VideoDetails => {
    const updatedVideosDetails = {
      id: VideoDetails.video_details.id,
      title: VideoDetails.video_details.title,
      videoUrl: VideoDetails.video_details.video_url,
      thumbnailUrl: VideoDetails.video_details.thumbnail_url,

      viewCount: VideoDetails.video_details.view_count,
      publishedAt: VideoDetails.video_details.published_at,
      description: VideoDetails.video_details.description,
      saveVideo: false,

      channelDetails: {
        channelName: VideoDetails.video_details.channel.name,
        profileImageUrl: VideoDetails.video_details.channel.profile_image_url,
        subscriberCount: VideoDetails.video_details.channel.subscriber_count,
      },
    }

    this.setState({
      videoDetails: updatedVideosDetails,
      apiStatus: APIStatusConstants.success,
    })
  }

  filteredVideoDetails = VideoDetails => {
    const updatedVideosDetails = {
      id: VideoDetails.video_details.id,
      title: VideoDetails.video_details.title,
      videoUrl: VideoDetails.video_details.video_url,
      thumbnailUrl: VideoDetails.video_details.thumbnail_url,

      viewCount: VideoDetails.video_details.view_count,
      publishedAt: VideoDetails.video_details.published_at,
      description: VideoDetails.video_details.description,
      saveVideo: true,

      channelDetails: {
        channelName: VideoDetails.video_details.channel.name,
        profileImageUrl: VideoDetails.video_details.channel.profile_image_url,
        subscriberCount: VideoDetails.video_details.channel.subscriber_count,
      },
    }

    this.setState({
      videoDetails: updatedVideosDetails,
      apiStatus: APIStatusConstants.success,
    })
  }

  onSuccessVideoDetails = VideosData => this.normalVideoDetails(VideosData)

  getVideoItemDetails = async () => {
    this.setState({apiStatus: APIStatusConstants.inProgress})

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')

    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    if (jwtToken !== undefined) {
      const VideoDetailsResponse = await fetch(videoItemDetailsApiUrl, options)
      if (VideoDetailsResponse.status === 200) {
        const VideoData = await VideoDetailsResponse.json()
        // console.log(VideoData)
        console.log('suc')
        return this.onSuccessVideoDetails(VideoData)
      }
      return this.onFailureVideoDetails()
    }
    return <Redirect to="/login" />
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            addToSavedVideos,
            removeFromSavedVideos,
            savedVideosList,
          } = value

          const {videoDetails} = this.state

          const filteredVideoDetails = savedVideosList.filter(eachVideo => {
            console.log(eachVideo)
            return eachVideo.id === videoDetails.id
          })

          if (filteredVideoDetails.length !== 0) {
            videoDetails.saveVideo = true
          }

          const onClickLikeButton = () => {
            this.setState(prevState => ({
              like: !prevState.like,
              disLike: false,
            }))
          }

          const onClickDislikeButton = () => {
            this.setState(prevState => ({
              disLike: !prevState.disLike,
              like: false,
            }))
          }

          const addVideoFunction = () => {
            // const {videoDetails} = this.state
            videoDetails.saveVideo = true
            // console.log(videoDetails)
            addToSavedVideos(videoDetails)
          }

          const onClickSaveVideo = () => {
            /* const {videoDetails} = this.state */

            this.setState(
              prevState => ({
                videoDetails: {
                  id: prevState.videoDetails.id,
                  title: prevState.videoDetails.title,
                  videoUrl: prevState.videoDetails.videoUrl,
                  thumbnailUrl: prevState.videoDetails.thumbnailUrl,

                  viewCount: prevState.videoDetails.viewCount,
                  publishedAt: prevState.videoDetails.publishedAt,
                  description: prevState.videoDetails.description,
                  saveVideo: true,

                  channelDetails: {
                    channelName:
                      prevState.videoDetails.channelDetails.channelName,
                    profileImageUrl:
                      prevState.videoDetails.channelDetails.profileImageUrl,
                    subscriberCount:
                      prevState.videoDetails.channelDetails.subscriberCount,
                  },
                },
              }),
              addVideoFunction(),
            )
          }

          const removeVideoFunction = () => {
            // const {videoDetails} = this.state
            videoDetails.saveVideo = false

            removeFromSavedVideos(videoDetails)
          }

          const onUnClickSavedVideo = () => {
            // const {videoDetails} = this.state
            this.setState(
              prevState => ({
                videoDetails: {
                  id: prevState.videoDetails.id,
                  title: prevState.videoDetails.title,
                  videoUrl: prevState.videoDetails.videoUrl,
                  thumbnailUrl: prevState.videoDetails.thumbnailUrl,

                  viewCount: prevState.videoDetails.viewCount,
                  publishedAt: prevState.videoDetails.publishedAt,
                  description: prevState.videoDetails.description,
                  saveVideo: false,

                  channelDetails: {
                    channelName:
                      prevState.videoDetails.channelDetails.channelName,
                    profileImageUrl:
                      prevState.videoDetails.channelDetails.profileImageUrl,
                    subscriberCount:
                      prevState.videoDetails.channelDetails.subscriberCount,
                  },
                },
              }),
              removeVideoFunction(),
            )
          }

          const likeButton = () => {
            const {like} = this.state

            return like ? (
              <Button onClick={onClickLikeButton}>
                <BiLike
                  style={{
                    height: 23,
                    width: 23,
                    color: '#2563eb',
                  }}
                />
                <Like color="#2563eb">Like</Like>
              </Button>
            ) : (
              <Button onClick={onClickLikeButton}>
                <BiLike
                  style={{
                    height: 23,
                    width: 23,
                    color: '#64748b',
                  }}
                />
                <Like color="#64748b">Like</Like>
              </Button>
            )
          }

          const disLikeButton = () => {
            const {disLike} = this.state
            return disLike ? (
              <Button onClick={onClickDislikeButton}>
                <BiDislike style={{height: 23, width: 23, color: '#2563eb'}} />
                <Like color="#2563eb">Dislike</Like>
              </Button>
            ) : (
              <Button onClick={onClickDislikeButton}>
                <BiDislike style={{height: 23, width: 23, color: '#64748b'}} />
                <Like color="#64748b">Dislike</Like>
              </Button>
            )
          }

          const saveVideoButton = () => {
            /* const {addToSavedVideosStatus} = this.state */
            // const {videoDetails} = this.state
            const {saveVideo} = videoDetails
            console.log(saveVideo)
            return saveVideo ? (
              <Button onClick={onUnClickSavedVideo}>
                <MdPlaylistAdd
                  style={{height: 23, width: 23, color: '#2563eb'}}
                />
                <Like color="#2563eb">Saved</Like>
              </Button>
            ) : (
              <Button onClick={onClickSaveVideo}>
                <MdPlaylistAdd
                  style={{height: 23, width: 23, color: '#64748b'}}
                />
                <Like color="#64748b">Save</Like>
              </Button>
            )
          }

          const renderDarkVideoDetails = () => {
            // const {videoDetails} = this.state
            const {
              channelDetails,

              description,
              publishedAt,
              //   thumbnailUrl,
              title,
              videoUrl,
              viewCount,
            } = videoDetails
            const {
              channelName,
              profileImageUrl,
              subscriberCount,
            } = channelDetails

            const date = new Date(publishedAt)

            const formattedDate = formatDistance(date, new Date(), {
              addSuffix: true,
            })
            // console.log(`home ${formattedDate}`)
            const indexValue = formattedDate.indexOf(' ')
            const publishedDate = formattedDate.slice(indexValue + 1)

            /* console.log(publishedDate) */

            return (
              <VideosContainer bgColor="#0f0f0f">
                <ExtraSmallVideoPlayer>
                  <ReactPlayer url={videoUrl} height="42vh" width="100%" />
                </ExtraSmallVideoPlayer>
                <MediumVideoPlayer>
                  <ReactPlayer
                    url={videoUrl}
                    height="79vh"
                    //   minHeight="50px"
                    width="100%"
                  />
                </MediumVideoPlayer>
                <ExtraSmallVideoDetails>
                  <VideoTitle color="#ebebeb">{title}</VideoTitle>
                  <ViewsContainer>
                    <ViewsCount color=" #94a3b8">
                      {viewCount} views <TextTag>{'\u25CF'}</TextTag>{' '}
                      {publishedDate}
                    </ViewsCount>

                    <ButtonsContainer>
                      {likeButton()}
                      {disLikeButton()}
                      {saveVideoButton()}
                    </ButtonsContainer>
                  </ViewsContainer>
                  <HorizontalRule color="#475569" />
                  <ChannelDetailsContainer>
                    <ChannelLogo src={profileImageUrl} />
                    <ChannelNameAndSubscribers>
                      <ChannelName color="#ebebeb">{channelName}</ChannelName>
                      <Subscribers color="#94a3b8">
                        {subscriberCount} subscribers
                      </Subscribers>
                      <VideoBriefInformation color="#ebebeb">
                        {description}
                      </VideoBriefInformation>
                    </ChannelNameAndSubscribers>
                  </ChannelDetailsContainer>
                  <ExtraSmallVideoBriefInformation color="#ebebeb">
                    {description}
                  </ExtraSmallVideoBriefInformation>
                </ExtraSmallVideoDetails>
              </VideosContainer>
            )
          }

          const renderDarkFinalResults = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case APIStatusConstants.inProgress:
                return <LoaderComponent />
              case APIStatusConstants.success:
                return renderDarkVideoDetails()
              case APIStatusConstants.failure:
                return (
                  <APIFailure onClickRetryButton={this.getVideoItemDetails} />
                )
              default:
                return null
            }
          }

          const renderLightVideoDetails = () => {
            // const {videoDetails} = this.state

            const {
              channelDetails,
              description,
              publishedAt,
              //   thumbnailUrl,
              title,
              videoUrl,
              viewCount,
            } = videoDetails
            const {
              channelName,
              profileImageUrl,
              subscriberCount,
            } = channelDetails

            const date = new Date(publishedAt)

            const formattedDate = formatDistance(date, new Date(), {
              addSuffix: true,
            })
            // console.log(`home ${formattedDate}`)
            const indexValue = formattedDate.indexOf(' ')
            const publishedDate = formattedDate.slice(indexValue + 1)

            /* console.log(publishedDate) */

            return (
              <VideosContainer bgColor="#f9f9f9">
                <ExtraSmallVideoPlayer>
                  <ReactPlayer
                    url={videoUrl}
                    height="42vh"
                    width="100%"
                    controls
                  />
                </ExtraSmallVideoPlayer>
                <MediumVideoPlayer>
                  <ReactPlayer
                    url={videoUrl}
                    height="79vh"
                    //   minHeight="50px"
                    width="100%"
                    controls
                  />
                </MediumVideoPlayer>
                <ExtraSmallVideoDetails>
                  <VideoTitle color="#181818">{title}</VideoTitle>
                  <ViewsContainer>
                    <ViewsCount color="#475569">
                      {viewCount} views <TextTag>{'\u25CF'}</TextTag>{' '}
                      {publishedDate}
                    </ViewsCount>
                    <ButtonsContainer>
                      {likeButton()}
                      {disLikeButton()}
                      {saveVideoButton()}
                    </ButtonsContainer>
                  </ViewsContainer>
                  <HorizontalRule color="#ebebeb" />
                  <ChannelDetailsContainer>
                    <ChannelLogo src={profileImageUrl} />
                    <ChannelNameAndSubscribers>
                      <ChannelName color="#212121">{channelName} </ChannelName>
                      <Subscribers color="#475569">
                        {' '}
                        {subscriberCount} subscribers
                      </Subscribers>
                      <VideoBriefInformation color="#475569">
                        {description}
                      </VideoBriefInformation>
                    </ChannelNameAndSubscribers>
                  </ChannelDetailsContainer>
                  <ExtraSmallVideoBriefInformation color="#475569">
                    {description}
                  </ExtraSmallVideoBriefInformation>
                </ExtraSmallVideoDetails>
              </VideosContainer>
            )
          }

          const renderLightFinalResults = () => {
            const {apiStatus} = this.state
            switch (apiStatus) {
              case APIStatusConstants.inProgress:
                return <LoaderComponent />
              case APIStatusConstants.success:
                return renderLightVideoDetails()
              case APIStatusConstants.failure:
                return (
                  <APIFailure onClickRetryButton={this.getVideoItemDetails} />
                )
              default:
                return null
            }
          }

          const lightVideoItemDetails = () => (
            <>
              <Header />
              <VideoDetailsContainer data-testid="videoItemDetails">
                <SideNavBar />
                {renderLightFinalResults()}
              </VideoDetailsContainer>
            </>
          )

          const darkVideoItemDetails = () => (
            <>
              <Header />
              <VideoDetailsContainer data-testid="videoItemDetails">
                <SideNavBar />
                {renderDarkFinalResults()}
              </VideoDetailsContainer>
            </>
          )

          return isDarkTheme ? darkVideoItemDetails() : lightVideoItemDetails()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
