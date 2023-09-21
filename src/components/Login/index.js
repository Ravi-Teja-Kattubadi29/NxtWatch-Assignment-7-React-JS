import {Component} from 'react'
import Cookies from 'js-cookie'

import {
  AppContainer,
  LoginContainer,
  LoginLogo,
  FormContainer,
  Label,
  Input,
  CheckBoxInput,
  CheckBoxLabel,
  CheckBoxContainer,
  LoginButton,
  DarkLoginContainer,
  DarkAppContainer,
  DarkLabel,
  DarkInput,
  DarkCheckBoxLabel,
  SubmitError,
} from './styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    checked: false,
  }

  onSubmitFailure = errorMsg => {
    let capitalizedErrorMsg
    if (errorMsg === "username and password didn't match") {
      capitalizedErrorMsg = "Username and Password didn't match"
    } else if (errorMsg === 'Username or password is invalid') {
      capitalizedErrorMsg = 'Username or Password is invalid'
    } else {
      capitalizedErrorMsg = errorMsg
    }
    this.setState({showSubmitError: true, errorMsg: capitalizedErrorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    const apiData = await response.json()
    // console.log(apiData)
    if (response.ok === true) {
      this.onSubmitSuccess(apiData.jwt_token)
    }
    this.onSubmitFailure(apiData.error_msg)
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePassword = () => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  renderLightTheme = () => {
    const {username, password, showSubmitError, errorMsg, checked} = this.state
    return (
      <AppContainer>
        <LoginContainer>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.submitForm}>
            <Label htmlFor="username"> USERNAME </Label>
            <Input
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.onChangeUserName}
              value={username}
            />

            <Label htmlFor="password"> PASSWORD </Label>
            {checked ? (
              <Input
                type="text"
                id="password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
            ) : (
              <Input
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
            )}

            <CheckBoxContainer>
              <CheckBoxInput
                type="checkbox"
                id="checkbox"
                onClick={this.togglePassword}
              />
              <CheckBoxLabel htmlFor="checkbox"> Show Password </CheckBoxLabel>
            </CheckBoxContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showSubmitError ? <SubmitError>*{errorMsg}</SubmitError> : null}
          </FormContainer>
        </LoginContainer>
      </AppContainer>
    )
  }

  renderDarkTheme = () => {
    const {username, password, showSubmitError, errorMsg, checked} = this.state

    return (
      <DarkAppContainer>
        <DarkLoginContainer>
          <LoginLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
            alt="website logo"
          />
          <FormContainer onSubmit={this.submitForm}>
            <DarkLabel htmlFor="username"> USERNAME </DarkLabel>
            <DarkInput
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.onChangeUserName}
              value={username}
            />

            <DarkLabel htmlFor="password"> PASSWORD </DarkLabel>
            {checked ? (
              <DarkInput
                type="text"
                id="password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
            ) : (
              <DarkInput
                type="password"
                id="password"
                placeholder="Password"
                onChange={this.onChangePassword}
                value={password}
              />
            )}

            <CheckBoxContainer>
              <CheckBoxInput
                type="checkbox"
                id="checkbox"
                onClick={this.togglePassword}
              />
              <DarkCheckBoxLabel htmlFor="checkbox">
                Show Password
              </DarkCheckBoxLabel>
            </CheckBoxContainer>
            <LoginButton type="submit"> Login </LoginButton>
            {showSubmitError ? <SubmitError>*{errorMsg}</SubmitError> : null}
          </FormContainer>
        </DarkLoginContainer>
      </DarkAppContainer>
    )
  }

  renderHome = () => {
    const {history} = this.props
    history.replace('/')
  }

  renderLogin = () => {
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      const {history} = this.props
      history.replace('/')
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return isDarkTheme ? this.renderDarkTheme() : this.renderLightTheme()
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    // console.log(this.props)
    return this.renderLogin()
  }
}

export default Login
