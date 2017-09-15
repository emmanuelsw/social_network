import React from 'react';
import WebpackerReact from 'webpacker-react';
import { Login } from 'components/auth/login';

class Auth extends React.Component {
  render() {
    return <Login/>;
  }
}

WebpackerReact.setup({Auth});
