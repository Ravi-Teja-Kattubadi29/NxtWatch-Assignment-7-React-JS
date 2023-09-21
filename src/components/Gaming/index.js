import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideNavBar from '../SideNavBar'

import NxtWatchContext from '../../context/NxtWatchContext'
import APIFailure from '../APIFailure'
import LoaderComponent from '../LoaderComponent'

import {
  GamingContainer,
  VideosContainer,
  GamingNavBar,
  LogoContainer,
  LogoContainerExtraSmall,
  GamingHeading,
  AllVideos,
  Videos,
} from './styledComponents'

import GamingVideoCard from '../GamingVideoCard'
import NxtWatchBanner from '../NxtWatchBanner'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: APIStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  onSuccessGamingVideos = gamingVideosData => {
    const updatedGamingVideos = gamingVideosData.videos.map(eachVideo => ({
      id: eachVideo.id,
      thumbnailUrl: eachVideo.thumbnail_url,
      title: eachVideo.title,
      viewCount: eachVideo.view_count,
      saveVideo: false,
    }))
    this.setState({
      gamingVideos: updatedGamingVideos,
      apiStatus: APIStatusConstants.success,
    })
  }

  onFailureGamingVideos = () => {
    this.setState({apiStatus: APIStatusConstants.failure})
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: APIStatusConstants.inProgress})
    const gamingVideosApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const gamingVideosResponse = await fetch(gamingVideosApiUrl, options)

    if (gamingVideosResponse.ok === true) {
      const gamingVideosData = await gamingVideosResponse.json()

      this.onSuccessGamingVideos(gamingVideosData)
    } else {
      this.onFailureGamingVideos()
    }
  }

  gamingVideos = () => {
    const {gamingVideos} = this.state

    return gamingVideos.map(eachGamingVideo => (
      <GamingVideoCard
        key={eachGamingVideo.id}
        eachGamingVideo={eachGamingVideo}
      />
    ))
  }

  renderResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case APIStatusConstants.inProgress:
        return <LoaderComponent />
      case APIStatusConstants.success:
        return this.gamingVideos()
      case APIStatusConstants.failure:
        return <APIFailure onClickRetryButton={this.getGamingVideos} />
      default:
        return null
    }
  }

  lightGamingVideos = () => (
    <NxtWatchContext>
      {value => {
        const {removeBannerStatus} = value
        return (
          <>
            <Header />
            <GamingContainer data-testid="gaming" style={{bgColor: '#f9f9f9 '}}>
              <SideNavBar />

              <VideosContainer bgColor="#f9f9f9" data-testid="gaming">
                {removeBannerStatus ? null : <NxtWatchBanner />}
                <GamingNavBar bgColor="#f1f1f1">
                  <LogoContainerExtraSmall bgColor="#e2e8f0">
                    <SiYoutubegaming
                      style={{height: 32, width: 32, color: 'red'}}
                    />
                  </LogoContainerExtraSmall>
                  <LogoContainer bgColor="#e2e8f0">
                    <SiYoutubegaming
                      style={{height: 35, width: 35, color: 'red'}}
                    />
                  </LogoContainer>
                  <GamingHeading color="#231f20" as="h1">
                    Gaming
                  </GamingHeading>
                </GamingNavBar>
                <AllVideos>
                  <Videos>{this.renderResults()}</Videos>
                </AllVideos>
              </VideosContainer>
            </GamingContainer>
          </>
        )
      }}
    </NxtWatchContext>
  )

  darkGamingVideos = () => (
    <NxtWatchContext>
      {value => {
        const {removeBannerStatus} = value
        return (
          <>
            <Header />
            <GamingContainer data-testid="gaming" style={{bgColor: '#0f0f0f'}}>
              <SideNavBar />

              <VideosContainer bgColor="#0f0f0f" data-testid="gaming">
                {removeBannerStatus ? null : <NxtWatchBanner />}
                <GamingNavBar bgColor="#181818">
                  <LogoContainerExtraSmall bgColor="#0f0f0f">
                    <SiYoutubegaming
                      style={{height: 32, width: 32, color: 'red'}}
                    />
                  </LogoContainerExtraSmall>
                  <LogoContainer bgColor="#0f0f0f">
                    <SiYoutubegaming
                      style={{height: 35, width: 35, color: 'red'}}
                    />
                  </LogoContainer>
                  <GamingHeading as="h1" color="#f9f9f9">
                    {' '}
                    Gaming{' '}
                  </GamingHeading>
                </GamingNavBar>
                <AllVideos>
                  <Videos>{this.renderResults()}</Videos>
                </AllVideos>
              </VideosContainer>
            </GamingContainer>
          </>
        )
      }}
    </NxtWatchContext>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme
            ? this.darkGamingVideos()
            : this.lightGamingVideos()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
