const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.js", // ou .cy.js, dependendo da extensão que você usa
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
