"use strict";
module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "app/**/*.ts" }
        ],

        preprocessors: {
            "app/**/*.ts": ["karma-typescript"]
        },

        reporters: ["dots", "karma-typescript"],

        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.json"
        },

        customLaunchers: {
            ChromeCustom: {
              base: 'ChromeHeadless',
              // We must disable the Chrome sandbox when running Chrome inside Docker (Chrome's sandbox needs
              // more permissions than Docker allows by default)
              flags: '--no-sandbox'
            }
          },
    });
};
