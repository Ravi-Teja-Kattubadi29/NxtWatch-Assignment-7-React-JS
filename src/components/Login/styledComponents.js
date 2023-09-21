import styled from 'styled-components'

// Login light theme styled Components
export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //   border: 2px solid blue;
  font-family: 'Roboto';
`

export const LoginContainer = styled(AppContainer)`
  justify-content: flex-start;
  width: 90%;
  //   border: 2px solid black;
  //   height: 60vh;
  //   max-height: 80vh;
  height: 62vh;
  max-height: 80vh;
  padding: 40px 20px 40px 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 16px 0px #bfbfbf;
  @media screen and (min-width: 768px) {
    width: 26%;
    height: 62vh;
    padding: 48px 45px 60px 45px;
  }
`

export const LoginLogo = styled.img`
  width: 40%;
  margin-bottom: 13px;
  @media screen and (min-width: 768px) {
    width: 55%;
    margin-bottom: 25px;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  //   border: 2px solid black;
  width: 100%;
`

export const Label = styled.label`
  color: #64748b;
  font-size: 14px;
  font-weight: bold;
  margin-top: 28px;
  @media screen and (min-width: 768px) {
    font-size: 13px;
    margin-top: 23px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 13px 18px 13px 18px;
  margin-top: 8px;
  border: 0.5px solid #94a3b8;
  border-radius: 2px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    padding: 11px 15px 11px 15px;
    font-size: 14px;
    margin-top: 7px;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  //   border: 2px solid black;
  padding: 0;
  margin-top: 9px;
  @media screen and (min-width: 768px) {
    margin-top: 7px;
  }
`
export const CheckBoxInput = styled(Input)`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  padding: 0;
  @media screen and (min-width: 768px) {
    height: 17px;
    width: 17px;
    margin-right: 8px;
  }
`

export const CheckBoxLabel = styled(Label)`
  color: #0f0f0f;
  font-size: 17px;
  font-weight: 500;
  margin-top: 4px;
  font-family: 'Roboto';
  margin-left: 0;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 2px;
  }
`
export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  padding: 14px 0px 14px 0px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  outline: none;
  //   margin-bottom: 100px;
  @media screen and (min-width: 768px) {
    padding: 12px 0px 12px 0px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 8px;
  }
`
export const SubmitError = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 10px;
  //   padding-bottom: 50px;
  //   border: 2px solid black;
  align-self: flex-start;
  @media screen and (min-width: 768px) {
    margin-top: 4px;
    font-size: 13px;
  }
`

// Login dark theme styled Components
export const DarkAppContainer = styled(AppContainer)`
  background-color: #231f20;
`

export const DarkLoginContainer = styled(LoginContainer)`
  background-color: #0f0f0f;
  box-shadow: none;
`
export const DarkLabel = styled(Label)`
  color: #f9f9f9;
`
export const DarkInput = styled(Input)`
  background-color: #000000;
  color: #ffffff;
  border: 1px solid #475569;
`

export const DarkCheckBoxLabel = styled(CheckBoxLabel)`
  color: #f9f9f9;
`
