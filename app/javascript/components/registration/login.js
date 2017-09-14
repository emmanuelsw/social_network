import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { blueA400, redA400 } from 'material-ui/styles/colors';

const styles = {
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
  }
};

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
            <FormsyText 
              name="email" 
              required 
              onChange={this.handleChange}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle} 
              validations="isEmail" 
              validationError="Ingresa un email válido" 
              floatingLabelText="Correo electrónico"
            />
          </div>
          <div>
            <FormsyText 
              name="password" 
              required 
              onChange={this.handleChange}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle} 
              type="password" 
              floatingLabelText="Contraseña"
            />
          </div>
          <div>
            <RaisedButton 
              style={styles.buttonTop}
              backgroundColor={redA400}
              labelColor='#ffffff'
              disabled={!this.state.canSubmit}
              type="submit"
              label="Iniciar sesión"
            />
          </div>
        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}
