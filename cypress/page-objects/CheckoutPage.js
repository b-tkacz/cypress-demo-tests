import Page from './Page';

class CheckoutPage extends Page {
  get firstNameInput() {
    return this.getElement('[data-test="firstName"]');
  }
  get lastNameInput() {
    return this.getElement('[data-test="lastName"]');
  }
  get postalCodeInput() {
    return this.getElement('[data-test="postalCode"]');
  }
  get continueButton() {
    return this.getElement('[data-test="continue"]');
  }
  get finishButton() {
    return this.getElement('[data-test="finish"]');
  }

  fillInformation(firstName, lastName, zip) {
    this.firstNameInput.type(firstName);
    this.lastNameInput.type(lastName);
    this.postalCodeInput.type(zip);
    this.continueButton.click();
  }
  finish() {
    this.finishButton.click();
  }
}

export default new CheckoutPage();
