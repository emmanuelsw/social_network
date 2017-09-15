import React from 'react';
import { blueA400, redA400 } from 'material-ui/styles/colors';

export const styles = {
  buttonTop: {
    marginTop: '1em'
  },
  underlineStyle: {
    borderColor: blueA400
  },
  floatingLabelFocusStyle: {
    color: blueA400
  },
  leftSpace: {
    marginLeft: '1em'
	},
	red: redA400
};

export class Base extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: true,
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    };
	}
	
  handleChange = (e) => {
    let newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  enableSubmitBtn = () => {
    this.setState({
      canSubmit: true
    })
  }

  disableSubmitBtn = () => {
    this.setState({
      canSubmit: false
    })
  }

  reload() {
    window.location.href = window.location.href;
  }

}
