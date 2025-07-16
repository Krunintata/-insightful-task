import loginPage from '../pages/loginPage.js';
import { faker } from '@faker-js/faker';

describe('Login functionality', () => {
  const login = new loginPage();
  const fakeEmailAddress = faker.internet.email({
    provider: 'example.fakerjs.dev',
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Login page', () => {
    login.loginButton().should('be.visible');
    login.loginButton().contains('Login');
  });

  it('Fforgot your password redirection', () => {
    login.forgotYourPasswordButton().should('be.visible');
    login.forgotYourPasswordButton().contains('Forgot your password?');
    login.forgotYourPasswordButton().click();
    cy.url().should(
      'eq',
      'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode'
    );
  });

  it('Required fields', () => {
    login.loginButton().click();
    login.usernameInputField().should('have.class', 'oxd-input--error');
    login.passwordInputField().should('have.class', 'oxd-input--error');
  });

  it('Check invalid credentials message', () => {
    login.usernameInputField().type(fakeEmailAddress);
    login.passwordInputField().type('invalid');
    login.loginButton().click();
    login.invalidCredentialsError().should('be.visible');
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials');
  });

  it('Successful login', () => {
    login.usernameInputField().type(Cypress.env('email'));
    login.passwordInputField().type(Cypress.env('password'));
    login.loginButton().click();
    cy.url().should('contain', 'dashboard/index');
  });
});