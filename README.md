# -insightful-task
# Cypress Automation Project

This project is a Cypress-based automation setup for testing the OrangeHRM demo application.

## Running locally

Install dependencies and setup config (Refer to Lastpass for an example):

npm install

### Dependencies

update cypress to the latest version

```

npm install cypress@latest

```

## Add Faker & Dotenv

```
npm install --save-dev @faker-js/faker
npm install dotenv

```

## Instal Download File Support Plugin

```
npm install --save-dev cypress-downloadfile
Add to `cypress/support/commands.js`:
```

import 'cypress-downloadfile/lib/downloadFileCommand';

## Install Mochawesome HTML Reports

Reporter https://www.npmjs.com/package/cypress-mochawesome-reporter

```
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

```

Reports will be generated in:
cypress/reports/mochawesome/
Reports can be visible in folder "reports" - refer to `index.html`.

## Run Tests (Headless)

```

npx cypress run

```

Run the tests to see in browser with the following command:

```
npx cypress open

```