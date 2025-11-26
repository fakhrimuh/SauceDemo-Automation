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
  }

  clickCheckoutBtn() {
    this.clickElement(this.checkoutBtn());
  }
}

export default CartPage;
