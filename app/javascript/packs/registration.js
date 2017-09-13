import React from 'react';
import WebpackerReact from 'webpacker-react';
import { Login } from 'components/registration/login';

class Registration extends React.Component {
  render() {
    return <Login/>;
  }
}

WebpackerReact.setup({Registration});
