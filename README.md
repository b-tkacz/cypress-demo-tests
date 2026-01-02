# Cypress Automation Portfolio

This repository demonstrates a Test Automation Framework using Cypress, designed for scalability and maintainability.

## 🚀 Key Features

- **Page Object Model (POM)**: Modular architecture for maintainable code.
- **Custom Commands**: Encapsulated logic for repetitive actions (e.g., `cy.login()`).
- **Data-Driven Testing**: Separation of test data using Cypress Fixtures.
- **CI/CD Integration**: GitHub Actions workflow for automated testing on every push.
- **HTML Reporting**: Integrated `cypress-mochawesome-reporter` for visual test results.
- **Linting & Formatting**: Enforced code quality with ESLint and Prettier.

## 🛠️ Tech Stack

- **Cypress**: v13+
- **JavaScript (ES6+)**
- **GitHub Actions**

## 🏃‍♂️ How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```
2.  **Run Headless Mode**:
    ```bash
    npx cypress run
    ```
3.  **Open Test Runner**:
    ```bash
    npx cypress open
    ```

## 📂 Project Structure

- `cypress/e2e`: Test scenarios (Smoke, Regression, API).
- `cypress/page-objects`: POM classes.
- `cypress/fixtures`: Test data.
- `cypress/support`: Custom commands and configuration.
