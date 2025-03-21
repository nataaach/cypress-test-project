const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', 
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: 2, 
    video: false, 
  },
})
