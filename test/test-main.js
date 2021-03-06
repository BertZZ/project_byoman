var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/test\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/app/public/js',

  paths: {
    'game': 'lib/game',
    'gamedrawer': 'lib/gamedrawer',
    'keyboard': 'lib/keyboard',
    'pacman': 'lib/pacman',
    'food': 'lib/food',
    'score': 'lib/score',
    'pmspechelper': 'helpers/pmspechelper',
    'levelone': 'lib/levelone',
    'ghost': 'lib/ghost',
    'motionrules': 'lib/motionrules'
  },

  shim: {
    'underscore': {
      exports: '_'
    }
  },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
