import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { Base, styles } from './base';

export class Login extends Base {

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
              backgroundColor={styles.red}
              labelColor='#ffffff'
              disabled={!this.state.canSubmit}
              type="submit"
              label="Iniciar sesión"
            />
            <a href="#" style={styles.leftSpace}>Crear cuenta</a>
          </div>

        </Formsy.Form>
      </MuiThemeProvider>
    );
  }
}