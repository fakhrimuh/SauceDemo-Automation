import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe("Login Feature Test Case", () => {
  beforeEach(() => {
    loginPage.loginSuccess();
  });

  // it("Sorting Product", () => {
  //   inventoryPage.validateSorting("lohi");
  //   inventoryPage.validateSorting("az");
  //   inventoryPage.validateSorting("hilo");
  //   inventoryPage.validateSorting("za");
  // });

  // it("add product to cart", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   inventoryPage.verifyTotalItem(1);
  //   inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
  // });

  // it("add multiple product to cart", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.clickAddtoCart("sauce-labs-bike-light");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.verifyCartBadgeValue("2");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   inventoryPage.verifyTotalItem(2);
  //   inventoryPage.verifyProductNamesListContains([
  //     "Sauce Labs Backpack",
  //     "Sauce Labs Bike Light",
  //   ]);
  // });

  // it("remove product from homepage", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   inventoryPage.verifyTotalItem(1);
  //   inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
  //   cartPage.clickContinuShoppingBtn();
  //   // Inventory Page
  //   inventoryPage.verifyTitleText("Products");
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickRemoveButton("sauce-labs-backpack");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickShoppingCart();
  //   inventoryPage.verifyTotalItem(0);
  // });

  // it("remove multiple product from homepage", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.clickAddtoCart("sauce-labs-bike-light");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.verifyCartBadgeValue("2");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   inventoryPage.verifyTotalItem(2);
  //   inventoryPage.verifyProductNamesListContains([
  //     "Sauce Labs Backpack",
  //     "Sauce Labs Bike Light",
  //   ]);
  //   cartPage.clickContinuShoppingBtn();
  //   // Inventory Page
  //   inventoryPage.verifyTitleText("Products");
  //   inventoryPage.verifyCartBadgeValue("2");
  //   inventoryPage.clickRemoveButton("sauce-labs-backpack");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickRemoveButton("sauce-labs-bike-light");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.verifyCartBadgeNotExist();
  //   inventoryPage.clickShoppingCart();
  //   inventoryPage.verifyTotalItem(0);
  // });

  // it("remove product from cart", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   inventoryPage.verifyTotalItem(1);
  //   inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
  //   inventoryPage.clickRemoveButton("sauce-labs-backpack");
  //   inventoryPage.verifyTotalItem(0);
  //   cartPage.clickContinuShoppingBtn();
  //   // Inventory Page
  //   inventoryPage.verifyTitleText("Products");
  //   inventoryPage.verifyCartBadgeNotExist();
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  // });

  // it("remove multiple product from cart", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.clickAddtoCart("sauce-labs-bike-light");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.verifyCartBadgeValue("2");
  //   inventoryPage.clickShoppingCart();
  //   inventoryPage.verifyTotalItem(2);
  //   inventoryPage.verifyProductNamesListContains([
  //     "Sauce Labs Backpack",
  //     "Sauce Labs Bike Light",
  //   ]);
  //   inventoryPage.clickRemoveButton("sauce-labs-backpack");
  //   inventoryPage.verifyTotalItem(1);
  //   inventoryPage.clickRemoveButton("sauce-labs-bike-light");
  //   inventoryPage.verifyTotalItem(0);
  //   cartPage.clickContinuShoppingBtn();
  //   inventoryPage.verifyCartBadgeNotExist();
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  // });

  // it("failed checkout because checkout information empty", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickShoppingCart();
  //   // Cart page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   cartPage.clickCheckoutBtn();
  //   // Checkout Information page
  //   checkoutPage.verifyTitleText("Checkout: Your Information");
  //   checkoutPage.clickContinueBtn();
  //   checkoutPage.verifyErrorMessage("Error: First Name is required");
  // });

  // it("failed checkout because last name and zip code checkout information empty", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   cartPage.clickCheckoutBtn();
  //   // Checkout Information Page
  //   checkoutPage.verifyTitleText("Checkout: Your Information");
  //   checkoutPage.typeFirstName("Test");
  //   checkoutPage.clickContinueBtn();
  //   checkoutPage.verifyErrorMessage("Error: Last Name is required");
  // });

  // it("failed checkout because zip code checkout information empty", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   cartPage.clickCheckoutBtn();
  //   // Checkout information Page
  //   checkoutPage.verifyTitleText("Checkout: Your Information");
  //   checkoutPage.typeFirstName("Test");
  //   checkoutPage.typeLastName("Test");
  //   checkoutPage.clickContinueBtn();
  //   checkoutPage.verifyErrorMessage("Error: Postal Code is required");
  // });

  // it("success Checkout a product", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.clickShoppingCart();
  //   // Cart Page
  //   inventoryPage.verifyTitleText("Your Cart");
  //   cartPage.clickCheckoutBtn();
  //   // Checkout your information page
  //   checkoutPage.verifyTitleText("Checkout: Your Information");
  //   checkoutPage.typeFirstName("Test");
  //   checkoutPage.typeLastName("Test");
  //   checkoutPage.typeZipCode("12345");
  //   checkoutPage.clickContinueBtn();
  //   // Checkout overview page
  //   checkoutPage.verifyTitleText("Checkout: Overview");
  //   checkoutPage.verifyItemTotalMatchesProductPrices(inventoryPage);
  //   checkoutPage.verifyTotalEqualsItemPlusTax();
  //   checkoutPage.clickFinishBtn();
  //   // Checkout Complete page
  //   checkoutPage.verifyTitleText("Checkout: Complete!");
  //   checkoutPage.clcikBackHomeBtn();
  //   // Back To Inventory Page
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  // });

  // it("success Checkout multiple product", () => {
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.clickAddtoCart("sauce-labs-backpack");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyCartBadgeVisible();
  //   inventoryPage.verifyCartBadgeValue("1");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.clickAddtoCart("sauce-labs-bike-light");
  //   inventoryPage.verifyRemoveButtonVisible("sauce-labs-bike-light");
  //   inventoryPage.verifyCartBadgeValue("2");
  //   // Cart Page
  //   inventoryPage.clickShoppingCart();
  //   inventoryPage.verifyTitleText("Your Cart");
  //   inventoryPage.verifyTotalItem(2);
  //   inventoryPage.verifyProductNamesListContains([
  //     "Sauce Labs Backpack",
  //     "Sauce Labs Bike Light",
  //   ]);
  //   cartPage.clickCheckoutBtn();
  //   // Checkout your information page
  //   checkoutPage.verifyTitleText("Checkout: Your Information");
  //   checkoutPage.typeFirstName("Test");
  //   checkoutPage.typeLastName("Test");
  //   checkoutPage.typeZipCode("12345");
  //   checkoutPage.clickContinueBtn();
  //   // Checkout overview page
  //   checkoutPage.verifyTitleText("Checkout: Overview");
  //   checkoutPage.verifyItemTotalMatchesProductPrices(inventoryPage);
  //   checkoutPage.verifyTotalEqualsItemPlusTax();
  //   checkoutPage.clickFinishBtn();
  //   // Checkout Complete page
  //   checkoutPage.verifyTitleText("Checkout: Complete!");
  //   checkoutPage.clcikBackHomeBtn();
  //   // Back To Inventory Page
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  //   inventoryPage.verifyAddToCartButtonVisible("sauce-labs-bike-light");
  // });

  it("Reset App State", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    // Cart Page
    inventoryPage.verifyTitleText("Your Cart");
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);

    inventoryPage.clickOpenSidebar();
    inventoryPage.clickAllitems();

    // Back to home
    inventoryPage.verifyTitleText("Products");
    inventoryPage.clickOpenSidebar();
    inventoryPage.clickResetState();

    inventoryPage.verifyCartBadgeNotExist();
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
  });

  it("Check State After Logout", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    // Cart Page
    inventoryPage.verifyTitleText("Your Cart");
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);

    inventoryPage.clickOpenSidebar();
    inventoryPage.clickLogout();

    // Login
    loginPage.loginSuccess();

    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    // Cart Page
    inventoryPage.verifyTitleText("Your Cart");
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
  });

  it("Check State After Logout", () => {
    inventoryPage.verifyAddToCartButtonVisible("sauce-labs-backpack");
    inventoryPage.clickAddtoCart("sauce-labs-backpack");
    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    // Cart Page
    inventoryPage.verifyTitleText("Your Cart");
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);

    inventoryPage.clickOpenSidebar();
    inventoryPage.clickLogout();

    // Login
    loginPage.loginSuccess();

    inventoryPage.verifyRemoveButtonVisible("sauce-labs-backpack");
    inventoryPage.verifyCartBadgeVisible();
    inventoryPage.verifyCartBadgeValue("1");
    inventoryPage.clickShoppingCart();
    // Cart Page
    inventoryPage.verifyTitleText("Your Cart");
    inventoryPage.verifyTotalItem(1);
    inventoryPage.verifyProductNamesListContains(["Sauce Labs Backpack"]);
  });
});
