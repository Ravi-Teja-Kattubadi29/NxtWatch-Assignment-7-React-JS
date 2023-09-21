import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  onChangeTheme: () => {},
  savedVideosList: [],
  addToSavedVideos: () => {},
  removeFromSavedVideos: () => {},
  removeBannerStatus: false,
  removeBannerFunction: false,
  onClickRetryButton: () => {},
  savedVideoOrNotStatus: false,
})

export default NxtWatchContext
