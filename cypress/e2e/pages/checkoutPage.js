import BasePage from "./BasePage";

class CheckoutPage extends BasePage {
  // CheckOut Informtaion
  inputFirstName() {
    return '[data-test="firstName"]';
  }

  inputLastName() {
    return '[data-test="lastName"]';
  }

  inputZipCode() {
    return '[data-test="postalCode"]';
  }

  cancelButton() {
    return '[data-test="cancel"]';
  }

  continueButton() {
    return '[data-test="continue"]';
  }

  clickContinueBtn() {
    this.clickElement(this.continueButton());
    cy.stepScreenshot("click-continue");
  }

  typeFirstName(firstName) {
    this.typeText(this.inputFirstName(), firstName);
    cy.stepScreenshot("fill-first-name");
  }

  typeLastName(lastName) {
    this.typeText(this.inputLastName(), lastName);
    cy.stepScreenshot("fill-last-name");
  }

  typeZipCode(zipCode) {
    this.typeText(this.inputZipCode(), zipCode);
    cy.stepScreenshot("fill-zip-code");
  }

  //Checkout Overview
  paymentInformationText() {
    return '[data-test="payment-info-value"]';
  }

  shippingInformationText() {
    return '[data-test="shipping-info-value"]';
  }

  totalItemPrice() {
    return cy.get('[data-test="subtotal-label"]');
  }

  checkoutItemTotal() {
    return this.totalItemPrice()
      .invoke("text")
      .then((text) => parseFloat(text.replace("Item total: $", "")));
  }

  verifyItemTotalMatchesProductPrices(productPage) {
    productPage.calculateTotalPrice().then((expectedTotal) => {
      this.checkoutItemTotal().then((checkoutItemTotal) => {
        expect(checkoutItemTotal).to.equal(expectedTotal);
      });
    });
  }

  taxPrice() {
    return cy.get('[data-test="tax-label"]');
  }

  checkoutTax() {
    return this.taxPrice()
      .invoke("text")
      .then((text) => parseFloat(text.replace("Tax: $", "")));
  }

  totalPrice() {
    return cy.get('[data-test="total-label"]');
  }

  checkoutTotalPrice() {
    return this.totalPrice()
      .invoke("text")
      .then((text) => parseFloat(text.replace("Total: $", "")));
  }

  verifyTotalEqualsItemPlusTax() {
    this.checkoutItemTotal().then((itemTotal) => {
      this.checkoutTax().then((tax) => {
        this.checkoutTotalPrice().then((total) => {
          expect(itemTotal + tax).to.equal(total);
        });
      });
    });
  }

  finishButton() {
    return '[data-test="finish"]';
  }

  clickFinishBtn() {
    this.clickElement(this.finishButton());
    cy.stepScreenshot("click-finish");
  }

  //Checkout Complete
  completeCheckoutHeader() {
    return '[data-test="complete-header"]';
  }

  completeCheckoutText() {
    return '[data-test="complete-text"]';
  }

  backHomeButton() {
    return '[data-test="back-to-products"]';
  }

  clcikBackHomeBtn() {
    this.clickElement(this.backHomeButton());
    cy.stepScreenshot(`back-to-home`);
  }
}

export default CheckoutPage;
