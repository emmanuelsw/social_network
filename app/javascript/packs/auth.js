import React from 'react';
import WebpackerReact from 'webpacker-react';
import { Login } from 'components/auth/login';
import { SignUp } from 'components/auth/signup';

class Auth extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      showLogin: true
    }
  }

  toggle = (e) => {
    e.preventDefault();
    this.setState({
      showLogin: !this.state.showLogin
    })
  }

  render() {
    return(
      <div>
        { this.state.showLogin ? <Login toggle={this.toggle} /> : <SignUp toggle={this.toggle} /> }
      </div>
    );
  }

}

WebpackerReact.setup({Auth});
