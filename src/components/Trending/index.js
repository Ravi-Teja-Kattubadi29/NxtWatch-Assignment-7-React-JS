import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import APIFailure from '../APIFailure'
import LoaderComponent from '../LoaderComponent'

import {
  TrendingContainer,
  VideosContainer,
  TrendingNavBar,
  LogoContainer,
  LogoContainerExtraSmall,
  TrendingHeading,
  Videos,
} from './styledComponents'

import TrendingVideoCard from '../TrendingVideoCard'
import NxtWatchBanner from '../NxtWatchBanner'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: APIStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onSuccessTrendingVideos = trendingVideosData => {
    // console.log(trendingVideosData)
    const updatedTrendingVideos = trendingVideosData.videos.map(eachVideo => ({
      channelDetails: {
        channelName: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      },
      id: eachVideo.id,
      publishedAt: eachVideo.published_at,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
      saveVideo: false,
    }))
    this.setState({
      trendingVideos: updatedTrendingVideos,
      apiStatus: APIStatusConstants.success,
    })
  }

  onFailureTrendingVideos = () => {
    this.setState({apiStatus: APIStatusConstants.failure})
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: APIStatusConstants.inProgress})
    const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const trendingVideosResponse = await fetch(trendingVideosApiUrl, options)

    if (trendingVideosResponse.ok === true) {
      const trendingVideosData = await trendingVideosResponse.json()

      this.onSuccessTrendingVideos(trendingVideosData)
    } else {
      this.onFailureTrendingVideos()
    }
  }

  trendingVideos = () => {
    const {trendingVideos} = this.state

    return trendingVideos.map(eachTrendingVideo => (
      <TrendingVideoCard
        key={eachTrendingVideo.id}
        eachTrendingVideo={eachTrendingVideo}
      />
    ))
  }

  renderResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case APIStatusConstants.inProgress:
        return <LoaderComponent />
      case APIStatusConstants.success:
        return this.trendingVideos()
      case APIStatusConstants.failure:
        return <APIFailure onClickRetryButton={this.getTrendingVideos} />
      default:
        return null
    }
  }

  lightTrendingVideos = () => (
    <NxtWatchContext>
      {value => {
        const {removeBannerStatus} = value

        return (
          <>
            <Header />
            <TrendingContainer
              data-testid="trending"
              style={{bgColor: '#f9f9f9 '}}
            >
              <SideNavBar />
              {/* <APIFailure /> */}
              <VideosContainer
                bgColor="#f9f9f9"
                id="trendingContainer"
                data-testid="trending"
              >
                {removeBannerStatus ? null : <NxtWatchBanner />}
                <TrendingNavBar bgColor="#f1f1f1">
                  <LogoContainerExtraSmall bgColor="#e2e8f0">
                    <HiFire style={{height: 32, width: 32, color: 'red'}} />
                  </LogoContainerExtraSmall>
                  <LogoContainer bgColor="#e2e8f0">
                    <HiFire style={{height: 35, width: 35, color: 'red'}} />
                  </LogoContainer>
                  <TrendingHeading as="h1" color="#231f20">
                    {' '}
                    Trending{' '}
                  </TrendingHeading>
                </TrendingNavBar>
                <Videos>{this.renderResults()}</Videos>
              </VideosContainer>
            </TrendingContainer>
          </>
        )
      }}
    </NxtWatchContext>
  )

  darkTrendingVideos = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {removeBannerStatus} = value

        return (
          <>
            <Header />
            <TrendingContainer
              data-testid="trending"
              style={{bgColor: '#0f0f0f'}}
            >
              <SideNavBar />
              <VideosContainer bgColor="#0f0f0f" data-testid="trending">
                {removeBannerStatus ? null : <NxtWatchBanner />}
                <TrendingNavBar bgColor="#181818">
                  <LogoContainerExtraSmall bgColor="#0f0f0f">
                    <HiFire style={{height: 32, width: 32, color: 'red'}} />
                  </LogoContainerExtraSmall>
                  <LogoContainer bgColor="#0f0f0f">
                    <HiFire style={{height: 35, width: 35, color: 'red'}} />
                  </LogoContainer>
                  <TrendingHeading as="h1" color="#f9f9f9">
                    {' '}
                    Trending{' '}
                  </TrendingHeading>
                </TrendingNavBar>
                <Videos>{this.renderResults()}</Videos>
              </VideosContainer>
            </TrendingContainer>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme
            ? this.darkTrendingVideos()
            : this.lightTrendingVideos()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
