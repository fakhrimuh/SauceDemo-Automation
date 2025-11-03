import BasePage from "./BasePage";

class InventoryPage extends BasePage {
  shoppingCart() {
    return cy.getByTestId("shopping-cart-link");
  }

  shoppingCartBadge() {
    return cy.getByTestId("shopping-cart-badge");
  }

  sortingButton() {
    return cy.getByTestId("product-sort-container");
  }

  pageLogo() {
    return cy.get("#app_logo");
  }

  pageTitle() {
    return cy.getByTestId("title");
  }

  inventoryList() {
    return cy.getByTestId("inventory-list");
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

  // Method untuk aksi di halaman
  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.loginButton().click();
  }
}

export default InventoryPage;
