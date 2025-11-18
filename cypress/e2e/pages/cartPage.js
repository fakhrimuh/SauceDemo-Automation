import BasePage from "./BasePage";

class CartPage extends BasePage {
  cartList() {
    return cy.getByTestId("cart-list");
  }

  inventoryItem() {
    return cy.getByTestId("inventory-item");
  }

  inventoryItemName() {
    return cy.getByTestId("inventory-item-name");
  }

  inventoryItemDesc() {
    return cy.getByTestId("inventory-item-desc");
  }

  inventoryItemPrice() {
    return cy.getByTestId("inventory-item-price");
  }

  addToCartButton(itemName) {
    return this.getByTestId(`add-to-cart-${itemName}`);
  }

  removeButton(itemName) {
    return this.getByTestId(`remove-${itemName}`);
  }

  continueShoppingButton() {
    return cy.getByTestId("continue-shopping");
  }

  checkoutBtn() {
    return cy.getByTestId("checkout");
  }
}

export default CartPage;
