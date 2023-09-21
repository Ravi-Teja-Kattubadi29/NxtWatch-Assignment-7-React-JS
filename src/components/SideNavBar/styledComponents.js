import styled from 'styled-components'

export const SideNavBarContainer = styled.div`
  border: 2px solid red;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 17vw;
    min-width: 180px;
    min-height: 115vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const DarkSideNavBarContainer = styled.div`
  //   background-color: #231f20;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 575px) {
    display: none;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 17vw;
    min-width: 180px;
    min-height: 115vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`

export const FirstSideNavBarContainer = styled.ul`
  border: 2px solid yellow;
  margin-top: 23px;
  //   background-color: transparent;
  list-style-type: none;
  padding: 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 400px;
    width: 100%;
  }
`
export const SecondSideNavBarContainer = styled.div`
  //   border: 2px solid black;

  @media screen and (max-width: 767px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: inline;
    margin-bottom: 40px;
  }
`

export const Category = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  //   color: #475569;
  //   border: 2px solid blue;
  border: 0;
  background-color: ${props => props.bgColor};
  padding: 1px 20px 1px 20px;
  width: 100%;
  cursor: pointer;
  outline: none;
`

export const CategoryName = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  //   border: 2px solid blue;
  margin-left: 24px;
  padding: 0;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`

export const DarkCategoryName = styled(CategoryName)`
  font-weight: ${props => props.fontWeight};
`

export const ContactUs = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #212121;
  //   border: 2px solid black;
  padding: 14px 20px 14px 20px;
  margin: 0;
`

export const DarkContactUs = styled(ContactUs)`
  color: #ffffff;
`

export const LogosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 14px 20px 14px 20px;
  //   border: 2px solid black;
`
export const ImageLogo = styled.img`
  height: 32px;
  width: 32px;
  margin-right: 12px;
`
export const ContactInfo = styled(ContactUs)`
  color: #475569;
  font-size: 17px;
`

export const DarkContactInfo = styled(ContactInfo)`
  color: #ffffff;
  font-weight: 500;
`
