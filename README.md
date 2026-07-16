<div align="center">

# 🚀 Cypress E2E Automation - ServeRest

Automated End-to-End (E2E) testing project built with **Cypress** and **JavaScript** for the **ServeRest** Frontend and API.

![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)

</div>

## 📖 About

This project demonstrates UI and API test automation using Cypress, with reusable commands, dynamic test data, and independent test scenarios.

## ✨ Features

- UI and API automation
- Dynamic data with Faker
- Custom Cypress commands
- Independent tests
- Assertions with `should()`
- Organized project structure

## 🧰 Tech Stack

| Tool | Purpose |
|------|---------|
| Cypress | E2E Test Automation |
| JavaScript (ES6+) | Test development |
| Node.js | Runtime |
| Faker | Dynamic test data |

## 📂 Project Structure

```text
cypress/
├── e2e/
│   ├── api/serverest.cy.js
│   ├── user_register.cy.js
│   ├── user_login.cy.js
│   ├── invalid_login.cy.js
│   └── product_register.cy.js
├── fixtures/
├── support/
│   ├── commands.js
│   └── e2e.js
├── screenshots/
└── videos/
```

## ✅ Automated Scenarios

| Scenario | Status |
|---|:---:|
| User Registration | ✅ |
| User Login | ✅ |
| Invalid Login | ✅ |
| Add Product to Cart | ✅ |
| API User CRUD Flow | ✅ |

## 🚀 Installation

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
cd YOUR-REPOSITORY
npm install
```

## ▶️ Run Tests

Open Cypress:

```bash
npx cypress open
```

Headless:

```bash
npx cypress run
```

Single spec:

```bash
npx cypress run --spec "cypress/e2e/user_login.cy.js"
```

## 📸 Test Evidence

- `cypress/screenshots/`
- `cypress/videos/`

## 🌐 Application

- Frontend: https://front.serverest.dev/
- API: https://serverest.dev/

## 💡 Best Practices

- Page-independent tests
- API data setup
- Dynamic test generation
- Clean and maintainable code
- Reusable commands

## 👨‍💻 Author

**Tiago Leite**

QA Engineer | Test Automation

**Skills:** Cypress • Playwright • Selenium • API Testing • JavaScript

---

<div align="center">

⭐ If you found this project useful, consider giving it a star!

</div>
