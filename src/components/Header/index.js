import Popup from 'reactjs-popup'
import styled from 'styled-components'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
// import {GrFormClose} from 'react-icons/gr'
import {RiCloseFill} from 'react-icons/ri'
import NxtWatchContext from '../../context/NxtWatchContext'
// import LogoutPopUp from '../LogoutPopUp'

import {
  NavBar,
  NxtWatchLogo,
  NavDetailsContainer,
  LightThemeIcon,
  ProfileImage,
  LogoutButton,
  DarkNavbar,
  DarkNxtWatchLogo,
  DarkLogoutButton,
  HamburgerMenuButton,
  LogoutIconButton,
  DarkHamburgerMenuButton,
  LogoutInfo,
  ButtonsContainer,
  CancelButton,
  LightButtonContainer,
  DarkButtonContainer,
  //   MenuButton,
  DarkMenuButton,
  CloseButton,
  MenuNavBar,
  FirstMenuBarContainer,
  Category,
  CategoryName,
  DarkMenuContainer,
  CategoryContainer,
  //   MenuContainer,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

// import {} from './styledComponents'

const StyledLogoutPopUp = styled(Popup)`
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
const StyledMenuPopUp = styled(Popup)`
  // use your custom style for ".popup-overlay"
  &-overlay {
    @media screen and (max-width: 767px) {
      height: 100vh;
      width: 100vw;
      //   border: 2px solid black;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  // use your custom style for ".popup-content"
  &-content {
    height: 100vh;
    width: 100vw;

    @media screen and (max-width: 767px) {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
    }
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`
const LinkStyle = {
  textDecoration: 'none',
  cursor: 'pointer',
  outline: 'none',
}

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value

      const {history} = props
      const {location} = history
      const {pathname} = location

      const confirmLogout = () => {
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      /* const onClickNxtWatchLogo = () => {
        history.push('/')
      } */

      const lightMenuPopUp = () => (
        <StyledMenuPopUp
          modal
          trigger={
            <HamburgerMenuButton>
              <GiHamburgerMenu
                style={{
                  height: 30,
                  width: 30,
                  margin: 0,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              />
            </HamburgerMenuButton>
          }
        >
          {close => (
            <>
              <DarkMenuContainer bgColor="#ffffff">
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseFill style={{height: 35, width: 35}} />
                </CloseButton>
                <MenuNavBar>
                  <FirstMenuBarContainer>
                    <CategoryContainer bgColor="#231f20">
                      <Link to="/" style={LinkStyle}>
                        {pathname === '/' ? (
                          <Category bgColor="#f1f5f9">
                            <AiFillHome
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="black" fontWeight="bold">
                              Home
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#ffffff">
                            <AiFillHome
                              style={{height: 20, width: 20, color: '#475569'}}
                            />
                            <CategoryName color="#475569" fontWeight={500}>
                              Home
                            </CategoryName>
                          </Category>
                        )}
                      </Link>

                      <Link to="/trending" style={LinkStyle}>
                        {pathname === '/trending' ? (
                          <Category bgColor="#f1f5f9">
                            <HiFire
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="black" fontWeight="bold">
                              Trending
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#ffffff">
                            <HiFire
                              style={{height: 20, width: 20, color: '#475569'}}
                            />
                            <CategoryName color="#475569" fontWeight={500}>
                              Trending
                            </CategoryName>
                          </Category>
                        )}
                      </Link>

                      <Link to="/gaming" style={LinkStyle}>
                        {pathname === '/gaming' ? (
                          <Category bgColor="#f1f5f9">
                            <SiYoutubegaming
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="black" fontWeight="bold">
                              Gaming
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#ffffff">
                            <SiYoutubegaming
                              style={{height: 20, width: 20, color: '#475569'}}
                            />
                            <CategoryName color="#475569" fontWeight={500}>
                              Gaming
                            </CategoryName>
                          </Category>
                        )}
                      </Link>

                      <Link to="/saved-videos" style={LinkStyle}>
                        {pathname === '/saved-videos' ? (
                          <Category bgColor="#f1f5f9">
                            <MdPlaylistAdd
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="black" fontWeight="bold">
                              Saved videos{' '}
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#ffffff">
                            <MdPlaylistAdd
                              style={{height: 20, width: 20, color: '#475569'}}
                            />
                            <CategoryName color="#475569" fontWeight={500}>
                              Saved videos{' '}
                            </CategoryName>
                          </Category>
                        )}
                      </Link>
                    </CategoryContainer>
                  </FirstMenuBarContainer>
                </MenuNavBar>
              </DarkMenuContainer>
            </>
          )}
        </StyledMenuPopUp>
      )

      const darkMenuPopUp = () => (
        <StyledMenuPopUp
          modal
          trigger={
            <DarkHamburgerMenuButton>
              <GiHamburgerMenu
                style={{
                  height: 30,
                  width: 30,
                  margin: 0,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              />
            </DarkHamburgerMenuButton>
          }
        >
          {close => (
            <>
              <DarkMenuContainer bgColor="#231f20">
                <CloseButton type="button" onClick={() => close()}>
                  <RiCloseFill
                    style={{
                      height: 35,
                      width: 35,
                      color: '#ffffff',
                    }}
                  />
                </CloseButton>

                <MenuNavBar bgColor="#231f20">
                  <FirstMenuBarContainer>
                    <CategoryContainer bgColor="#231f20">
                      <Link to="/" style={LinkStyle}>
                        {pathname === '/' ? (
                          <Category bgColor="#383838">
                            <AiFillHome
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="#ffffff" fontWeight="bold">
                              Home
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#231f20">
                            <AiFillHome
                              style={{height: 20, width: 20, color: '#7e858e'}}
                            />
                            <CategoryName color="#f1f1f1" fontWeight={400}>
                              Home
                            </CategoryName>
                          </Category>
                        )}
                      </Link>
                      <Link to="/trending" style={LinkStyle}>
                        {pathname === '/trending' ? (
                          <Category bgColor="#383838">
                            <HiFire
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="#ffffff" fontWeight="bold">
                              Trending
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#231f20">
                            <HiFire
                              style={{height: 20, width: 20, color: '#7e858e'}}
                            />
                            <CategoryName color="#f1f1f1" fontWeight={400}>
                              Trending
                            </CategoryName>
                          </Category>
                        )}
                      </Link>{' '}
                      <Link to="/gaming" style={LinkStyle} value="GAMING">
                        {pathname === '/gaming' ? (
                          <Category bgColor="#383838">
                            <SiYoutubegaming
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="#ffffff" fontWeight="bold">
                              Gaming
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#231f20">
                            <SiYoutubegaming
                              style={{height: 20, width: 20, color: '#7e858e'}}
                            />
                            <CategoryName color="#f1f1f1" fontWeight={400}>
                              Gaming
                            </CategoryName>
                          </Category>
                        )}
                      </Link>
                      <Link
                        to="/saved-videos"
                        style={LinkStyle}
                        value="SAVED_VIDEOS"
                      >
                        {pathname === '/saved-videos' ? (
                          <Category bgColor="#383838">
                            <MdPlaylistAdd
                              style={{height: 20, width: 20, color: '#ff0000'}}
                            />
                            <CategoryName color="#ffffff" fontWeight="bold">
                              Saved videos
                            </CategoryName>
                          </Category>
                        ) : (
                          <Category bgColor="#231f20">
                            <MdPlaylistAdd
                              style={{height: 20, width: 20, color: '#7e858e'}}
                            />
                            <CategoryName color="#f1f1f1" fontWeight={400}>
                              Saved videos
                            </CategoryName>
                          </Category>
                        )}
                      </Link>
                    </CategoryContainer>
                  </FirstMenuBarContainer>
                </MenuNavBar>
              </DarkMenuContainer>
            </>
          )}
        </StyledMenuPopUp>
      )

      const lightLogoutPopUp = () => (
        <StyledLogoutPopUp
          modal
          position="center center"
          trigger={
            <LightButtonContainer>
              <LogoutButton type="button">Logout</LogoutButton>
              <LogoutIconButton>
                <FiLogOut
                  style={{
                    height: 30,
                    width: 30,
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                />
              </LogoutIconButton>
            </LightButtonContainer>
          }
          bgColor="#ffffff"
        >
          {close => (
            <>
              <LogoutInfo color="#00306e">
                Are you sure, you want to logout
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
                  onClick={confirmLogout}
                >
                  Confirm
                </CancelButton>
              </ButtonsContainer>
            </>
          )}
        </StyledLogoutPopUp>
      )

      const darkLogoutPopUp = () => (
        <StyledLogoutPopUp
          modal
          position="center center"
          bgColor="#313131"
          trigger={
            <DarkButtonContainer>
              <DarkLogoutButton type="button">Logout</DarkLogoutButton>
              <DarkMenuButton>
                <FiLogOut
                  style={{
                    height: 30,
                    width: 30,
                    cursor: 'pointer',
                    outline: 'none',
                  }}
                />
              </DarkMenuButton>
            </DarkButtonContainer>
          }
        >
          {close => (
            <>
              {/* <LogoutContainer bgColor="#313131"> */}
              <LogoutInfo color="#ebebeb">
                Are you sure, you want to logout
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
                  onClick={confirmLogout}
                >
                  Confirm
                </CancelButton>
              </ButtonsContainer>
              {/* </LogoutContainer> */}
            </>
          )}
        </StyledLogoutPopUp>
      )

      const lightThemeNavbar = () => (
        <NavBar>
          <Link to="/">
            <NxtWatchLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </Link>
          <NavDetailsContainer>
            <LightThemeIcon
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              <FaMoon
                style={{
                  height: 25,
                  width: 30,
                  cursor: 'pointer',
                  outline: 'none',
                }}
              />
            </LightThemeIcon>
            <ProfileImage
              alt="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            />

            {lightMenuPopUp()}
            {lightLogoutPopUp()}
          </NavDetailsContainer>
        </NavBar>
      )

      const darkThemeNavbar = () => (
        <DarkNavbar>
          <Link to="/">
            <DarkNxtWatchLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              alt="website logo"
            />
          </Link>
          <NavDetailsContainer>
            <LightThemeIcon
              type="button"
              onClick={onChangeTheme}
              data-testid="theme"
            >
              <FiSun
                style={{
                  height: 25,
                  width: 30,
                  color: '#ffffff',
                  cursor: 'pointer',
                  outline: 'none',
                }}
                data-testid="theme"
              />
            </LightThemeIcon>
            <ProfileImage
              as="img"
              alt="profile"
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            />

            {darkMenuPopUp()}
            {darkLogoutPopUp()}
          </NavDetailsContainer>
        </DarkNavbar>
      )

      return isDarkTheme ? darkThemeNavbar() : lightThemeNavbar()
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(Header)
