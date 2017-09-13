import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';

export class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      canSubmit: true,
      email: '',
      password: '',
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

  render() {
    return(
      <MuiThemeProvider>
        <Formsy.Form onValid={this.enableSubmitBtn} onInvalid={this.disableSubmitBtn}>
          <div>
            <FormsyText name="email" required onChange={this.handleChange} validations="isEmail" validationError="Ingresa un email válido" floatingLabelText="Correo electrónico"/>
          </div>
          <div>
            <FormsyText name="password" required onChange={this.handleChange} type="password" floatingLabelText="Contraseña"/>
          </div>
          <div>
            <RaisedButton disabled={!this.state.canSubmit} type="submit" label="Iniciar sesión" />
          </div>
        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}
