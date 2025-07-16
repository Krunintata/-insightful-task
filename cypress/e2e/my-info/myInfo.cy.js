import MyInfoPage from '../pages/myInfoPage.js';

describe('My Info functionality', () => {
  const myInfo = new MyInfoPage();

  before(() => {
    cy.loginViaUi();
  });

  it('My Info task', () => {
    // redirection to My Info page
    myInfo.myInfoSideMenu().should('be.visible');
    myInfo.myInfoSideMenu().click();
    myInfo.noRecordsFoundLabel().should('be.visible');

    // Upload an attachment with a description.
    myInfo.addAttachment().click();
    cy.wait(1000);
    myInfo.browseButton().click();
    cy.wait(1000);
    cy.fixture('/upload/myInfo.jpg', null).as('image');
    cy.get('input[type=file]').selectFile('@image', { force: true });
    myInfo.commentInputArea().type('This is only a test');
    cy.wait(1000);
    myInfo.saveAttachmentButton().click();
    cy.wait(1000);

    // Verify the file is uploaded and listed correctly.
    myInfo.tableRow().should('be.visible');

    //  Download and confirm the file.
    myInfo.downloadAttachmentButton().click();
    cy.readFile('cypress/downloads/myInfo.jpg', null, {
      timeout: 10000,
    }).then((buffer) => {
      expect(buffer.length).to.be.greaterThan(0);

      //   Delete the attachment and confirm its removal.
      myInfo.deleteAttachmentButton().click();
      myInfo.deleteAttachmentConfirmationButton().click();
      myInfo.noRecordsFoundLabel().should('be.visible');
    });
  });
});