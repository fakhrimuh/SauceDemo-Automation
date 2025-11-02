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

  errorMessage() {
    return cy.getByTestId("error-button");
  }

  // Method untuk aksi di halaman
  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.loginButton().click();
  }
}

export default LoginPage;
