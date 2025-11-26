import BasePage from "./BasePage";

class InventoryPage extends BasePage {
  shoppingCart() {
    return '[data-test="shopping-cart-link"]';
  }

  clickShoppingCart() {
    this.clickElement(this.shoppingCart());
  }

  shoppingCartBadge() {
    return '[data-test="shopping-cart-badge"]';
  }

  verifyCartBadgeVisible() {
    this.verifyVisible(this.shoppingCartBadge());
  }

  verifyCartBadgeNotExist() {
    this.verifyNotExist(this.shoppingCartBadge());
  }

  verifyCartBadgeValue(expected) {
    this.verifyText(this.shoppingCartBadge(), expected);
  }

  sortingButton() {
    return '[data-test="product-sort-container"]';
  }

  selectSort(value) {
    this.getElement(this.sortingButton()).select(value);
  }

  inventoryList() {
    return '[data-test="inventory-list"]';
  }

  inventoryItem() {
    return '[data-test="inventory-item"]';
  }

  verifyTotalItem(expected) {
    this.verifyLength(this.inventoryItem(), expected);
  }

  inventoryItemName() {
    return '[data-test="inventory-item-name"]';
  }

  inventoryItemDesc() {
    return '[data-test="inventory-item-desc"]';
  }

  inventoryItemPrice() {
    return '[data-test="inventory-item-price"]';
  }

  getAllProducts() {
    return cy.get(this.inventoryItem()).then(($items) => {
      const products = [...$items].map((item) => {
        return {
          name: item.querySelector(this.inventoryItemName()).innerText.trim(),
          desc: item.querySelector(this.inventoryItemDesc()).innerText.trim(),
          price: parseFloat(
            item
              .querySelector(this.inventoryItemPrice())
              .innerText.replace("$", "")
          ),
        };
      });

      return products;
    });
  }

  verifyProductNamesListContains(expectedNames) {
    this.getAllProducts().then((products) => {
      const names = products.map((p) => p.name);

      expectedNames.forEach((expectedName) => {
        expect(names).to.include(expectedName);
      });
    });
  }

  validateSorting(type) {
    this.selectSort(type);

    this.getAllProducts().then((products) => {
      let expected = [...products];

      switch (type) {
        case "az":
          expected.sort((a, b) => a.name.localeCompare(b.name));
          break;

        case "za":
          expected.sort((a, b) => b.name.localeCompare(a.name));
          break;

        case "lohi":
          expected.sort((a, b) => a.price - b.price);
          break;

        case "hilo":
          expected.sort((a, b) => b.price - a.price);
          break;

        default:
          throw new Error(`Unknown sorting type: ${type}`);
      }

      expect(products).to.deep.equal(expected);
    });
  }

  pageLogo() {
    return cy.get("#app_logo");
  }

  addToCartButton(itemName) {
    return `[data-test="add-to-cart-${itemName}"]`;
  }

  verifyAddToCartButtonVisible(itemName) {
    this.verifyVisible(this.addToCartButton(itemName));
  }

  verifyAddToCartButtonNotExist(itemName) {
    this.verifyNotExist(this.addToCartButton(itemName));
  }

  clickAddtoCart(itemName) {
    this.clickElement(this.addToCartButton(itemName));
  }

  removeButton(itemName) {
    return `[data-test="remove-${itemName}"]`;
  }

  verifyRemoveButtonVisible(itemName) {
    this.verifyVisible(this.removeButton(itemName));
  }

  verifyRemoveButtonNotExist(itemName) {
    this.verifyNotExist(this.removeButton(itemName));
  }

  clickRemoveButton(itemName) {
    this.clickElement(this.removeButton(itemName));
  }
}

export default InventoryPage;
