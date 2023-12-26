import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import AuthService from '../services/authService';

class AuthComponent extends Component {
  responseGoogle = (response) => {
    AuthService.login(response.tokenId)
      .then(res => {
        if (res.status === 200) {
          // Handle successful login here
        } else {
          // Handle unsuccessful login here
        }
      })
      .catch(err => {
        // Handle error here
      });
  }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="YOUR_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}

export default AuthComponent;