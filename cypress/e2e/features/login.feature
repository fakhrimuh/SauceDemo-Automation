Feature: Login functionality

  As a registered user
  I want to login to SauceDemo
  So that I can access the system based on my credentials

  Background:
    Given user is on login page

  Scenario: Successful login with valid credentials
    When user login with username "standard_user" and password "secret_sauce"
    Then user should be redirected to inventory page
    And inventory page title should be "Products"

  Scenario: Login failed with wrong password
    When user login with username "standard_user" and password "password"
    Then error message "Epic sadface: Username and password do not match any user in this service" should be displayed

  Scenario: Login failed with empty username
    When user login without username and with password "Password"
    Then error message "Epic sadface: Username is required" should be displayed

  Scenario: Login failed with empty password
    When user login with username "standard_user" without password
    Then error message "Epic sadface: Password is required" should be displayed

  Scenario: Login failed for locked out user
    When user login with username "locked_out_user" and password "secret_sauce"
    Then error message "Epic sadface: Sorry, this user has been locked out." should be displayed
