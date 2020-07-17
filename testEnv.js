// my-custom-environment
const NodeEnvironment = require('jest-environment-node');

class CustomEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);
    this.testPath = context.testPath;
    this.docblockPragmas = context.docblockPragmas;
    this.options = config.testEnvironmentOptions;
  }

  async setup() {
    await super.setup();
    this.global.options = this.options;
  }

  async teardown() {
    await super.teardown();
    this.global.options = undefined;
  }

  runScript(script) {
    return super.runScript(script);
  }
}

module.exports = CustomEnvironment;
