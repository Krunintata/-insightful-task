import RecruitmentPage from '../pages/recruitmentPage.js';

describe('Recruitment - Search functionality', () => {
  const recruitment = new RecruitmentPage();

  beforeEach(() => {
    cy.loginViaUi();
  });

  it('Recruitment task - Filter Vacancy', () => {
    recruitment.recruitmentSideMenu().click();
    recruitment.vacanciesOption().click();
    cy.wait(2000);
    cy.intercept('GET', '**/api/v2/recruitment/vacancies**').as('getData');
    recruitment.vacancyDropdown().click();
    cy.wait(1000);
    recruitment.vacancyOption().click();
    cy.wait(1000);
    recruitment.searchButton().click();
    cy.verifyFilterData();
    recruitment.resetButton().click();
  });

  it('Recruitment task - filter Hiring Manager', () => {
    recruitment.recruitmentSideMenu().click();
    recruitment.vacanciesOption().click();
    cy.wait(2000);
    cy.intercept('GET', '**/api/v2/recruitment/vacancies**').as('getData');
    recruitment.hiringManagerDropdown().click();
    cy.wait(1000);
    recruitment.hiringManagerOption().click();
    cy.wait(1000);
    recruitment.searchButton().click();
    cy.wait(1000);
    cy.verifyFilterData();
    recruitment.resetButton().click();
  });

  it('Recruitment task - filter status', () => {
    recruitment.recruitmentSideMenu().click();
    recruitment.vacanciesOption().click();
    cy.wait(2000);
    cy.intercept('GET', '**/api/v2/recruitment/vacancies**').as('getData');
    recruitment.statusDropdown().click();
    cy.wait(1000);
    recruitment.statusActiveOption().click();
    cy.wait(1000);
    recruitment.searchButton().click();
    cy.verifyFilterData();
    recruitment.resetButton().click();
  });

  it('Recruitment task - filter Vacancy & Closed Status', () => {
    recruitment.recruitmentSideMenu().click();
    recruitment.vacanciesOption().click();
    cy.wait(2000);
    cy.intercept('GET', '**/api/v2/recruitment/vacancies**').as('getData');
    recruitment.vacancyDropdown().click();
    cy.wait(1000);
    recruitment.vacancyOption().click();
    cy.wait(1000);
    recruitment.statusDropdown().click();
    cy.wait(1000);
    recruitment.statusActiveOption().click();
    cy.wait(1000);
    recruitment.searchButton().click();
    cy.verifyFilterData();
    recruitment.resetButton().click();
  });
});