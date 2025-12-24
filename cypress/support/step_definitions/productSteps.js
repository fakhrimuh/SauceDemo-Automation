import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/loginPage";
import InventoryPage from "../../e2e/pages/inventoryPage";
import CartPage from "../../e2e/pages/cartPage";
import CheckoutPage from "../../e2e/pages/checkoutPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

Given("user already logged in", () => {
  loginPage.loginSuccess();
  inventoryPage.verifyTitleText("Products");
});

Given("user is on inventory page", () => {
  inventoryPage.verifyTitleText("Products");
});

When(
  "user sorts products by {string} should be sorted correctly",
  (sortType) => {
    inventoryPage.validateSorting(sortType);
  }
);

When("user add product {string} to cart", (productId) => {
  inventoryPage.verifyAddToCartButtonVisible(productId);
  inventoryPage.clickAddtoCart(productId);
  inventoryPage.verifyRemoveButtonVisible(productId);
});

When("user add products to cart:", (dataTable) => {
  dataTable.raw().forEach(([productId]) => {
    inventoryPage.clickAddtoCart(productId);
  });
});

Then("cart badge should show {string}", (count) => {
  inventoryPage.verifyCartBadgeValue(count);
});

Then("cart should contain products:", (dataTable) => {
  inventoryPage.clickShoppingCart();
  inventoryPage.verifyProductNamesListContains(dataTable.raw().flat());
});

When("user remove product {string} from inventory", (productId) => {
  inventoryPage.clickRemoveButton(productId);
});

When("user remove product {string} from cart", (productId) => {
  inventoryPage.clickShoppingCart();
  inventoryPage.clickRemoveButton(productId);
  inventoryPage.verifyCartBadgeNotExist();
});

Then("cart should be empty", () => {
  inventoryPage.verifyTotalItem(0);
});

Then("user back to inventory page", () => {
  cartPage.clickContinuShoppingBtn();
  inventoryPage.verifyTitleText("Products");
});

Given("user has product {string} in cart", (productId) => {
  inventoryPage.clickAddtoCart(productId);
  inventoryPage.clickShoppingCart();
});

Given("user is on checkout information page", () => {
  checkoutPage.verifyTitleText("Checkout: Your Information");
});

When("user continue checkout without filling information", () => {
  checkoutPage.clickContinueBtn();
});

Then("user click checkout button", () => {
  cartPage.clickCheckoutBtn();
});

Then("user continue checkout", () => {
  checkoutPage.clickContinueBtn();
});

When("user fill first name {string}", (firstName) => {
  checkoutPage.typeFirstName(firstName);
});

When(
  "user fill first name {string} and last name {string}",
  (firstName, lastName) => {
    checkoutPage.typeFirstName(firstName);
    checkoutPage.typeLastName(lastName);
  }
);

When("user fill checkout information:", (dataTable) => {
  const data = Object.fromEntries(dataTable.raw());
  checkoutPage.typeFirstName(data.firstName);
  checkoutPage.typeLastName(data.lastName);
  checkoutPage.typeZipCode(data.zipCode);
});

When("user complete checkout", () => {
  checkoutPage.clickContinueBtn();
  checkoutPage.verifyTitleText("Checkout: Overview");
  checkoutPage.clickFinishBtn();
});

Then("checkout error message should be {string}", (message) => {
  checkoutPage.verifyErrorMessage(message);
});

Then("checkout should be completed successfully", () => {
  checkoutPage.verifyTitleText("Checkout: Complete!");
  checkoutPage.clcikBackHomeBtn();
});
