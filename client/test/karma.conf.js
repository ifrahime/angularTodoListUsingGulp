// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-03-17 using
// generator-karma 0.9.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/es5-shim/es5-shim.js',
      'bower_components/angular/angular.js',
      'bower_components/json3/lib/json3.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      //Jasmine test
      'test/spec/jasmine/**/*.js',
      //Mocha test
      //'test/spec/mocha/*.js'
      //QUnit test
      //'test/spec/QUnit/*.js'
    ],

    // coverage reporter generates the coverage
    reporters: ['progress', 'junit', 'coverage'],
    junitReporter: {
            outputFile: 'coverage/xml/junit-test-results.xml'
          },
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'app/scripts/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'lcov',
      subdir : 'report',
      dir : 'coverage/'
    },

    // list of files / patterns to exclude
      /**
       * Exclude angular-scenario because it cause 0 OF 0 ERROR
        */
    exclude: [
        'bower_components/angular-scenario/angular-scenario.js'
    ],

    // web server port
    port: 8080,

    browsers: [
    //'Chrome',
    'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      //'karma-chrome-launcher',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-phantomjs-launcher',
      'karma-mocha',
      'karma-chai',
      'karma-sinon',
      'karma-jasmine',
      'karma-qunit',
      'karma-jshint-preprocessor'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,
    colors: true,
    logLevel: config.LOG_INFO


  });
};
