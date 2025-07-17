# -insightful-task
# Cypress Automation Project

This project is a Cypress-based automation setup for testing the OrangeHRM demo application.

## Prerequisites

1. **Install [Node.js](https://nodejs.org/)**

---

## Initial Setup

1. **Create a folder on your computer**
2. **Open the folder in VS Code**
3. **Open terminal in VS Code and run:**

   ```bash
   npm init -y
   npm install cypress
   ```

---

## Add Faker & Dotenv

```bash
npm install --save-dev @faker-js/faker
npm install dotenv
```

---

## Instal Download File Support Plugin

1. Install `cypress-downloadfile`:

```bash
npm install --save-dev cypress-downloadfile
```

2. Add to `cypress/support/commands.js`:

```js
import 'cypress-downloadfile/lib/downloadFileCommand';
```

---

## Install Mochawesome HTML Reports

1. Install dependencies:

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

2. Update `cypress.config.js`:

```js
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
  },
});
```

---

## Run Tests (Headless)

```bash
npx cypress run
```

Reports will be generated in:

```
cypress/reports/mochawesome/
```

Reports can be visible in folder "reports" - refer to `index.html`.