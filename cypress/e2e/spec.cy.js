import login from "../page-objects/login";
// const login = new login();


describe('template spec', () => {
  it('passes', () => {
    const username = Cypress.config('userName');
    const password = Cypress.config('password');
    login.login(username, password);
    cy.url().should('include', '/inventory.html');
    // cy.visit('/')
    // cy.get('[data-test="username"]').click();
    // cy.get('[data-test="username"]').type('standard_user');
    // cy.get('[data-test="password"]').click();
    // cy.get('[data-test="password"]').type('secret_sauce');
  })
})