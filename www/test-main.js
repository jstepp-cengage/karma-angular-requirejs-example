var allTestFiles = [
    "scripts/bootstrap",
    "tests/controllers/controllerExample_spec",
    "tests/services/serviceExample_spec"
];

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  // alias libraries paths
  paths: {
      'angular': 'scripts/components/angular/angular',
      'angularMocks': 'scripts/components/angular-mocks/angular-mocks'
  },

  // angular does not support AMD out of the box, put it in a shim
  shim: {
      'angular': {
          exports: 'angular'
      },

      'angularMocks': {
          deps: ['angular'],
          exports: 'angular.mock'
      }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
