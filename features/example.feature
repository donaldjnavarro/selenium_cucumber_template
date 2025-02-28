@examples
Feature: Example tests
  Example tests to demonstrate basic test patterns

  @wikipedia
  Scenario: Use search on Wikipedia
    Given I navigate to "https://wikipedia.org"
    When I input "Selenium" into the Wikipedia search bar and press enter
    Then I am navigated to the URL "https://en.wikipedia.org/wiki/Selenium"
    Then the page title is "Selenium - Wikipedia"
