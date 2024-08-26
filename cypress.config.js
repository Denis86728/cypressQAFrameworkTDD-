const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFilesChanges: false,
  numTestsKeptInMemory: 50,
  video: false,
  videosFolder: "cypress/videos",
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  defaultCommandTimeout: 10000,
  chromeWebSecurity: false,
  viewPortWidth: 1418,
  viewPortHeight: 524,
  waitForAnimation: true,
  animationDistanceTreshold: 20,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 15000,
  responseTimeout: 15000,
  trashAssetsBeforeRuns: true,
  hideXHRInCommandLog: true,
  failOnStatusCode: false,
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "cypress/reports/mocha",
            "quite": true,
            "overwrite": false,
            "html": true,
            "json": true
        }
    },
    
  e2e: {
    viewportHeight: 720,
    viewportWidth: 1280,
    baseUrl: "https://demoqa.com/",
    excludeSpecPattern: ['*.md'],
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}'
  }
})
