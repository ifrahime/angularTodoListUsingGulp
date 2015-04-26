/* 
* @Author: swgp8054
* @Date:   2015-04-22 15:53:30
* @Last Modified by:   swgp8054
* @Last Modified time: 2015-04-24 15:26:28
*/

var HtmlReporter = require('protractor-html-screenshot-reporter');



exports.config = {
  // location of the Selenium JAR file and chromedriver, use these if you installed protractor locally
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',
   seleniumAddress: 'http://localhost:4444/wd/hub',
  // location of your E2E test specs
  specs: [
    '../*.js'
  ],
 
  // configure multiple browsers to run tests
  
 /* multiCapabilities: [{
    'browserName': 'firefox'
  }, {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs').path,
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  }],*/
 
  // or configure a single browser
 
  capabilities: {
    'browserName': 'firefox'
  },
  
 

  // url where your app is running, relative URLs are prepending with this URL
  baseUrl: 'http://localhost:9000/',
 
  // testing framework, jasmine is the default
  framework: 'jasmine',

  onPrepare: function() {
      // Add a screenshot reporter and store screenshots to `/tmp/screnshots`: 
     /* jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'test/protractor/screenshots'
      }));*/
		require('jasmine-reporters');
	    jasmine.getEnv().addReporter(
	      new jasmine.JUnitXmlReporter(null, true, true, 'coverage/xml')
	    );
      }
};