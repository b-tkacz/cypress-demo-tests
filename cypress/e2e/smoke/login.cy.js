import LoginPage from '../../page-objects/LoginPage';

describe('Login Functionality', () => {
  beforeEach(() => {
    LoginPage.open();
  });

  it('should login successfully', () => {
    cy.login('standard_user', 'secret_sauce');
    cy.url().should('include', 'inventory.html');
  });
});
