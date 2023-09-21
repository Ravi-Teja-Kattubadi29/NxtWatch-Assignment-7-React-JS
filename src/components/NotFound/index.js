import {Component} from 'react'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
// import APIFailure from '../APIFailure'
import {
  MainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundInfo,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class NotFound extends Component {
  lightNotFound = () => (
    <>
      <Header />
      <MainContainer>
        <SideNavBar />
        <NotFoundContainer bgColor="#f9f9f9">
          <NotFoundImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
            alt="not found"
          />
          <NotFoundHeading color="#0f0f0f">Page Not Found</NotFoundHeading>
          <NotFoundInfo color="#475569">
            We are sorry, the page you requested could not be found.
          </NotFoundInfo>
        </NotFoundContainer>
      </MainContainer>
    </>
  )

  darkNotFound = () => (
    <>
      <Header />
      <MainContainer>
        <SideNavBar />
        <NotFoundContainer bgColor="#0f0f0f">
          <NotFoundImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
            alt="not found"
          />
          <NotFoundHeading color="#ffffff">Page Not Found</NotFoundHeading>
          <NotFoundInfo color="#7e858e">
            We are sorry, the page you requested could not be found.
          </NotFoundInfo>
        </NotFoundContainer>
      </MainContainer>
    </>
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme ? this.darkNotFound() : this.lightNotFound()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default NotFound
