const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    watchForFileChanges: false,
    report: "mochawesome",
    reporterOptions: {
      overwrite: false,
      html: false,
      json: true,
      charts: true,
      reportDir: "cypress/reports",
      reportFilename: "report",
    },
  },
});
