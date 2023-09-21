import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import NxtWatchContext from './context/NxtWatchContext'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import LogoutPopUp from './components/LogoutPopUp'
import MenuPopUp from './components/MenuPopUp'
import NotFound from './components/NotFound'
// import APIFailure from './components/APIFailure'

import './App.css'

// const APIStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

// const a = {
//   channelDetails: {
//     channelName: 'iB Cricket',
//     profileImageUrl:
//       'https://assets.ccbp.in/frontend/react-js/nxt-watch/ib-cricket-img.png',
//     subscriberCount: '4.13K',
//   },
//   description:
//     'Accepting the challenge from coach Stephen Fleming, Billings steps into the world-class VR Cricket stadium.',
//   id: '6114fac6-44ff-47f8-82df-3426715e0b56',
//   publishedAt: 'Jan 30, 2019',
//   thumbnailUrl:
//     'https://assets.ccbp.in/frontend/react-js/nxt-watch/ibc-sol-4-img.png',
//   title: 'Sam Billings having fun with Virtual Reality Cricket',
//   videoUrl: 'https://www.youtube.com/watch?v=mwEm4sizTxk',
//   viewCount: '3.6K',
// }

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    savedVideosList: [],
    removeBannerStatus: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToSavedVideos = currentVideoDetails => {
    console.log(`aap-> ${currentVideoDetails}`)

    const {savedVideosList} = this.state
    if (savedVideosList.length !== 0) {
      const filteredSavedVideosList = savedVideosList.filter(
        eachVideo => eachVideo.id !== currentVideoDetails.id,
      )

      this.setState({
        savedVideosList: filteredSavedVideosList,
      })
    }

    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, currentVideoDetails],
    }))
  }

  removeFromSavedVideos = currentVideoDetails => {
    console.log(`rem-> ${currentVideoDetails}`)

    const {savedVideosList} = this.state
    const filteredSavedVideosList = savedVideosList.filter(
      eachVideosDetails => eachVideosDetails.id !== currentVideoDetails.id,
    )
    this.setState({savedVideosList: filteredSavedVideosList})
  }

  removeBannerFunction = () => {
    this.setState({removeBannerStatus: true})
  }

  onClickRetryButton = retryGetVideosData => {
    retryGetVideosData()
  }

  render() {
    const {isDarkTheme, removeBannerStatus, savedVideosList} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          onChangeTheme: this.onChangeTheme,
          savedVideosList,
          addToSavedVideos: this.addToSavedVideos,
          removeFromSavedVideos: this.removeFromSavedVideos,
          removeBannerStatus,
          removeBannerFunction: this.removeBannerFunction,
          onClickRetryButton: this.onClickRetryButton,
        }}
      >
        <Switch>
          <Route path="/login" component={Login} />

          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/logout-popup" component={LogoutPopUp} />
          <ProtectedRoute exact path="/menu-popup" component={MenuPopUp} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default App
