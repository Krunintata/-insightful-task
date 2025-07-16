class MyInfoPage {
  myInfoSideMenu() {
    return cy.get('.oxd-main-menu-item').contains('My Info');
  }

  addAttachment() {
    return cy.get('button[type="button"]').contains('Add');
  }

  browseButton() {
    return cy.get('.oxd-file-button');
  }

  commentInputArea() {
    return cy.get('.oxd-textarea');
  }

  saveAttachmentButton() {
    return cy.get(
      '.orangehrm-attachment > .orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button--secondary'
    );
  }

  downloadAttachmentButton() {
    return cy.get('.bi-download');
  }

  noRecordsFoundLabel() {
    return cy.get('.oxd-text--span').contains('No Records Found');
  }

  deleteAttachmentButton() {
    return cy.get('.bi-trash');
  }

  deleteAttachmentConfirmationButton() {
    return cy.get('button[type="button"]').contains('Yes, Delete');
  }

  tableRow() {
    return cy.get('.oxd-table-body');
  }
}

export default MyInfoPage;