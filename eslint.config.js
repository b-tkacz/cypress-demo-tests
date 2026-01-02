const cypress = require('eslint-plugin-cypress/flat');

module.exports = [
  // Load the recommended Cypress configuration
  cypress.configs.recommended,
  {
    // You can customize rules here if needed
    rules: {
      'cypress/no-unnecessary-waiting': 'warn',
    },
  },
];
