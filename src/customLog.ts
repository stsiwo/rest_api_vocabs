const logFactory = require('debug');

/**
 * When you use debug on nodejs it writes to stderr by default
 *  - need to redirect stderr stream to stdout in order to debug log output to 'output' not 'error'
 *  - see: https://github.com/visionmedia/debug/issues/503
 *    - model code is wrong, it does the opposite procedure (stdout to stderr)
 *    - correct way is do like below:
 **/

module.exports = function log(namespace: string) {
  const debug = logFactory(namespace);
  debug.log = function(...args: any[]) {
    console.log(...args);
  };

  const error = logFactory(namespace);

  return {
    debug,
    error,
  };
};
