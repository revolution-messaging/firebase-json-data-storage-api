import React, { Component } from 'react'
import { login, logout } from '../helpers/auth'
import { browserHistory } from 'react-router'


export default class Login extends Component {

  handleSubmit() {
    login()
      .then((token) => {
        if (token.user.email.split('@')[1] !== "revolutionmessaging.com") {
          logout();
          this.setState({ authed: false })
          window.location.replace('/')
        }
      }).catch((error) => console.log(error.message))
  }

  render() {
    return (
      <div className="col-sm-6 col-sm-offset-3">
        <a onClick={this.handleSubmit.bind(this)} className="btn btn-block btn-social btn-google">
          <span className="fa fa-google"></span> Sign in with Google
        </a>
      </div>
    )
  }
}

