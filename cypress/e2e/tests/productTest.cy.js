import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

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
  });
});
