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

  //Checkout Overview
  paymentInformationText() {
    return '[data-test="payment-info-value"]';
  }

  shippingInformationText() {
    return '[data-test="shipping-info-value"]';
  }

  totalItemPrice() {
    return '[data-test="subtotal-label"]';
  }

  taxPrice() {
    return '[data-test="tax-label"]';
  }

  totalPrice() {
    return '[data-test="total-label"]';
  }

  finishButton() {
    return '[data-test="finish"]';
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
}

export default CheckoutPage;
