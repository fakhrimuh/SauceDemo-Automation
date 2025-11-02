import LoginPage from "../../pages/loginPage";

const loginPage = new LoginPage(); // ← tambahkan baris ini

describe("Login Test with BasePage", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("should login successfully", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.verifyUrlContains("/dashboard");
  });
});
