const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config; 
    },
    baseUrl: "https://quato.forstudy.space",
  },
});
