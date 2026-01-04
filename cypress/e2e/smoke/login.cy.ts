import LoginPage from '../../page-objects/LoginPage';

describe('Login Functionality', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('should login successfully', () => {
    cy.login();
    cy.url().should('include', 'inventory.html');
  });
});
