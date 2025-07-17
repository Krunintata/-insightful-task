class DashboardPage {
  dashboardSideMenu() {
    return cy.get('.oxd-main-menu-item').contains('Dashboard');
  }

  chartWidget() {
    return cy.get('.emp-distrib-chart');
  }

  unassignedChartOption() {
    return cy.get('.oxd-text--span').contains('Unassigned').last();
  }
}

export default DashboardPage;