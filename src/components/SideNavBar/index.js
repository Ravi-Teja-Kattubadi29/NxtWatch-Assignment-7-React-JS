import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SideNavBarContainer,
  Category,
  CategoryName,
  FirstSideNavBarContainer,
  SecondSideNavBarContainer,
  ContactUs,
  LogosContainer,
  ImageLogo,
  ContactInfo,
  DarkSideNavBarContainer,
  DarkContactUs,
  DarkContactInfo,
} from './styledComponents'

const LinkStyle = {
  textDecoration: 'none',
  cursor: 'pointer',
  outline: 'none',
}

class SideNavBar extends Component {
  render() {
    const {history} = this.props
    const {location} = history
    const {pathname} = location

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          const lightSideNavBar = () => (
            <SideNavBarContainer bgColor="#ffffff">
              <FirstSideNavBarContainer>
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
              </FirstSideNavBarContainer>
              <SecondSideNavBarContainer>
                <ContactUs>CONTACT US</ContactUs>
                <LogosContainer>
                  <ImageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <ImageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <ImageLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </LogosContainer>
                <ContactInfo>
                  Enjoy! Now to see your channels and recommendations!
                </ContactInfo>
              </SecondSideNavBarContainer>
            </SideNavBarContainer>
          )

          const darkSideNavBar = () => (
            <DarkSideNavBarContainer bgColor="#231f20">
              <FirstSideNavBarContainer>
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
                <Link to="/saved-videos" style={LinkStyle} value="SAVED_VIDEOS">
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
              </FirstSideNavBarContainer>
              <SecondSideNavBarContainer>
                <DarkContactUs>CONTACT US</DarkContactUs>
                <LogosContainer>
                  <ImageLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png " />
                  <ImageLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png " />
                  <ImageLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png " />
                </LogosContainer>
                <DarkContactInfo>
                  Enjoy! Now to see your channels and recommendatios!
                </DarkContactInfo>
              </SecondSideNavBarContainer>
            </DarkSideNavBarContainer>
          )
          return isDarkTheme ? darkSideNavBar() : lightSideNavBar()
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default withRouter(SideNavBar)
