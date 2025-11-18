import LoginPage from "../../pages/loginPage";
import InventoryPage from "../../pages/inventoryPage";

const loginPage = new LoginPage();
const InventoryPage = new InventoryPage();

describe("Login Test with BasePage", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("should login successfully", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.verifyUrlContains("/inventory");
  });

  it("should login successfully", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.verifyUrlContains("/inventory");
  });
});
