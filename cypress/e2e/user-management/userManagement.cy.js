import UserManagementPage from '../pages/userManagementPage.js';
import AddUserPage from '../pages/addUserPage.js';
import { faker } from '@faker-js/faker';

describe('User Management functionality', () => {
  const userManagement = new UserManagementPage();
  const addUser = new AddUserPage();
  const randomString =
    'unique_' + faker.string.alpha({ length: { min: 5, max: 10 } });

  beforeEach(() => {
    cy.loginViaUi();
    cy.deleteTestUsers();
  });

  afterEach(() => {
    cy.deleteTestUsers();
  });

  it('User Management task', () => {
    // redirection to Add User page
    userManagement.adminSideMenu().should('be.visible');
    userManagement.adminSideMenu().click();
    userManagement.userManagementTab().click();
    userManagement.usersDropdownOption().click();
    userManagement.addUserButton().click();

    // Add a new user with a random, unique username
    addUser.userRoleDropdown().click();
    addUser.userRoleAdminOption().click();
    addUser.userStatusDropdown().click();
    addUser.userStatusEnabledOption().click();
    addUser.employeeNameInputField().type('test');
    cy.wait(2000);
    addUser.employeeNameOption({ timeout: 5000 }).should('be.visible');
    addUser.employeeNameOption({ timeout: 5000 }).click();

    cy.intercept({
      method: 'POST',
      url: '/web/index.php/api/v2/admin/users',
    }).as('createUser');
    addUser.usernameInputField().type(randomString);
    addUser.passwordInputField().type(Cypress.env('password'));
    addUser.confirmPasswordInputField().type(Cypress.env('password'));
    addUser.saveUserButton().click();
    cy.wait('@createUser').then((interception) => {
      const data = interception.response.body.data;
      const userName = data.userName;
      const userRole = data.userRole.displayName;
      const employeeName = `${data.employee.firstName} ${data.employee.lastName}`;
      const status = data.status ? 'Enabled' : 'Disabled';

      cy.wrap(userName).as('userName');
      cy.wrap(userRole).as('userRole');
      cy.wrap(employeeName).as('employeeName');
      cy.wrap(status).as('status');

      cy.url().should('contain', 'admin/viewSystemUsers');
      cy.get('@userName').then((userName) => {
        userManagement.usernameSearchInputField().type(userName);
        userManagement.searchUsersButton().click();
      });
      // Verify the user appears in the list with correct details.
      cy.compareUserWithTable({
        userName,
        userRole,
        employeeName,
        status,
      });
    });

    // Edit the newly created user (e.g., update role or status).
    userManagement.editUserButton().click();
    addUser.userRoleDropdown().click();
    addUser.userRoleEssOption().click();
    addUser.saveUserButton().click();
    cy.url().should('contain', 'admin/viewSystemUsers');

    // Delete the user and confirm it no longer appears in the list
    cy.get('@userName').then((userName) => {
      userManagement.usernameSearchInputField().type(userName);
      userManagement.searchUsersButton().click();
      userManagement.deleteUserButton().click();
      userManagement.deleteUserConfirmationButton().click();
      cy.wait(2000);
      userManagement.searchUsersButton().click();
      userManagement.noRecordsFoundLabel().should('be.visible');
    });
  });
});