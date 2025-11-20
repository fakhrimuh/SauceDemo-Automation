class BasePage {
  visitPage() {
    cy.visit("https://www.saucedemo.com");
  }

  getElement(selector) {
    return cy.get(selector);
  }

  getByTestId(testId) {
    return cy.get(`[data-test="${testId}"]`);
  }

  clickElement(selector) {
    this.getElement(selector).click();
  }

  typeText(selector, text) {
    this.getElement(selector).clear().type(text);
  }

  verifyUrlContains(text) {
    cy.url().should("include", text);
  }

  wait(seconds) {
    cy.wait(seconds * 1000);
  }

  pageTitle() {
    return cy.getByTestId("title");
  }

  errorText() {
    return cy.getByTestId("error");
  }

  errorButton() {
    return cy.getByTestId("error-button");
  }
}

export default BasePage;
