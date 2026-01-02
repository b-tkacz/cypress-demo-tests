import InventoryPage from '../../page-objects/InventoryPage';
import CartPage from '../../page-objects/CartPage';
import CheckoutPage from '../../page-objects/CheckoutPage';
import LoginPage from '../../page-objects/LoginPage';

describe('Purchase Flow', () => {
  beforeEach(() => {
    cy.fixture('purchase-data').as('testData');
    LoginPage.open();
    cy.login();
  });

  it('should buy product successfully', function () {
    InventoryPage.addToCart('Sauce Labs Backpack');
    InventoryPage.cartLink.click();
    CartPage.proceedToCheckout();
    CheckoutPage.fillInformation(
      this.testData.user.firstName,
      this.testData.user.lastName,
      this.testData.user.postalCode
    );
    CheckoutPage.finish();
    cy.get('[data-test="complete-header"]').should(
      'have.text',
      this.testData.messages.success
    );
  });
});
