class UserManagementPage {
  adminSideMenu() {
    return cy.get('.oxd-main-menu-item').contains('Admin');
  }

  userManagementTab() {
    return cy.get('.oxd-topbar-body-nav-tab-item').contains('User Management');
  }

  usersDropdownOption() {
    return cy.get('[role="menuitem"]').contains('Users');
  }

  addUserButton() {
    return cy.get('button[type="button"]').contains('Add');
  }

  usernameSearchInputField() {
    return cy.get('.oxd-input--active').eq(1);
  }

  searchUsersButton() {
    return cy.get('button[type="submit"]').contains('Search');
  }

  checkbox() {
    return cy.get('input[type="checkbox"]');
  }

  editUserButton() {
    return cy.get('.bi-pencil-fill');
  }

  deleteUserButton() {
    return cy.get('.bi-trash');
  }

  deleteUserConfirmationButton() {
    return cy.get('button[type="button"]').contains('Yes, Delete');
  }

  noRecordsFoundLabel() {
    return cy.get('.oxd-text--span').contains('No Records Found');
  }
}

export default UserManagementPage;