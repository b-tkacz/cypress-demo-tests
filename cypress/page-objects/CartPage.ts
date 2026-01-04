import Page from './Page';

class CartPage extends Page {
  get checkoutButton() {
    return this.getElement('[data-test="checkout"]');
  }

  proceedToCheckout() {
    this.checkoutButton.click();
  }
}
export default new CartPage();
