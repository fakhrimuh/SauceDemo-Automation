import LoginPage from "../pages/loginPage";

const loginPage = new LoginPage();

describe("Login Feature Test Case", () => {
  beforeEach(() => {
    loginPage.visitPage();
  });

  it("should login successfully", () => {
    loginPage.login("standard_user", "secret_sauce");
    loginPage.verifyUrlContains("/inventory");
    loginPage.verifyTitleVisible();
    loginPage.verifyTitleText("Products");
  });

  it("wrong password login", () => {
    loginPage.login("standard_user", "password");
    loginPage.verifyErrorMessageVisible();
    loginPage.verifyErrorMessage(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("empty username", () => {
    loginPage.typePassword("Password");
    loginPage.clickLoginButton();
    loginPage.verifyErrorMessageVisible();
    loginPage.verifyErrorMessage("Epic sadface: Username is required");
  });

  it("empty password", () => {
    loginPage.typeText(loginPage.usernameField(), "standard_user");
    loginPage.clickElement(loginPage.loginButton());
    loginPage.verifyErrorMessageVisible();
    loginPage.verifyErrorMessage("Epic sadface: Password is required");
  });

  it("login locked User", () => {
    loginPage.login("locked_out_user", "secret_sauce");
    loginPage.clickElement(loginPage.loginButton());
    loginPage.verifyErrorMessageVisible();
    loginPage.verifyErrorMessage(
      "Epic sadface: Sorry, this user has been locked out."
    );
  });
});
