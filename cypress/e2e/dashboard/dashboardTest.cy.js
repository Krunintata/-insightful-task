import DashboardPage from '../pages/dashboardPage.js';

describe('Dashboard functionality', () => {
  const dashboard = new DashboardPage();

  before(() => {
    cy.loginViaUi();
  });

  it('Dashboard task', () => {
    // redirection to Dashboard page

    dashboard.dashboardSideMenu().click();

    // Identify and validate at least two chart widgets

    dashboard.chartWidget().should('have.length.greaterThan', 1);

    // Include negative assertions (e.g., values or labels that should not be visible)

    dashboard.unassignedChartOption().click();
    dashboard
      .unassignedChartOption()
      .should('have.attr', 'style')
      .and('include', 'line-through');
  });
});