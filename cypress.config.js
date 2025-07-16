const { defineConfig } = require('cypress');

require('dotenv').config();

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 6000,
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      config.env.email = process.env.CYPRESS_email;
      config.env.password = process.env.CYPRESS_password;
      return config;
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
});
