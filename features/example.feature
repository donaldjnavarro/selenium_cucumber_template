@examples
Feature: Example tests
  Example tests to demonstrate basic test patterns

  Background:
    Given I navigate to "https://wikipedia.org"
  
  @wikipedia
  Scenario: Use search on Wikipedia
    Given I am on the Wikipedia Home Page

    When I input "Selenium" into the Wikipedia search bar and press enter
    Then I am on a Wikipedia content page
    Then I am navigated to the URL "https://en.wikipedia.org/wiki/Selenium"
    Then the page title is "Selenium - Wikipedia"

    When I click the browser's back button
    Then I am on the Wikipedia Home Page
    Then I am navigated to the URL "https://www.wikipedia.org"
    Then the page title is "Wikipedia"
