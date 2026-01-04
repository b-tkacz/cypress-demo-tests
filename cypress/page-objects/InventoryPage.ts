import Page from './Page';

class InventoryPage extends Page {
  get inventoryItems() {
    return this.getElement('.inventory_item');
  }
  get cartLink() {
    return this.getElement('.shopping_cart_link');
  }

  addToCart(productName) {
    this.inventoryItems
      .contains(productName)
      .parents('.inventory_item')
      .find('button')
      .click();
  }
}

export default new InventoryPage();
