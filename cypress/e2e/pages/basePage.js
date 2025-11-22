class BasePage {
  visitPage() {
    cy.visit("https://www.saucedemo.com");
  }

  getElement(selector) {
    return cy.get(selector);
  }

  clickElement(selector) {
    this.getElement(selector).click();
  }

  typeText(selector, text) {
    this.getElement(selector).type(text);
  }

  verifyUrlContains(text) {
    cy.url().should("include", text);
  }

  wait(seconds) {
    cy.wait(seconds * 1000);
  }

  verifyText(selector, expectedText) {
    this.getElement(selector).should("have.text", expectedText);
  }

  verifyTextContains(selector, expectedText) {
    this.getElement(selector).should("contain.text", expectedText);
  }

  verifyVisible(selector) {
    this.getElement(selector).should("be.visible");
  }

  verifyNotExist(selector) {
    this.getElement(selector).should("not.exist");
  }

  pageTitle() {
    return '[data-test="title"]';
  }

  errorText() {
    return '[data-test="error"]';
  }

  errorButton() {
    return '[data-test="error-button"]';
  }

  verifyTitleVisible() {
    this.verifyVisible(this.pageTitle());
  }

  verifyTitleText(expected) {
    this.verifyText(this.pageTitle(), expected);
  }

  verifyErrorMessageVisible() {
    this.verifyVisible(this.errorText());
  }

  verifyErrorMessage(expected) {
    this.verifyText(this.errorText(), expected);
  }
}

export default BasePage;
