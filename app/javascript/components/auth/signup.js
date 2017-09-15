import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Base, styles } from './base';
import reqwest from 'reqwest';

export class SignUp extends Base {

  submit = () => {
    reqwest({
      url: '/users',
      method: 'POST',
      data: {
        user: {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.passwordConfirmation
        }
      }
    }).then(data => {
      console.log(data);
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
            <FormsyText 
              name="passwordConfirmation" 
              required 
              onChange={this.handleChange}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              underlineFocusStyle={styles.underlineStyle} 
              type="password" 
              floatingLabelText="Confirmar Contraseña"
            />
          </div>

          <div>
            <RaisedButton 
              style={styles.buttonTop}
              backgroundColor={styles.red}
              labelColor='#ffffff'
              disabled={!this.state.canSubmit}
              type="submit"
              label="Registrarse"
            />
						<a href="#" onClick={this.props.toggle} style={styles.leftSpace}>Ya tengo cuenta</a>
          </div>

        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}
