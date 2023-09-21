import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  //   border: 2px solid black;
  height: 12vh;
  padding: 5px 25px 7px 15px;
  width: 100%;
  @media screen and (max-width: 575px) {
    padding: 5px 15px 7px 20px;
  }
  @media screen and (min-width: 768px) {
    padding: 5px 25px 7px 45px;
  }
`
export const NxtWatchLogo = styled.img`
  cursor: pointer;
  outline: none;
  //   height: 70px;
  @media screen and (max-width: 575px) {
    width: 150px;
  }
  @media screen and (min-width: 576px) {
    width: 150px;
  }
  //   border: 2px solid blue;
  margin-right: 50px;
  @media screen and (min-width: 768px) {
    width: 150px;
    // border: 2px solid blue;
    margin-right: 50px;
  }
`
export const NavDetailsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  //   border: 2px solid black;
  width: 40%;
  @media screen and (max-width: 575px) {
    min-width: 100px;
    width: 150px;
    max-width: 40%;
    margin: 0;
  }
  @media screen and (min-width: 576px) {
    width: 160px;
  }
  @media screen and (min-width: 768px) {
    width: 220px;
  }
`

export const LightThemeIcon = styled.button`
  //   border: 2px solid black;
  border: 0;
  text-align: center;
  background-color: transparent;
`
export const ProfileImage = styled.img`
  display: none;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 768px) {
    display: inline;
    width: 17%;
    // border: 2px solid black;
  }
`

export const MenuButton = styled.button`
  height: 50px;
  width: 50px;
  //   border: 2px solid blue;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const HamburgerMenuButton = styled(MenuButton)`
  height: 50px;
  width: 50px;
  //   border: 2px solid blue;
  background-color: transparent;
  border: 0;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIconButton = styled(MenuButton)`
  height: 50px;
  width: 50px;
  //   border: 2px solid blue;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  outline;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline;
    background-color: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
    font-family: 'Roboto';
    padding: 4px 16px 4px 16px;
    font-size: 17px;
    font-weight: bold;
    border-radius: 2px;
    cursor: pointer;
    outline: none;
  }
`
// Dark Navbar Styled Components
export const DarkNavbar = styled(NavBar)`
  background-color: #231f20;
`
export const DarkNxtWatchLogo = styled(NxtWatchLogo)`
  color: #f1f5f9;
`
export const DarkLogoutButton = styled(LogoutButton)`
  color: #f1f5f9;
  border: 2px solid #f1f5f9;
  font-weight: 500;
`

export const DarkHamburgerMenuButton = styled(HamburgerMenuButton)`
  color: #f1f5f9;
  border: 0;

  //     height: 50px;
  //   width: 50px;
  //   //   border: 2px solid blue;
  //   background-color: transparent;
  //   border: 0;
  //   @media screen and (min-width: 768px) {
  //     display: none;
  //   }
`

export const DarkMenuButton = styled.button`
  color: #f1f5f9;
  border: 0;
  background-color: transparent;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
// Logout pop styled components

export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 2px solid yellow;
  //   @media screen and (max-width: 767px) {
  //     display: none;
  //   }
`

export const PopUpStyle = styled.div`
  @media screen and (max-width: 767px) {
    height: 21vh;
    width: 100vw;
  }
`

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;

  border: 2px solid red;
  border-radius: 9px;
  background-color: ${props => props.bgColor};

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-top: 0;
    height: 180px;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 160px;
  }
`
export const LogoutInfo = styled.p`
  font-family: 'Roboto';
  //   color: #00306e;
  //   border: 2px solid blue;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 20px;
    margin: 15px;
  }
  color: ${props => props.color};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
    margin-top: 7px;
    font-weight: 400;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   border: 2px solid black;
  width: 100%;
  //   margin:0;
`
export const CancelButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => props.color};
  padding: 10px 17px 10px 17px;
  border-radius: 3px;
  background-color: ${props => props.bgColor};
  margin-right: 16px;
  margin-left: 16px;
  border: ${props => props.border};
  //   height: 40px;
  //   width: 80px;
  cursor: 'pointer';
  outline: 'none';
`
export const lightPopUpStyle = styled.div`
  @media screen and (min-width: 768px) {
    height: 25vh;
    width: 25vw;
    border-radius: 9px;
    //   border: '2px solid blue',
    //   'background-color': 'transparent',
    border: 0;
  }
`

export const LightButtonContainer = styled.button`
  cursor: 'pointer';
  outline: 'none';
  @media screen and (max-width: 767px) {
    height: 50px;
    width: 48px;
    border: 0;
    background-color: transparent;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    background-color: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
    font-family: 'Roboto';
    // padding: 4px 16px 4px 16px;
    padding: 0;
    font-size: 17px;
    font-weight: bold;
    border-radius: 2px;
    border: 0;
  }
`

export const DarkButtonContainer = styled.button`
  //   border: 2px solid yellow;
  border: 0;
  padding: 0px;
  color: #f1f5f9;
  background-color: transparent;
  cursor='pointer' outline='none' @media screen and (min-width: 768px) {
    // border: 2px solid #f1f5f9;
    font-weight: 500;
  }
`
// Menu popup styled components

export const MenuNavBar = styled.div`
  //   border: 2px solid blue;
  background-color: ${props => props.bgColor};
  height: 90vh;
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const FirstMenuBarContainer = styled.div`
  //   border: 2px solid yellow;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 23px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (min-width: 768px) {
    margin-bottom: 400px;
  }
`

export const Category = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #475569;
  //   border: 2px solid black;
  padding: 1px 20px 1px 20px;
  width: 100%;
  background-color: ${props => props.bgColor};
  border: 0;
`

export const CategoryName = styled.h1`
  font-family: 'Roboto';
  font-size: 17px;
  //   border: 2px solid blue;
  margin-left: 24px;
  padding: 0;
  font-weight: 500;
  color: ${props => props.color};
`

export const CategoryContainer = styled.div`
  width: 100%;
  //   border: 2px solid blue;
  background-color: ${props => props.bgColor};
  border: 0;
`

export const CloseButton = styled.button`
  background-color: transparent;
  text-align: end;
  align-self: flex-end;
  margin: 20px 20px 0px 20px;
  border: 0;
`
export const DarkMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #231f20;
  background-color: ${props => props.bgColor};
`

export const MenuContainer = styled.div`
  display: flex;
  flex: column;
`
