# Selenium/Cucumber Template

A basic automation template using Cucumber for step definitions and Selenium for web automation

## Tech Stack

- UI Automation: Selenium
- BDD: Cucumber
- Lint: Eslint

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

Using a page object model approach, we are storing details about each webpage in `page_object_models/` folder, which provides a shared location for methods and locators related to a given page, and avoiding the step definition layer becoming too technical, or duplicating common actions or implementation details.

## Lint

We currently have heavy Eslint rule usage, because I like it and it makes our code all pretty and reliably uniform.
