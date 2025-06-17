# Selenium/Cucumber Template

A basic automation template using Cucumber for step definitions and Selenium for web automation

## Tech Stack

- **UI Automation:** Selenium
- **BDD:** Cucumber
- **Lint:** Eslint
- **Logging:** Winston
- **API:** Axios

## Configuration

### .env file

The dotenv package is used so that the user can provide secrets and user-specific configurations via their .env file without committing them to the repo

- To setup: Make a copy of the `.env.template` file and name it `.env`
- The .env file is for user-specific configurations and also for secrets. Therefore it is NOT version controlled.

### Headless browsers

You can set the tests to run in headless mode via the `.env` file

NOTE: Currently we are only supporting headless for Chrome

## Design patterns

Our framework layers:

1. Features: `features/*.feature` files outline the tests and call Step Definitions.
2. Step Definitions: `features/steps/*.js` files outline the step actions and call either Selenium methods directly, or call Page Models for reusable methods and data
3. Page Object Models (Page Models): `page_object_models/*.js` files organize data and methods related to a given webpage that we will interact with.

### Page Object Models

Using a page object model approach, we are storing details about each webpage in `page_object_models/` folder, which provides a shared location for methods and locators related to a given page, and avoiding the step definition layer becoming too technical, or duplicating common actions or implementation details.

Note that API models are also handled with the same pattern, using *base_api* instead of *base_page*.

### Cucumber layers

In the ./features/support/ folder are cucumber tools

1. **setup.js** provides broad, project-level actions handled during the test runs initial spin up.
2. **hooks.js** is where we can hook actions into the test step handling itself such as before/after hooks.

## Linter

We currently have heavy Eslint rule usage. The current rules are heavy as an exercise exploring the available options. It is recommended that any projects started based on this repository should have the rules reviewed, and only use the rules that are contributing value to a given project's needs.

## Logging

Using the **Winston** logging package, our logging approach has been customized with enhanced features.

To choose the lowest level logs you want to display:

- In the .env file, `LOG_LEVEL=` can be used to set the lowest level log to display. If this is not set, or is set with an invalid value, then all logs will be displayed.
