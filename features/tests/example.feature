@examples
Feature: Example tests
  Example tests to demonstrate basic test patterns

  Background:
    Given I navigate to "https://wikipedia.org"
  
  @wikipedia @search
  Scenario: Use search on Wikipedia home page
    Given I am on the Wikipedia Home Page

    When I input "Selenium" into the Wikipedia search bar and press enter
    Then I am on a Wikipedia content page
    Then I am navigated to the URL "https://en.wikipedia.org/wiki/Selenium"
    Then the page title is "Selenium - Wikipedia"

  @wikipedia @search @globalSearch
  Scenario: Use search on Wikipedia global header
    Given I am on the Wikipedia Home Page
    Given I input "Selenium" into the Wikipedia search bar and press enter
    Given I am on a Wikipedia content page
    When I input "Cucumber" into the Wikipedia global header search bar and press enter
    Then the page title is "Cucumber - Wikipedia"

  @backButton
  Scenario: Use the web browser's back button
    Given I navigate to "https://www.google.com"
    When I click the browser's back button
    Then I am on the Wikipedia Home Page
    Then I am navigated to the URL "https://www.wikipedia.org"
    Then the page title is "Wikipedia"

  @api
  Scenario: Example API requests
    When I send a demo API request
  