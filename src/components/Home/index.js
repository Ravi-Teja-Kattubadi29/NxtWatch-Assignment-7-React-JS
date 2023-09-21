import {Component} from 'react'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {AiOutlineSearch} from 'react-icons/ai'

import Cookies from 'js-cookie'

import SideNavBar from '../SideNavBar'
import NxtWatchContext from '../../context/NxtWatchContext'
import LoaderComponent from '../LoaderComponent'

import {
  HomeContainer,
  MainMajorContainer,
  VideosContainer,
  SearchContainer,
  SearchBar,
  SearchIconContainer,
  UpdatedVideosContainer,
  DarkVideosContainer,
  DarkSearchContainer,
  DarkSearchBar,
  DarkSearchIconContainer,
  NoResultsFoundContainer,
  NoResultsImage,
  NoResultsHeading,
  NoResultsInfo,
  RetryButton,
  VidoesList,
} from './styledComponents'

import Header from '../Header'
import HomeVideoCard from '../HomeVideoCard'
import APIFailure from '../APIFailure'
import NxtWatchBanner from '../NxtWatchBanner'

const APIStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    updatedVideos: [],
    apiStatus: APIStatusConstants.initial,
    searchInput: '',
    searchInputValue: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onSuccessHomeVideosData = videoData => {
    const {videos} = videoData

    const updatedVideos = videos.map(eachVideoData => ({
      channelDetails: {
        name: eachVideoData.channel.name,
        profileImageUrl: eachVideoData.channel.profile_image_url,
      },
      id: eachVideoData.id,
      publishedAt: eachVideoData.published_at,
      thumbnailUrl: eachVideoData.thumbnail_url,
      title: eachVideoData.title,
      viewCount: eachVideoData.view_count,
      saveVideo: false,
    }))

    this.setState({updatedVideos, apiStatus: APIStatusConstants.success})
  }

  onFailureHomeVideosResponse = () => {
    this.setState({apiStatus: APIStatusConstants.failure})
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: APIStatusConstants.inProgress})
    const {searchInput} = this.state

    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const homeVideosResponse = await fetch(homeVideosApiUrl, options)
    if (homeVideosResponse.status === 200) {
      const homeVideosData = await homeVideosResponse.json()
      this.onSuccessHomeVideosData(homeVideosData)
    } else {
      this.onFailureHomeVideosResponse()
    }
  }

  noResultsFound = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return isDarkTheme
          ? this.darkNoResultsFound()
          : this.lightNoResultsFound()
      }}
    </NxtWatchContext.Consumer>
  )

  //   onClickRetryButton = () => {
  //     // console.log('triggered')
  //     this.getHomeVideos()
  //   }

  lightNoResultsFound = () => (
    <NoResultsFoundContainer>
      <NoResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultsHeading color="#0f0f0f" marginBottom="0px">
        No Search results found
      </NoResultsHeading>
      <NoResultsInfo color="#475569">
        Try different key words or remove search filter
      </NoResultsInfo>
      <RetryButton
        type="button"
        marginTop="4px"
        onClick={this.onClickRetryButton}
      >
        Retry
      </RetryButton>
    </NoResultsFoundContainer>
  )

  darkNoResultsFound = () => (
    <NoResultsFoundContainer>
      <NoResultsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoResultsHeading color="#ffffff" marginBottom="0px">
        No Search results found
      </NoResultsHeading>
      <NoResultsInfo color="#7e858e">
        Try different key words or remove search filter
      </NoResultsInfo>
      <RetryButton
        type="button"
        marginTop="4px"
        onClick={this.onClickRetryButton}
      >
        Retry
      </RetryButton>
    </NoResultsFoundContainer>
  )

  homeVideos = () => {
    const {updatedVideos, searchInput} = this.state
    // console.log(updatedVideos)

    if (searchInput.length > 0) {
      const filteredVideos = updatedVideos.filter(eachVideo =>
        eachVideo.title.toLowerCase().includes(searchInput.toLowerCase()),
      )

      if (filteredVideos.length > 0) {
        return filteredVideos.map(eachVideo => (
          <HomeVideoCard key={eachVideo.id} eachVideo={eachVideo} />
        ))
      }

      return this.noResultsFound()
    }
    return updatedVideos.map(eachVideo => (
      <HomeVideoCard key={eachVideo.id} eachVideo={eachVideo} />
    ))
  }

  renderResults = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case APIStatusConstants.inProgress:
        return <LoaderComponent />
      case APIStatusConstants.success:
        return this.homeVideos()
      case APIStatusConstants.failure:
        return <APIFailure onClickRetryButton={this.getHomeVideos} />
      default:
        return null
    }
  }

  removeBanner = () => {
    const homeContainer = document.getElementById('homeContainer')
    const bannerContainer = document.getElementById('banner')
    homeContainer.removeChild(bannerContainer)
  }

  onClickSearchInput = async () => {
    const {searchInputValue} = this.state

    await this.setState({
      searchInput: searchInputValue,
    })

    this.getHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInputValue: event.target.value,
    })
    if (event.target.value === '') {
      this.onClickSearchInput()
    }
  }

  lightMajorContainer = () => {
    const {searchInputValue} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {removeBannerStatus} = value
          return (
            <MainMajorContainer
              id="homeContainer"
              bgColor="#f9f9f9"
              data-testid="home"
            >
              {removeBannerStatus ? null : <NxtWatchBanner />}

              <VideosContainer bgColor="#f9f9f9">
                <UpdatedVideosContainer>
                  <SearchContainer>
                    <SearchBar
                      type="search"
                      placeholder="Search"
                      id="searchText"
                      value={searchInputValue}
                      onChange={this.onChangeSearchInput}
                    />
                    <SearchIconContainer
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearchInput}
                    >
                      <AiOutlineSearch
                        style={{
                          height: 20,
                          width: 20,
                          color: '#475569',
                        }}
                      />
                    </SearchIconContainer>
                  </SearchContainer>
                  <VidoesList>{this.renderResults()}</VidoesList>
                  {/* {this.renderResults()} */}
                </UpdatedVideosContainer>
              </VideosContainer>
            </MainMajorContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  darkMajorContainer = () => {
    const {searchInputValue} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {removeBannerStatus} = value
          return (
            <MainMajorContainer
              id="homeContainer"
              bgColor="#181818"
              data-testid="home"
            >
              {removeBannerStatus ? null : <NxtWatchBanner />}

              <DarkVideosContainer bgColor="#181818">
                <UpdatedVideosContainer>
                  <DarkSearchContainer>
                    <DarkSearchBar
                      type="search"
                      placeholder="Search"
                      value={searchInputValue}
                      onChange={this.onChangeSearchInput}
                    />
                    <DarkSearchIconContainer
                      type="button"
                      data-testid="searchButton"
                      onClick={this.onClickSearchInput}
                    >
                      <AiOutlineSearch
                        style={{
                          height: 20,
                          width: 20,
                          color: '#606060',
                        }}
                      />
                    </DarkSearchIconContainer>
                  </DarkSearchContainer>

                  {this.renderResults()}
                </UpdatedVideosContainer>
              </DarkVideosContainer>
            </MainMajorContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  lightHomeComponent = () => (
    <>
      <Header />
      <HomeContainer data-testid="home">
        <SideNavBar />
        {this.lightMajorContainer()}
      </HomeContainer>
    </>
  )

  darkHomeComponent = () => (
    <>
      <Header />
      <HomeContainer data-testid="home">
        <SideNavBar />
        {this.darkMajorContainer()}
      </HomeContainer>
    </>
  )

  //   renderLoader = () => (
  //     <LoaderContainer data-testid="loader">
  //       <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
  //     </LoaderContainer>
  //   )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme
            ? this.darkHomeComponent()
            : this.lightHomeComponent()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
