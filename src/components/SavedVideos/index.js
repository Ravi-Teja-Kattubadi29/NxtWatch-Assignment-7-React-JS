// import {Component} from 'react'
// import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideNavBar from '../SideNavBar'

import NxtWatchContext from '../../context/NxtWatchContext'
import NxtWatchBanner from '../NxtWatchBanner'
// import APIFailure from '../APIFailure'

import {
  SavedVideosContainer,
  VideosContainer,
  SavedVideosNavBar,
  LogoContainer,
  LogoContainerExtraSmall,
  TrendingHeading,
  Videos,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosInfo,
} from './styledComponents'

import TrendingVideoCard from '../TrendingVideoCard'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {savedVideosList, isDarkTheme, removeBannerStatus} = value

      // console.log(savedVideosList)

      const lightNoSavedVideos = () => (
        <>
          <Header />
          <SavedVideosContainer
            data-testid="savedVideos"
            style={{bgColor: '#f9f9f9'}}
          >
            <SideNavBar />
            <NoSavedVideosContainer bgColor="#f9f9f9">
              <NoSavedVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedVideosHeading color="#0f0f0f" marginBottom="4px">
                No saved videos found
              </NoSavedVideosHeading>
              <NoSavedVideosInfo color="#475569" margin="6px">
                You can save your vidoes while watching them
              </NoSavedVideosInfo>
            </NoSavedVideosContainer>
          </SavedVideosContainer>
        </>
      )

      const darkNoSavedVideos = () => (
        <>
          <Header />
          <SavedVideosContainer
            data-testid="savedVideos"
            style={{bgColor: '#0f0f0f'}}
          >
            <SideNavBar />
            <NoSavedVideosContainer bgColor="#0f0f0f">
              <NoSavedVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <NoSavedVideosHeading color="#ffffff" marginBottom="4px">
                No saved videos found
              </NoSavedVideosHeading>
              <NoSavedVideosInfo color="#cccccc" margin="6px">
                You can save your vidoes while watching them
              </NoSavedVideosInfo>
            </NoSavedVideosContainer>
          </SavedVideosContainer>
        </>
      )

      const lightSavedVideos = () => (
        <>
          <Header />
          <SavedVideosContainer
            data-testid="savedVideos"
            style={{bgColor: '#f9f9f9'}}
          >
            <SideNavBar />
            <VideosContainer bgColor="#f9f9f9">
              {removeBannerStatus ? null : <NxtWatchBanner />}
              <SavedVideosNavBar bgColor="#f1f1f1">
                <LogoContainerExtraSmall bgColor="#e2e8f0">
                  <HiFire style={{height: 32, width: 32, color: 'red'}} />
                </LogoContainerExtraSmall>
                <LogoContainer bgColor="#e2e8f0">
                  <HiFire style={{height: 35, width: 35, color: 'red'}} />
                </LogoContainer>
                <TrendingHeading color="#231f20" as="h1">
                  Saved Videos
                </TrendingHeading>
              </SavedVideosNavBar>
              <Videos>
                {savedVideosList.map(eachTrendingVideo => (
                  <TrendingVideoCard
                    key={eachTrendingVideo.id}
                    eachTrendingVideo={eachTrendingVideo}
                  />
                ))}
              </Videos>
            </VideosContainer>
          </SavedVideosContainer>
        </>
      )

      const darkSavedVideos = () => (
        <>
          <Header />
          <SavedVideosContainer
            data-testid="savedVideos"
            style={{bgColor: '#0f0f0f'}}
          >
            <SideNavBar />

            <VideosContainer bgColor="#0f0f0f">
              {removeBannerStatus ? null : <NxtWatchBanner />}
              <SavedVideosNavBar bgColor="#181818">
                <LogoContainerExtraSmall bgColor="#0f0f0f">
                  <HiFire style={{height: 32, width: 32, color: 'red'}} />
                </LogoContainerExtraSmall>
                <LogoContainer bgColor="#0f0f0f">
                  <HiFire style={{height: 35, width: 35, color: 'red'}} />
                </LogoContainer>
                <TrendingHeading color="#f9f9f9" as="h1">
                  Saved Videos
                </TrendingHeading>
              </SavedVideosNavBar>
              <Videos>
                {savedVideosList.map(eachTrendingVideo => (
                  <TrendingVideoCard
                    key={eachTrendingVideo.id}
                    eachTrendingVideo={eachTrendingVideo}
                  />
                ))}
              </Videos>
            </VideosContainer>
          </SavedVideosContainer>
        </>
      )

      const renderSavedVideosResults = () =>
        isDarkTheme ? darkSavedVideos() : lightSavedVideos()

      const renderNoSavedVideosResults = () =>
        isDarkTheme ? darkNoSavedVideos() : lightNoSavedVideos()

      const finalResults = () =>
        savedVideosList.length === 0
          ? renderNoSavedVideosResults()
          : renderSavedVideosResults()

      return finalResults()
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos

