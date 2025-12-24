Feature: Cart management

  Background:
    Given user already logged in
    And user has product "sauce-labs-backpack" in cart 
    Then cart badge should show "1"

  Scenario: Remove product from cart page
    When user remove product "sauce-labs-backpack" from cart
    Then cart should be empty

