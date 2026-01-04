const { defineConfig } = require('cypress');
const fs = require('fs-extra');
const path = require('path');

async function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress', 'config', `${file}.json`);
  return fs.readJson(pathToConfigFile);
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);

      const file = config.env.configFile || 'standard';

      const configJson = await getConfigurationByFile(file);
      config.env = { ...config.env, ...configJson };
      return config;
    },
    baseUrl: 'https://www.saucedemo.com',
    experimentalRunAllSpecs: true,
  },
});
