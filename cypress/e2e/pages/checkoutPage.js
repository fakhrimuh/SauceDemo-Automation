import BasePage from "./BasePage";

class CheckoutPage extends BasePage {
  // CheckOut Informtaion
  inputFirstName() {
    return cy.getByTestId("firstName");
  }

  inputLastName() {
    return cy.getByTestId("lastName");
  }

  inputZipCode() {
    return cy, this.getByTestId("postalCode");
  }

  cancelButton() {
    return cy.getByTestId("cancel");
  }

  continueButton() {
    return cy.getByTestId("continue");
  }

  //Checkout Overview
  paymentInformationText() {
    return cy.getByTestId("payment-info-value");
  }

  shippingInformationText() {
    return cy.getByTestId("shipping-info-value");
  }

  totalItemPrice() {
    return cy.getByTestId("subtotal-label");
  }

  taxPrice() {
    return cy.getByTestId("tax-label");
  }

  totalPrice() {
    return cy.getByTestId("total-label");
  }

  finishButton() {
    return cy.getByTestId("finish");
  }

  //Checkout Complete

  completeCheckoutHeader() {
    return cy.getByTestId("complete-header");
  }

  completeCheckoutText() {
    return cy.getByTestId("complete-text");
  }

  backHomeButton() {
    return cy.getByTestId("back-to-products");
  }
}

export default CheckoutPage;
