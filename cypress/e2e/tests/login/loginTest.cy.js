import LoginPage from "../../pages/loginPage";
// import InventoryPage from "../../pages/inventoryPage";
import BasePage from "../../pages/BasePage";

const loginPage = new LoginPage();
const basePage = new BasePage();

describe("Login Test with BasePage", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("should login successfully", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.verifyUrlContains("/inventory");
    basePage.pageTitle().should("be.visible").and("have.text", "Products");
  });

  it("wrong password login", () => {
    loginPage.login("standard_user", "password");
    basePage
      .errorText()
      .should("be.visible")
      .and(
        "have.text",
        "Epic sadface: Username and password do not match any user in this service"
      );
  });

  it("empty username", () => {
    loginPage.passwordField().type("secret_sauce");
    loginPage.loginButton().click();
    basePage
      .errorText()
      .should("be.visible")
      .and("have.text", "Epic sadface: Username is required");
  });

  it("empty password", () => {
    loginPage.usernameField().type("secret_sauce");
    loginPage.loginButton().click();
    basePage
      .errorText()
      .should("be.visible")
      .and("have.text", "Epic sadface: Password is required");
  });

  it("login locked User", () => {
    loginPage.login("locked_out_user", "secret_sauce");
    loginPage.loginButton().click();
    basePage
      .errorText()
      .should("be.visible")
      .and("have.text", "Epic sadface: Sorry, this user has been locked out.");
  });
});
