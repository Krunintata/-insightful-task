class RecruitmentPage {
  recruitmentSideMenu() {
    return cy.get('.oxd-main-menu-item').contains('Recruitment');
  }

  vacanciesOption() {
    return cy.get('.oxd-topbar-body-nav-tab-item').contains('Vacancies');
  }

  vacancyDropdown() {
    return cy.get('.oxd-select-wrapper').eq(1);
  }

  vacancyOption() {
    return cy.get('.oxd-select-option').contains('Senior QA Lead');
  }

  hiringManagerDropdown() {
    return cy.get('.oxd-select-wrapper').eq(2);
  }

  hiringManagerOption() {
    return cy.get('.oxd-select-option').contains('Rahul Patil');
  }

  statusDropdown() {
    return cy.get('.oxd-select-wrapper').eq(3);
  }

  statusActiveOption() {
    return cy.get('.oxd-select-option').contains('Active');
  }

  statusClosedOption() {
    return cy.get('.oxd-select-option').contains('Closed');
  }

  searchButton() {
    return cy.get('button[type="submit"]').contains('Search');
  }

  resetButton() {
    return cy.get('button[type="button"]').contains('Reset');
  }
}

export default RecruitmentPage;