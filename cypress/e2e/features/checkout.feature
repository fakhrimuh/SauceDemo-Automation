Feature: Checkout process

  Background:
    Given user already logged in
    And user has product "sauce-labs-backpack" in cart
    And user click checkout button
    And user is on checkout information page

  Scenario: Failed checkout with empty information
    When user continue checkout without filling information
    Then checkout error message should be "Error: First Name is required"

  Scenario: Failed checkout without last name
    When user fill first name "Test"
    And user continue checkout
    Then checkout error message should be "Error: Last Name is required"

  Scenario: Failed checkout without zip code
    When user fill first name "Test" and last name "Test"
    And user continue checkout
    Then checkout error message should be "Error: Postal Code is required"

  Scenario: Successful checkout
    When user fill checkout information:
      | firstName | Test |
      | lastName  | Test |
      | zipCode   | 12345 |
    And user complete checkout
    Then checkout should be completed successfully
