import styled from 'styled-components'

export const MenuButton = styled.button`
  @media screen and (max-width: 767px) {
    padding: 20px;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
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
`
