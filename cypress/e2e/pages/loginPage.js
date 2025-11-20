import BasePage from "./BasePage";

class LoginPage extends BasePage {
  usernameField() {
    return cy.getByTestId("username");
  }

  passwordField() {
    return cy.getByTestId("password");
  }

  loginButton() {
    return cy.getByTestId("login-button");
  }

  clickLoginButton() {
    super.clickElement(this.loginButton());
  }

  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.loginButton().click();
  }
}

export default LoginPage;
