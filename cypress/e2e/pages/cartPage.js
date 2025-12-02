import BasePage from "./BasePage";

class CartPage extends BasePage {
  cartList() {
    return '[data-test="shopping-cart-list"]';
  }

  continueShoppingButton() {
    return '[data-test="continue-shopping"]';
  }

  checkoutBtn() {
    return '[data-test="checkout"]';
  }

  clickContinuShoppingBtn() {
    this.clickElement(this.continueShoppingButton());
    cy.stepScreenshot("click-continue-shopping");
  }

  clickCheckoutBtn() {
    this.clickElement(this.checkoutBtn());
    cy.stepScreenshot("click-checkout");
  }
}

export default CartPage;
