import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import CartPage from "../pages/cartPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

describe("Login Feature Test Case", () => {
  beforeEach(() => {
    loginPage.loginSuccess();
  });

  it("Sorting Product", () => {
    inventoryPage.validateSorting("lohi");
    inventoryPage.validateSorting("az");
    inventoryPage.validateSorting("hilo");
    inventoryPage.validateSorting("za");
  });

  it("add product to cart", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
  });

  it("add multiple product to cart", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
    inventoryPage.clickAddtoCart("sauce-labs-bike-light");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-bike-light");
    inventoryPage.verifyCartBadgeValue("2");
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(2);
    inventoryPage.verifyProductNamesListContains([
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
    ]);
  });

  it("remove product from homepage", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
    cartPage.clickContinuShoppingBtn();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickRemoveButton("sauce-labs-backpack");
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(0);
  });

  it("remove multiple product from homepage", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
    inventoryPage.clickAddtoCart("sauce-labs-bike-light");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-bike-light");
    inventoryPage.verifyCartBadgeValue("2");
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(2);
    inventoryPage.verifyProductNamesListContains([
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
    ]);
    cartPage.clickContinuShoppingBtn();
    inventoryPage.verifyCartBadgeValue("2");
    inventoryPage.clickRemoveButton("sauce-labs-backpack");
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickRemoveButton("sauce-labs-bike-light");
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
    inventoryPage.verifyCartBadgeNotExist();
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(0);
  });

  it("remove product from cart", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
    inventoryPage.clickRemoveButton("sauce-labs-backpack");
    inventoryPage.verifyTotalItem(0);
    cartPage.clickContinuShoppingBtn();
    inventoryPage.verifyCartBadgeNotExist();
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  });

  it("remove multiple product from cart", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
    inventoryPage.clickAddtoCart("sauce-labs-bike-light");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-bike-light");
    inventoryPage.verifyCartBadgeValue("2");
    inventoryPage.clickShoppingCart();
    inventoryPage.verifyTotalItem(2);
    inventoryPage.verifyProductNamesListContains([
      "Sauce Labs Backpack",
      "Sauce Labs Bike Light",
    ]);
    inventoryPage.clickRemoveButton("sauce-labs-backpack");
    inventoryPage.verifyTotalItem(1);
    inventoryPage.clickRemoveButton("sauce-labs-bike-light");
    inventoryPage.verifyTotalItem(0);
    cartPage.clickContinuShoppingBtn();
    inventoryPage.verifyCartBadgeNotExist();
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  });
});
