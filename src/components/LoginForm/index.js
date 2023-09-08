import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrMess: false,
    errorMess: '',
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMess => {
    this.setState({showErrMess: true, errorMess})
  }

  OnSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {
      username,
      password,
    }

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUserInputField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="myUser" className="label-content">
          USERNAME
        </label>
        <input
          type="text"
          id="myUser"
          value={username}
          className="user-input-filed"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassInputField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="myPass" className="label-content">
          PASSWORD
        </label>
        <input
          type="password"
          id="myPass"
          value={password}
          className="user-input-filed"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect path="/" />
    }

    const {showErrMess, errorMess} = this.state
    // console.log(userName)
    // console.log(password)
    return (
      <div className="login-page-container">
        <img
          src="https://res.cloudinary.com/dxorhiaeo/image/upload/v1694096912/Group_7399logo_krlpfq.png"
          className="movie-logo"
          alt="logo"
        />

        <div className="form-container">
          <form onSubmit={this.OnSubmitForm}>
            <h1 className="heading">Login</h1>
            <div className="input-container">{this.renderUserInputField()}</div>
            <div className="input-container">{this.renderPassInputField()}</div>
            {showErrMess && <p className="error-mess">*{errorMess}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
