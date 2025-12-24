Feature: Inventory product management

  Background:
    Given user already logged in
    And user is on inventory page

Scenario: User can sort products using all available sorting options
    When user sorts products by "lohi" should be sorted correctly
    And user sorts products by "az" should be sorted correctly
    And user sorts products by "hilo" should be sorted correctly
    And user sorts products by "za" should be sorted correctly

  Scenario: Add single product to cart
    When user add product "sauce-labs-backpack" to cart
    Then cart badge should show "1"
    And cart should contain products:
      | Sauce Labs Backpack |

  Scenario: Add multiple products to cart
    When user add products to cart:
      | sauce-labs-backpack |
      | sauce-labs-bike-light |
    Then cart badge should show "2"
    And cart should contain products:
      | Sauce Labs Backpack |
      | Sauce Labs Bike Light |

Scenario: User remove product from inventory page
  When user add product "sauce-labs-backpack" to cart
  Then cart badge should show "1"
  And cart should contain products:
    | Sauce Labs Backpack |
  And user back to inventory page
  Then user remove product "sauce-labs-backpack" from inventory
