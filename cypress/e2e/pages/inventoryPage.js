import BasePage from "./BasePage";

class InventoryPage extends BasePage {
  shoppingCart() {
    return '[data-test="shopping-cart-link"]';
  }

  clickShoppingCart() {
    this.clickElement(this.shoppingCart());
    cy.stepScreenshot("Cart-Page");
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

  calculateTotalPrice() {
    return this.getAllProducts().then((products) => {
      return products.reduce((acc, p) => acc + p.price, 0);
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
          cy.stepScreenshot("sorting-az");
          break;

        case "za":
          expected.sort((a, b) => b.name.localeCompare(a.name));
          cy.stepScreenshot("sorting-za");
          break;

        case "lohi":
          expected.sort((a, b) => a.price - b.price);
          cy.stepScreenshot("sorting-lohi");
          break;

        case "hilo":
          expected.sort((a, b) => b.price - a.price);
          cy.stepScreenshot("sorting-hilo");
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
    cy.stepScreenshot(`add-to-cart-(${itemName})`);
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
    cy.stepScreenshot(`remove-(${itemName})`);
  }

  // Sidebar
  openSidebarBtn() {
    return "#react-burger-menu-btn";
  }

  clickOpenSidebar() {
    this.clickElement(this.openSidebarBtn());
  }

  closeSidebarBtn() {
    return '[data-test="close-menu"]';
  }

  clickCloseSidebar() {
    this.clickElement(this.closeSidebarBtn());
  }

  allItemsSidebarBtn() {
    return '[data-test="inventory-sidebar-link"]';
  }

  clickAllitems() {
    this.clickElement(this.allItemsSidebarBtn());
    cy.stepScreenshot("click all items");
  }

  aboutSidebarBtn() {
    return '[data-test="about-sidebar-link"]';
  }

  clickAbout() {
    this.clickElement(this.aboutSidebarBtn());
    cy.stepScreenshot("click about");
  }

  logoutSidebarBtn() {
    return '[data-test="logout-sidebar-link"]';
  }

  clickLogout() {
    this.clickElement(this.logoutSidebarBtn());
    cy.stepScreenshot("click logout");
  }

  resetAppStateSidebarBtn() {
    return '[data-test="reset-sidebar-link"]';
  }

  clickResetState() {
    this.clickElement(this.resetAppStateSidebarBtn());
    cy.stepScreenshot("click reset state");
  }
}

export default InventoryPage;
