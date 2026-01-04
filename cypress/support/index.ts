// cypress/support/index.ts
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to login via UI
     * @example cy.login('user', 'pass')
     */
    login(username?: string, password?: string): Chainable<void>;
  }
}
