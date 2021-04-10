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

    '\n# next.js',
    '/.next/',
    '/out/',

    '\n# production',
    '/build',

    '\n# misc',
    '.DS_Store',
    '.env*',

    '\n# debug',
    'npm-debug.log*',
    'yarn-debug.log*',
    'yarn-error.log*',

    '\n# testing',
    '/coverage',
    '/coverage-ts',

    '\n# storybook',
    'storybook-static',
  ]);

  return file.save();
}

task.description = 'Adding Gitignore file'

module.exports = task;
