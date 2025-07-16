import 'cypress-downloadfile/lib/downloadFileCommand';

Cypress.Commands.add('loginViaUi', () => {
  cy.visit('/');
  cy.get('input[placeholder="Username"][name="username"]').type(
    Cypress.env('email')
  );
  cy.get('input[placeholder="Password"][name="password"]').type(
    Cypress.env('password')
  );
  cy.get('button[type="submit"]').click();
  cy.url().should('contain', 'dashboard/index');
});

Cypress.Commands.add(
  'compareUserWithTable',
  ({ userName, userRole, employeeName, status }) => {
    cy.get('div.oxd-table-body > div.oxd-table-card')
      .first()
      .within(() => {
        // Username
        cy.get('div.oxd-table-cell').eq(1).should('have.text', userName);

        // User Role
        cy.get('div.oxd-table-cell').eq(2).should('have.text', userRole);

        // Employee Name
        cy.get('div.oxd-table-cell').eq(3).should('have.text', employeeName);

        // Status
        cy.get('div.oxd-table-cell').eq(4).should('have.text', status);
      });
  }
);

Cypress.Commands.add('verifyFilterData', (alias = '@getData') => {
  cy.wait(alias).then((interception) => {
    const apiCount = interception.response.body.meta.total;

    if (apiCount === 0) {
      cy.contains('No Records Found').should('be.visible');
    } else {
      cy.get('.oxd-text--span')
        .invoke('text')
        .then((text) => {
          const uiCount = parseInt(text.match(/\d+/)[0]);
          expect(uiCount).to.equal(apiCount);
        });
    }
  });
});

Cypress.Commands.add('deleteTestUsers', () => {
  cy.request('GET', '/web/index.php/api/v2/admin/users').then((response) => {
    const users = response.body.data;
    const testUsers = users.filter(
      (u) => u.userName && u.userName.startsWith('unique_')
    );

    if (testUsers.length === 0) return;

    const ids = testUsers.map((user) => user.id);

    cy.request({
      method: 'DELETE',
      url: '/web/index.php/api/v2/admin/users',
      body: { ids },
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});