//   lightHomeFailure = () => (
//     <NoSavedVideosContainer bgColor="#f9f9f9">
//       <NoSavedVideosImage
//         src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
//         alt=""
//       />
//       <NoSavedVideosHeading color="#0f0f0f" marginBottom="4px">
//         Oops! Something Went Wrong
//       </NoSavedVideosHeading>
//       <NoSavedVideosInfo color="#475569" margin="6px">
//         We are having some trouble to complete your request. Please try again.
//       </NoSavedVideosInfo>

//     </NoSavedVideosContainer>
//   )

//   darkHomeFailure = () => (
//     <NoSavedVideosContainer bgColor="#0f0f0f">
//       <NoSavedVideosImage
//         src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
//         alt=""
//       />
//       <NoSavedVideosHeading color="#ffffff" marginBottom="4px">
//         Oops! Something Went Wrong
//       </NoSavedVideosHeading>
//       <NoSavedVideosInfo color="#7e858e" margin="6px">
//         We are having some trouble to complete your request. Please try again.
//       </NoSavedVideosInfo>

//     </NoSavedVideosContainer>
//   )

// from starting api code
//   state = {savedVideos: []}

//   componentDidMount() {
//     this.getSavedVideos()
//   }

//   onClickSavedVideos = upComingVideoDetails => {
//     this.setState(prevState => ({
//       savedVideos: [...prevState.savedVideos, upComingVideoDetails],
//     }))
//   }

//   onSuccessSavedVideos = trendingVideosData => {
//     // console.log(trendingVideosData)
//     const updatedTrendingVideos = trendingVideosData.videos.map(eachVideo => ({
//       channelDetails: {
//         channelName: eachVideo.channel.name,
//         profileImageUrl: eachVideo.channel.profile_image_url,
//       },
//       id: eachVideo.id,
//       publishedAt: eachVideo.published_at,
//       thumbnailUrl: eachVideo.thumbnail_url,
//       title: eachVideo.title,
//       viewCount: eachVideo.view_count,
//     }))
//     this.setState({savedVideos: updatedTrendingVideos})
//   }

//   getSavedVideos = async () => {
//     const trendingVideosApiUrl = 'https://apis.ccbp.in/videos/trending'
//     const jwtToken = Cookies.get('jwt_token')

//     const options = {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${jwtToken}`,
//       },
//     }

//     const trendingVideosResponse = await fetch(trendingVideosApiUrl, options)
//     // console.log(trendingVideosResponse)
//     if (trendingVideosResponse.ok === true) {
//       const trendingVideosData = await trendingVideosResponse.json()
//       //   console.log(trendingVideosData)
//       this.onSuccessSavedVideos(trendingVideosData)
//     } else {
//       const {savedVideos} = this.state
//       if (savedVideos.length === 0) {
//         this.lightNoSavedVideos()
//       }
//     }
//   }
