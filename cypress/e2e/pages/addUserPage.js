class AddUserPage {
  userRoleDropdown() {
    return cy.get('.oxd-select-wrapper').eq(0);
  }

  userRoleAdminOption() {
    return cy.get('.oxd-select-option').contains('Admin');
  }

  userRoleEssOption() {
    return cy.get('.oxd-select-option').contains('ESS');
  }

  userStatusDropdown() {
    return cy.get('.oxd-select-wrapper').eq(1);
  }

  userStatusEnabledOption() {
    return cy.get('.oxd-select-option').contains('Enabled');
  }

  userStatusDisabledOption() {
    return cy.get('.oxd-select-option').contains('Disabled');
  }

  employeeNameInputField() {
    return cy.get('.oxd-autocomplete-wrapper');
  }

  employeeNameOption() {
    return cy.get('[role="option"]').eq(0);
  }

  usernameInputField() {
    return cy
      .contains('.oxd-input-group__label-wrapper label', 'Username')
      .parents('.oxd-input-group')
      .find('input.oxd-input');
  }

  passwordInputField() {
    return cy
      .contains('.oxd-input-group__label-wrapper label', 'Password')
      .parents('.oxd-input-group')
      .find('input.oxd-input');
  }

  confirmPasswordInputField() {
    return cy
      .contains('.oxd-input-group__label-wrapper label', 'Confirm Password')
      .parents('.oxd-input-group')
      .find('input.oxd-input');
  }

  cancelUserButton() {
    return cy.get('button[type="button"]').contains('Cancel');
  }

  saveUserButton() {
    return cy.get('button[type="submit"]').contains('Save');
  }
}

export default AddUserPage;