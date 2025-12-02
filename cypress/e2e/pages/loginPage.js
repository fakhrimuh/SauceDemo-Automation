import BasePage from "./BasePage";

class LoginPage extends BasePage {
  usernameField() {
    return '[data-test="username"]';
  }

  passwordField() {
    return '[data-test="password"]';
  }

  loginButton() {
    return '[data-test="login-button"]';
  }

  typeUsername(username) {
    this.typeText(this.usernameField(), username);
    cy.stepScreenshot("fill-username");
  }

  typePassword(password) {
    this.typeText(this.passwordField(), password);
    cy.stepScreenshot("fill-password");
  }

  clickLoginButton() {
    this.clickElement(this.loginButton());
    cy.stepScreenshot("after-click-login");
  }

  login(username, password) {
    this.typeUsername(username);
    this.typePassword(password);
    this.clickLoginButton();
  }

  loginSuccess() {
    this.visitPage();
    this.login("standard_user", "secret_sauce");
    this.verifyUrlContains("/inventory");
    this.verifyTitleVisible();
    this.verifyTitleText("Products");
  }
}

export default LoginPage;
