import {Component} from 'react'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomeFailureContainer,
  HomeFailureImage,
  HomeFailureHeading,
  HomeFailureInfo,
  RetryButton,
} from './styledComponents'

class APIFailure extends Component {
  lightHomeFailure = () => {
    const {onClickRetryButton} = this.props
    return (
      <HomeFailureContainer bgColor="#f9f9f9">
        <HomeFailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <HomeFailureHeading color="#0f0f0f" marginBottom="4px">
          Oops! Something Went Wrong
        </HomeFailureHeading>
        <HomeFailureInfo color="#475569" margin="6px">
          We are having some trouble to complete your request. Please try again.
        </HomeFailureInfo>

        <RetryButton
          type="button"
          marginTop="13px"
          onClick={onClickRetryButton}
        >
          Retry
        </RetryButton>
      </HomeFailureContainer>
    )
  }

  darkHomeFailure = () => {
    const {onClickRetryButton} = this.props
    return (
      <HomeFailureContainer bgColor="#0f0f0f">
        <HomeFailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure view"
        />
        <HomeFailureHeading color="#ffffff" marginBottom="4px">
          Oops! Something Went Wrong
        </HomeFailureHeading>
        <HomeFailureInfo color="#7e858e" margin="6px">
          We are having some trouble to complete your request. Please try again.
        </HomeFailureInfo>

        <RetryButton
          type="button"
          marginTop="13px"
          onClick={onClickRetryButton}
        >
          Retry
        </RetryButton>
      </HomeFailureContainer>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme ? this.darkHomeFailure() : this.lightHomeFailure()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default APIFailure
