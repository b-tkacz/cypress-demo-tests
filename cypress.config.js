const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    baseUrl: 'https://www.saucedemo.com',
  },
  env: {
    userName: 'standard_user',
    password: 'secret_sauce',
  },
});
