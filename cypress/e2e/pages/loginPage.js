class LoginPage {
  usernameInputField() {
    return cy.get('input[placeholder="Username"][name="username"]');
  }

  passwordInputField() {
    return cy.get('input[placeholder="Password"][name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }

  forgotYourPasswordButton() {
    return cy.get('.orangehrm-login-forgot-header');
  }

  invalidCredentialsError() {
    return cy.get('.orangehrm-login-error');
  }
}

export default LoginPage;