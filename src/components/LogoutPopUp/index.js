import {Component} from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import 'reactjs-popup/dist/index.css'

import {LogoutInfo, ButtonsContainer, CancelButton} from './styledComponents'

const StyledPopUp = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    @media screen and (max-width: 767px) {
      height: 100vh;
      width: 100vw;
    }
    @media screen and (min-width: 768px) {
      height: 100vh;
      width: 100vw;
    }
  }
  // use your custom style for ".popup-content"
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    // border: 2px solid yellow;
    border: 0;
    background-color: ${props => props.bgColor};
    @media screen and (max-width: 767px) {
      height: 190px;
      max-width: 380px;
      width: 85%;
      border-radius: 10px;
    }
    @media screen and (min-width: 768px) {
      max-width: 375px;
      min-width: 200px;
      height: 165px;
      border-radius: 10px;
    }
  }
`

class LogoutPopUp extends Component {
  lightLogoutPopUp = () => (
    <StyledPopUp
      modal
      position="center center"
      trigger={
        <button className="trigger-button" type="button">
          Logout
        </button>
      }
      bgColor="#ffffff"
    >
      {close => (
        <>
          <LogoutInfo color="#00306e">
            Are you sure you want to logout?
          </LogoutInfo>
          <ButtonsContainer>
            <CancelButton
              type="button"
              color="#909090"
              border="1.2pt solid #909090"
              bgColor="#ffffff"
              onClick={() => close()}
            >
              Cancel
            </CancelButton>
            <CancelButton
              type="button"
              color="#ffffff"
              border="1.2pt solid #3b82f6"
              bgColor="#3b82f6"
            >
              Confirm
            </CancelButton>
          </ButtonsContainer>
        </>
      )}
    </StyledPopUp>
  )

  darkLogoutPopUp = () => (
    <StyledPopUp
      modal
      position="center center"
      bgColor="#313131"
      trigger={
        <button className="trigger-button" type="button">
          Logout
        </button>
      }
    >
      {close => (
        <>
          {/* <LogoutContainer bgColor="#313131"> */}
          <LogoutInfo color="#ebebeb">
            Are you sure you want to logout ?
          </LogoutInfo>
          <ButtonsContainer>
            <CancelButton
              type="button"
              color="#909090"
              //   color="#7e858e"
              border="1.2pt solid  #7e858e"
              bgColor="transparent"
              onClick={() => close()}
            >
              Cancel
            </CancelButton>
            <CancelButton
              type="button"
              color="#ffffff"
              border="1.2pt solid #3b82f6"
              bgColor="#3b82f6"
            >
              Confirm
            </CancelButton>
          </ButtonsContainer>
          {/* </LogoutContainer> */}
        </>
      )}
    </StyledPopUp>
  )

  render() {
    return this.lightLogoutPopUp()
  }
}
export default LogoutPopUp
