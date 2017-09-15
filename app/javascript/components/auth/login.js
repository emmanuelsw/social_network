import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Base, styles } from './base';
import reqwest from 'reqwest';

export class Login extends Base {

  submit = () => {
    reqwest({
      url: '/users/sign_in.json',
      method: 'POST',
      data: {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      },
      headers: {
        'X-CSRF-Token': window.SocialNetwork.token
      }
    }).then(data => {
      this.reload();
    }).catch(err => console.log(err));
  }

  render() {
    return(
      <MuiThemeProvider>
        <Formsy.Form onValid={this.enableSubmitBtn} onInvalid={this.disableSubmitBtn} onValidSubmit={this.submit}>

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
              backgroundColor={styles.red}
              labelColor='#ffffff'
              disabled={!this.state.canSubmit}
              type="submit"
              label="Iniciar sesión"
            />
            <a href="#" onClick={this.props.toggle} style={styles.leftSpace}>Crear cuenta</a>
          </div>

        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}
