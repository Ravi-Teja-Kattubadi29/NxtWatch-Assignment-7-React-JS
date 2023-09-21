import styled from 'styled-components'

export const HomeContainer = styled.div`
  //   border: 2px solid blue;
  width: 100%;
  display: flex;
  justify-content: flex-start;
`
export const MainMajorContainer = styled.div`
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 575px) {
    width: 100%;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    //   border: 2px solid brown;
    width: 83%;
  }
`
export const VidoesList = styled.ul`
  border: 2px solid yellow;
  //   list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0px 2px 0px 2px;
  padding: 0;
  @media screen and (max-width: 575px) {
    margin: 0;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
`

export const VideosContainer = styled.div`
  //   background-color: #f9f9f9;
  background-color: ${props => props.bgColor};

  min-height: 100vh;
  @media screen and (max-width: 575px) {
    padding: 0px 0px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    padding: 20px 20px 0px 10px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 20px 0px 20px;
  }
`

export const DarkVideosContainer = styled(VideosContainer)`
  //   background-color: #0f0f0f;
  background-color: ${props => props.bgColor};
`

export const SearchContainer = styled.div`
  border: 2px solid #cccccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   border: 2px solid black;
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 575px) {
    width: 90%;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 20px;
    margin-right: 20px;
    height: 35px;
    // padding: 4px 15px 4px 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    min-width: 400px;
    width: 495px;
    margin: 10px 0px 0px 10px;
    // height: 36px;
  }
  @media screen and (min-width: 768px) {
    min-width: 450px;
    width: 500px;
    margin: 10px 1000px 0px 10px;
    height: 35px;
  }
`
export const DarkSearchContainer = styled(SearchContainer)`
  background-color: #ffffff22;
  border: 1px solid #606060;
  cursor: pointer;
  outline: none;
`

export const SearchBar = styled.input`
  font-family: 'Roboto';
  font-size: 15px;
  cursor: pointer;
  outline: none;
  //   border: 2px solid black;
  border: 0;
  //   border-right: 2px solid #cccccc;
  @media screen and (max-width: 575px) {
    width: 90%;
    padding: 7px 15px 7px 15px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 90%;
    padding: 7px 15px 7px 15px;
  }
  @media screen and (min-width: 768px) {
    width: 450px;
    padding: 7px 15px 7px 15px;
  }
`

export const DarkSearchBar = styled(SearchBar)`
  background-color: #181818;
  border-right: 2px solid #606060;
  color: #ffffff;
`

export const SearchIconContainer = styled.div`
  width: 90px;
  //   border: 2px solid black;
  border-left: 2px solid #cccccc;
  text-align: center;
  padding: 5px;
  margin: 0;
  @media screen and (max-width: 575px) {
    width: 90px;
    height: 34px;
  }
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 80px;
    height: 34px;
  }
  @media screen and (min-width: 768px) {
    width: 90px;
    height: 34px;
  }
`

export const DarkSearchIconContainer = styled(SearchIconContainer)`
  border: 0;
  padding: 7px;
`

export const UpdatedVideosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  border: 2px solid black;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0;
  }
`
// *////////////////////////////////////////////////////////////////////////////////////////////////////////*
// No Results Found styledComponents
export const NoResultsFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 100%;
  margin-bottom: 0;
  @media screen and (max-width: 767px) {
    height: 75vh;
  }
  @media screen and (min-width: 768px) {
    min-height: 85vh;
    max-height: 100vh;
  }
`
export const NoResultsImage = styled.img`
  margin-bottom: 13px;
  //   border: 2px solid black;
  @media screen and (max-width: 768px) {
    min-width: 150px;
    width: 50%;
    max-width: 200px;
    margin-bottom: 23px;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    min-width: 270px;
    max-width: 335px;
  }
`
export const NoResultsHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;

  text-align: center;
  //   border: 2px solid black;
  color: #0f0f0f;
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const NoResultsInfo = styled.p`
  font-family: 'Roboto';
  color: ${props => props.color};
  //   border: 2px solid black;
  width: 90%;
  text-align: center;
  margin: ${props => props.margin};
  font-weight: 400;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const RetryButton = styled.button`
  color: #ffffff;
  background-color: #4f46e5;

  border-radius: 4px;
  font-family: 'Roboto';
  border: 0;
  margin-top: ${props => props.marginTop};
  cursor: pointer;
  outline: none;
  @media screen and (max-width: 767px) {
    padding: 12px 30px 12px 30px;
    font-size: 13px;
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    padding: 12px 33px 12px 33px;
    font-size: 13px;
    font-weight: 500;
  }
`
// *////////////////////////////////////////////////////////////////////////////////////////////////////////*
