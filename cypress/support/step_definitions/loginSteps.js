import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../e2e/pages/loginPage";

const loginPage = new LoginPage();

Given("user is on login page", () => {
  loginPage.visitPage();
});

When(
  "user login with username {string} and password {string}",
  (username, password) => {
    loginPage.login(username, password);
  }
);

When("user login without username and with password {string}", (password) => {
  loginPage.typePassword(password);
  loginPage.clickLoginButton();
});

When("user login with username {string} without password", (username) => {
  loginPage.typeUsername(username);
  loginPage.clickLoginButton();
});

Then("user should be redirected to inventory page", () => {
  loginPage.verifyUrlContains("/inventory");
  loginPage.verifyTitleVisible();
});

Then("inventory page title should be {string}", (title) => {
  loginPage.verifyTitleText(title);
});

Then("error message {string} should be displayed", (message) => {
  loginPage.verifyErrorMessageVisible();
  loginPage.verifyErrorMessage(message);
});
