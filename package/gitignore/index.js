const { lines } = require('mrm-core');

function task() {
  const file = lines('.gitignore');

  if (file) {
    console.log('file exists');
  }

  file.add([
    '# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.',

    '\n# dependencies',
    '/node_modules',
    '/.pnp',
    '.pnp.js',

    '\n# production',
    '/dist',

    '\n# misc',
    '.DS_Store',

    '\n# secrets',
    '.env',
    '.env.prod',

    '\n# debug',
    'npm-debug.log*',
    'yarn-debug.log*',
    'yarn-error.log*',

    '\n# testing',
    '/coverage',
    '/coverage-ts',
  ]);

  return file.save();
}

task.description = 'Adding Gitignore file'

module.exports = task;
