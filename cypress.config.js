const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    baseUrl: "https://qauto.forstudy.space", 
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.spec.js"], 
    supportFile: "cypress/support/e2e.js", 
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
  },
});
