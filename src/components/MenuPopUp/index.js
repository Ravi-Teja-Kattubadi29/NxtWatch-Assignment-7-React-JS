import {Component} from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
// import {GrFormClose} from 'react-icons/gr'
import {RiCloseFill} from 'react-icons/ri'

import {
  MenuButton,
  FirstMenuBarContainer,
  Category,
  CategoryName,
  CloseButton,
  MenuNavBar,
  DarkMenuContainer,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const lightNavBar = () => (
  <FirstMenuBarContainer>
    <Category>
      <AiFillHome style={{height: 20, width: 20}} />
      <CategoryName color="#475569">Home</CategoryName>
    </Category>

    <Category>
      <HiFire style={{height: 20, width: 20}} />
      <CategoryName color="#475569">Trending</CategoryName>
    </Category>

    <Category>
      <SiYoutubegaming style={{height: 20, width: 20}} />
      <CategoryName color="#475569">Gaming</CategoryName>
    </Category>

    <Category>
      <MdPlaylistAdd style={{height: 20, width: 20}} />
      <CategoryName color="#475569">Saved videos </CategoryName>
    </Category>
  </FirstMenuBarContainer>
)

const darkNavBar = () => (
  <FirstMenuBarContainer bgColor="#231f20">
    <Category>
      <AiFillHome style={{height: 20, width: 20, color: '#7e858e'}} />
      <CategoryName color="#cbd5e1">Home</CategoryName>
    </Category>
    <Category>
      <HiFire style={{height: 20, width: 20, color: '#7e858e'}} />
      <CategoryName color="#cbd5e1">Trending</CategoryName>
    </Category>
    <Category>
      <SiYoutubegaming style={{height: 20, width: 20, color: '#7e858e'}} />
      <CategoryName color="#cbd5e1">Gaming</CategoryName>
    </Category>
    <Category>
      <MdPlaylistAdd style={{height: 20, width: 20, color: '#7e858e'}} />
      <CategoryName color="#cbd5e1">Saved videos </CategoryName>
    </Category>
  </FirstMenuBarContainer>
)

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

class MenuPopUp extends Component {
  lightMenuPopUp = () => (
    <div className="popup-container">
      <StyledMenuPopUp
        modal
        trigger={<MenuButton type="button">Trigger</MenuButton>}
      >
        {close => (
          <>
            <CloseButton type="button" onClick={() => close()}>
              <RiCloseFill style={{height: 35, width: 35}} />
            </CloseButton>
            <MenuNavBar>{lightNavBar()}</MenuNavBar>
          </>
        )}
      </StyledMenuPopUp>
    </div>
  )

  darkMenuPopUp = () => (
    <div className="popup-container">
      <StyledMenuPopUp
        modal
        trigger={<MenuButton type="button">Trigger</MenuButton>}
      >
        {close => (
          <>
            <DarkMenuContainer>
              <CloseButton type="button" onClick={() => close()}>
                <RiCloseFill
                  style={{height: 35, width: 35, color: '#ffffff'}}
                />
              </CloseButton>
              <MenuNavBar bgColor="#231f20">{darkNavBar()}</MenuNavBar>
            </DarkMenuContainer>
          </>
        )}
      </StyledMenuPopUp>
    </div>
  )

  render() {
    return this.lightMenuPopUp()
  }
}

export default MenuPopUp
