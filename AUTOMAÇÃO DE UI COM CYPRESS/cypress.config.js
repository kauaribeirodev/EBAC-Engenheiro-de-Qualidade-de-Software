const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "2w2kvz",
    baseUrl: "http://lojaebac.ebaconline.art.br/",
    specPattern: "cypress/e2e/**/*.cy.js", // ou .cy.js, dependendo da extensão que você usa
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
