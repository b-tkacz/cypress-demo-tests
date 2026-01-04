/**
 * Base Page Object
 * @description Methods shared across all pages go here
 */
export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /inventory.html)
   */
  open(path) {
    return cy.visit(path);
  }

  /**
   * Wrapper for consistent element retrieval
   * @param selector CSS selector
   */
  getElement(selector: string): Cypress.Chainable {
    return cy.get(selector);
  }
}
